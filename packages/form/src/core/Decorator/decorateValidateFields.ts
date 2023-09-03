import { FormInstance } from 'antd/es/form';
import { fissionValue } from '../Transformer/valueAtomize';
import { Schema } from '../types';

export default (shadowForm: FormInstance, instance: FormInstance, schema: Schema) => {
  const oldValidateFields = instance.validateFields;
  shadowForm.validateFields = async (...args) => {
    const values = await oldValidateFields(...args);
    return fissionValue(schema, values);
  };
};
