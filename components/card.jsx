import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native'
import React from 'react'
import { height, width } from '../utility/screenDimensions'
import { Images } from '../utility/Images'
import { Link } from 'expo-router';


const card = ({ title1, img1, title2, img2, isSecondTileVisible, link1, link2 }) => {




    return (
        <View style={{ flexDirection: 'row', margin: 10 }} >

            <TouchableOpacity  onPress={() => { }}
                 >

                <Link style={{ flexDirection: 'column', elevation: 10, backgroundColor: '#008080', height: width * .4, width: width * .4, alignItems: 'center', justifyContent: 'center', margin: 10, borderRadius: height * .005 }} href={`${link1}`}>
                        <Image style={{ height: width * .2, width: width * .2 }} source={Images[img1]} />
                        <Text style={{ color: 'white', padding: 5, fontSize: height * .02, fontWeight: '600', textAlign: 'center' }} >{title1}</Text>
                    </Link>

            </TouchableOpacity>


            {
                isSecondTileVisible &&
                <TouchableOpacity onPress={() => { }}
                    style={{ elevation: 10, backgroundColor: '#008080', height: width * .4, width: width * .4, alignItems: 'center', justifyContent: 'center', margin: 10, borderRadius: height * .005 }} >
                    <Image style={{ height: width * .15, width: width * .15 }} source={Images[img2]} />
                    <Text style={{ color: 'white', padding: 5, fontSize: height * .02, fontWeight: '600', textAlign: 'center' }} >{title2}</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

export default card