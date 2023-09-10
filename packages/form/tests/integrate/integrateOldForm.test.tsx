import React, { useState, useMemo, useEffect } from 'react';
import { Form, Input } from 'antd';
import SchemaForm, { SchemaFormProps } from '../../src';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

function TestComponent() {
  const [form] = Form.useForm();
  const [num, setNum] = useState(1);
  const schema = useMemo<SchemaFormProps['schema']>(() => ([{
    fieldName: 'title',
    label: 'schema title',
    type: 'input',
    placeholder: 'please input',
    rules: [{ required: true, message: 'please input title' }],
  }]), []);

  useEffect(() => {
    setNum(2);
  }, []);

  return (
    <>
      <SchemaForm form={form} schema={schema}>
        <Form.Item name="exist" label={`exist label${num}`}>
          <Input />
        </Form.Item>
      </SchemaForm>
    </>
  );
}

it('integrate old form items', () => {
  render(<TestComponent />);
  expect(screen.getByText('exist label2')).toBeInTheDocument();
});
