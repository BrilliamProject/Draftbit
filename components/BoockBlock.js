import React from 'react';
import { Button, NumberInput, withTheme } from '@draftbit/ui';
import { View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const BoockBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [numberInputValue, setNumberInputValue] = React.useState('');

  return (
    <View>
      <NumberInput
        changeTextDelay={500}
        onChangeText={newNumberInputValue => {
          const numberInputValue = newNumberInputValue;
          try {
            setNumberInputValue(newNumberInputValue);
          } catch (err) {
            console.error(err);
          }
        }}
        placeholder={'Enter a number...'}
        webShowOutline={true}
        {...GlobalStyles.NumberInputStyles(theme)['Number Input'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.NumberInputStyles(theme)['Number Input'].style,
          dimensions.width
        )}
        value={numberInputValue}
      />
      <Button
        iconPosition={'left'}
        title={'Get Started'}
        {...GlobalStyles.ButtonStyles(theme)['Button'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.ButtonStyles(theme)['Button'].style,
          dimensions.width
        )}
      />
    </View>
  );
};

export default withTheme(BoockBlock);
