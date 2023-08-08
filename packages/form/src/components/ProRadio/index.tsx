import React from 'react';
import { Radio } from 'antd';
import { FieldProps } from '../../shared/schema';

const FieldRadio: React.FC<FieldProps> = (props) => {
  const { value, onChange, className, style, data } = props;

  return (
    <Radio.Group
      className={className}
      style={style}
      value={value}
      onChange={onChange}
    >
      {
        data?.map(option => (
          <Radio value={option.value}>{option.label}</Radio>
        ))
      }
    </Radio.Group>
  )
}

export default FieldRadio;
