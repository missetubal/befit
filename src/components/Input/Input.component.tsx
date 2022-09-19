import React, {useState} from 'react';
import colors from '../../styles/colors';
import {InputComponent, RightIcon, View} from './Input.styles';
import {InputProps} from './Input.types';

export const Input: React.FC<InputProps> = props => {
  const {
    placehoder,
    leftIcon,
    rightIcon,
    type,
    onPress,
    margin,
    iconRighPressed,
  } = props;
  const [iconPressed, setIconPressed] = useState(false);
  const handleOnPress = () => {
    setIconPressed(!iconPressed);
    if (onPress !== undefined && onPress !== null) {
      onPress();
    }
  };

  return (
    <View margin={margin}>
      {leftIcon}
      <InputComponent
        placeholder={placehoder}
        placeholderTextColor={colors.gray02}
        type={type ? type : 'text'}
      />

      {rightIcon && (
        <RightIcon onPress={() => handleOnPress()}>
          {iconPressed ? iconRighPressed : rightIcon}
        </RightIcon>
      )}
    </View>
  );
};
