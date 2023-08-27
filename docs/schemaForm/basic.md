---
nav:
  title: schema表单
title: 基础用法
order: 1
toc: content
---

## 普通schema表单

```tsx
/**
 * title: 渲染
* description: 更全的表单项见[探索更多](#/schema-form/register-components#所有内置组件示例)
*/
  import { Form, Button } from 'antd';
  import SchemaForm from 'antd-pro-schema-form';

  export default () => {
    const [formInstance] = Form.useForm();
    const schema = [{
      fieldName: 'title',
      label: '标题',
      type: 'input',
      placeholder: '请输入',
      rules: [{ required: true, message: '请输入标题' }]
    }]
    const onSubmit = () => {
      alert(JSON.stringify(formInstance.getFieldsValue()));
    };
    return (
      <>
        <SchemaForm form={formInstance} schema={schema} />
        <Button onClick={onSubmit}>
          提交
        </Button>
      </>
    )
  }
```

## 分组schema表单

```tsx
/**
 * title: schemaGroups表示要将表单schema作为一个字典，里面的字段进行分组渲染
 * description: 注意：此时schema需为object对象形式，[点我探索更多](#/schema-form/group-schema#schemaformprops)
 */
  import React from 'react';
  import { Form, Button } from 'antd';
  import SchemaForm from 'antd-pro-schema-form';

  export default () => {
    const [formInstance] = Form.useForm();
    const schema = {
      title: {
        fieldName: 'title',
        label: '分组schema标题',
        type: 'input',
        placeholder: '请输入',
        rules: [{ required: true, message: '请输入标题' }],
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
          提交
        </Button>
      </>
    )
  }
```

## API
### SchemaFormProps
> 剩下未展示的属性为antd form任一props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| form | 表单实例 | `FormInstance` | `--` |
| schema | 表单schema配置 | `{ [fieldName: string]: SchemaItem } \| SchemaItem[]` | `（必选）` |
| schemaGroups | 将表单schema进行分组渲染 | `GroupRule[]` | `--` |
| groupRender | 分组渲染器 | `(formItemList: React.ReactNode, group: GroupRule, state?: any) => React.ReactNode` | `--` |
| groupsRender | 所有分组的结合渲染器（参数为所有schema渲染的React节点） | ` (child: React.ReactNode) => React.ReactNode` | `--` |
| globalState | 提供给schema的数据 | `PlainObject` | `{}` |
| components | 注册的组件集合 | `{ [key: string]: React.ReactNode; }` | `--` |

### SchemaItem
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fieldName | 表单字段 | `string` | `--` |
| label | 表单项名称 | `string` | `--` |
| type | 表单项组件类型 | `"input" \| "select" \| "switch" \| "multipleSelect" \| "radio" \| "radioButton" \| "treeSelect" \| "datePicker" \| "dateRangePicker" \| "dateTimeRangePicker" \| "timeRangePicker" \| "custom"` | `--` |
| dependencies | 设置依赖的字段，用于表单联动 | `string[]` | `--` |
| component | 自定义组件（请配合`type: 'custom'`使用） | `React.ReactNode \| ((form: FormInstance) => null \| SchemaItem)` | `（必选）` |
| data | 表单项数据 | `{ label: string; value: any; }[]` | `--` |
| elementSpecProps | 额外的表单项子组件props（例如Input Props） | `any` | `--` |
| remoteData | 远程数据获取函数 | `(keyword?: string) => {label: string; value: any;}[]` | `--` |
| mapStateToSchema | 将SchemaFormProps的globalState进行使用 | `(globalState: PlainObject) => Partial<SchemaItem>` | `--` |
| formItemSpecProps | antd表单项props<br />(注意区分elementSpecProps) | `FormItemProps` | `--` |
| fusion | 原子聚变<br />(数据初始化时格式化表单项值value，需返回格式化后的值) | `(value: any) => any` | `--` |
| fission | 原子裂变<br />(提交表单时格式化表单项值value，需返回格式化后的值) | `(value: any) => any` | `--` |
| disabled | 是否禁用当前表单项 | `boolean` | `false` |