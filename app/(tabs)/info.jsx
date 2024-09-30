import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { height, width } from '../../utility/screenDimensions'
import { Images } from '../../utility/Images'
import Card from '../../components/card'

const info = () => {
  return (
    <ScrollView style={{ padding: height * .02,  }}>


      <Card title1="Generl Info" img1="generalinfo" title2="Diabetes Type" img2="diabatestype" link1={'/infoScreens/generalInfo'} link2={'/infoScreens/diabetesType'} isSecondTileVisible={true}  />
      <Card title1="Diabetes Complicatins" img1="diabetescomplication" title2="Diabetes Management" img2="diabetesmanagement" link1={'/infoScreens/diabetesComplecation'} link2={'/infoScreens/diabetesMgt'}  isSecondTileVisible={true} />
      <Card title1="Diabetes Retinopathy" img1="retinopathy" title2="Guidelines" img2="guidelines" link1={'/infoScreens/diabetesRetinopathy'} link2={'/infoScreens/reference'} isSecondTileVisible={true} />
      <Card title1="Practical" img1="practical" title2="Reference" img2="reference" link1={'/infoScreens/practical'} link2={'/infoScreens/diabetesType'} isSecondTileVisible={true} />
      <Card title1="Review" img1="review" title2="" img2="" link1={'/infoScreens/review'} link2={'/infoScreens/diabetesType'} isSecondTileVisible={false} />


    </ScrollView>
  )
}

export default info

// infoScreens / generalInfo" options=
// infoScreens / diabetesType" options
// infoScreens / diabetesComplecation"
// infoScreens / diabetesRetinopathy"
// infoScreens / guidelines" options={
// infoScreens / practical" options={{
// infoScreens / reference" options={{
// infoScreens / review" options={{ he