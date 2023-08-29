import React, { useState, useEffect, useMemo } from 'react';
import SchemaForm, { SchemaFormProps } from '../../src';
import { act, render } from '@testing-library/react';
import '@testing-library/jest-dom';

function TestComponent() {
  const [data, setData] = useState<any[]>();

  const schema = useMemo<SchemaFormProps['schema']>(() => ([{
    fieldName: 'select',
    label: 'select',
    type: 'select',
    mapStateToSchema(globalState) {
      return { data: globalState?.data };
    },
  }]), []);

  useEffect(() => {
    setData([{
      label: '1',
      value: 1,
    }]);
  }, []);
  return <SchemaForm schema={schema} globalState={{ a: 1, data }} />;
}

function TestComponent1() {
  const [data, setData] = useState<any[]>([{
    label: '0',
    value: 0,
  }]);

  const schema = useMemo<SchemaFormProps['schema']>(() => ([{
    fieldName: 'select',
    label: 'select',
    type: 'select',
    mapStateToSchema(globalState) {
      return { data: globalState };
    },
  }]), []);

  useEffect(() => {
    setData([{
      label: '1',
      value: 1,
    }]);
  }, []);
  return <SchemaForm schema={schema} globalState={data} />;
}

test('global state is object', async () => {
  await act(async () => {
    return render(
      <TestComponent />,
    );
  });
});

test('global state is array', async () => {
  await act(async () => {
    return render(
      <TestComponent1 />,
    );
  });
});

