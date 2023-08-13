---
nav:
  title: schema表单
title: Linkage
order: 5
toc: content
---

## 全局数据注入到schema中使用

```tsx
/**
 * title: 组件通过globalState将数据注入到schema中供其使用
 * description: 表单schema可以通过mapStateToSchema获取注入的globalState
 */
  import SchemaForm from 'antd-pro-schema-form';

  export default () => {
    const globalState = [{
      label: '1',
      value: 1,
    }];

    const schema = [{
      fieldName: 'select',
      label: '下拉选择',
      type: 'select',
      mapStateToSchema(globalState) {
        return { data: globalState };
      }
    }]
    return <SchemaForm schema={schema} globalState={globalState} />
  }
```

## B表单项依赖A表单项值选择是否展示

```tsx
/**
 * title: 设置dependencies后，component为函数
 * description: 表单项component属性若为普通函数形式（非函数组件），则引擎会自动将其识别并传递`form实例`；<br/>你可以通过form实例获取依赖的表单值进行自主选择是否显示表单项<br/>注意:若`返回null`代表不展示表单项
 */
  import SchemaForm from 'antd-pro-schema-form';

  export default () => {
    const schema = [{
      fieldName: 'versionType',
      label: '版本',
      type: 'radio',
      data: [{
        label: '不限',
        value: 1,
      }, {
        label: '自定义',
        value: 2,
      }]
    }, {
      fieldName: 'option',
      label: '选择',
      type: 'select',
      dependencies: ['versionType'],
      component: (form) => {
        const versionType = form.getFieldValue('versionType');
        return versionType === 2
          ? {}
          : null;
      },
      data: [{
        label: '选项1',
        value: 1,
      }, {
        label: '选项2',
        value: 2,
      }]
    }]
    return <SchemaForm schema={schema} />
  }
```
