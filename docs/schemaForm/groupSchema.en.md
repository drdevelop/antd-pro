---
nav:
  title: schema form
title: Group Schema
order: 2
toc: content
---

## group schema

```tsx
/**
* title: schemaGroups indicate to use the form schema as a dictionary, group fieldNames in list for rendering
 * description: notice:The schema needs to be in object format
 */
import React from 'react';
import { Form, Button } from 'antd';
import SchemaForm from 'antd-pro-schema-form';

export default () => {
  const [form] = Form.useForm();
  const schema = {
    title: {
      fieldName: 'title',
      label: 'group schema title',
      type: 'input',
    }
  };
  const schemaGroups = [{
    list: [
      'title',
    ]
  }];
  const onSubmit = () => {
    alert(JSON.stringify(form.getFieldsValue()));
  };
  return (
    <>
      <SchemaForm form={form} schema={schema} schemaGroups={schemaGroups} />
      <Button type="primary" onClick={onSubmit}>
        submit
      </Button>
    </>
  );
}
```

## API
### SchemaFormProps

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| schema | form schema configuration | `{ [fieldName: string]: SchemaItem } \| SchemaItem[]` | `required` |
| schemaGroups | group schema for render | `GroupRule[]` | `--` |
| groupRender | group renderer | `(formItemList: React.ReactNode, group: GroupRule, state?: any) => React.ReactNode` | `--` |
| groupsRender | Combine renderer for all groups (parameter is React nodes for all schema renderings) | ` (child: React.ReactNode) => React.ReactNode` | `--` |

### GroupRule
| Property | Description | Type | Default |
| --- | --- | --- | --- |
| list | pick form item fieldNames | `string[]` | `--` |
| render | current group renderer | `(formItemList: React.ReactNode, group: GroupRule, state?: any) => React.ReactNode` | `--` |
