import React, { useEffect, useRef } from 'react';
import SchemaForm, { RefCurrent, SchemaFormProps } from '../../src';
import { render, screen, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

function TestComponent() {
  const formRef = useRef<RefCurrent>();

  const schema: SchemaFormProps['schema'] = [{
    fieldName: 'title',
    label: 'title',
    type: 'input',
  }];

  useEffect(() => {
    if (!formRef.current) return;
    formRef.current.forceRefresh();
  }, [formRef]);
  return <SchemaForm ref={formRef} schema={schema} />;
}

it('invoke ref forceRefresh', async () => {
  // todo: test other useful things
  await act(() => render(<TestComponent />));
  await waitFor(() => {
    expect(screen.getByText('title')).toBeInTheDocument();
  });
});
