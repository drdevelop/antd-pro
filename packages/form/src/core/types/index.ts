import { Props as SchemaItem } from '../FormItemRender';

export interface SchemaMap {
  [key: string]: SchemaItem;
}

export type Schema = SchemaMap | SchemaItem[];
