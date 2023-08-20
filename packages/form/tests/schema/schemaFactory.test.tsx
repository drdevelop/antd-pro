import React from 'react';
import SchemaForm, { SchemaFormProps } from "../../src";
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Input } from 'antd';

const CustomInput = (props) => {
  const { value, onChange, className, style, elementSpecProps } = props;

  return (
    <Input
      className={className}
      style={style}
      value={value}
      onChange={onChange}
      {...elementSpecProps}
    />
  )
};

function TestLazyloadData() {
  const schema: SchemaFormProps['schema'] = [{
    fieldName: 'versionType',
    label: 'version',
    type: 'radio' as any,
    data: [{
      label: 'noLimit',
      value: 1,
    }, {
      label: 'custom',
      value: 2,
    }]
  }, {
    fieldName: 'option',
    label: 'dynamic label',
    type: 'custom',
    dependencies: ['versionType'],
    component: <span>custom component</span>,
  }, {
    fieldName: 'option2',
    label: 'dynamic label2',
    type: 'input',
    dependencies: ['versionType'],
  }, {
    fieldName: 'option3',
    label: 'dynamic label3',
    type: 'customInput' as any,
    dependencies: ['versionType'],
  }, {
    fieldName: 'option4',
    label: 'dynamic label4',
    // test when define component, but type is not exist
    type: 'noExist' as any,
    dependencies: ['versionType'],
    component: <span>1</span>
  }]
  return <SchemaForm schema={schema} components={{ customInput: CustomInput }}/>
}

it("schema factory when type is custom", async () => {
  // fix When testing, code that causes React state updates should be wrapped into act(...)
  // problem: on useEffect invoke async setState after fetch remoteData
  const { container } = await act(async () => {
    return render(
      <TestLazyloadData />
    );
  });

  const radios = container.querySelectorAll('input');
  await userEvent.click(radios[1]);
  expect(screen.getByText('custom component')).toBeInTheDocument();
});
