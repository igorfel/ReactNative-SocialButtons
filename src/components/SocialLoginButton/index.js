import React, { useState } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types'
import { Button, ButtonContent, ButtonTextContainer, ButtonText, Icon } from './styles';

export default function SocialLoginButton({ title, facebook, google, onPress, callback, disabled }) {
  const [buttonAnimation] = useState(new Animated.Value(0)) 
  const [buttonActive, setButtonActive] = useState(false)
  const [triggerCallback, setTrigger] = useState(false)

  function triggerSignInButton () {
    const toValue = buttonActive ? 0 : 1

    if(!disabled) {
      setButtonActive(!buttonActive)
      Animated.timing(
        buttonAnimation,
        {
          toValue,
          duration: 500,
        }
      ).start()
      buttonAnimation.addListener(animationEnded)
      onPress()
    }
  }

  function animationEnded(anim) {
    if(anim.value === 1 && !triggerCallback) {
      callback && callback()
      setTrigger(true)
    }
  }

  const animatedStyles = {
    shrinkContainer: {
      width: buttonAnimation.interpolate({
        inputRange: [0.7, 1],
        outputRange: ['80%', '0%']
      }),
      opacity: buttonAnimation.interpolate({
        inputRange: [0, 0.7],
        outputRange: [1, 0],
      }),
      marginLeft: buttonAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [15, 0]
      })
    },
    smoothRadius: {
      borderRadius: buttonAnimation.interpolate({
        inputRange: [0.7, 1],
        outputRange: [5, 50]
      })
    },
    removeMargin: {
      marginLeft: buttonAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [15, facebook ? 12 : 8]
      }),
      marginRight: buttonAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [15, facebook ? 12 : 8]
      })
    }
  }

  return (
    <Button onPress={disabled ? null : triggerSignInButton}>
      <ButtonContent facebook={facebook} google={google} style={animatedStyles.smoothRadius}>
        <Icon facebook={facebook} google={google} style={animatedStyles.removeMargin} />
        <ButtonTextContainer style={animatedStyles.shrinkContainer}>
          <ButtonText facebook={facebook} google={google}>{title}</ButtonText>
        </ButtonTextContainer>
      </ButtonContent>
    </Button>
  );
}

SocialLoginButton.propTypes = {
  title: PropTypes.string.isRequired,
  facebook: PropTypes.bool,
  google: PropTypes.bool,
  callback: PropTypes.func,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
}

SocialLoginButton.PropTypes = {
  facebook: null,
  google: true,
  callback: null,
  onPress: null,
  disabled: false,
}