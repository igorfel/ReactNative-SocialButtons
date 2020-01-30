import React from 'react';
import { Text } from 'react-native';

import { Container, LogoContainer, LoginPanel, SignWithGoogleButton, SignInText, Icon } from './styles';

export default function LoginPage() {
  return (
    <Container>
      <LogoContainer>
        <Text style={{ color: "#fff" }}>
          Hello Woooorld!
        </Text>
      </LogoContainer>
      
      {/* <LoginPanel>

      </LoginPanel> */}
      <SignWithGoogleButton onPress={() => {}}>
        <Icon></Icon>
        <SignInText>ENTRAR COM O GOOGLE</SignInText>
      </SignWithGoogleButton>
    </Container>
  );
}
