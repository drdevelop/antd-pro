import { FormInstance } from 'antd/es/form';
import { fissionValue } from '../Transformer/valueAtomize';
import { Schema } from '../types';
import { NamePath } from 'antd/es/form/interface';

export default (shadowForm: FormInstance, instance: FormInstance, schema: Schema) => {
  const oldGetFieldValue = instance.getFieldValue;
  shadowForm.getFieldValue = (name: NamePath) => {
    const fieldValue = oldGetFieldValue(name);
    const fieldNameStr = String(name);
    return fissionValue(schema, { [fieldNameStr]: fieldValue })[fieldNameStr];
  };
};
