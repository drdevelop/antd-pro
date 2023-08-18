import { FormInstance } from 'antd';
import React from 'react';
import { LabelInValue } from '../../shared/schema';
import InnerComponents from '../../components';

export interface Props {
  style?: React.CSSProperties;
  className?: string;
  /** field key */
  fieldName: string;
  /** display name */
  label?: string;
  /**
   * component type
   */
  type: keyof typeof InnerComponents
    | 'custom';
  component?: React.ReactNode | ((form: FormInstance) => any);
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
  components?: { [key: string]: React.ReactNode; };
}

const FieldRender: React.FC<Props> = (props) => {
  const {
    components,
    style,
    className,
    type,
    component,
    fieldName,
    value,
    onChange,
    data,
    elementSpecProps
  } = props;
  const provideProps = {
    style,
    className,
    id: fieldName,
    value,
    onChange,
    data,
    elementSpecProps,
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
    console.error(`component ${type} is not register`);
    return null;
  }

  return (
    <Field {...provideProps} />
  );
}

export default FieldRender;
