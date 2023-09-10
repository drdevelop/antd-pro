---
nav:
  title: schema form
group: Advanced
title: Combine exist form
order: 1
toc: content
---

## Combine exist form

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
      <>
        <SchemaForm form={form} schema={schema}>
          <Form.Item name="exist" label="exist form item">
            <Input />
          </Form.Item>
        </SchemaForm>
        <Button type="primary" onClick={onSubmit}>
          submit
        </Button>
      </>
    )
  }
```
