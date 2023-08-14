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

## Ducumentation
see [https://drdevelop.github.io/antd-pro/index.html#/schema-form/readme](https://drdevelop.github.io/antd-pro/index.html#/schema-form/readme)

## Roadmap 2023-08
### Convert form item value
Not only Provide schema item fission function for form item when initialize formValues, but also provide schema item fusion function for form item when submit formValues to server.
