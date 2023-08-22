import React from 'react';
import { FieldProps } from '../../shared/schema';

const withFieldMapToProps = (Comp) => {
  const HOC = (props: FieldProps) => {
    const {
      elementSpecProps,
      ...restProps
    } = props;
    const newProps: FieldProps = {
      ...restProps,
      ...elementSpecProps,
    };
    return <Comp {...newProps} />;
  };
  HOC.displayName = 'withFieldMapToProps';
  return HOC;
};

export default withFieldMapToProps;
