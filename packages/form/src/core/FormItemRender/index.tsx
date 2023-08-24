import React, { useEffect, useState } from 'react';
import { Form, FormItemProps } from 'antd';
import FieldRender, { Props as FieldRenderProps } from '../FieldRender';
import { LabelInValue } from '../../shared/schema';

export interface Props<T = ''> extends FieldRenderProps<T> {
  /**
   * request remote data
   */
  remoteData?: (keyword?: string) => Promise<LabelInValue[]>;
  /**
   * use globalState to schema
   */
  mapStateToSchema?: (globalState: any) => Partial<Props>;
  /**
   * watch form fields
   */
  dependencies?: any;
  /**
   * extra form item props
   */
  formItemSpecProps?: FormItemProps;
  /**
   * format value when initialize value
   * for example: transform 'YYYY-MM-DD hh:mm:ss' to dayjs date
   * @param value init value
   * @returns value after format, usually it is can be used Form Item Component
   */
  fusion?: (value: any) => any;
  /**
   * format value when submit form
   * for example: transform dayjs date to 'YYYY-MM-DD hh:mm:ss'
   * @param value form item value
   * @returns value after format, usually it is accoding to server specifications
   */
  fission?: (value: any) => any;
}

const FormItemRender: React.FC<Props> = (props) => {
  const { dependencies } = props;

  const [innerData, setInnerData] = useState<LabelInValue[]>(props.data);

  const fetchRemoteData = async (request: Props['remoteData'], keyword?: string) => {
    const data = await request!(keyword);
    setInnerData(data);
  };

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
  };

  const formItem = (formItemProps: Props) => {
    const formItemSpecProps: FormItemProps = {
      name: formItemProps.fieldName,
      label: formItemProps.label,
      dependencies: formItemProps.dependencies,
      ...formItemProps.formItemSpecProps,
    };
    const fieldProps = {
      fieldName: formItemProps.fieldName,
      style: formItemProps.style,
      className: formItemProps.className,
      components: formItemProps.components,
      data: innerData,
      type: formItemProps.type,
      component: formItemProps.component,
      elementSpecProps: formItemProps.elementSpecProps,
    };
    return (
      <Form.Item {...formItemSpecProps}>
        <FieldRender {...fieldProps} />
      </Form.Item>
    );
  };

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
    );
  } else {
    return formItem(props);
  }
};

export default FormItemRender;
