---
nav:
  title: schema表单
group:
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
