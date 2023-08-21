import { Props as SchemaItem } from '../FormItemRender';

export interface SchemaMap<T = ''> {
  [key: string]: SchemaItem<T>;
}

export type Schema<T = ''> = SchemaMap<T> | SchemaItem<T>[];
