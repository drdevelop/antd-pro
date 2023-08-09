import React from 'react';
import SchemaForm from 'antd-pro-schema-form';

export default () => {

return <SchemaForm schema={[{
  fieldName: 'title',
  label: 'title',
  type: 'input',
}]} />;
}
