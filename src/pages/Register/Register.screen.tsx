import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CheckBoxView, HeaderView, InputsView, Text} from './Register.style';
import {Input} from '../../components/Input/Input.component';
import Profile from '../../assets/icons/Profile';
import Message from '../../assets/icons/Message';
import Call from '../../assets/icons/Call';
import Hide from '../../assets/icons/Hide';
import Show from '../../assets/icons/Show';
import colors from '../../styles/colors';
import {useState} from 'react';
import {CheckBox} from '@rneui/base';

const Register: React.FC = () => {
  const [checked, isChecked] = useState(false);
  return (
    <SafeAreaView>
      <HeaderView>
        <Text>Hey there,</Text>
        <Text fontSize={20} fontWeight={700}>
          Create an Account
        </Text>
      </HeaderView>
      <InputsView>
        <Input
          placehoder={'Full Name'}
          leftIcon={<Profile color={colors.gray01} />}
        />
        <Input
          placehoder={'Phone Number'}
          leftIcon={<Call color={colors.gray01} />}
        />
        <Input
          placehoder={'Email'}
          leftIcon={<Message color={colors.gray01} />}
        />
        <Input
          placehoder={'Password'}
          leftIcon={<Message color={colors.gray01} />}
          rightIcon={<Hide color={colors.gray01} />}
          iconRighPressed={<Show color={colors.gray01} />}
        />
        <CheckBoxView>
          {/* <CheckBox checiked={checked} onPress={() => isChecked(!checked)} /> */}
        </CheckBoxView>
      </InputsView>
    </SafeAreaView>
  );
};

export default Register;
