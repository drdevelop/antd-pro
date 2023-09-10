---
nav:
  title: schema表单
group: 进阶使用
title: 结合现有表单
order: 1
toc: content
---

## 结合现有表单

<font color="red">以前:</font>

```tsx
/**
 * title: 以前使用方式(纯jsx)
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
          <Form.Item name="exist" label="历史表单项">
            <Input />
          </Form.Item>
        </Form>
        <Button type="primary" onClick={onSubmit}>
          提交
        </Button>
      </>
    )
  }
```


<font color="green">现在:</font>

```tsx
/**
 * title: 现在使用方式(schema与jsx结合)
* description: 虽然拥有了便捷的schema表单渲染功能，但与此同时我们也能轻易结合历史现存表单项。您只需要将原先的表单项组件作为SchemaForm的`children`进行渲染即可，这样可以`渐进式使用`schemaForm，在不影响旧表单项功能的前提下。<br/>注意：原先`Form上的属性`需移动到SchemaForm组件上
*/
  import React, { useState, useEffect, useMemo } from 'react';
  import { Form, Button, Input } from 'antd';
  import SchemaForm from 'antd-pro-schema-form';

  export default () => {
    const [form] = Form.useForm();
    const schema = useMemo(() => ([{
      fieldName: 'title',
      label: 'schema标题',
      type: 'input',
      placeholder: '请输入',
      rules: [{ required: true, message: '请输入标题' }]
    }]), [])
    const onSubmit = () => {
      alert(JSON.stringify(form.getFieldsValue()));
    };

    return (
      <>
        <SchemaForm form={form} schema={schema}>
          <Form.Item name="exist" label="历史表单项">
            <Input />
          </Form.Item>
        </SchemaForm>
        <Button type="primary" onClick={onSubmit}>
          提交
        </Button>
      </>
    )
  }
```
