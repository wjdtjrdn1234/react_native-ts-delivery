import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  StyleProp,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ViewStyle,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const DismissKeyboardView = ({children, ...props}) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAwareScrollView {...props} style={props.style}>
      {children}
    </KeyboardAwareScrollView>
  </TouchableWithoutFeedback>
);

export default DismissKeyboardView;
