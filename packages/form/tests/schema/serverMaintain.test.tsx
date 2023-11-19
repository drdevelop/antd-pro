import React from 'react';
import SchemaForm, { stringifySchema, parseSchema } from '../../src';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

it('stringify schema', () => {
  // eslint-disable-next-line
  // @ts-ignore
  // eslint-disable-next-line
  expect(stringifySchema({a: 1})).toBe(
  // eslint-disable-next-line
`{
  "a": 1
}`,
  );
});

function TestComponent() {
  const schema = parseSchema(`
    [ { "fieldName": "schema", "label": "schema", "type": "textarea" } ]
  `);
  return <SchemaForm schema={schema} />;
}

it('parse schema', () => {
  render(<TestComponent />);
  expect(screen.getByText('schema')).toBeInTheDocument();
});
