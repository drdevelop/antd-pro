# antd-pro-schema-form

antd-pro-schema-form based Ant Design, quickly generate interactive forms with Schema configuration.

[English](https://drdevelop.github.io/antd-pro/index.html#/en/schema-form/readme) | [中文文档](https://drdevelop.github.io/antd-pro/index.html#/schema-form/readme)

## Features
- Reactive
- Progressive
- Schema
- Group schema
- Fetch remote data multiple mode

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
import SchemaForm from 'antd-pro-schema-form';

export default () => {
const schema = [{
  fieldName: 'title',
  label: 'title',
  type: 'input',
}];

return <SchemaForm schema={schema} />;
```

### group schema
```tsx
import React from 'react';
import SchemaForm from 'antd-pro-schema-form';

export default () => {
  const schema = {
    title: {
      fieldName: 'title',
      label: 'group schema field title',
      type: 'input',
    }
  };
  const schemaGroups = [{
    list: [
      'title',
    ]
  }];
  return <SchemaForm schema={schema} schemaGroups={schemaGroups} />;
}
```

## Advanced
```tsx
  import React, { useRef, useEffect } from 'react';
  import SchemaForm from 'antd-pro-schema-form';
  import dayjs from 'dayjs';
  import { Button, Form } from 'antd';

  export default () => {
    const formRef = useRef();

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

## Roadmap 2023-08
### Convert form item value
Not only Provide schema item fission function for form item when initialize formValues, but also provide schema item fusion function for form item when submit formValues to server.
