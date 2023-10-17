import { FormInstance } from 'antd/es/form';
import React from 'react';
import { LabelInValue } from '../../shared/schema';
import InnerComponents from '../../components';
import ConfigContext from '../Context/configContext';

export interface Props<T = ''> {
  style?: React.CSSProperties;
  className?: string;
  /** field key */
  fieldName: string;
  /** display name */
  label?: string;
  /** placeholder text */
  placeholder?: string;
  /**
   * component type
   */
  type: keyof typeof InnerComponents
  | 'custom' | T;
  component?: React.JSXElementConstructor<any> | React.ReactNode | ((form: FormInstance) => any);
  /** disabled component input */
  disabled?: boolean;
  value?: any;
  onChange?: (data: any) => void;
  /**
   * provide data to component
   */
  data?: LabelInValue[];
  /**
   * form item child component extra props
   */
  elementSpecProps?: any;
  /** registe components */
  components?: { [key: string]: React.ReactNode | React.FunctionComponent | React.Component };
}

export const FIELD_CHANGE_EVENT_NAME = 'fieldChange';

const FieldRender: React.FC<Props> = (props) => {
  const {
    placeholder,
    components,
    style,
    className,
    type,
    component,
    fieldName,
    value,
    onChange,
    data,
    elementSpecProps,
  } = props;

  const { event } = React.useContext(ConfigContext);

  const proxyOnChange = (e: any) => {
    onChange?.(e);
    if (event) {
      // only emit fieldName then let listener to getFieldValue can get value after transform
      // and don't need judge type of param 'e'
      event.emit(FIELD_CHANGE_EVENT_NAME, fieldName);
    }
  };

  const provideProps = {
    placeholder,
    style,
    className,
    id: fieldName,
    value,
    onChange: proxyOnChange,
    data,
    ...elementSpecProps,
  };

  const registeredComponents = {
    ...InnerComponents,
    ...components,
  };

  if (type === 'custom' && component) {
    if (React.isValidElement(component)) {
      return React.cloneElement(component, provideProps);
    } else {
      return React.createElement(component as any, provideProps);
    }
  }

  const Field = registeredComponents[type];
  if (!Field) {
    console.error(`component ${type} is not register.\n`, 'The registered components are ', Object.keys(registeredComponents));
    return null;
  }

  return (
    <Field {...provideProps} />
  );
};

export default FieldRender;
