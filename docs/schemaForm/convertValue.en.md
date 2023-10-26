---
nav:
  title: schema form
group: Advanced
title: Value atomize
order: 5
toc: content
---

## covert form item value when initialize
> For example: transform date
```tsx
/**
 * title: open form item convert ability by <enableValueAtomize> switch
 * description: convert form item value by `fusion` function when initialize
 */
import React, { useRef, useEffect } from 'react';
import { Form, Button } from 'antd';
import SchemaForm from 'antd-pro-schema-form';
import dayjs from 'dayjs';

export default () => {
  const [form] = Form.useForm();
  const schema = [{
    fieldName: 'date',
    label: 'date',
    type: 'datePicker',
    fusion(value) {
      return dayjs(value);
    }
  }, {
    fieldName: 'date2',
    label: 'date2',
    type: 'datePicker',
    initialValue: '2023-08-08',
    fusion(value) {
      return dayjs(value);
    }
  }, {
    fieldName: 'date3',
    label: 'date3',
    type: 'datePicker',
  }]

  useEffect(() => {
    if (!form) return;
    // the same as form.setFieldsValue
    // you can set initial value by setFieldsValue、schema.initialValue or schemaForm props 'initialValues'
    form.setFieldsValue({
      date: '2023-08-08',
    })
  }, [form])
  const onSubmit = () => {
    alert(form.getFieldsValue());
  };
  return (
    <>
      <SchemaForm
        enableValueAtomize
        initialValues={{
          date3: dayjs('2023-08-08')
        }}
        schema={schema}
        form={form}
      />
      <Button type="primary" onClick={onSubmit}>
        submit
      </Button>
    </>
  )
}
```

## convert form item value when submit
> For example: transform date
```tsx
/**
 * title: open form item convert ability by <enableValueAtomize> switch
 * description: convert form item value by `fission` function when submit
 */
import React, { useRef, useEffect } from 'react';
import SchemaForm from 'antd-pro-schema-form';
import dayjs from 'dayjs';
import { Button, Form } from 'antd';

export default () => {
  const [form] = Form.useForm();

  const schema = [{
    fieldName: 'select',
    label: 'date',
    type: 'datePicker',
    fission(value) {
      return value.format('YYYY-MM-DD HH:mm:ss');
    }
  }];

  const submit = () => {
    alert(JSON.stringify(form.getFieldsValue()));
  };

  return (
    <>
      <SchemaForm enableValueAtomize form={form} schema={schema} />
      <Button type="primary" onClick={submit}>submit</Button>
    </>
  )
}
```


## API
### SchemaFormProps

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| form | form instance | `FormInstance` | `--` |
| schema | form schema configuration | `{ [fieldName: string]: SchemaItem } \| SchemaItem[]` | `required` |
| enableValueAtomize | open convert form item value ability | `boolean` | `false` |

### SchemaItem
| Property | Description | Type | Default |
| --- | --- | --- | --- |
| fieldName | form item field name | `string` | `--` |
| label | form item label | `string` | `--` |
| type | form item child component type | `"input" \| "textarea" \| "select" \| "switch" \| "multipleSelect" \| "radio" \| "radioButton" \| "treeSelect" \| "datePicker" \| "dateRangePicker" \| "dateTimeRangePicker" \| "timeRangePicker" \| "custom"` | `--` |
| fusion | convert form item value when form initialize，need return formated value | `(value: any) => any` | `--` |
| fission | convert form item value when form submit，need return formated value | `(value: any) => any` | `--` |
