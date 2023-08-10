import React, { ForwardRefRenderFunction, useImperativeHandle, useMemo, useState } from 'react';
import { Form, FormInstance, FormProps } from 'antd';
import { Props as SchemaItem } from '../FormItemRender';
import { Props as FieldRenderProps } from '../FieldRender';
import { GroupRule } from '../../shared/schema';
import schemaItemToNode from './schemaItemToNode';

export interface Props extends Pick<FieldRenderProps, 'components'> {}

export interface SchemaMap {
  [key: string]: SchemaItem;
}

export interface Props extends FormProps {
  /** form instance */
  form?: FormInstance;
  /** form schema configuration */
  schema: SchemaMap | SchemaItem[];
  /** form group schema configuration */
  schemaGroups?: GroupRule[];
  /** every schema group render */
  groupRender?: GroupRule['render'];
  /** entire schema group render, the param child is all schema render result */
  groupsRender?: (child: React.ReactNode) => React.ReactNode;
  /** this data will provide to schema */
  globalState?: any;
}

export interface RefCurrent {
  forceRefresh: () => void;
}

const SchemaForm: ForwardRefRenderFunction<RefCurrent, Props> = (props, ref) => {
  const {
    form: formInstance,
    components,
    schema,
    schemaGroups: defineSchemaGroups,
    groupRender,
    groupsRender,
    globalState,
    ...restFormProps
  } = props;

  const [innerFormInstance] = Form.useForm();
  const form = formInstance ? formInstance : innerFormInstance;

  const [forceRenderKey, setForceRenderKey] = useState<number>(0);
  console.log('ref', ref);
  useImperativeHandle(ref, () => ({
    forceRefresh: () => setForceRenderKey(oldKey => oldKey++)
  }));

  const schemaDict = useMemo(() => {
    const schemaDict = {};
    if (schema instanceof Array) {
      schema.forEach(item => {
        schemaDict[item.fieldName] = item;
      })
      return schemaDict;
    } else {
      return schema;
    }
  }, [schema]);

  const getSchemaGroups = (schemaGroups) => {
    if (schemaGroups) {
      return schemaGroups;
    } else {
      return [{
        list: schema instanceof Array
          ? schema.map(item => item.fieldName)
          : Object.keys(schema),
      }];
    }
  };

  const renderFormItemList = (group: GroupRule) => {
    return Object.values(group.list).map(
      pickName => schemaItemToNode(
        schemaDict,
        pickName,
        components,
        globalState,
      )
    )
  };

  const defaultGroupRender = (formItemList: React.ReactNode[]) => {
    return formItemList;
  };

  const renderGroup = (group: GroupRule) => {
    const render = group.render || groupRender || defaultGroupRender;
    console.log('renderGroup', group);
    return render(
      renderFormItemList(group),
      group,
      globalState,
    );
  };

  const renderGroups = () => {
    const schemaGroups = getSchemaGroups(defineSchemaGroups);
    const groups = schemaGroups?.map(renderGroup);
    console.log('groups', groups);
    return groups;
  }

  const groupsNode = useMemo(() => {
    if (groupsRender) {
      return groupsRender(renderGroups());
    } else {
      return renderGroups();
    }
  }, [schema, defineSchemaGroups, globalState, forceRenderKey]);

  return (
    <Form
      form={form}
      {...restFormProps}
    >
      <>
        {groupsNode}
        {props.children}
      </>
    </Form>
  )
}

export default React.forwardRef(SchemaForm);
