import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const View = styled.View`
  flex-direction: row;
  background-color: ${colors.border};
  border: 1px solid ${colors.border};
  align-items: center;
  padding: 15px;
`;

export const InputComponent = styled.TextInput`
  background-color: ${colors.border};
  padding: 0 15px;
`;

export const RightIcon = styled.TouchableOpacity`
  position: absolute;
  right: 25px;
`;
