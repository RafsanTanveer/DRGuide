import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { height, width } from '../../utility/screenDimensions'
import * as ImagePicker from 'expo-image-picker';

const scan = () => {

  const [leftPhotoUrl, setLeftPhotoUrl] = useState('');
  const [rightPhotoUrl, setRightPhotoUrl] = useState('');


  const clearPhotoUrl = (eye) => {
    if (eye === 'left') {
      setLeftPhotoUrl('')
    }

    if (eye === 'right') {
      setRightPhotoUrl('')
    }
  }


  const eyeScan = (eye) => {
    console.log(eye);

    if (eye === 'left') {

    }

    if (eye === 'right') {
     
    }
  }


  const selectImage = async (useLibrary, eye) => {
    let result;
    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: .5,
      maxWidth: 100,
      maxHeight: 100,


    };

    if (useLibrary) {
      result = await ImagePicker.launchImageLibraryAsync(options);
    } else {
      await ImagePicker.requestCameraPermissionsAsync();
      result = await ImagePicker.launchCameraAsync(options);
    }

    // Save image if not cancelled
    if (!result.canceled) {

      if (eye === 'left') {
        setLeftPhotoUrl(result.assets[0])
      }

      if (eye === 'right') {
        setRightPhotoUrl(result.assets[0])
      }

      // console.log(photoUrl.uri);

      // setisShowPhotoModalVisible(true)


    }
  };


  return (
    <View style={{ flexDirection: 'column', flex: 1 }} >
      <View style={{ flex: 1, flexDirection: 'row', margin: height * .01 }}>
        <View style={{ flex: 1, }} >
          {
            leftPhotoUrl === '' ?
              <TouchableOpacity
                onPress={() => selectImage(false, 'left')}
                style={{
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  borderColor: 'grey',
                  borderRadius: height * .01,
                  flex: 1,
                  backgroundColor: '#F2F4F8',
                  margin: height * .01,
                  height: height * .2,
                  justifyContent: 'center'
                }} >
                <Text style={{ textAlign: 'center', fontSize: height * .02, fontWeight: '600', margin: 5 }} >Left Eye</Text>
                <Image style={{ height: height * .045, width: height * .045, alignSelf: 'center', margin: 5 }} source={require('../../assets/images/eye-scan.png')} />
                <Text style={{ alignSelf: 'center', margin: 5, fontWeight: '600', fontSize: height * .018, textAlign: 'center' }} >Scan or Upload Eye Image</Text>



              </TouchableOpacity>
              :
              <View style={{
                flex: 1, margin: height * .01,
                height: height * .2,
                justifyContent: 'center'
              }} >

                <Image style={{ height: height * .2, borderRadius: height * .015 }} source={{ height: height * .2, uri: leftPhotoUrl.uri }} />

              </View>
          }

          <TouchableOpacity
            onPress={() => clearPhotoUrl('left')}
            style={{ position: 'absolute', right: -5, top: -5 }} >
            <Image style={{ height: height * .035, width: height * .035, }} source={require('../../assets/images/close.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, }} >
          {
            rightPhotoUrl === '' ?
              <TouchableOpacity
                onPress={() => selectImage(false, 'right')}
                style={{
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  borderColor: 'grey',
                  borderRadius: height * .01,
                  flex: 1,
                  backgroundColor: '#F2F4F8',
                  margin: height * .01,
                  height: height * .2,
                  justifyContent: 'center'
                }} >
                <Text style={{ textAlign: 'center', fontSize: height * .02, fontWeight: '600', margin: 5 }} >Right Eye</Text>
                <Image style={{ height: height * .045, width: height * .045, alignSelf: 'center', margin: 5 }} source={require('../../assets/images/eye-scan.png')} />
                <Text style={{ alignSelf: 'center', margin: 5, fontWeight: '600', fontSize: height * .018, textAlign: 'center' }} >Scan or Upload Eye Image</Text>

              </TouchableOpacity>
              :
              <View style={{
                flex: 1, margin: height * .01,
                height: height * .2,
                justifyContent: 'center'
              }} >

                <Image style={{ height: height * .2, borderRadius: height * .015 }} source={{ height: height * .2, uri: rightPhotoUrl.uri }} />

              </View>
          }

          <TouchableOpacity
            onPress={() => clearPhotoUrl('right')}
            style={{ position: 'absolute', right: -5, top: -5 }} >
            <Image style={{ height: height * .035, width: height * .035, }} source={require('../../assets/images/close.png')} />
          </TouchableOpacity>

        </View>
      </View>

      <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: height * .01, marginVertical: height * .03 }}>
        {/* left eye*/}
        <View style={{ borderRadius: height * .7, flex: 1, margin: height * .01, height: height * .2, justifyContent: 'center' }} >
          <TouchableOpacity onPress={() => eyeScan('left')}
            style={{ backgroundColor: 'black', borderRadius: height * .015, }} >
            <Text style={{ fontSize: height * .025, fontWeight: '600', padding: 10, textAlign: 'center', color: 'white' }} >Scan</Text>
          </TouchableOpacity>
          <Image style={{ height: height * .2, width: height * .2 }} source={require('../../assets/images/eye-shape.png')} />

        </View>

        <View style={{ borderRadius: height * .7, flex: 1, margin: height * .01, height: height * .2, justifyContent: 'center' }} >
          <TouchableOpacity onPress={() => eyeScan('right')}
            style={{ backgroundColor: 'black', borderRadius: height * .015, }} >
            <Text style={{ fontSize: height * .025, fontWeight: '600', padding: 10, textAlign: 'center', color: 'white' }} >Scan</Text>
          </TouchableOpacity>
          <Image style={{ height: height * .2, width: height * .2 }} source={require('../../assets/images/eye-shape.png')} />

        </View>
      </View>

      <View style={{ flex: 1.3, flexDirection: 'row', margin: height * .01 }}>
        <View style={{ flex: 1, backgroundColor: '#00808005', margin: height * .01, height: height * .2, }} >
          <View style={{}} >

          </View>
        </View>

        <View style={{ flex: 1, backgroundColor: '#00808005', margin: height * .01, height: height * .2, justifyContent: 'center' }} >


        </View>
      </View>

    </View>
  )
}

export default scan