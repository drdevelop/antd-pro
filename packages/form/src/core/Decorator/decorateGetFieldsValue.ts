import { FormInstance } from 'antd';
import { fissionValue } from '../Transformer/valueAtomize';
import { Schema } from '../types';
import { NamePath } from 'antd/es/form/interface';

export default (shadowForm: FormInstance, instance: FormInstance, schema: Schema) => {
  const oldGetFieldsValue = instance.getFieldsValue;
  shadowForm.getFieldsValue = (...args) => {
    const values = oldGetFieldsValue(...(args as [true | NamePath[], (meta: any) => boolean]));
    return fissionValue(schema, values);
  };
};
