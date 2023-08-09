# antd-pro-schema-form

antd-pro-schema-form based Ant Design, quickly generate interactive forms with Schema configuration.

[中文文档](https://drdevelop.github.io/antd-pro/index.html#/schema-form/readme)

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
pnpm add antd-pro-schema-form -dev
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
