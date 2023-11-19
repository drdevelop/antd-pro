---
nav:
  title: schema表单
group: 进阶使用
title: 服务端动态维护schema
order: 6
toc: content
---

## schema转换成字符串存入服务端

```tsx
/**
 * title: 调用stringifySchema方法将schema对象转成字符串
 */
import React, { useState } from 'react';
import { Form, Button } from 'antd'
import SchemaForm, { stringifySchema } from 'antd-pro-schema-form';

export default () => {
  const [form] = Form.useForm();
  const [schemaStr, setSchemaStr] = useState();

  const schema = [{
    fieldName: 'schema',
    label: 'Schema',
    type: 'textarea',
    mapStateToSchema(globalState) { // 这种方式stringify后的parse无法还原函数，只有箭头函数才行
      return { data: globalState };
    }
  }];

  const onSubmit = () => {
    const schemaObj = new Function(`return (${form.getFieldsValue().schema})`)();
    setSchemaStr(stringifySchema(schemaObj)); // 转换schema对象为字符串
  };

  return (
    <>
      <SchemaForm form={form} schema={schema} />
      <Button type="primary" onClick={onSubmit}>
        一键提取服务端可存储的schema
      </Button>
      <div style={{ color: 'red' }}>服务端schema:</div>
      <div>{schemaStr}</div>
    </>
  )
}
```


## 将服务端schema字符串格式转换成对象模式

```tsx
/**
 * title: 调用parseSchema方法将schema字符串转成SchemaForm可识别的对象schema格式
 */
import React, { useState, useMemo } from 'react';
import { Form, Button } from 'antd'
import SchemaForm, { parseSchema } from 'antd-pro-schema-form';

export default () => {
  const [form] = Form.useForm();

  const [parsedSchema, setParsedSchema] = useState();
  const schema = [{
    fieldName: 'schema',
    label: '服务端Schema',
    type: 'textarea',
  }];

  const onSubmit = () => {
    setParsedSchema(parseSchema(form.getFieldValue('schema')));
  }

  return (
    <>
      <h2>输入服务端schema字符串:</h2>
      <SchemaForm form={form} schema={schema} />
      <Button type="primary" onClick={onSubmit}>
        一键解析服务端的schema字符串并渲染
      </Button>
      <h2>解析后的schema渲染后的表单: </h2>
      { parsedSchema && <SchemaForm schema={parsedSchema} /> }
    </>
  )
}
```
