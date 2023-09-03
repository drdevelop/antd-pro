import React, { useState } from 'react';
import SchemaForm, { SchemaFormProps } from '../../src';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import dayjs from 'dayjs';
import userEvent from '@testing-library/user-event';
import { Form } from 'antd';

function TestComponent() {
  const [form] = Form.useForm();
  const [submitData, setSubmitData] = useState();
  const schema: SchemaFormProps['schema'] = [{
    fieldName: 'date',
    label: 'date',
    type: 'datePicker',
    initialValue: '2023-08-08 00:00:00',
    fusion(value) {
      // transform value when setFieldsValue
      return dayjs(value);
    },
    fission(value) {
      // transform value when form submit or getFieldsValue
      return value.format('YYYY-MM-DD HH:mm:ss');
    },
  }];

  const submit = () => {
    form.submit();
  };

  const onFinish = (values) => {
    setSubmitData(values);
  };

  return (
    <>
      <SchemaForm enableValueAtomize form={form} schema={schema} onFinish={onFinish} />
      <span onClick={submit}>submit</span>
      {submitData ? JSON.stringify(submitData) : ''}
    </>
  );
}

function TestComponent2() {
  const [form] = Form.useForm();
  const [submitData, setSubmitData] = useState();
  const schema: SchemaFormProps['schema'] = [{
    fieldName: 'date',
    label: 'date',
    type: 'datePicker',
  }];

  const submit = () => {
    form.submit();
  };

  const onFinish = (values) => {
    setSubmitData(values);
  };

  return (
    <>
      <SchemaForm form={form} schema={schema} onFinish={onFinish} />
      <span onClick={submit}>submit</span>
      {submitData ? JSON.stringify(submitData) : ''}
    </>
  );
}

function TestValidateFields() {
  const [form] = Form.useForm();
  const [submitData, setSubmitData] = useState();
  const schema: SchemaFormProps['schema'] = [{
    fieldName: 'date',
    label: 'date',
    type: 'datePicker',
    initialValue: '2023-08-08 00:00:00',
    fusion(value) {
      // transform value when setFieldsValue
      return dayjs(value);
    },
    fission(value) {
      // transform value when form submit or getFieldsValue
      return value.format('YYYY-MM-DD HH:mm:ss');
    },
  }];

  const submit = async () => {
    const values = await form.validateFields();
    setSubmitData(values);
  };

  return (
    <>
      <SchemaForm enableValueAtomize form={form} schema={schema} />
      <span onClick={submit}>submit</span>
      {submitData ? JSON.stringify(submitData) : ''}
    </>
  );
}

it('value fission', async () => {
  render(<TestComponent />);
  expect(screen.getByDisplayValue('2023-08-08 00:00:00')).toBeInTheDocument();
  await userEvent.click(screen.getByText('submit'));
  expect(screen.getByText('{"date":"2023-08-08 00:00:00"}')).toBeInTheDocument();
});

it('value fission2', async () => {
  render(<TestComponent2 />);
  await userEvent.click(screen.getByText('submit'));
  expect(screen.queryByText('{"date":"2023-08-08 00:00:00"}')).toBeNull();
});

it('value fission validate fields', async () => {
  render(<TestValidateFields />);
  expect(screen.getByDisplayValue('2023-08-08 00:00:00')).toBeInTheDocument();
  await userEvent.click(screen.getByText('submit'));
  expect(screen.getByText('{"date":"2023-08-08 00:00:00"}')).toBeInTheDocument();
});
