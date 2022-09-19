import React from 'react';
import {When} from 'react-if';
import colors, {Heading} from '../../styles/colors';
import {Button, Container} from './LargeButton.styles';
import {LargeButtonProps} from './LargeButton.types';

const LargeButton: React.FC<LargeButtonProps> = props => {
  const {text, leftIcon, rightIcon, secondary, onPress} = props;

  return (
    <Container
      colors={!secondary ? ['#92a3fd', '#9dceff'] : ['#C58BF2', '#EEA4CE']}
      angle={274.42}
      porcentage={['0%', '125.45%']}>
      <Button onPress={onPress}>
        <When condition={!leftIcon && !rightIcon}>
          <Heading fontWeight={700} fontSize={16} color={colors.white}>
            {text}
          </Heading>
        </When>
        <When condition={!!rightIcon}>
          <Heading
            fontWeight={600}
            fontSize={16}
            color={colors.white}
            marginRight={5}>
            {text}
          </Heading>
          {rightIcon}
        </When>
        <When condition={!!leftIcon}>
          {leftIcon}
          <Heading
            fontWeight={600}
            fontSize={16}
            color={colors.white}
            marginLeft={5}>
            {text}
          </Heading>
        </When>
      </Button>
    </Container>
  );
};

export default LargeButton;
