import React from 'react';
import {
  Checkbox,
  Icon,
  ScreenContainer,
  SimpleStyleFlatList,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { StatusBar, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const AvailabilityScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [textInputValue, setTextInputValue] = React.useState('');
  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }

      const entry = StatusBar.pushStackEntry?.({ barStyle: 'dark-content' });
      return () => StatusBar.popStackEntry?.(entry);
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  return (
    <ScreenContainer hasSafeArea={false} scrollable={true}>
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderColor: palettes.App.TextPlaceholder,
              borderLeftWidth: 0.5,
              borderRadius: 8,
              borderRightWidth: 0.5,
              borderTopWidth: 0.5,
              flex: 1,
              flexDirection: 'row',
              height: 48,
              paddingLeft: 16,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text 2'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['Text 2'].style,
              dimensions.width
            )}
          >
            {'Check Availability'}
          </Text>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderColor: palettes.App.TextPlaceholder,
              borderLeftWidth: 0.5,
              borderRadius: 8,
              borderRightWidth: 0.5,
              borderTopWidth: 0.5,
              height: 48,
              justifyContent: 'center',
              marginLeft: 16,
              width: 48,
            },
            dimensions.width
          )}
        >
          <Touchable>
            <Icon
              size={24}
              color={theme.colors.text.medium}
              name={'Entypo/plus'}
            />
          </Touchable>
        </View>
      </View>
      </* Fetch component: no endpoint configured */>
        {(fetchData => (
          <SimpleStyleFlatList
            data={fetchData}
            horizontal={false}
            inverted={false}
            keyExtractor={(listData, index) =>
              listData?.id ??
              listData?.uuid ??
              index?.toString() ??
              JSON.stringify(listData)
            }
            keyboardShouldPersistTaps={'never'}
            listKey={'lrScrXgW'}
            nestedScrollEnabled={false}
            numColumns={1}
            onEndReachedThreshold={0.5}
            renderItem={({ item, index }) => {
              const listData = item;
              return (
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: palettes.App.TextPlaceholder,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingBottom: 16,
                      paddingTop: 16,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.text.medium,
                        fontFamily: 'Inter_400Regular',
                        fontSize: 15,
                      },
                      dimensions.width
                    )}
                  >
                    {listData?.name}
                  </Text>
                  <Checkbox
                    color={theme.colors.branding.secondary}
                    defaultValue={listData?.id}
                    size={30}
                    uncheckedColor={theme.colors.branding.secondary}
                  />
                </View>
              );
            }}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}
            style={StyleSheet.applyWidth(
              {
                flex: 1,
                marginTop: 16,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 16,
              },
              dimensions.width
            )}
          />
        ))()}
      </>
    </ScreenContainer>
  );
};

export default withTheme(AvailabilityScreen);
