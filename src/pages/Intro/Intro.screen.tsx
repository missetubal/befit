import React from 'react';
import {Container} from './Intro.styles';
import {IntroScreenData} from './IntroScreenData';
import {Heading} from '../../styles/colors';
import {SafeAreaView, Text, View} from 'react-native';

export const Intro: React.FC = () => {
  return (
    <Container>
      <Text>{IntroScreenData[0].title}</Text>
      {IntroScreenData.map((item, index) => {
        <View key={index}>
          <Text>{item.id}</Text>
          <Text>{item.text}</Text>
        </View>;
      })}
    </Container>
  );
};
