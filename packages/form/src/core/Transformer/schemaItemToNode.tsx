import React from 'react';
import FormItemRender, { Props as FormItemRenderProps } from '../FormItemRender';

export default function schemaItemToNode(
  schema: { [key: string]: FormItemRenderProps },
  item: any,
  components: any,
  globalState: any,
) {
  return (
    <FormItemRender
      key={item}
      components={components}
      {...schema[item]}
      {...schema[item]?.mapStateToSchema?.(globalState)}
    />
  );
}
