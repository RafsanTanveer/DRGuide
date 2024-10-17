import { View, Text, TextInput, TouchableOpacity, Platform,StyleSheet } from 'react-native'
import React from 'react'
import {height,width} from '../../utility/screenDimensions'

const registerModal = ({ toggleModal }) => {

    const closeModal = () => {
        toggleModal(false)
    }

  return (
      <View style={{
          height: Platform.OS === 'ios' ? height * .55 : height * .65,
          width: width * .9,
          backgroundColor: 'white',
          alignContent: 'center',
          marginTop: height * .03,
          alignSelf: 'center',
          borderRadius: height * .02,
          padding: height * .03,
          borderColor: 'blue',
          borderWidth: StyleSheet.hairlineWidth

      }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
              <Text style={{ fontSize: height * .03, fontWeight: '700' }} >Register</Text>

          </View>
          <View style={{ marginVertical: height * .02, flexDirection: 'row', alignItems: 'center' }} >


          </View>


          <View style={{}} >
              <TextInput placeholder='Name'
                  style={{
                      padding: height * .009,
                      borderWidth: StyleSheet.hairlineWidth,
                      borderColor: 'grey',
                      borderRadius: height * .015,
                      marginTop: height * .02
                  }} >

              </TextInput>
              <TextInput placeholder='Email'
                  style={{
                      padding: height * .009,
                      borderWidth: StyleSheet.hairlineWidth,
                      borderColor: 'grey',
                      borderRadius: height * .015,
                      marginTop: height * .02
                  }} >

              </TextInput>
              <TextInput placeholder='Mobile'
                  style={{
                      padding: height * .009,
                      borderWidth: StyleSheet.hairlineWidth,
                      borderColor: 'grey',
                      borderRadius: height * .015,
                      marginTop: height * .02
                  }} >

              </TextInput>
              <TextInput placeholder='Password'
                  style={{
                      padding: height * .009,
                      borderWidth: StyleSheet.hairlineWidth,
                      borderColor: 'grey',
                      borderRadius: height * .015,
                      marginTop: height * .02
                  }} >

              </TextInput>
              <TextInput placeholder='Confirm Password'
                  style={{
                      padding: height * .009,
                      borderWidth: StyleSheet.hairlineWidth,
                      borderColor: 'grey',
                      borderRadius: height * .015,
                      marginTop: height * .02
                  }} >

              </TextInput>


          </View>


          <View style={{ flex: 1, flexDirection: 'row', marginTop: height * .035 }} >
              <TouchableOpacity style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 5,
                  paddingHorizontal: 5,
                  borderRadius: height * .015,
                  elevation: 3,
                  backgroundColor: 'black',
                  height: height * .05,
                  margin: height * .02

              }} >
                  <Text style={{ color: 'white', fontWeight: '600' }} >Submit</Text>

              </TouchableOpacity>

              <TouchableOpacity

                  onPress={() => closeModal()}

                  style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 5,
                  paddingHorizontal: 5,
                  borderRadius: height * .015,
                  elevation: 3,
                  backgroundColor: 'black',
                  height: height * .05,
                  margin:height*.02

              }} >
                  <Text style={{ color: 'white', fontWeight: '600' }} >Cancel</Text>

              </TouchableOpacity>

          </View>


      </View>
  )
}

export default registerModal