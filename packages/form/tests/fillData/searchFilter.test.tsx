import React from 'react';
import SchemaForm, { SchemaFormProps } from '../../src';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

function TestSelect() {
  const schema: SchemaFormProps['schema'] = [{
    fieldName: 'select',
    label: 'select',
    type: 'select',
    data: [{
      label: 'option 1',
      value: 1,
    }, {
      label: 'option 2',
      value: 2,
    }],
  }];
  return <SchemaForm schema={schema} />;
}

function TestMultipleSelect() {
  const schema: SchemaFormProps['schema'] = [{
    fieldName: 'multipleSelect',
    label: 'multipleSelect',
    type: 'multipleSelect',
    data: [{
      label: 'option 1',
      value: 1,
    }, {
      label: 'option 2',
      value: 2,
    }],
  }];
  return <SchemaForm schema={schema} />;
}

it('select search filter', async () => {
  const { container } = render(<TestSelect />);
  const inputs = container.querySelectorAll('input');
  await userEvent.click(inputs[0]);
  await userEvent.type(inputs[0], '2');
  expect(screen.queryByText('option 1')).toBeNull();
  expect(screen.getByText('option 2')).toBeInTheDocument();
});

it('multiple select search filter', async () => {
  const { container } = render(<TestMultipleSelect />);
  const inputs = container.querySelectorAll('input');
  await userEvent.click(inputs[0]);
  await userEvent.type(inputs[0], '2');
  expect(screen.queryByText('option 1')).toBeNull();
  expect(screen.getByText('option 2')).toBeInTheDocument();
});
