import { FormInstance } from 'antd';
import { fissionValue } from '../Transformer/valueAtomize';
import { Schema } from '../types';

export default (shadowForm: FormInstance, instance: FormInstance, schema: Schema) => {
  const oldGetFieldsValue = instance.getFieldsValue;
  shadowForm.getFieldsValue = () => {
    const values = oldGetFieldsValue();
    return fissionValue(schema, values);
  };
};
