---
nav:
  title: schema form
title: Register component
order: 3
toc: content
---

## all internal components

```tsx
  import SchemaForm from 'antd-pro-schema-form';
  const options = [{
    label: 'option1',
    value: 1,
  }, {
    label: 'option2',
    value: 2,
  }];
  export default () => {
    const schema = [{
      fieldName: 'input',
      label: 'input',
      type: 'input',
    }, {
      fieldName: 'select',
      label: 'select',
      type: 'select',
      data: options
    }, {
      fieldName: 'multipleSelect',
      label: 'multipleSelect',
      type: 'multipleSelect',
      data: options
    }, {
      fieldName: 'treeSelect',
      label: 'treeSelect',
      type: 'treeSelect',
      data: options
    }, {
      fieldName: 'radio',
      label: 'radio',
      type: 'radio',
      data: options
    }, {
      fieldName: 'radioButton',
      label: 'radio button',
      type: 'radioButton',
      data: options
    }, {
      fieldName: 'checkbox',
      label: 'checkbox',
      type: 'checkbox',
      data: options
    }, {
      fieldName: 'switch',
      label: 'switch',
      type: 'switch',
    }, {
      fieldName: 'datePicker',
      label: 'date time',
      type: 'datePicker',
    }, {
      fieldName: 'dateRangePicker',
      label: 'date range',
      type: 'dateRangePicker',
    }, {
      fieldName: 'dateTimeRangePicker',
      label: 'date time range',
      type: 'dateTimeRangePicker',
    }, {
      fieldName: 'timeRangePicker',
      label: 'time range',
      type: 'timeRangePicker',
    }]
    return <SchemaForm schema={schema} />
  }
```

## custom component usage
No need to deliberately encapsulate the react node to be encapsulated as a component

```tsx
  import { Form, Input } from 'antd';
  import SchemaForm from 'antd-pro-schema-form';

  export default () => {
    const CustomComponent = (
      <div>
        title:
        <Form.Item name="title">
          <Input />
        </Form.Item>
      </div>
    );

    const schema = [{
      fieldName: 'custom',
      label: 'custom input',
      type: 'custom',
      component: CustomComponent,
    }];

    return <SchemaForm schema={schema} />
  }
```

## Local registration component

```tsx
  import SchemaForm, { SchemaFormProps } from 'antd-pro-schema-form';
  import { Input } from 'antd';

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
    const schema: SchemaFormProps<ExtensionType>['schema'] = [{
      fieldName: 'title',
      label: 'custom input',
      type: 'customInput',
    }]
    return <SchemaForm<ExtensionType> schema={schema} components={{ customInput: CustomInput }} />
  }
```


## Global registration component

```tsx
  import SchemaForm, { SchemaFormProps, registerComponents, registerComponent } from 'antd-pro-schema-form';
  import { Input } from 'antd';

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
    const schema: SchemaFormProps<ExtensionType>['schema'] = [{
      fieldName: 'title',
      label: 'custom input',
      type: 'customInput',
    }]
    return <SchemaForm schema={schema} />
  }
```
