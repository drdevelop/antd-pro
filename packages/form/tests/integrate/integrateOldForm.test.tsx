import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import SchemaForm, { RefCurrent, SchemaFormProps } from '../../src';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import dayjs from 'dayjs';
import userEvent from '@testing-library/user-event';

function TestComponent() {
  const [form] = Form.useForm();
  const [submitData, setSubmitData] = useState<any>();

  const schema = useMemo(() => ([{
    fieldName: 'title',
    label: 'schema title',
    type: 'datePicker',
    placeholder: 'input',
    rules: [{ required: true, message: 'please input title' }],
    initialValue: '2023-08-08',
    fusion(value) {
      return dayjs(value);
    },
    fission(value) {
      return value.format('YYYY-MM-DD HH:mm:ss');
    },
  }] as SchemaFormProps['schema']), []);

  const onSubmit = () => {
    setSubmitData(JSON.stringify(form.getFieldsValue()));
  };

  return (
    <>
      <Form form={form} onFinish={onSubmit}>
        <Form.Item name="exist" label="exist form item">
          <Input />
        </Form.Item>
        <SchemaForm hybrid enableValueAtomize form={form} schema={schema} />
        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </Form>
      <div>
        {submitData}
      </div>
    </>
  );
}

function TestComponent2() {
  const [form] = Form.useForm();
  const schemaFormRef = useRef<RefCurrent>();
  const [submitData, setSubmitData] = useState<any>();

  const schema: SchemaFormProps['schema'] = useMemo(() => ([{
    fieldName: 'title',
    label: 'schema title',
    type: 'datePicker',
    placeholder: 'input',
    rules: [{ required: true, message: 'please input title' }],
    initialValue: '2023-08-08',
    fusion(value) {
      return dayjs(value);
    },
    fission(value) {
      return value.format('YYYY-MM-DD HH:mm:ss');
    },
  }]), []);

  const onSubmit = (values) => {
    setSubmitData(JSON.stringify(schemaFormRef.current.fission(values)));
  };

  return (
    <>
      <Form form={form} onFinish={onSubmit}>
        <Form.Item name="exist" label="exist form item">
          <Input />
        </Form.Item>
        <SchemaForm hybrid enableValueAtomize ref={schemaFormRef} form={form} schema={schema} />
        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </Form>
      <div>
        {submitData}
      </div>
    </>
  );
}

it('integrate old form items onFinish1', async () => {
  render(<TestComponent />);
  await userEvent.click(screen.getByText('submit'));
  expect(screen.getByText('{"title":"2023-08-08 00:00:00"}')).toBeInTheDocument();
});

it('integrate old form items onFinish2', async () => {
  render(<TestComponent2 />);
  await userEvent.click(screen.getByText('submit'));
  expect(screen.getByText('{"title":"2023-08-08 00:00:00"}')).toBeInTheDocument();
});
