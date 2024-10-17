import React from "react";
import Drawer from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const RootLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer screenOptions={{ headerShown: true }}>
                <Drawer.Screen name="(stacks)" />
            </Drawer>
        </GestureHandlerRootView>
    );
};

export default RootLayout;