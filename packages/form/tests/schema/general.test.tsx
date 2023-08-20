import React from 'react';
import SchemaForm, { SchemaFormProps } from "../../src";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

function TestComponent() {
  const schema: SchemaFormProps['schema'] = [{
    fieldName: 'title',
    label: 'title',
    type: 'input',
  }]
  return <SchemaForm schema={schema} />
}

it("general", () => {
  render(<TestComponent />);
  expect(screen.getByText('title')).toBeInTheDocument();
});
