---
nav:
  title: schema表单
group:
  title: 基础使用
  order: 1
toc: content
---

## 普通schema表单

```tsx
  import SchemaForm from 'antd-pro-schema-form';

  export default () => {
    const schema = [{
      fieldName: 'title',
      label: '标题',
      type: 'input',
    }]
    return <SchemaForm schema={schema} />
  }
```

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

<API
  id="SchemaForm"
>
</API>

