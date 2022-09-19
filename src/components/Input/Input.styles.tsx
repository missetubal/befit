import styled from 'styled-components/native';
import colors from '../../styles/colors';
import {GeneralStyleProps} from '../../types/general.types';

export const View = styled.View<GeneralStyleProps>`
  flex-direction: row;
  background-color: #dcdcdc;
  border: 1px solid ${colors.border};
  align-items: center;
  padding: 15px;
  border-radius: 8px;
  margin: ${props => props.margin || '8px 0px'};
`;

export const InputComponent = styled.TextInput`
  padding: 0 15px;
`;

export const RightIcon = styled.TouchableOpacity`
  position: absolute;
  right: 25px;
`;
