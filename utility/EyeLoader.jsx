import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { height } from '../utility/screenDimensions'

const EyeLoader = () => {
    const animation = useRef(null);
    useEffect(() => {
        // You can control the ref programmatically, rather than using autoPlay
        // animation.current?.play();
    }, []);

    return (
        <View style={{
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            height: height * .2, width: height * .2,
        }}>
            <LottieView
                autoPlay
                ref={animation}
                style={{
                    width: 200,
                    height: 200,
                }}
                speed={1.25}
                source={require('../assets/animations/eyeloader.json')}
            />
            <Text style={{ fontSize: 15, fontWeight: '400' }} ></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: height * .2, width: height * .2,
    },
    buttonContainer: {
        paddingTop: 20,
    },
});

export default EyeLoader