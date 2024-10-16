import * as React from 'react';
import { Icon, Provider as ThemeProvider } from '@draftbit/ui';
import { useFonts } from 'expo-font';
import * as Notifications from 'expo-notifications';
import * as SplashScreen from 'expo-splash-screen';
import {
  ActivityIndicator,
  AppState,
  Platform,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppNavigator from './AppNavigator';
import Fonts from './config/Fonts.js';
import { GlobalVariableProvider } from './config/GlobalVariableContext';
import cacheAssetsAsync from './config/cacheAssetsAsync';
import Draftbit from './themes/Draftbit';
import useIsOnline from './utils/useIsOnline';

SplashScreen.preventAutoHideAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const queryClient = new QueryClient();

const App = () => {
  const [areAssetsCached, setAreAssetsCached] = React.useState(false);

  const [fontsLoaded] = useFonts({
    ADLaMDisplay_400Regular: Fonts.ADLaMDisplay_400Regular,
    AbhayaLibre_400Regular: Fonts.AbhayaLibre_400Regular,
    AbrilFatface_400Regular: Fonts.AbrilFatface_400Regular,
    Aclonica_400Regular: Fonts.Aclonica_400Regular,
    Acme_400Regular: Fonts.Acme_400Regular,
    AkayaKanadaka_400Regular: Fonts.AkayaKanadaka_400Regular,
    AkayaTelivigala_400Regular: Fonts.AkayaTelivigala_400Regular,
    Cantarell_400Regular: Fonts.Cantarell_400Regular,
    Cantarell_700Bold: Fonts.Cantarell_700Bold,
    Inter_400Regular: Fonts.Inter_400Regular,
    Inter_500Medium: Fonts.Inter_500Medium,
    Inter_300Light: Fonts.Inter_300Light,
    Inter_600SemiBold: Fonts.Inter_600SemiBold,
    Inter_700Bold: Fonts.Inter_700Bold,
    Merriweather_700Bold: Fonts.Merriweather_700Bold,
    Montserrat_400Regular: Fonts.Montserrat_400Regular,
    Montserrat_600SemiBold: Fonts.Montserrat_600SemiBold,
    OpenSans_400Regular: Fonts.OpenSans_400Regular,
    OpenSans_600SemiBold: Fonts.OpenSans_600SemiBold,
    OpenSans_700Bold: Fonts.OpenSans_700Bold,
    OpenSans_500Medium: Fonts.OpenSans_500Medium,
    Poppins_400Regular: Fonts.Poppins_400Regular,
    Poppins_500Medium: Fonts.Poppins_500Medium,
    Poppins_700Bold: Fonts.Poppins_700Bold,
    Rubik_400Regular: Fonts.Rubik_400Regular,
    Rubik_700Bold: Fonts.Rubik_700Bold,
  });

  React.useEffect(() => {
    async function prepare() {
      try {
        await cacheAssetsAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setAreAssetsCached(true);
      }
    }

    prepare();
  }, []);

  const isOnline = useIsOnline();

  const isReady = areAssetsCached && fontsLoaded;
  const onLayoutRootView = React.useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      onLayout={onLayoutRootView}
    >
      <GlobalVariableProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider
            themes={[Draftbit]}
            breakpoints={{}}
            initialThemeName={'Draftbit'}
          >
            {!isOnline ? (
              <View
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  display: 'flex',
                  backgroundColor: 'grey',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  paddingHorizontal: 12,
                }}
              >
                <Icon
                  name="MaterialCommunityIcons/cloud-off-outline"
                  size={80}
                  color="white"
                />
                <Text style={{ fontSize: 20, marginTop: 20, color: 'white' }}>
                  Your device has lost connection to the internet. This app may
                  not function as expected until you reconnect.
                </Text>
              </View>
            ) : null}

            <AppNavigator />
          </ThemeProvider>
        </QueryClientProvider>
      </GlobalVariableProvider>
    </SafeAreaProvider>
  );
};

export default App;
