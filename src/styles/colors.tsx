import styled from 'styled-components/native';
export default {
  primary: 'linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);',
  secondary: 'linear-gradient(274.42deg, #C58BF2 0%, #EEA4CE 124.45%);',
  black: '#1D1617',
  white: '#FFFFFF',
  gray01: '#7B6F72',
  gray02: '#ADA4A5',
  gray03: '#DDDADA',
  border: '#F7F8F8',
};

export const Heading = styled.Text`
  /* font-family: 'Poppins'; */
  font-size: ${props => props.fontSize}px;
  line-height: ${props => props.fontSize * 1.5};
  font-weight: ${props => props.fontWeight || 400};
  color: ${props => props.color || 'black'};
  margin-left: ${props => props.marginLeft}px;
  margin-right: ${props => props.marginRight}px;
`;
