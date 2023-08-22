import React from 'react';
import { Checkbox } from 'antd';
import { FieldProps } from '../../shared/schema';

const FieldRadio: React.FC<FieldProps> = (props) => {
  const { value, onChange, className, style, data, elementSpecProps } = props;

  return (
    <Checkbox.Group
      className={className}
      style={style}
      value={value}
      onChange={onChange}
      {...elementSpecProps}
    >
      {
        data?.map((option) => (
          <Checkbox value={option.value} key={option.value}>{option.label}</Checkbox>
        ))
      }
    </Checkbox.Group>
  );
};

export default FieldRadio;
