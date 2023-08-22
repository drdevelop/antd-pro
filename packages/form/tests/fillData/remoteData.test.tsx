import React from 'react';
import SchemaForm, { SchemaFormProps } from '../../src';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

function TestPreloadData() {
  const schema: SchemaFormProps['schema'] = [{
    fieldName: 'normal',
    label: 'normal',
    type: 'select',
    data: [{
      label: '1',
      value: '1',
    }] },
  {
    fieldName: 'select',
    label: 'select',
    type: 'select',
    remoteData: async () => {
      return [{
        label: 'remote option 1',
        value: 'remote opotion 1',
      }];
    },
  }];

  return (
    <>
      <SchemaForm schema={schema} />
    </>
  );
}

function TestLazyloadData() {
  const schema: SchemaFormProps['schema'] = [{
    fieldName: 'versionType',
    label: 'version',
    type: 'radio',
    data: [{
      label: 'noLimit',
      value: 1,
    }, {
      label: 'custom',
      value: 2,
    }],
  }, {
    fieldName: 'option',
    label: 'dynamic label',
    type: 'select',
    dependencies: ['versionType'],
    component: (form) => {
      const versionType = form.getFieldValue('versionType');
      return versionType === 2
        ? {
          remoteData: async () => {
            return [{
              label: 'remote option 1',
              value: 'remote opotion 1',
            }];
          },
        }
        : null;
    },
  }];
  return <SchemaForm schema={schema} />;
}

it('preload remote data', async () => {
  // fix When testing, code that causes React state updates should be wrapped into act(...)
  // problem: on useEffect invoke async setState after fetch remoteData
  await act(async () => {
    return render(
      <TestPreloadData />,
    );
  });

  // input auto has attribute role=combobox in test framework
  const selectInputs = screen.getAllByRole('combobox');
  await userEvent.click(selectInputs[1]);
  expect(screen.getByText('remote option 1')).toBeInTheDocument();
});

it('lazyload remote data', async () => {
  // fix When testing, code that causes React state updates should be wrapped into act(...)
  // problem: on useEffect invoke async setState after fetch remoteData
  const { container } = await act(async () => {
    return render(
      <TestLazyloadData />,
    );
  });

  const radios = container.querySelectorAll('input');
  await userEvent.click(radios[1]);
  const selectInputs = screen.getAllByRole('combobox');
  await userEvent.click(selectInputs[0]);
  expect(screen.getByText('remote option 1')).toBeInTheDocument();
});
