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
  import SchemaForm from 'antd-pro-schema-form';
  import moment from 'moment';

  export default () => {
    const formRef = useRef();

    const schema = [{
      fieldName: 'date',
      label: 'date',
      type: 'datePicker',
      fusion(value) {
        return moment(value);
      }
    }]

    useEffect(() => {
      if (!formRef.current) return;
      formRef.current.setFieldsValue({
        date: '2023-07-01',
      })
    }, [formRef])
    return <SchemaForm enableValueAtomize schema={schema} ref={formRef} />
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
  import moment from 'moment';
  import { Button, Form } from 'antd';

  export default () => {
    const formRef = useRef();

    const [formInstance] = Form.useForm();

    const schema = [{
      fieldName: 'select',
      label: 'date',
      type: 'datePicker',
      fission(value) {
        return moment(value).format('YYYY-MM-DD hh:mm:ss');
      }
    }];

    const submit = () => {
      // the same as formInstance.getFieldsValue()
      alert(JSON.stringify(formRef.current.getFieldsValue()));
    };

    return (
      <>
        <SchemaForm enableValueAtomize ref={formRef} form={formInstance} schema={schema} />
        <Button type="primary" onClick={submit}>提交</Button>
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
| type | form item child component type | `"input" \| "select" \| "switch" \| "multipleSelect" \| "radio" \| "radioButton" \| "treeSelect" \| "datePicker" \| "dateRangePicker" \| "dateTimeRangePicker" \| "timeRangePicker" \| "custom"` | `--` |
| fusion | convert form item value when form initialize，need return formated value | `(value: any) => any` | `--` |
| fission | convert form item value when form submit，need return formated value | `(value: any) => any` | `--` |
