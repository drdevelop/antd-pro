import React from 'react';
import SchemaForm, { Schema } from '../../src';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

function TestComponent() {
  const options = [{
    label: 'option1',
    value: 1,
  }, {
    label: 'option2',
    value: 2,
  }];

  const schema: Schema = [{
    fieldName: 'input',
    label: 'input',
    type: 'input',
  }, {
    fieldName: 'inputNumber',
    label: 'inputNumber',
    type: 'inputNumber',
  }, {
    fieldName: 'select',
    label: 'select',
    type: 'select',
    data: options,
  }, {
    fieldName: 'multipleSelect',
    label: 'multipleSelect',
    type: 'multipleSelect',
    data: options,
  }, {
    fieldName: 'treeSelect',
    label: 'treeSelect',
    type: 'treeSelect',
    data: options,
  }, {
    fieldName: 'radio',
    label: 'radio',
    type: 'radio',
    data: options,
  }, {
    fieldName: 'radioButton',
    label: 'radioButton',
    type: 'radioButton',
    data: options,
  }, {
    fieldName: 'checkbox',
    label: 'checkbox',
    type: 'checkbox',
    data: options,
  }, {
    fieldName: 'switch',
    label: 'switch',
    type: 'switch',
  }, {
    fieldName: 'datePicker',
    label: 'datePicker',
    type: 'datePicker',
  }, {
    fieldName: 'dateRangePicker',
    label: 'dateRangePicker',
    type: 'dateRangePicker',
  }, {
    fieldName: 'dateTimeRangePicker',
    label: 'dateTimeRangePicker',
    type: 'dateTimeRangePicker',
  }, {
    fieldName: 'timeRangePicker',
    label: 'timeRangePicker',
    type: 'timeRangePicker',
  }];
  return <SchemaForm schema={schema} />;
}

it('all types', () => {
  render(<TestComponent />);
  expect(screen.getByText('input')).toBeInTheDocument();
});
