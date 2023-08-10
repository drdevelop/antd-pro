---
nav:
  title: schema表单
group:
  title: 注册组件
  order: 1
toc: content
---

## 所有内置组件示例

```tsx
  import SchemaForm from 'antd-pro-schema-form';
  const options = [{
    label: '选项1',
    value: 1,
  }, {
    label: '选项2',
    value: 2,
  }];
  export default () => {
    const schema = [{
      fieldName: 'input',
      label: '输入框',
      type: 'input',
    }, {
      fieldName: 'select',
      label: '下拉选择框',
      type: 'select',
      data: options
    }, {
      fieldName: 'select',
      label: '多选下拉选择框',
      type: 'multipleSelect',
      data: options
    }, {
      fieldName: 'treeSelect',
      label: '树形选择',
      type: 'treeSelect',
      data: options
    }, {
      fieldName: 'radio',
      label: '单选框',
      type: 'radio',
      data: options
    }, {
      fieldName: 'radioButton',
      label: '单选按钮框',
      type: 'radioButton',
      data: options
    }, {
      fieldName: 'checkbox',
      label: '多选框',
      type: 'checkbox',
      data: options
    }, {
      fieldName: 'switch',
      label: '开关',
      type: 'switch',
    }, {
      fieldName: 'datePicker',
      label: '日期时间',
      type: 'datePicker',
    }, {
      fieldName: 'dateRangePicker',
      label: '日期范围',
      type: 'dateRangePicker',
    }, {
      fieldName: 'dateTimeRangePicker',
      label: '日期时间范围选择框',
      type: 'dateTimeRangePicker',
    }, {
      fieldName: 'timeRangePicker',
      label: '时间范围选择框',
      type: 'timeRangePicker',
    }]
    return <SchemaForm schema={schema} />
  }
```

## 使用自定义组件
不用刻意把要展示的react节点封装成一个组件

```tsx
  import { Form, Input } from 'antd';
  import SchemaForm from 'antd-pro-schema-form';

  export default () => {
    const CustomComponent = (
      <div>
        标题:
        <Form.Item name="title">
          <Input />
        </Form.Item>
      </div>
    );

    const schema = [{
      fieldName: 'custom',
      label: '输入框',
      type: 'custom',
      component: CustomComponent,
    }];

    return <SchemaForm schema={schema} />
  }
```

## 局部注册组件

```tsx
  import SchemaForm from 'antd-pro-schema-form';
  import { Input } from 'antd';

  const CustomInput = (props) => {
    const { value, onChange, className, style, elementSpecProps } = props;

    return (
      <Input
        className={className}
        style={style}
        value={value}
        onChange={onChange}
        {...elementSpecProps}
      />
    )
  };

  export default () => {
    const schema = [{
      fieldName: 'title',
      label: '自行注册的组件',
      type: 'customInput',
    }]
    return <SchemaForm schema={schema} components={{ customInput: CustomInput }} />
  }
```


## 全局注册组件

```tsx
  import SchemaForm, { registerComponents, registerComponent } from 'antd-pro-schema-form';
  import { Input } from 'antd';

  const CustomInput = (props) => {
    const { value, onChange, className, style, elementSpecProps } = props;

    return (
      <Input
        className={className}
        style={style}
        value={value}
        onChange={onChange}
        {...elementSpecProps}
      />
    )
  };
  registerComponents({ customInput: CustomInput });

  export default () => {
    const schema = [{
      fieldName: 'title',
      label: '自行注册的组件',
      type: 'customInput',
    }]
    return <SchemaForm schema={schema} />
  }
```
