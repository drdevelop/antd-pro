import React from 'react';
import SchemaForm from "../../src";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

function TestComponent() {
  const schema = [{
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
    type: 'select' as any,
    dependencies: ['versionType'],
    component: (form) => {
      const versionType = form.getFieldValue('versionType');
      return versionType === 2
        ? {}
        : null;
    },
    data: [{
      label: 'option1',
      value: 1,
    }, {
      label: 'option2',
      value: 2,
    }]
  }]
  return <SchemaForm schema={schema} />
}

test("linkage", async () => {
  const { container } = render(<TestComponent />);
  const radios = container.querySelectorAll('input');
  expect(screen.queryByText('dynamic label')).toBeNull();
  await userEvent.click(radios[1])
  expect(screen.getByText('dynamic label')).toBeInTheDocument();
});
