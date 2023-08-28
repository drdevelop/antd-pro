import { FormInstance } from 'antd';
import { fusionValue } from '../Transformer/valueAtomize';
import { Schema } from '../types';

export default (shadowForm: FormInstance, instance: FormInstance, schema: Schema) => {
  const oldSetFieldValue = instance.setFieldValue;
  shadowForm.setFieldValue = (name, value) => {
    const fieldNameStr = String(name);
    const formatedValue = fusionValue(schema, { [fieldNameStr]: value })[fieldNameStr];
    oldSetFieldValue(name, formatedValue);
  };
};
