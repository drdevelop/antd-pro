import { Props as SchemaItem } from '../FormItemRender';

const getEffectiveSchema = (schema) => {
  if (!(schema instanceof Array)) return schema;

  const effectiveSchema: { [key: string]: SchemaItem } = {};
  for (let i = 0; i < schema.length; i++) {
    const field = schema[i];
    effectiveSchema[field.fieldName] = field;
  }
  return effectiveSchema;
}

export function fusionValue(schema: SchemaItem[] | { [key: string]: SchemaItem }, values) {
  const effectiveSchema: { [key: string]: SchemaItem } = getEffectiveSchema(schema);
  Object.keys(values).map(key => {
    if (effectiveSchema[key]?.fusion) {
      values[key] = effectiveSchema[key]?.fusion(values[key]);
    }
  });
  return values;
}

export function fissionValue(schema: SchemaItem[] | { [key: string]: SchemaItem }, values) {
  const effectiveSchema: { [key: string]: SchemaItem } = getEffectiveSchema(schema);
  Object.keys(values).map(key => {
    if (effectiveSchema[key]?.fission) {
      values[key] = effectiveSchema[key]?.fission(values[key]);
    }
  });
  return values;
}
