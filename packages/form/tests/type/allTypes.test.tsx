import React from 'react';
import SchemaForm from '../../src';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

function TestComponent() {
  const options = [{
    label: '选项1',
    value: 1,
  }, {
    label: '选项2',
    value: 2,
  }];

  const schema: any = [{
    fieldName: 'input',
    label: '输入框',
    type: 'input',
  }, {
    fieldName: 'select',
    label: '下拉选择框',
    type: 'select',
    data: options,
  }, {
    fieldName: 'select',
    label: '多选下拉选择框',
    type: 'multipleSelect',
    data: options,
  }, {
    fieldName: 'treeSelect',
    label: '树形选择',
    type: 'treeSelect',
    data: options,
  }, {
    fieldName: 'radio',
    label: '单选框',
    type: 'radio',
    data: options,
  }, {
    fieldName: 'radioButton',
    label: '单选按钮框',
    type: 'radioButton',
    data: options,
  }, {
    fieldName: 'checkbox',
    label: '多选框',
    type: 'checkbox',
    data: options,
  }, {
    fieldName: 'switch',
    label: '开关',
    type: 'switch',
  }, {
    fieldName: 'datePicker',
    label: '日期时间',
    type: 'datePicker',
  }, {
    fieldName: 'dateRangePicker',
    label: '日期范围',
    type: 'dateRangePicker',
  }, {
    fieldName: 'dateTimeRangePicker',
    label: '日期时间范围选择框',
    type: 'dateTimeRangePicker',
  }, {
    fieldName: 'timeRangePicker',
    label: '时间范围选择框',
    type: 'timeRangePicker',
  }];
  return <SchemaForm schema={schema} />;
}

it('all types', () => {
  render(<TestComponent />);
  expect(screen.getByText('输入框')).toBeInTheDocument();
});
