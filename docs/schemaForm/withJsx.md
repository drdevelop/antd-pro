---
nav:
  title: schema表单
group: 进阶使用
title: 嵌入式使用
order: 1
toc: content
---

## 嵌入式使用 <Badge type="warning">使用前需仔细阅读下方特别注意的内容</Badge>
> 结合旧的表单一起使用

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
* description: 虽然拥有了便捷的schema表单渲染功能，但与此同时我们也能轻易结合历史现存表单项。您只需要设置`hybrid:true`，就可以把SchemaForm作为原先form的某一个子节点嵌入式使用了， 这样可以`渐进式使用`schemaForm，在不影响旧表单项功能的前提下。
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

    const onValuesChange = (changedValues, allValues) => {
      // 监听SchemaForm内的表单项改变
      // values是当前表单项的值，allValues是所有表单项的值包括Form底下的
      console.log('onValuesChange', changedValues, allValues);
    };

    return (
      <Form form={form}>
        <Form.Item name="exist" label="历史表单项">
          <Input />
        </Form.Item>
        <SchemaForm hybrid form={form} schema={schema} onValuesChange={onValuesChange} />
        <Button type="primary" onClick={onSubmit}>
          提交
        </Button>
      </Form>
    )
  }
```

## 特别注意
> 当你设置了`enableValueAtomize`开启原子转换数据能力后，你需要着重看下面的`提醒`

当结合现有表单使用时，`Form.useForm创建的实例必须传递给SchemaForm`，且Form组件的`onFinish`方法拿到的参数values是原始的values，而非经过schema表单项fission转换后的数据。
此时您可以试试如下两种方式，保留原子化转换数据能力
### 1. 利用form.getFieldsValue()获取提交的数据
```tsx
  import React, { useState, useEffect, useMemo } from 'react';
  import { Form, Button, Input } from 'antd';
  import SchemaForm from 'antd-pro-schema-form';
  import moment from 'moment';

  export default () => {
    const [form] = Form.useForm();
    const schema = useMemo(() => ([{
      fieldName: 'title',
      label: 'schema标题',
      type: 'datePicker',
      placeholder: '请输入',
      rules: [{ required: true, message: '请输入标题' }],
      fission(value) {
        return value.format('YYYY-MM-DD HH:mm:ss');
      },
    }]), [])
    const onSubmit = (values) => {
      alert(JSON.stringify(form.getFieldsValue()));
    };

    return (
      <Form form={form} onFinish={onSubmit}>
        <Form.Item name="exist" label="历史表单项">
          <Input />
        </Form.Item>
        <SchemaForm hybrid enableValueAtomize form={form} schema={schema} />
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form>
    )
  }
```

### 2. 利用SchemaForm ref暴露的fission（提交表单时转换数据）将现有数据转换一遍再提交
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
      label: 'schema标题',
      type: 'datePicker',
      placeholder: '请输入',
      rules: [{ required: true, message: '请输入标题' }],
      fission(value) {
        return value.format('YYYY-MM-DD HH:mm:ss');
      },
    }]), [])
    const onSubmit = (values) => {
      alert(JSON.stringify(schemaFormRef.current.fission(values)));
    };

    return (
      <Form form={form} onFinish={onSubmit}>
        <Form.Item name="exist" label="历史表单项">
          <Input />
        </Form.Item>
        <SchemaForm hybrid enableValueAtomize ref={schemaFormRef} form={form} schema={schema} />
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form>
    )
  }
```
