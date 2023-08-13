---
nav:
  title: schema表单
title: 分组schema表单
order: 2
toc: content
---

## 分组schema表单

```tsx
/**
 * title: schemaGroups表示要将表单schema作为一个字典，里面的字段进行分组渲染
 * description: 注意：此时schema需为object对象形式
 */
  import SchemaForm from 'antd-pro-schema-form';

  export default () => {
    const schema = {
      title: {
        fieldName: 'title',
        label: '分组schema标题',
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

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| schema | 表单schema配置 | `{ [fieldName: string]: SchemaItem } \| SchemaItem[]` | `（必选）` |
| schemaGroups | 将表单schema进行分组渲染 | `GroupRule[]` | `--` |
| groupRender | 分组渲染器 | `(formItemList: React.ReactNode, group: GroupRule, state?: any) => React.ReactNode` | `--` |
| groupsRender | 所有分组的结合渲染器（参数为所有schema渲染的React节点） | ` (child: React.ReactNode) => React.ReactNode` | `--` |

### GroupRule
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| list | 表单项名称分组集合 | `string[]` | `--` |
| render | 当前表单分组渲染 | `(formItemList: React.ReactNode, group: GroupRule, state?: any) => React.ReactNode` | `--` |
