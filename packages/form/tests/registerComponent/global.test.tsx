import React from 'react';
import SchemaForm, { SchemaFormProps, registerComponent, registerComponents } from "../../src";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from 'antd';

const CustomInput1 = (props) => {
  const { value, onChange, className, style, elementSpecProps } = props;

  return (
    <Input
      className={className}
      style={style}
      value={value}
      onChange={onChange}
      {...elementSpecProps}
    />
  )
};

const CustomInput2 = (props) => {
  const { value, onChange, className, style, elementSpecProps } = props;

  return (
    <Input
      className={className}
      style={style}
      value={value}
      onChange={onChange}
      {...elementSpecProps}
    />
  )
};

registerComponent(CustomInput1);
registerComponents({ customInput2: CustomInput2 });

function TestComponent() {
  const schema: SchemaFormProps['schema'] = [{
    fieldName: 'title',
    label: 'custom input1',
    type: 'CustomInput1' as any,
  }, {
    fieldName: 'title2',
    label: 'custom input2',
    type: 'customInput2' as any,
  }]
  return <SchemaForm schema={schema} components={{ customInput1: CustomInput1 }} />
}

it("global register component", () => {
  render(<TestComponent />);
  expect(screen.getByText('custom input1')).toBeInTheDocument();
  expect(screen.getByText('custom input2')).toBeInTheDocument();
});
