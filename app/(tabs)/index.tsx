import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { height, width } from '../../utility/screenDimensions'

const index = () => {
  return (
    <View>
      <ScrollView>
        <View style={{ padding: height * .02, alignItems: 'center', justifyContent: 'center' }} >
          <Image style={{ height: height * .25, width: width * .95 }} source={require('../../assets/images/first_home.png')} />
        </View>
        <View style={{ padding: height * .02, }} >
          <Text style={{ fontSize: height * .018, fontWeight: '500', textAlign: 'justify', color: '#008080' }} >This app is designed to detect Diabetic Retinopathy (DR) from Smartphone. The aim is to provide primary eye care service where standard equipment and qualified professionals are not accessible. It does not require internet connection to produce a diagnosis. This feature makes it possible to use DR Guide in places where internet connection is not stable or nonexistent.</Text>
        </View>
        <View style={{ padding: height * .02, alignItems: 'center', justifyContent: 'center' }} >
          <Image style={{ height: height * .25, width: width * .95 }} source={require('../../assets/images/2nd_home.png')} />
        </View>
        <View style={{ padding: height * .02, }} >
          <Text style={{ fontSize: height * .018, fontWeight: '500', textAlign: 'justify', color: '#008080' }} >DR Guide can diagnose DR from supplied images from phone’s gallery or from images captured by phone’s camera with accompanied optical gear. Images from phone’s camera can be diagnosed in two mode namely, 1.Standalone 2.Real-time Continuous. An Ophthalmologist or trained technician can use it as a Decision Support System (DSS) to help them take better decision. This app is trained on AI to detect DR with high accuracy. However, accurate prediction is not guaranteed all time. This app can only act as an Ophthalmologist’s guide. DR Guide is not accredited by any Government/ Non-Government Health service regulatory body of any country till now. The provider of this app is not liable for any diagnostic decision taken by the user.</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default index