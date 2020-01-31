import React from 'react';
import { Text, StatusBar } from 'react-native';
import SocialLoginButton from '../../components/SocialLoginButton'
import { Container, LogoContainer } from './styles';

export default function LoginPage() {

  return (
    <Container>
      <StatusBar barStyle="light-content"/>
      <LogoContainer>
        <Text style={{ color: "#fff" }}>
          Hello Woooorld!
        </Text>
      </LogoContainer>
      
      <SocialLoginButton facebook title="ENTRAR COM O FACEBOOK" />
      <SocialLoginButton title="ENTRAR COM O GOOGLE" />
    </Container>
  );
}
