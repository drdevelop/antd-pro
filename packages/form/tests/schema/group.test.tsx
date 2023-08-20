import React from 'react';
import SchemaForm, { SchemaFormProps } from "../../src";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

function TestComponent() {
  const schema: SchemaFormProps['schema'] = {
    title: {
      fieldName: 'title',
      label: 'title',
      type: 'input',
    }
  };
  const schemaGroups = [{
    list: [
      'title',
    ]
  }];
  const groupsRender = (child) => {
    return (
      <div>
        {child}
        extra node display
      </div>
    )
  };
  return <SchemaForm schema={schema} schemaGroups={schemaGroups} groupsRender={groupsRender}/>
}

function TestAutoSchemaGroups() {
  const schema: SchemaFormProps['schema'] = {
    title: {
      fieldName: 'title',
      label: 'title',
      type: 'input',
    }
  };
  return <SchemaForm schema={schema} />
}

it("group schema", () => {
  render(<TestComponent />);
  expect(screen.getByText('title')).toBeInTheDocument();
});

it("auto group schema", () => {
  render(<TestAutoSchemaGroups />);
  expect(screen.getByText('title')).toBeInTheDocument();
});
