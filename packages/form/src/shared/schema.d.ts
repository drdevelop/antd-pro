export interface LabelInValue {
  label: string;
  value: any;
}

export interface GroupRule {
  list: string[];
  render?: (formItemList: React.ReactNode, group: GroupRule, state?: any) => React.ReactNode;
  [key: string]: any;
}

export interface FieldProps<P = any> {
  id: string;
  className?: string;
  style?: React.CSSProperties;
  value: any;
  onChange: (value: any) => void;
  data?: LabelInValue[];
  elementSpecProps?: P;
}
