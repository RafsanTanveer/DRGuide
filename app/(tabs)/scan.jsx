import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { height, width } from '../../utility/screenDimensions'
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios'
import EyeLoader from '../../utility/EyeLoader'

const cloudinaryCloudName = "dfud546qz";


const scan = () => {

  const [leftPhotoUrl, setLeftPhotoUrl] = useState('');
  const [rightPhotoUrl, setRightPhotoUrl] = useState('');

  const [loading, setLoading] = useState();

  const rotation = ['0deg', '45deg', '90deg', '135deg', '225deg', '270deg', '315deg', '360deg']

  const [degree, setdegree] = useState('0deg');

  const [leftEXse, setleftEXse] = useState("");
  const [leftHEse, setleftHEse] = useState("");
  const [leftMAse, setleftMAse] = useState("");
  const [leftSEse, setleftSEse] = useState("");

  const [rightEXse, setrightEXse] = useState("");
  const [rightHEse, setrightHEse] = useState("");
  const [rightMAse, setrightMAse] = useState("");
  const [rightSEse, setrightSEse] = useState("");

  const [URL, setURL] = useState("");

  const [MAP, setMap] = useState({
    name: "my-map",
    areas: [],
  });


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
      handleOnChangeFile(leftPhotoUrl, 'left')
    }

    if (eye === 'right') {
      handleOnChangeFile(rightPhotoUrl, 'right')
    }
  }


  const selectImage = async (useLibrary, eye) => {
    let result;
    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
      base64: true


    };

    if (useLibrary) {
      result = await ImagePicker.launchImageLibraryAsync(options);
    } else {
      await ImagePicker.requestCameraPermissionsAsync();
      result = await ImagePicker.launchCameraAsync(options);
    }

    // Save image if not cancelled
    if (!result.canceled) {

      // const { uri, base64 } = result
      // uploadImage(uri, base64)

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


  const getMapJson = async (url, eye) => {

    console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   ' + url);

    // setleftEXse("");
    // setleftHEse("");
    // setleftMAse("");
    // setleftSEse("");

    // setrightEXse("");
    // setrightHEse("");
    // setrightMAse("");
    // setrightSEse("");


    setMap({
      ...MAP,
      areas: [],
    });

    setLoading(true)

    rotation.map((deg) => {
      console.log(deg);

      setdegree(deg)
    })

    try {
      const res = await axios.post(
        "https://razibnevronus.pythonanywhere.com/api/annotation/v1/",
        {
          url,
        }
      ).then((response) => {
        const { EX, HE, MA, SE } = response.data.annotation;

        if (eye === 'left') {

          console.log(response.data.severity.EX.toString().slice(0, 8));

          setleftEXse(response.data.severity.EX.toString().slice(0, 8));
          setleftHEse(response.data.severity.HE.toString().slice(0, 8));
          setleftMAse(response.data.severity.MA.toString().slice(0, 8));
          setleftSEse(response.data.severity.SE.toString().slice(0, 8));
        }

        if (eye === 'right') {

          setrightEXse(response.data.severity.EX.toString().slice(0, 8));
          setrightHEse(response.data.severity.HE.toString().slice(0, 8));
          setrightMAse(response.data.severity.MA.toString().slice(0, 8));
          setrightSEse(response.data.severity.SE.toString().slice(0, 8));
        }



      }
      ).catch((err) => console.log(err)
      );




    } catch (error) {
      console.log(error);

    }
    setLoading(false)


  };


  const handleOnChangeFile = async (imageObject, eye) => {




    const imgHeight = imageObject.height
    const imgWidth = imageObject.width


    const { uri, base64 } = imageObject
    console.log('uri-------------------------  ' + uri);


    // console.log('base64----------------------'+base64);

    const uriArr = uri.split('.');
    const fileType = uriArr[uriArr.length - 1]
    const file = `data:${fileType};base64,${base64}`


    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "xtfvjyds");
    // setLoading(true);

    const api = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const response = await api.json();
    console.log(response.url)

    const cloudinaryURL = `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/w_${imgWidth},h_${imgHeight},c_fill,q_auto,f_auto/${response.public_id}`;

    console.log(response.public_id);


    setURL(cloudinaryURL);
    await getMapJson(cloudinaryURL, eye);
    // setLoading(false);
  };


  return (
    <View style={{ flexDirection: 'column', flex: 1 }} >
      <View style={{ flex: 1.3, flexDirection: 'row', margin: height * .01 }}>
        <View style={{ flex: 1, }} >
          {
            leftPhotoUrl === '' ?
              <TouchableOpacity
                onPress={() => selectImage(true, 'left')}
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
                <Text style={{ alignSelf: 'center', margin: 5, fontWeight: '600', fontSize: height * .018, textAlign: 'center' }} >Scan or Browse Eye Image</Text>



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
                onPress={() => selectImage(true, 'right')}
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
                <Text style={{ alignSelf: 'center', margin: 5, fontWeight: '600', fontSize: height * .018, textAlign: 'center' }} >Scan or Browse Eye Image</Text>

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

      {
        <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: height * .01, marginVertical: height * .03 }}>
          {/* left eye*/}
          <View style={{  flex: 1, margin: height * .01, height: height * .2, justifyContent: 'center' }} >
            <TouchableOpacity onPress={() => eyeScan('left')}
              style={{ backgroundColor: 'black', borderRadius: height * .015, }} >
              <Text style={{ fontSize: height * .025, fontWeight: '600', padding: 10, textAlign: 'center', color: 'white' }} >Scan</Text>
            </TouchableOpacity>

            <View style={{ margin: 5 }} >
              {
                loading ?
                  <EyeLoader /> :
                <Image style={{ height: height * .2, width: height * .2, transform: [{ rotate: degree }] }} source={require('../../assets/images/eye-shape.png')} />
              }
            </View>

          </View>
          {/* right eye*/}
          <View style={{ borderRadius: height * .7, flex: 1, margin: height * .01, height: height * .2, justifyContent: 'center' }} >
            <TouchableOpacity onPress={() => eyeScan('right')}
              style={{ backgroundColor: 'black', borderRadius: height * .015, }} >
              <Text style={{ fontSize: height * .025, fontWeight: '600', padding: 10, textAlign: 'center', color: 'white' }} >Scan</Text>
            </TouchableOpacity>
            <Image style={{ height: height * .2, width: height * .2 }} source={require('../../assets/images/eye-shape.png')} />

          </View>
        </View>
      }

      <View style={{ flex: 1.8, flexDirection: 'row', margin: height * .02, }}>
        <View style={{ flex: 1, backgroundColor: '#00808005', margin: height * .015, }} >
          <Text style={{ fontSize: height * .02, fontWeight: '700' }} >Result : </Text>
          <View style={{ flexDirection: 'column' }} >
            <Text style={{ margin: height * .009, fontSize: height * .02, fontWeight: '500' }} >Hard Exudates :</Text>
            {leftEXse && <Text style={{ marginLeft: height * .02, fontSize: height * .018, fontWeight: '400' }} >{leftEXse}</Text>}
          </View>
          <View style={{ flexDirection: 'column' }} >
            <Text style={{ margin: height * .009, fontSize: height * .02, fontWeight: '500' }} >Haemorrhages :</Text>
            {leftHEse && <Text style={{ marginLeft: height * .02, fontSize: height * .018, fontWeight: '400' }} >{leftHEse}</Text>}
          </View>
          <View style={{ flexDirection: 'column' }} >
            <Text style={{ margin: height * .009, fontSize: height * .02, fontWeight: '500' }} >Microaneurysms :</Text>
            {leftMAse && <Text style={{ marginLeft: height * .02, fontSize: height * .018, fontWeight: '400' }} >{leftMAse}</Text>}
          </View>
          <View style={{ flexDirection: 'column' }} >
            <Text style={{ margin: height * .009, fontSize: height * .02, fontWeight: '500' }} >Soft Exudates :</Text>
            {leftSEse && <Text style={{ marginLeft: height * .02, fontSize: height * .018, fontWeight: '400' }} >{leftSEse}</Text>}
          </View>
        </View>

        <View style={{ flex: 1, backgroundColor: '#00808005', margin: height * .015, }} >
          <Text style={{ fontSize: height * .02, fontWeight: '700' }} >Result : </Text>
          <View style={{ flexDirection: 'column' }} >
            <Text style={{ margin: height * .009, fontSize: height * .02, fontWeight: '500' }} >Hard Exudates :</Text>
            {rightEXse && <Text style={{ marginLeft: height * .02, fontSize: height * .018, fontWeight: '400' }} >{rightEXse}</Text>}
          </View>
          <View style={{ flexDirection: 'column' }} >
            <Text style={{ margin: height * .009, fontSize: height * .02, fontWeight: '500' }} >Haemorrhages :</Text>
            {rightHEse && <Text style={{ marginLeft: height * .02, fontSize: height * .018, fontWeight: '400' }} >{rightHEse}</Text>}
          </View>
          <View style={{ flexDirection: 'column' }} >
            <Text style={{ margin: height * .009, fontSize: height * .02, fontWeight: '500' }} >Microaneurysms :</Text>
            {rightMAse && <Text style={{ marginLeft: height * .02, fontSize: height * .018, fontWeight: '400' }} >{rightMAse}</Text>}
          </View>
          <View style={{ flexDirection: 'column' }} >
            <Text style={{ margin: height * .009, fontSize: height * .02, fontWeight: '500' }} >Soft Exudates :</Text>
            {rightSEse && <Text style={{ marginLeft: height * .02, fontSize: height * .018, fontWeight: '400' }} >{rightSEse}</Text>}
          </View>
        </View>
      </View>

    </View>
  )
}

export default scan