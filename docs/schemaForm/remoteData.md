---
nav:
  title: schema表单
title: 远程数据获取
order: 4
toc: content
---

## schema表单远程数据获取

```tsx
  import React from 'react';
  import { Form, Button } from 'antd';
  import SchemaForm from 'antd-pro-schema-form';

  export default () => {
    const [form] = Form.useForm();
    const schema = [{
      fieldName: 'option',
      label: '选择',
      type: 'select',
      remoteData: async () => {
        return [{
          label: '选项1',
          value: 1,
        }, {
          label: '选项2',
          value: 2,
        }]
      }
    }]
    const onSubmit = () => {
      alert(JSON.stringify(form.getFieldsValue()));
    };
    return (
      <>
        <SchemaForm form={form} schema={schema} />
        <Button type="primary" onClick={onSubmit}>
          提交
        </Button>
      </>
    )
  }
```

## 表单项数据预加载

```tsx
  import React from 'react';
  import { Form, Button } from 'antd';
  import SchemaForm from 'antd-pro-schema-form';

  export default () => {
    const [form] = Form.useForm();
    const schema = [{
      fieldName: 'versionType',
      label: '版本',
      type: 'radio',
      data: [{
        label: '不限',
        value: 1,
      }, {
        label: '自定义',
        value: 2,
      }]
    }, {
      fieldName: 'option',
      label: '选择',
      type: 'select',
      dependencies: ['versionType'],
      component: (form) => {
        const versionType = form.getFieldValue('versionType');
        return versionType === 2
          ? {}
          : null;
      },
      remoteData: async () => {
        return [{
          label: '选项1',
          value: 1,
        }, {
          label: '选项2',
          value: 2,
        }]
      }
    }];
    const onSubmit = () => {
      alert(JSON.stringify(form.getFieldsValue()));
    };
    return (
      <>
        <SchemaForm form={form} schema={schema} />
        <Button type="primary" onClick={onSubmit}>
          提交
        </Button>
      </>
    )
  }
```

## 表单项数据懒加载

```tsx
  import React from 'react';
  import { Form, Button } from 'antd';
  import SchemaForm from 'antd-pro-schema-form';

  export default () => {
    const [form] = Form.useForm();
    const schema = [{
      fieldName: 'versionType',
      label: '版本',
      type: 'radio',
      data: [{
        label: '不限',
        value: 1,
      }, {
        label: '自定义',
        value: 2,
      }]
    }, {
      fieldName: 'option',
      label: '选择',
      type: 'select',
      dependencies: ['versionType'],
      component: (form) => {
        const versionType = form.getFieldValue('versionType');
        return versionType === 2
          ? {
            remoteData: async () => {
              return [{
                label: '选项1',
                value: 1,
              }, {
                label: '选项2',
                value: 2,
              }]
            }
          }
          : null;
      }
    }]
    const onSubmit = () => {
      alert(JSON.stringify(form.getFieldsValue()));
    };
    return (
      <>
        <SchemaForm form={form} schema={schema} />
        <Button type="primary" onClick={onSubmit}>
          提交
        </Button>
      </>
    )
  }
```
