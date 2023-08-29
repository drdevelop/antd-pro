import { FormInstance } from 'antd/es/form';
import { fusionValue } from '../Transformer/valueAtomize';
import { Schema } from '../types';

export default (shadowForm: FormInstance, instance: FormInstance, schema: Schema) => {
  const oldSetFieldsValue = instance.setFieldsValue;
  shadowForm.setFieldsValue = (values) => {
    const formatedValues = fusionValue(schema, values);
    oldSetFieldsValue(formatedValues);
  };
};
