import React from 'react';
import SchemaForm from "../../src";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Form, Input } from 'antd';

function TestCustomComponent() {
  const CustomComponent = (
    <div>
      title:
      <Form.Item name="title">
        <Input />
      </Form.Item>
    </div>
  );

  const schema: any = [{
    fieldName: 'custom',
    label: 'custom input',
    type: 'custom',
    component: CustomComponent,
  }, {
    fieldName: 'custom2',
    label: 'custom input2',
    type: 'custom',
    component: Input,
  }];

  return <SchemaForm schema={schema} />
}

function TestNoExistType() {
  const schema: any = [{
    fieldName: 'custom',
    label: 'custom input',
    type: 'test',
  }];

  return <SchemaForm schema={schema} />
}

it("custom component", () => {
  render(<TestCustomComponent />);
  expect(screen.getByText('custom input')).toBeInTheDocument();
  expect(screen.getByText('custom input2')).toBeInTheDocument();
});

it("no exist type", () => {
  render(<TestNoExistType />);
});
