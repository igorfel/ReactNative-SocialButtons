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