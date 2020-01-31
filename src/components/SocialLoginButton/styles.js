import styled from 'styled-components/native';
import { Animated } from 'react-native';
const GoogleIcon = require('../../../assets/g.png')
const FacebookIcon = require('../../../assets/f.png')

export const Button = styled.TouchableOpacity`
  margin: 10px 0px 10px 0px;
`

export const ButtonContent = styled(Animated.View)`
  background: ${props => props.facebook ? '#3953a1' : 'white'};
  color: #444;
  height: 50px;
  max-width: 280px;
  box-shadow: 0.8px 0.8px 1px #00000033;
  flex-direction: row;
  align-items: center;
  elevation: 1;
`

export const Icon = styled(Animated.Image).attrs(props => ({
  source: props.facebook ? FacebookIcon : GoogleIcon
}))`
  width: ${({facebook}) => facebook ? 28 : 36}px;
  height: ${({facebook}) => facebook ? 28 : 36}px;
  margin-right: ${({facebook}) => facebook ? 26 : 15}px;
  margin-left: ${({facebook}) => facebook ? 26 : 15}px;
`

export const ButtonTextContainer = styled(Animated.View)`
  width: 80%;
  margin-left: 15px;
  align-content: center; 
`

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${props => props.facebook ? 'white' : '#777'};
`