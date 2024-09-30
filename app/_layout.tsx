import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import {height} from '../utility/screenDimensions'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerTintColor: '#ffffff', headerStyle: { backgroundColor: '#008080' , } }} >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="infoScreens/generalInfo" options={{  headerShown: true, title: 'General Info', headerTitleStyle: { fontSize: height * .04, color: 'white' }, }} />
        <Stack.Screen name="infoScreens/diabetesType" options={{ headerShown: true, title: 'Diabetes Type', headerTitleStyle: { fontSize: height * .04, color: 'white' }, }} />
        <Stack.Screen name="infoScreens/diabetesComplecation" options={{ headerShown: true, title: 'Diabetes Complecation', headerTitleStyle: { fontSize: height * .04, color: 'white' }, }} />
        <Stack.Screen name="infoScreens/diabetesMgt" options={{ headerShown: true, title: 'Diabetes Management', headerTitleStyle: { fontSize: height * .04, color: 'white' }, }} />
        <Stack.Screen name="infoScreens/diabetesRetinopathy" options={{ headerShown: true, title: 'Diabetes Retinopathy', headerTitleStyle: { fontSize: height * .04, color: 'white' }, }} />
        <Stack.Screen name="infoScreens/guidelines" options={{ headerShown: true, title: 'Guidelines', headerTitleStyle: { fontSize: height * .04, color: 'white' }, }} />
        <Stack.Screen name="infoScreens/practical" options={{ headerShown: true, title: 'Practical', headerTitleStyle: { fontSize: height * .04, color: 'white' }, }} />
        <Stack.Screen name="infoScreens/reference" options={{ headerShown: true, title: 'Reference', headerTitleStyle: { fontSize: height * .04, color: 'white' }, }} />
        <Stack.Screen name="infoScreens/review" options={{ headerShown: true, title: 'Review', headerTitleStyle: { fontSize: height * .04, color: 'white' }, }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
