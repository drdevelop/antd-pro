import React from 'react';
import SchemaForm, { SchemaFormProps } from "../../src";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from 'antd';

const CustomInput = (props) => {
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

function TestComponent() {
  const schema: SchemaFormProps['schema'] = [{
    fieldName: 'title',
    label: 'custom input',
    type: 'customInput' as any,
  }]
  return <SchemaForm schema={schema} components={{ customInput: CustomInput }} />
}

it("local register component", () => {
  render(<TestComponent />);
  expect(screen.getByText('custom input')).toBeInTheDocument();
});
