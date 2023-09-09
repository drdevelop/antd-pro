---
nav:
  title: schema表单
group: Advanced
title: Linkage
order: 5
toc: content
---

## GlobalState inject schema for use

```tsx
/**
 * title: component inject globalState to schema
 * description: form schema can get injected globalState by mapStateToSchema
 */
  import React from 'react';
  import { Form, Button } from 'antd'
  import SchemaForm from 'antd-pro-schema-form';

  export default () => {
    const [form] = Form.useForm();

    const globalState = [{
      label: '1',
      value: 1,
    }];

    const schema = [{
      fieldName: 'select',
      label: 'select',
      type: 'select',
      mapStateToSchema(globalState) {
        return { data: globalState };
      }
    }]
    const onSubmit = () => {
      alert(JSON.stringify(form.getFieldsValue()));
    };
    return (
      <>
        <SchemaForm form={form} schema={schema} globalState={globalState} />
        <Button type="primary" onClick={onSubmit}>
          submit
        </Button>
      </>
    )
  }
```

## form item B depend on A to decide if show

```tsx
/**
 * title: after set dependencies，component is pure function
 * description: If form item schema property 'component' is pure function type(not react function component), form engine will auto recognize and resolve `form instance`;<br/>you can get form item value of dependent by form instace, then decide whether to show it<br/>notice: if `return null`represent not show form item
 */
  import React from 'react';
  import { Form, Button } from 'antd'
  import SchemaForm from 'antd-pro-schema-form';

  export default () => {
    const [form] = Form.useForm();

    const schema = [{
      fieldName: 'versionType',
      label: 'versionType',
      type: 'radio',
      data: [{
        label: 'noLimit',
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
      data: [{
        label: 'option1',
        value: 1,
      }, {
        label: 'option2',
        value: 2,
      }]
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
