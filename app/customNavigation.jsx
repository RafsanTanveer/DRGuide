import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useContext, useEffect, useState } from "react";

import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { height } from '../utility/screenDimensions'
import LoginScreen from '../screens/loginScreen'

import { AuthContext } from '../context/AuthContext'

const customNavigation = () => {


    const { isLogged } = useContext(AuthContext);

    return (

        true ?

            <Stack screenOptions={{ headerTintColor: 'black', headerStyle: { backgroundColor: 'white', } }} >
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="infoScreens/generalInfo" options={{ headerShown: true, title: 'General Info', headerTitleStyle: { fontSize: height * .04, color: 'white' }, }} />
                <Stack.Screen name="infoScreens/diabetesType" options={{ headerShown: true, title: 'Diabetes Type', headerTitleStyle: { fontSize: height * .04, color: 'black' }, }} />
                <Stack.Screen name="infoScreens/diabetesComplecation" options={{ headerShown: true, title: 'Diabetes Complecation', headerTitleStyle: { fontSize: height * .04, color: 'black' }, }} />
                <Stack.Screen name="infoScreens/diabetesMgt" options={{ headerShown: true, title: 'Diabetes Management', headerTitleStyle: { fontSize: height * .04, color: 'black' }, }} />
                <Stack.Screen name="infoScreens/diabetesRetinopathy" options={{ headerShown: true, title: 'Diabetes Retinopathy', headerTitleStyle: { fontSize: height * .04, color: 'black' }, }} />
                <Stack.Screen name="infoScreens/guidelines" options={{ headerShown: true, title: 'Guidelines', headerTitleStyle: { fontSize: height * .04, color: 'black' }, }} />
                <Stack.Screen name="infoScreens/practical" options={{ headerShown: true, title: 'Practical', headerTitleStyle: { fontSize: height * .04, color: 'black' }, }} />
                <Stack.Screen name="infoScreens/reference" options={{ headerShown: true, title: 'Reference', headerTitleStyle: { fontSize: height * .04, color: 'black' }, }} />
                <Stack.Screen name="infoScreens/review" options={{ headerShown: true, title: 'Review', headerTitleStyle: { fontSize: height * .04, color: 'black' }, }} />
                <Stack.Screen name="+not-found" />
            </Stack>
            :
            <LoginScreen />


    )
}

export default customNavigation