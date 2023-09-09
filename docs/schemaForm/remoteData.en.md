---
nav:
  title: schema form
title: Fetch Remote Data
order: 4
toc: content
---

## schema form fetch remote data

```tsx
  import React from 'react';
  import { Form, Button } from 'antd';
  import SchemaForm from 'antd-pro-schema-form';

  export default () => {
    const [form] = Form.useForm();
    const schema = [{
      fieldName: 'option',
      label: 'select',
      type: 'select',
      remoteData: async () => {
        return [{
          label: 'option1',
          value: 1,
        }, {
          label: 'option2',
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
          submit
        </Button>
      </>
    )
  }
```

## form item data preload

```tsx
  import React from 'react';
  import { Form, Button } from 'antd';
  import SchemaForm from 'antd-pro-schema-form';

  export default () => {
    const [form] = Form.useForm();
    const schema = [{
      fieldName: 'versionType',
      label: 'version',
      type: 'radio',
      data: [{
        label: 'nolimit',
        value: 1,
      }, {
        label: 'custom',
        value: 2,
      }]
    }, {
      fieldName: 'option',
      label: 'select',
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
          label: 'option1',
          value: 1,
        }, {
          label: 'option2',
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
          submit
        </Button>
      </>
    )
  }
```

## form item data lazyload

```tsx
  import React from 'react';
  import { Form, Button } from 'antd';
  import SchemaForm from 'antd-pro-schema-form';

  export default () => {
    const [form] = Form.useForm();
    const schema = [{
      fieldName: 'versionType',
      label: 'version',
      type: 'radio',
      data: [{
        label: 'nolimit',
        value: 1,
      }, {
        label: 'custom',
        value: 2,
      }]
    }, {
      fieldName: 'option',
      label: 'select',
      type: 'select',
      dependencies: ['versionType'],
      component: (form) => {
        const versionType = form.getFieldValue('versionType');
        return versionType === 2
          ? {
            remoteData: async () => {
              return [{
                label: 'option1',
                value: 1,
              }, {
                label: 'option2',
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
          submit
        </Button>
      </>
    )
  }
```
