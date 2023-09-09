---
nav:
  title: schema form
title: Register component
order: 3
toc: content
---

## all internal components

```tsx
  import React from 'react';
  import { Form, Button } from 'antd';
  import SchemaForm from 'antd-pro-schema-form';

  const options = [{
    label: 'option1',
    value: 1,
  }, {
    label: 'option2',
    value: 2,
  }];

  export default () => {
    const [form] = Form.useForm();

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
    }];
    const onSubmit = () => {
      alert(JSON.stringify(form.getFieldsValue()));
    };
    return (
      <>
        <SchemaForm form={form} schema={schema} />
        <Button type="primary" onClick={onSubmit}>
          submit
        </Button>
      </>
    );
  }
```

## custom component usage
No need to deliberately encapsulate the react node to be encapsulated as a component

```tsx
  import React from 'react';
  import { Form, Input, Button } from 'antd';
  import SchemaForm from 'antd-pro-schema-form';

  export default () => {
    const [form] = Form.useForm();

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

    const onSubmit = () => {
      alert(JSON.stringify(form.getFieldsValue()));
    };
    return (
      <>
        <SchemaForm form={form} schema={schema} />
        <Button type="primary" onClick={onSubmit}>
          submit
        </Button>
      </>
    );
  }
```

## Local registration component

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
      label: 'custom input',
      type: 'customInput',
    }];

    const onSubmit = () => {
      alert(JSON.stringify(form.getFieldsValue()));
    };
    return (
      <>
         <SchemaForm<ExtensionType> form={form} schema={schema} components={{ customInput: CustomInput }} />
        <Button type="primary" onClick={onSubmit}>
          submit
        </Button>
      </>
    );
  }
```


## Global registration component

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
      label: 'custom input',
      type: 'customInput',
    }];

    const onSubmit = () => {
      alert(JSON.stringify(form.getFieldsValue()));
    };
    return (
      <>
        <SchemaForm form={form} schema={schema} />
        <Button type="primary" onClick={onSubmit}>
          submit
        </Button>
      </>
    );
  }
```
