import { Props, RefCurrent as SchemaFormRefCurrent } from './core/Transformer/SchemaForm';

export type RefCurrent = SchemaFormRefCurrent;
export type SchemaFormProps<T = ''> = Props<T>;

export { default } from './core';

export { registerComponent, registerComponents } from './components';
