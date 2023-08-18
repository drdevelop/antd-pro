---
nav:
  title: schema表单
group: 进阶使用
title: 原子化转换表单项数据
order: 5
toc: content
---

## 初始化转换表单项数据
> 以转换时间为例
```tsx
/**
 * title: 通过enableValueAtomize开关开启表单项值转换能力
 * description: 通过schema的`fusion`函数初始化时将字符串转换成表单项要求的moment时间对象
 */
  import React, { useRef, useEffect } from 'react';
  import SchemaForm from 'antd-pro-schema-form';
  import moment from 'moment';

  export default () => {
    const formRef = useRef();

    const schema = [{
      fieldName: 'date',
      label: '时间',
      type: 'datePicker',
      fusion(value) {
        return moment(value);
      }
    }]

    useEffect(() => {
      if (!formRef.current) return;
      console.log('current', formRef.current);
      formRef.current.setFieldsValue({
        date: '2023-07-01',
      })
    }, [formRef])
    return <SchemaForm enableValueAtomize schema={schema} ref={formRef} />
  }
```

## 提交转换表单项数据
> 以转换时间为例
```tsx
/**
 * title: 通过enableValueAtomize开关开启表单项值转换能力
 * description: 通过schema的`fission`函数提交时转换成服务端要求的时间字符串
 */
  import React, { useRef, useEffect } from 'react';
  import SchemaForm from 'antd-pro-schema-form';
  import moment from 'moment';
  import { Button, Form } from 'antd';

  export default () => {
    const formRef = useRef();

    const [formInstance] = Form.useForm();

    const schema = [{
      fieldName: 'select',
      label: '时间',
      type: 'datePicker',
      fission(value) {
        return moment(value).format('YYYY-MM-DD hh:mm:ss');
      }
    }];

    const submit = () => {
      // 和formInstance.getFieldsValue()效果一样
      alert(JSON.stringify(formRef.current.getFieldsValue()));
    };

    return (
      <>
        <SchemaForm enableValueAtomize ref={formRef} form={formInstance} schema={schema} />
        <Button type="primary" onClick={submit}>提交</Button>
      </>
    )
  }
```

## API
### SchemaFormProps
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| form | 表单实例 | `FormInstance` | `--` |
| schema | 表单schema配置 | `{ [fieldName: string]: SchemaItem } \| SchemaItem[]` | `（必选）` |
| enableValueAtomize | 开启表单原子化转换值能力 | `boolean` | `false` |

### SchemaItem
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fieldName | 表单字段 | `string` | `--` |
| label | 表单项名称 | `string` | `--` |
| type | 表单项组件类型 | `"input" \| "select" \| "switch" \| "multipleSelect" \| "radio" \| "radioButton" \| "treeSelect" \| "datePicker" \| "dateRangePicker" \| "dateTimeRangePicker" \| "timeRangePicker" \| "custom"` | `--` |
| fusion | 原子聚变<br />(数据初始化时格式化表单项值value，需返回格式化后的值) | `(value: any) => any` | `--` |
| fission | 原子裂变<br />(提交表单时格式化表单项值value，需返回格式化后的值) | `(value: any) => any` | `--` |
