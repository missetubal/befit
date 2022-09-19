import {ReactNode} from 'react';
export interface InputProps {
  placehoder: string;
  leftIcon: ReactNode;
  rightIcon?: ReactNode;
  type?: string;
  onPress?: () => void;
  margin?: string;
  iconRighPressed?: ReactNode;
}
