---
nav:
  title: schema form
title: Basic Usage
order: 1
toc: content
---

## general usage

```tsx
/**
 * title: render
* description: The most comprehensive form items can be found in [explore more](#/en/schema-form/register-components#all-internal-components)
*/
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
      console.log('formRef', formRef.current)
      alert(formRef.current.getFieldsValue());
    };
    return (
      <>
        <SchemaForm form={formRef} schema={schema} />
        <Button type="primary" onClick={onSubmit}>
          Submit
        </Button>
      </>
    )
  }
```

## group schema usage

```tsx
/**
 * title: schemaGroups indicate to use the form schema as a dictionary, group fieldNames in list for rendering
 * description: notice:The schema needs to be in object format, [click me to explore more](#/en/schema-form/group-schema#schemaformprops)
 */
  import React from 'react';
  import { Form, Button } from 'antd';
  import SchemaForm from 'antd-pro-schema-form';

  export default () => {
    const [form] = Form.useForm();

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
      alert(JSON.stringify(form.getFieldsValue()));
    };
    return (
      <>
        <SchemaForm form={form} schema={schema} schemaGroups={schemaGroups} />
        <Button type="primary" onClick={onSubmit}>
          Submit
        </Button>
      </>
    )
  }
```

## API
### SchemaFormProps
> rest hide properties are antd form props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| form | form instance | `FormInstance` | `--` |
| schema | form schema configuration | `{ [fieldName: string]: SchemaItem } \| SchemaItem[]` | `required` |
| schemaGroups | group schema for render | `GroupRule[]` | `--` |
| groupRender | group renderer | `(formItemList: React.ReactNode, group: GroupRule, state?: any) => React.ReactNode` | `--` |
| groupsRender | Combine renderer for all groups (parameter is React nodes for all schema renderings) | ` (child: React.ReactNode) => React.ReactNode` | `--` |
| globalState | provide data for schema | `PlainObject` | `{}` |
| components | registered components | `{ [key: string]: React.ReactNode; }` | `--` |
| hybird | Combining with existing forms (at this point, you can embed the SchemeForm as part of your original form) | `boolean` | `false` |
| enableValueAtomize | enable the ability to atomize and convert form item data. Once enabled, fusion and fusion can be used to convert data in the schema (format conversion when initializing and submitting form item values, such as the mutual conversion between time and moment objects) | `boolean` | `false` |

### SchemaItem
| Property | Description | Type | Default |
| --- | --- | --- | --- |
| fieldName | form item field name | `string` | `--` |
| label | form item label | `string` | `--` |
| type | form item child component type | `"input" \| "select" \| "switch" \| "multipleSelect" \| "radio" \| "radioButton" \| "treeSelect" \| "datePicker" \| "dateRangePicker" \| "dateTimeRangePicker" \| "timeRangePicker" \| "custom"` | `--` |
| dependencies | set dependencies fields for form item linkage | `string[]` | `--` |
| component | custom component(need use with `type: 'custom'`) | `React.ReactNode \| ((form: FormInstance) => null \| SchemaItem)` | `(required)` |
| data | form item data | `{ label: string; value: any; }[]` | `--` |
| elementSpecProps | extra form item child component props（for example Input Props） | `any` | `--` |
| remoteData | function to fetch server data | `(keyword?: string) => {label: string; value: any;}[]` | `--` |
| mapStateToSchema | using the GlobalState of SchemeFormProps | `(globalState: PlainObject) => Partial<SchemaItem>` | `--` |
| formItemSpecProps | antd form item props<br />(pay attention to distinguishing elementSpecProps) | `FormItemProps` | `--` |
| fusion | convert form item value when form initialize，need return formated value | `(value: any) => any` | `--` |
| fission | convert form item value when form submit，need return formated value | `(value: any) => any` | `--` |
| disabled | disable component input | `boolean` | `false` |