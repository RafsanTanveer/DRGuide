import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { height, width } from '../../utility/screenDimensions'
import { Images } from '../../utility/Images'
import Card from '../../components/card'

const info = () => {
  return (
    <ScrollView style={{ padding: height * .02,  }}>


      <Card title1="Generl Info" img1="generalinfo" title2="Diabetes Type" img2="diabatestype" isSecondTileVisible={true} />
      <Card title1="Diabetes Complicatins" img1="diabetescomplication" title2="Diabetes Management" img2="diabetesmanagement" isSecondTileVisible={true} />
      <Card title1="Diabetes Retinopathy" img1="retinopathy" title2="Guidelines" img2="guidelines" isSecondTileVisible={true} />
      <Card title1="Practical" img1="practical" title2="Reference" img2="reference" isSecondTileVisible={true} />
      <Card title1="Review" img1="review" title2="" img2="" isSecondTileVisible={false} />


    </ScrollView>
  )
}

export default info