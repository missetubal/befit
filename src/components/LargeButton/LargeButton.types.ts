import {ReactNode} from 'react';

export interface LargeButtonProps {
  text: string;
  onPress?: () => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  secondary?: boolean;
}
