import { FormInstance } from 'antd/es/form';
import React from 'react';
import { LabelInValue } from '../../shared/schema';
import InnerComponents from '../../components';

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
  component?: React.ReactNode | ((form: FormInstance) => any);
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
  const provideProps = {
    placeholder,
    style,
    className,
    id: fieldName,
    value,
    onChange,
    data,
    ...elementSpecProps,
  };

  const registryComponents = {
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

  const Field = registryComponents[type];
  if (!Field) {
    console.error(`component ${type} is not register.\n`, 'The register components are ', Object.keys(registryComponents));
    return null;
  }

  return (
    <Field {...provideProps} />
  );
};

export default FieldRender;
