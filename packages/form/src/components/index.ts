import InnerComps from './InnerComponents';

const InnerComponents = InnerComps;

export function registerComponent(component) {
  Object.assign(InnerComponents, { [component.name]: component });
}

export function registerComponents(components) {
  Object.assign(InnerComponents, components);
}

export default InnerComponents;
