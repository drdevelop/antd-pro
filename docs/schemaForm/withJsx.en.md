---
nav:
  title: schema form
group: Advanced
title: Embedded usage
order: 1
toc: content
---

## Embedded usage <Badge type="warning">must read content of particular attention before use</Badge>
> Use with old forms

<font color="red">Before:</font>

```tsx
/**
 * title: before usage(jsx)
*/
  import React, { useState, useEffect, useMemo } from 'react';
  import { Form, Button, Input } from 'antd';

  export default () => {
    const [form] = Form.useForm();

    const onSubmit = () => {
      alert(JSON.stringify(form.getFieldsValue()));
    };

    return (
      <>
        <Form form={form}>
          <Form.Item name="exist" label="exist form item">
            <Input />
          </Form.Item>
        </Form>
        <Button type="primary" onClick={onSubmit}>
          submit
        </Button>
      </>
    )
  }
```


<font color="green">Now:</font>

```tsx
/**
 * title: now usage(jsx and schema)
* description: Not only we has convenient schema render function, but also we can combine esit form item esaily。You only need to render the old form item component as the 'children' of the SchemaForm, this allows for progressive use of SchemaForm, without affecting old form items.<br/>notice:old `properties of Form` need to move to SchemaForm.
*/
  import React, { useState, useEffect, useMemo } from 'react';
  import { Form, Button, Input } from 'antd';
  import SchemaForm from 'antd-pro-schema-form';

  export default () => {
    const [form] = Form.useForm();
    const schema = useMemo(() => ([{
      fieldName: 'title',
      label: 'schema title',
      type: 'input',
      placeholder: 'please input',
      rules: [{ required: true, message: 'please input title' }]
    }]), [])
    const onSubmit = () => {
      alert(JSON.stringify(form.getFieldsValue()));
    };

    return (
      <Form form={form}>
        <Form.Item name="exist" label="exist form item">
          <Input />
        </Form.Item>
        <SchemaForm hybrid form={form} schema={schema} />
        <Button type="primary" onClick={onSubmit}>
          submit
        </Button>
      </Form>
    )
  }
```

## Particular attention
> After setting 'enableValueAtomize' to enable atomic conversion data capability, you need to focus on the following 'reminders'`

When used in conjunction with existing forms, `the instance created by Form.useForm must be passed to the 'Schema Form'`, and the parameter values obtained by the `onFinish` method of the Form component are the original values, rather than the data converted by the schema form item 'session'.

At this point, you can try the following two ways to preserve the atomization conversion data ability

### 1. get submit data from form.getFieldsValue()
```tsx
  import React, { useState, useEffect, useMemo } from 'react';
  import { Form, Button, Input } from 'antd';
  import SchemaForm from 'antd-pro-schema-form';
  import moment from 'moment';

  export default () => {
    const [form] = Form.useForm();
    const schema = useMemo(() => ([{
      fieldName: 'title',
      label: 'schema title',
      type: 'datePicker',
      placeholder: 'input',
      rules: [{ required: true, message: 'please input title' }],
      fission(value) {
        return value.format('YYYY-MM-DD HH:mm:ss');
      },
    }]), [])
    const onSubmit = (values) => {
      alert(JSON.stringify(form.getFieldsValue()));
    };

    return (
      <Form form={form} onFinish={onSubmit}>
        <Form.Item name="exist" label="exist form item">
          <Input />
        </Form.Item>
        <SchemaForm hybrid enableValueAtomize form={form} schema={schema} />
        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </Form>
    )
  }
```

### 2. transform data by fission of SchemaForm ref before submit
```tsx
  import React, { useState, useEffect, useMemo, useRef } from 'react';
  import { Form, Button, Input } from 'antd';
  import SchemaForm from 'antd-pro-schema-form';
  import moment from 'moment';

  export default () => {
    const [form] = Form.useForm();
    const schemaFormRef = useRef<RefCurrent>();
    const schema = useMemo(() => ([{
      fieldName: 'title',
      label: 'schema title',
      type: 'datePicker',
      placeholder: 'input',
      rules: [{ required: true, message: 'please input title' }],
      fission(value) {
        return value.format('YYYY-MM-DD HH:mm:ss');
      },
    }]), [])
    const onSubmit = (values) => {
      alert(JSON.stringify(schemaFormRef.current.fission(values)));
    };

    return (
      <Form form={form} onFinish={onSubmit}>
        <Form.Item name="exist" label="exist form item">
          <Input />
        </Form.Item>
        <SchemaForm hybrid enableValueAtomize ref={schemaFormRef} form={form} schema={schema} />
        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </Form>
    )
  }
```
