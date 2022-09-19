import styled from 'styled-components/native';
import {GeneralStyleProps} from '../../types/general.types';

export const Text = styled.Text<GeneralStyleProps>`
  font-size: ${props => props.fontSize || 16}px;
  font-weight: ${props => props.fontWeight || 400};
  text-align: center;
  line-height: Number(font-size * 1.5) px;
`;

export const HeaderView = styled.View`
  justify-content: center;
  text-align: center;
  margin: 30px auto 40px auto;
`;

export const InputsView = styled.View`
  margin: auto;
  width: 88%;
`;

export const CheckBoxView = styled.View`
  flex-direction: row;
`;
