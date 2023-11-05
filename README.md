# antd-pro-schema-form

🎉🎉🎉 form item value atomize released!!! See [Detail](https://drdevelop.github.io/antd-pro/index.html#/en/schema-form/convert-value)

antd-pro-schema-form based Ant Design, quickly generate interactive forms with Schema configuration.

[English](https://drdevelop.github.io/antd-pro/index.html#/en/schema-form/readme) | [中文文档](https://drdevelop.github.io/antd-pro/index.html#/schema-form/readme)

## Features
- Reactive
- Progressive
- Schema
- Group schema
- Fetch remote data multiple mode
- Fusion and fission value
- Test case coverage 99%+

## Install

install with npm:
```
npm install --save-dev antd-pro-schema-form
```

install with yarn:
```
yarn add antd-pro-schema-form -dev
```

install with pnpm:
```
pnpm add antd-pro-schema-form
```

## Quickstart
### normal
```tsx
import React from 'react';
import { Form, Button } from 'antd';
import SchemaForm from 'antd-pro-schema-form';

export default () => {
  const [formRef] = Form.useForm();

  const schema = [{
    fieldName: 'title',
    label: 'title',
    type: 'input',
    placeholder: 'please input',
    rules: [{ required: true, message: 'Please input title' }]
  }]
  const onSubmit = () => {
    alert(formRef.current.getFieldsValue());
  };
  return (
    <>
      <SchemaForm form={formRef} schema={schema} />
      <Button onClick={onSubmit}>
        Submit
      </Button>
    </>
  )
}
```

### group schema
```tsx
import React from 'react';
import { Form, Button } from 'antd';
import SchemaForm from 'antd-pro-schema-form';

export default () => {
  const [formInstance] = Form.useForm();

  const schema = {
    title: {
      fieldName: 'title',
      label: 'title',
      type: 'input',
      placeholder: 'please input',
      rules: [{ required: true, message: 'Please input title' }]
    }
  };
  const schemaGroups = [{
    list: [
      'title',
    ]
  }];

  const onSubmit = () => {
    alert(JSON.stringify(formInstance.getFieldsValue()));
  };
  return (
    <>
      <SchemaForm form={formInstance} schema={schema} schemaGroups={schemaGroups} />
      <Button onClick={onSubmit}>
        Submit
      </Button>
    </>
  )
}
```

## Advanced
### Convert form item value when initialize or submit
```tsx
  import React, { useRef, useEffect } from 'react';
  import SchemaForm, { RefCurrent } from 'antd-pro-schema-form';
  import dayjs from 'dayjs';
  import { Button, Form } from 'antd';

  export default () => {
    const formRef = useRef<RefCurrent>();

    const schema = [{
      fieldName: 'date',
      label: 'date',
      type: 'datePicker',
      fusion(value) {
        // transform value when setFieldsValue
        return dayjs(value);
      },
      fission(value) {
        // transform value when form submit or getFieldsValue
        return value.format('YYYY-MM-DD HH:mm:ss');
      }
    }];

    useEffect(() => {
      if (!formRef.current) return;
      formRef.current.setFieldsValue({
        date: '2023-08-08',
      })
    }, [formRef]);

    const submit = () => {
      // the same as formInstance.getFieldsValue()
      alert(JSON.stringify(formRef.current.getFieldsValue()));
    };

    return (
      <>
        <SchemaForm enableValueAtomize ref={formRef} schema={schema} />
        <Button type="primary" onClick={submit}>submit</Button>
      </>
    )
  }
```

## Ducumentation
see [https://drdevelop.github.io/antd-pro/index.html#/schema-form/readme](https://drdevelop.github.io/antd-pro/index.html#/schema-form/readme)
