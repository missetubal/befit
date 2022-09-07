import React from 'react';
import colors from '../../styles/colors';
import {InputComponent, RightIcon, View} from './Input.styles';
import {InputProps} from './Input.types';

export const Input: React.FC<InputProps> = props => {
  const {placehoder, leftIcon, rightIcon, type, onPress} = props;
  const handleOnPress = () => {
    if (onPress !== undefined && onPress !== null) {
      onPress();
    }
  };
  return (
    <View>
      {leftIcon}
      <InputComponent
        placeholder={placehoder}
        placeholderTextColor={colors.gray02}
        type={type ? type : 'text'}
      />

      {rightIcon && (
        <RightIcon onPress={() => handleOnPress()}>{rightIcon}</RightIcon>
      )}
    </View>
  );
};
