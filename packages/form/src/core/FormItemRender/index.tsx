import React, { useEffect, useState } from 'react';
import { Form, FormItemProps } from 'antd';
import FieldRender, { Props as FieldRenderProps } from '../FieldRender';
import { LabelInValue } from '../../shared/schema';

export interface Props extends FieldRenderProps {
  remoteData?: (keyword?: string) => LabelInValue[];
  mapStateToSchema?: (globalState: any) => Partial<Props>;
  dependencies?: any;
  formItemSpecProps?: FormItemProps;
}

const FormItemRender: React.FC<Props> = props => {
  const { dependencies } = props;

  console.log('FormItemRender', props);

  const [innerData, setInnerData] = useState<LabelInValue>(props.data);

  const fetchRemoteData = async (request: Props['remoteData'], keyword?: string) => {
    const data = await request!(keyword);
    console.log('fetchRemoteData', data);
    setInnerData(data);
  }

  useEffect(() => {
    if (typeof props.remoteData === 'function') {
      fetchRemoteData(props.remoteData);
    } else if (props.data) {
      setInnerData(props.data);
    }
  }, [props.remoteData, props.data]);

  const isSchemaFactory = () => {
    const { type, component } = props;
    if (type === 'custom') return false;
    if (React.isValidElement(component)) return false;
    if (typeof component === 'function') {
      return true;
    } else {
      return false;
    }
  }

  const formItem = (props: Props) => {
    const formItemSpecProps: FormItemProps = {
      name: props.fieldName,
      label: props.label,
      dependencies: props.dependencies,
    };
    const fieldProps = {
      components: props.components,
      data: innerData,
      type: props.type,
      component: props.component,
      ...props.elementSpecProps,
    };
    return (
      <Form.Item {...formItemSpecProps}>
        <FieldRender {...fieldProps} />
      </Form.Item>
    )
  }

  if (dependencies) {
    return (
      <Form.Item
        noStyle
        dependencies={dependencies}
      >
        {
          (form) => {
            const configuration = { ...props };
            if (isSchemaFactory()) {
              const supplement = (configuration.component! as Function)(form);
              if (supplement === null) {
                // if you want hide this temporary, you can return null
                return null;
              }
              delete configuration.component;
              if (supplement.remoteData && !innerData) {
                fetchRemoteData(supplement.remoteData);
              }
              Object.assign(configuration, supplement);
            }
            return formItem(configuration);
          }
        }
      </Form.Item>
    )
  } else {
    return formItem(props);
  }
}

export default FormItemRender;
