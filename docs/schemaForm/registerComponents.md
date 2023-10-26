---
nav:
  title: schema表单
title: 注册组件
order: 3
toc: content
---

## 所有内置组件示例

```tsx
  import React from 'react';
  import { Form, Button } from 'antd';
  import SchemaForm from 'antd-pro-schema-form';

  const options = [{
    label: '选项1',
    value: 1,
  }, {
    label: '选项2',
    value: 2,
  }];

  export default () => {
    const [form] = Form.useForm();

    const schema = [{
      fieldName: 'input',
      label: '输入框',
      type: 'input',
    }, {
      fieldName: 'textarea',
      label: '多行输入框',
      type: 'textarea',
    }, {
      fieldName: 'inputNumber',
      label: '数字输入框',
      type: 'inputNumber',
    }, {
      fieldName: 'select',
      label: '下拉选择框',
      type: 'select',
      data: options
    }, {
      fieldName: 'multipleSelect',
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
    }];
    const onSubmit = () => {
      alert(JSON.stringify(form.getFieldsValue()));
    };
    return (
      <>
        <SchemaForm form={form} schema={schema} />
        <Button type="primary" onClick={onSubmit}>
          提交
        </Button>
      </>
    );
  }
```

## 使用自定义组件
不用刻意把要展示的react节点封装成一个组件

```tsx
  import React from 'react';
  import { Form, Input, Button } from 'antd';
  import SchemaForm from 'antd-pro-schema-form';

  export default () => {
    const [form] = Form.useForm();

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

    const onSubmit = () => {
      alert(JSON.stringify(form.getFieldsValue()));
    };
    return (
      <>
        <SchemaForm form={form} schema={schema} />
        <Button type="primary" onClick={onSubmit}>
          提交
        </Button>
      </>
    );
  }
```

## 局部注册组件

```tsx
  import React from 'react';
  import { Form, Input, Button } from 'antd';
  import SchemaForm, { SchemaFormProps } from 'antd-pro-schema-form';

  type ExtensionType = 'customInput';

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
    const [form] = Form.useForm();

    const schema: SchemaFormProps<ExtensionType>['schema'] = [{
      fieldName: 'title',
      label: '自行注册的组件',
      type: 'customInput',
    }];

    const onSubmit = () => {
      alert(JSON.stringify(form.getFieldsValue()));
    };
    return (
      <>
       <SchemaForm<ExtensionType> form={form} schema={schema} components={{ customInput: CustomInput }} />
        <Button type="primary" onClick={onSubmit}>
          提交
        </Button>
      </>
    );
  }
```


## 全局注册组件

```tsx
  import React from 'react';
  import { Form, Input, Button } from 'antd';
  import SchemaForm, { SchemaFormProps, registerComponents, registerComponent } from 'antd-pro-schema-form';

  type ExtensionType = 'customInput';

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
    const [form] = Form.useForm();

    const schema: SchemaFormProps<ExtensionType>['schema'] = [{
      fieldName: 'title',
      label: '自行注册的组件',
      type: 'customInput',
    }];
    const onSubmit = () => {
      alert(JSON.stringify(form.getFieldsValue()));
    };
    return (
      <>
       <SchemaForm<ExtensionType> form={form} schema={schema} />
        <Button type="primary" onClick={onSubmit}>
          提交
        </Button>
      </>
    );
  }
```
