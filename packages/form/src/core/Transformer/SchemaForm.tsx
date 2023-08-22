import React, { useImperativeHandle, useMemo, useRef, useState } from 'react';
import { Form, FormInstance, FormProps } from 'antd';
import { Props as FieldRenderProps } from '../FieldRender';
import { GroupRule } from '../../shared/schema';
import schemaItemToNode from './schemaItemToNode';
import { Schema } from '../types';
import reflectFormInstance from '../Decorator/reflectFormInstance';

// @ts-ignore
// eslint-disable-next-line
export interface Props<T = ''> extends Pick<FieldRenderProps<T>, 'components'> {}

// @ts-ignore
// eslint-disable-next-line
export interface Props<T = ''> extends FormProps {
  /**
   * enable convert value when init or submit
   */
  enableValueAtomize?: boolean;
  /** form instance */
  form?: FormInstance;
  /** form schema configuration */
  schema: Schema<T>;
  /** form group schema configuration */
  schemaGroups?: GroupRule[];
  /** every schema group render */
  groupRender?: GroupRule['render'];
  /** entire schema group render, the param child is all schema render result */
  groupsRender?: (child: React.ReactNode) => React.ReactNode;
  /** this data will be provided to schema */
  globalState?: any;
}

export interface RefCurrent extends FormInstance {
  /**
   * force rerender schema form
   */
  forceRefresh: () => void;
}

function SchemaForm<T = ''>(props: Props<T>, ref: React.Ref<RefCurrent>) {
  const {
    enableValueAtomize,
    form: outerformInstance,
    components,
    schema,
    schemaGroups: defineSchemaGroups,
    groupRender,
    groupsRender,
    globalState,
    ...restFormProps
  } = props;

  const [innerFormInstance] = Form.useForm(enableValueAtomize ? undefined : outerformInstance);
  // resemble double cache mechanism
  const shadowFormRef = useRef<FormInstance>(
    enableValueAtomize
      // eslint-disable-next-line
      ? outerformInstance || {} as FormInstance
      : innerFormInstance,
  );
  const decorateRef = useRef<boolean>(false);

  if (enableValueAtomize && !decorateRef.current) {
    // enable value fusion and fission ability
    decorateRef.current = true;
    reflectFormInstance(shadowFormRef.current, innerFormInstance, schema as Schema);
  }

  const [forceRenderKey, setForceRenderKey] = useState<number>(0);

  useImperativeHandle(ref, () => ({
    forceRefresh: () => setForceRenderKey((oldKey) => ++oldKey),
    ...shadowFormRef.current,
  }));

  const schemaDict = useMemo(() => {
    const dict = {};
    if (schema instanceof Array) {
      schema.forEach((item) => {
        dict[item.fieldName] = item;
      });
      return dict;
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
          ? schema.map((item) => item.fieldName)
          : Object.keys(schema),
      }];
    }
  };

  const renderFormItemList = (group: GroupRule) => {
    return Object.values(group.list).map(
      (pickName) => schemaItemToNode(
        schemaDict,
        pickName,
        components,
        globalState,
      ),
    );
  };

  const defaultGroupRender = (formItemList: React.ReactNode[]) => {
    return formItemList;
  };

  const renderGroup = (group: GroupRule) => {
    const render = group.render || groupRender || defaultGroupRender;
    return render(
      renderFormItemList(group),
      group,
      globalState,
    );
  };

  const renderGroups = () => {
    const schemaGroups = getSchemaGroups(defineSchemaGroups);
    const groups = schemaGroups?.map(renderGroup);
    return groups;
  };

  const groupsNode = useMemo(() => {
    if (groupsRender) {
      return groupsRender(renderGroups());
    } else {
      return renderGroups();
    }
  }, [schema, defineSchemaGroups, globalState, forceRenderKey]);

  return (
    <Form
      form={innerFormInstance}
      {...restFormProps}
    >
      <>
        {groupsNode}
        {props.children}
      </>
    </Form>
  );
}

declare module 'react' {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactNode | null
  ): (props: P & React.RefAttributes<T>) => React.ReactNode | null;
}

export default React.forwardRef(SchemaForm);
