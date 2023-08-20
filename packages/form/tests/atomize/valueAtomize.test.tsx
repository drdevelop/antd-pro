import React, { useEffect, useRef, useState } from 'react';
import SchemaForm, { RefCurrent } from "../../src";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import dayjs from 'dayjs';
import userEvent from '@testing-library/user-event';

function TestComponent() {
  const formRef = useRef<RefCurrent>();
  const [submitData, setSubmitData] = useState();
  const schema = [{
    fieldName: 'date',
    label: 'date',
    type: 'datePicker' as any,
    fusion(value) {
      // transform value when setFieldsValue
      return dayjs(value);
    },
    fission(value) {
      // transform value when form submit or getFieldsValue
      return value.format('YYYY-MM-DD HH:mm:ss');
    },
  }];

  useEffect(() => {
    if (!formRef.current) return;
    formRef.current.setFieldsValue({
      date: '2023-08-08',
    })
  }, [formRef]);

  const submit = () => {
    // the same as formInstance.getFieldsValue()
    setSubmitData(formRef.current.getFieldsValue());
  };

  return (
    <>
      <SchemaForm enableValueAtomize ref={formRef} schema={schema} />
      <span onClick={submit}>submit</span>
      {submitData ? JSON.stringify(submitData) : ''}
    </>
  )
}

function TestComponent2() {
  const formRef = useRef<RefCurrent>();
  const [submitData, setSubmitData] = useState();
  const schema = {
    date: {
      fieldName: 'date',
      label: 'date',
      type: 'datePicker' as any,
      fusion(value) {
        // transform value when setFieldsValue
        return dayjs(value);
      },
      fission(value) {
        // transform value when form submit or getFieldsValue
        return value.format('YYYY-MM-DD HH:mm:ss');
      },
    }
  };

  useEffect(() => {
    if (!formRef.current) return;
    formRef.current.setFieldsValue({
      date: '2023-08-08',
    })
  }, [formRef]);

  const submit = () => {
    // the same as formInstance.getFieldsValue()
    setSubmitData(formRef.current.getFieldsValue());
  };

  return (
    <>
      <SchemaForm enableValueAtomize ref={formRef} schema={schema} />
      <span onClick={submit}>submit</span>
      {submitData ? JSON.stringify(submitData) : ''}
    </>
  )
}

it("value fusion and fission", async () => {
  render(<TestComponent />);
  expect(screen.getByDisplayValue('2023-08-08 00:00:00')).toBeInTheDocument();
  await userEvent.click(screen.getByText('submit'));
  expect(screen.getByText('{"date":"2023-08-08 00:00:00"}')).toBeInTheDocument();
});

it("value fusion and fission with object schema", async () => {
  render(<TestComponent2 />);
  expect(screen.getByDisplayValue('2023-08-08 00:00:00')).toBeInTheDocument();
  await userEvent.click(screen.getByText('submit'));
  expect(screen.getByText('{"date":"2023-08-08 00:00:00"}')).toBeInTheDocument();
});
