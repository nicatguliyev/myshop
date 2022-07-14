import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

//https://img.favpng.com/22/14/6/bus-vector-graphics-clip-art-image-photograph-png-favpng-Y68pmS8HhxXNBsCjiZdp9b66A.jpg
const SwipeItem = ({ color, text, image }) => {

    return (
        <View style={[styles.container, { backgroundColor: color }]}>
                <View style={{ width: "45%" }}>
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 22 }}>{text}</Text>
                    <View style={styles.btnView}>
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 13 }}>HAMISINA BAX</Text>
                    </View>
                </View>
                <View>
                    <Image  source={{uri: image }}
                   style = {{width: 150, height: 100, backgroundColor: "transparent"}}/>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 200,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center"
    },
    btnView: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 8,
        padding: 10,
        width: 150,
        marginTop: 20
    }
})

export default SwipeItem;


//https://www.google.com/search?q=bus+image+with+abstract+background&rlz=1C1BNSD_enAZ985AZ985&sxsrf=ALiCzsYp8IhVNSeeBTDwrlZrMVVD6Vg3ww:1656580379788&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiHxtDo6tT4AhUZ8rsIHR_vC-QQ_AUoAXoECAEQAw&biw=1366&bih=657&dpr=1#imgrc=MQ5UDnOnKho9vM
//