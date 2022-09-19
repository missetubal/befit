import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {LargeButtonProps} from './LargeButton.types';

export const Container = styled(LinearGradient)`
  border-radius: 99px;
  box-shadow: 0px 10px 22px rgba(149, 173, 254, 0.3);
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  padding: 18px 129px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
