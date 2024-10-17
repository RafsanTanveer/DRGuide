import { ImageBackground, View, Text, StatusBar, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Modal } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { height, width } from '../utility/screenDimensions'
import Register from '../components/modals/registerModal'
import { AuthContext } from '../context/AuthContext'


const loginScreen = () => {

  const { isLogged, userLogin } = useContext(AuthContext);


  const [isRegisterVisible, setisRegisterVisible] = useState(false);

  const toggle = (visible) => {
    setisRegisterVisible(visible)
  }

  return (
    <>
      <StatusBar hidden />
      {/* <ImageBackground source={require('../assets/images/backgroundImage.png')} style={{
        flex: 1, resizeMode: 'cover',
        justifyContent: 'center', width: '100%', height: '100%'
      }}> */}

      <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>

        <View style={{ flex: 2, alignContent: 'center', alignItems: 'center', marginTop: height * .02, }} >
          {/* <View style={{ alignItems: 'center',  }} >
              <Text style={{ fontSize: height * .05, fontWeight: '700' }} >Diabetic </Text>
              <Text style={{ fontSize: height * .05, fontWeight: '700' }} >Retinopathy </Text>
            </View> */}
          <Image style={{ height: height * .25, width: width * .8, aspectRatio:10/8 }} source={require('../assets/images/loginimage.png')} />
          <View style={{}} >
            <Text style={{fontWeight:'700', fontSize:height*.04, margin:height*.015,textAlign:'center', justifyContent:'center' }} >Diabetic Retinopathy Guide</Text>
          </View>
          <View style={{ flex: 1, marginTop: height * .025 }} >
            <View style={{ margin: 5, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', width: width * .8, borderRadius: height * .015 }} >
              <TextInput placeholder='Email'
                style={{ paddingVertical: 5, paddingHorizontal: 10 }} >

              </TextInput>
            </View>

            <View style={{ margin: 5, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', width: width * .8, borderRadius: height * .015 }} >
              <TextInput placeholder='Password'
                style={{ paddingVertical: 5, paddingHorizontal: 10 }} >

              </TextInput>

            </View>
            <TouchableOpacity onPress={() => userLogin()}
              style={{ alignItems: 'center', justifyContent: 'center', elevation: 10, backgroundColor: 'red', height: height * .048, margin: 5, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', width: width * .8, borderRadius: height * .015 }} >
              <Text style={{ color: 'white', textAlign: 'center', fontWeight: '700', fontSize: height * .022 }} >Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }} >
              <Text style={{ fontStyle: 'italic', color: 'red', position: 'absolute', right: 0 }} >Forget Password?</Text>
            </TouchableOpacity>

          </View>

        </View>


        <View style={{ margin: 10, flexDirection: 'row' }} >

          <Text style={{ fontWeight: '700', fontSize: height * .017, padding: 5 }} >Don't have an account?</Text>
          <TouchableOpacity onPress={() => { toggle(true) }}
            style={{}} >
            <Text style={{ fontWeight: '700', fontSize: height * .017, padding: 5, color: 'blue' }} >Register</Text>
          </TouchableOpacity>
        </View>




      </SafeAreaView>

      {/* </ImageBackground> */}

      <Modal
        style={{}}
        animationType="slide"
        transparent={true}
        visible={isRegisterVisible}
        onRequestClose={() => toggle(true)}
      >
        <Register toggleModal={toggle} />
      </Modal>

    </>
  )
}

export default loginScreen