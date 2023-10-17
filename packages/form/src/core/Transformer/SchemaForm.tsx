import React, { useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { Form } from 'antd';
import { FormInstance, FormProps } from 'antd/es/form';
import { FIELD_CHANGE_EVENT_NAME, Props as FieldRenderProps } from '../FieldRender';
import { GroupRule } from '../../shared/schema';
import schemaItemToNode from './schemaItemToNode';
import { Schema } from '../types';
import reflectFormInstance from '../Decorator/reflectFormInstance';
import { fissionValue, fusionValue } from './valueAtomize';
import usePrevious from '../hooks/usePrevious';
import { shallowEqual } from '../../shared/helper';
import ConfigContext from '../Context/configContext';
import EventEmitter from '../Watcher/EventEmitter';

// @ts-ignore
// eslint-disable-next-line
export interface Props<T = ''> extends Pick<FieldRenderProps<T>, 'components'> {}

// @ts-ignore
// eslint-disable-next-line
export interface Props<T = ''> extends FormProps {
  /**
   * enable combine old form mode.
   * if it is true, SchemaForm will not create form element, it will use parent form.
   * and property 'form' is required
   */
  hybrid?: boolean;
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
  /**
   * transform initial values
   */
  fusion: (values: any) => any;
  /**
   * transform submit values
   */
  fission: (values: any) => any;
}

function SchemaForm<T = ''>(props: Props<T>, ref: React.Ref<RefCurrent>) {
  const {
    hybrid,
    initialValues: parentInitialValues,
    enableValueAtomize,
    form: outerformInstance,
    components,
    schema,
    schemaGroups: defineSchemaGroups,
    groupRender,
    groupsRender,
    globalState,
    onFinish,
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

  const prevGlobalState = usePrevious(globalState);

  if (enableValueAtomize && !decorateRef.current) {
    // enable value fusion and fission ability
    decorateRef.current = true;
    reflectFormInstance(
      shadowFormRef.current,
      hybrid ? outerformInstance : innerFormInstance,
      schema as Schema,
    );
  }

  const [configContextValue] = useState(() => ({ event: new EventEmitter() }));
  const [forceRenderKey, setForceRenderKey] = useState<number>(0);

  useImperativeHandle(ref, () => ({
    forceRefresh: () => setForceRenderKey((oldKey) => ++oldKey),
    fusion(values) {
      return fusionValue(schema as Schema, values);
    },
    fission(values) {
      return fissionValue(schema as Schema, values);
    },
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

  const renderFormItem = (pickName: string) => {
    if (
      enableValueAtomize &&
      typeof schemaDict[pickName].fusion === 'function' &&
      schemaDict[pickName].initialValue !== undefined
    ) {
      // docorate initialValue when enableValueAtomize
      schemaDict[pickName].initialValue = schemaDict[pickName].fusion(
        schemaDict[pickName].initialValue,
      );
    }
    return schemaItemToNode(
      schemaDict,
      pickName,
      components,
      globalState,
    );
  };

  const renderFormItemList = (group: GroupRule) => {
    return Object.values(group.list).map(renderFormItem);
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
  }, [schema, defineSchemaGroups, forceRenderKey]);

  useEffect(() => {
    if (!shallowEqual(prevGlobalState, globalState)) {
      // shallow compare prevGlobalState and currentGlobalState, like react props
      // avoid rerender many times
      setForceRenderKey((oldKey) => ++oldKey);
    }
  }, [globalState]);

  useEffect(() => {
    if (!hybrid) return;
    if (!restFormProps?.onValuesChange) return;
    const unListen = configContextValue.event.on(FIELD_CHANGE_EVENT_NAME, (fieldName: string) => {
      const allValues = outerformInstance.getFieldsValue();
      // mock Form onValuesChange
      restFormProps.onValuesChange?.({ [fieldName]: allValues[fieldName] }, allValues);
    });
    return unListen;
  }, [hybrid]);

  const initialValues = useMemo(() => {
    if (!enableValueAtomize) return parentInitialValues;
    return fusionValue(schema as Schema, parentInitialValues || {});
  }, [enableValueAtomize, schema, parentInitialValues]);

  const decorateOnFinish = (values: any) => {
    if (!enableValueAtomize) {
      onFinish?.(values);
      return;
    }
    onFinish?.(fissionValue(schema as Schema, values));
  };

  const children = (
    <>
      {props.children}
      {groupsNode}
    </>
  );

  if (hybrid) {
    return (
      <ConfigContext.Provider value={configContextValue}>
        {children}
      </ConfigContext.Provider>
    );
  } else {
    return (
      <Form
        form={innerFormInstance}
        initialValues={initialValues}
        onFinish={decorateOnFinish}
        {...restFormProps}
      >
        {children}
      </Form>
    );
  }
}

declare module 'react' {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactNode | null
  ): ((props: P & React.RefAttributes<T>) => React.ReactElement);
}

export default React.forwardRef(SchemaForm);
