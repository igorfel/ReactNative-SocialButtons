import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'react-native';
import { background1, background2 } from '../../styles/global/colors'

export const Container = styled(LinearGradient).attrs({
  colors: [background1, background2],
  start: { x: 0.0, y: 0.25 },
  end: { x: 0.5, y: 1.0 }
})`
  flex: 1;
  padding-top: ${StatusBar.currentHeight || 10}px;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.View`
  height: 100px;
`

export const LoginPanel = styled.View`
  width: 80%;
  height: 40%;
  max-width: 500px;
  max-height: 400px;
  background: #ddd;
  border-radius: 15px;
  elevation: 20;
`

export const SignWithGoogleButton = styled.TouchableOpacity`
  background: white;
  color: #444;
  height: 50px;
  max-width: 280px;
  border-radius: 5px;
  box-shadow: 1px 1px 1px grey;
  flex-direction: row;
  align-items: center;
`

export const Icon = styled.Image.attrs({
  source: require('../../../assets/g.png')
})`
  width: 36px;
  height: 36px;
  margin-right: 30px;
  margin-left: 15px;
`

export const SignInText = styled.Text`
  width: 80%;
  font-size: 14px;
  align-self: center;
  color: #777;
  font-weight: bold;
`