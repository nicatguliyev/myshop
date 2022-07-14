import React from "react"; 
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";


const MainCategoryItem = ({item, index, data}) => {

   return (
    <TouchableOpacity onPress={() => {console.log("Salam")}}>
    <View style={[styles.parentView, {marginLeft: index == 0 ? 16: 0, marginRight: index == data.length -1 ? 16 : 0}]}>
        <Image 
         source={{uri: item.image}}
         style = {styles.image}
        />
        <Text style={styles.txt}>{item.name}</Text>
    </View>
    </TouchableOpacity>
   )

}

const styles = StyleSheet.create({
    parentView: {
        alignItems: "center",
        justifyContent: "center",
    }, 
    image: {
        height: 60,
        width: 60,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "grey"
    },
    txt: {
        color: "black",
        fontSize: 12,
        marginTop: 5
    }
})


export default MainCategoryItem;