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
  import SchemaForm from 'antd-pro-schema-form';

  export default () => {
    const schema = [{
      fieldName: 'title',
      label: 'title',
      type: 'input',
    }]
    return <SchemaForm schema={schema} />
  }
```

## group schema usage

```tsx
/**
 * title: schemaGroups indicate to use the form schema as a dictionary, group fieldNames in list for rendering
 * description: notice:The schema needs to be in object format, [click me to explore more](#/en/schema-form/group-schema#schemaformprops)
 */
  import SchemaForm from 'antd-pro-schema-form';

  export default () => {
    const schema = {
      title: {
        fieldName: 'title',
        label: 'title',
        type: 'input',
      }
    };
    const schemaGroups = [{
      list: [
        'title',
      ]
    }];
    return <SchemaForm schema={schema} schemaGroups={schemaGroups} />
  }
```

## API
### SchemaFormProps

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| form | form instance | `FormInstance` | `--` |
| schema | form schema configuration | `{ [fieldName: string]: SchemaItem } \| SchemaItem[]` | `required` |
| schemaGroups | group schema for render | `GroupRule[]` | `--` |
| groupRender | group renderer | `(formItemList: React.ReactNode, group: GroupRule, state?: any) => React.ReactNode` | `--` |
| groupsRender | Combine renderer for all groups (parameter is React nodes for all schema renderings) | ` (child: React.ReactNode) => React.ReactNode` | `--` |
| globalState | provide data for schema | `PlainObject` | `{}` |
| components | registered components | `{ [key: string]: React.ReactNode; }` | `--` |

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