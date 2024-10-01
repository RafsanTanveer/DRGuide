import { Tabs } from 'expo-router';
import React from 'react';
import {height, width} from '../../utility/screenDimensions'
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs


      screenOptions={{
        tabBarStyle: { height: height*.1, elevation:10, },
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
        headerStyle: { backgroundColor: 'white' }


      }}>
      <Tabs.Screen

        name="index"
        options={{
          title: 'Dr Guide',
          tabBarLabelStyle: { fontSize: height * .0175, fontWeight: '700', paddingBottom: 10 },
          headerTitleStyle: { fontSize: height * .04, color:'black' },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="login"
        options={{

          title: 'Login',
          tabBarLabelStyle: { fontSize: height * .0175, fontWeight: '700', paddingBottom: 10 },
          headerTitleStyle: { fontSize: height * .04, color: 'black' },

          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon  name={focused ? 'log-in' : 'log-in-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          headerTitleStyle: { fontSize: height * .04, color: 'black' },
          title: 'Eye Scan',
          tabBarLabelStyle: { fontSize: height * .0175, fontWeight: '700', paddingBottom: 10 },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon style={{}} name={focused ? 'camera' : 'camera-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          headerTitleStyle: { fontSize: height * .04, color: 'black' },
          title: 'Infomation',
          tabBarLabelStyle: { fontSize: height * .0175, fontWeight: '700', paddingBottom: 10 },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'information' : 'information-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          headerTitleStyle: { fontSize: height * .04, color: 'black' },
          title: 'Settings',
          tabBarLabelStyle: { fontSize: height * .0175, fontWeight:'700', paddingBottom:10 },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon style={{}} name={focused ? 'settings' : 'settings-outline'} color={color} />
          ),
        }}
      />



    </Tabs>
  );
}
