import { FormInstance } from 'antd';
import decorateGetFieldsValue from './decorateGetFieldsValue';
import decorateSetFieldsValue from './decorateSetFieldsValue';
import { Schema } from '../types';

const decorators = [decorateGetFieldsValue, decorateSetFieldsValue];

function copyFormMethods(shadowForm: FormInstance, instance: FormInstance) {
  const keys = Object.keys(instance);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (instance.hasOwnProperty(key)) {
      shadowForm[key] = instance[key];
    }
  }
}

/**
 * decorate shadow form,  
 * copy form instance methods to shadow form,  
 * the act like let shadow form proxy real form instance methods
 */
function reflectFormInstance(shadowForm: FormInstance, instance: FormInstance, schema: Schema) {
  copyFormMethods(shadowForm, instance);
  for (let i = 0; i < decorators.length; i++) {
    const decorator = decorators[i];
    decorator(shadowForm, instance, schema);
  }
}

export default reflectFormInstance;