import MaskedView from '@react-native-community/masked-view';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LargeButton from '../../components/LargeButton/LargeButton.component';
import {Heading} from '../../styles/colors';
import GradientText from '../../styles/GradientText';
import {TitleView} from './Welcome.styles';

export const Welcome: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={{alignItems: 'center'}}>
      <TitleView>
        <GradientText
          colors={['#92a3fd', '#9dceff']}
          style={{fontWeight: '700', fontSize: 36, lineHeight: 54}}>
          Be
        </GradientText>
        <Heading fontWeight={700} fontSize={36} lineHeight={'54px'}>
          Fit
        </Heading>
      </TitleView>
      <Heading fontSize={18} fontWeight={400}>
        Everybody can train
      </Heading>
      <View style={{marginTop: '60%'}}>
        <LargeButton
          text={'Get Started'}
          onPress={() => navigation.navigate('Register' as never)}
        />
      </View>
    </View>
  );
};
