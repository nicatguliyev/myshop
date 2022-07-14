import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Dimensions, FlatList, Image } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Swiper from "react-native-swiper";
import SwipeItem from "../components/SwipeItem";
import axios from "axios";
import MainCategoryItem from "../components/MainCategoryItem";
import ProductItem from "../components/ProductItem";

const SCREEN_WIDTH = Dimensions.get('window').width;


const getCategories = async () => 
{    const response = await axios.get('http://2cdc-93-88-93-8.ngrok.io/cats?_embed=sub_cats');
    return response.data;
}

const getProducts = async () => {
    const response = await axios.get('http://2cdc-93-88-93-8.ngrok.io/Products');
    return response.data;
}

const HomeScreen =  () => {

    const [data, setData] = useState(null);
    const [productData, setProductdata] = useState(null);

    useEffect(() => {
        getCategories().then((response) => setData(response)).catch((error) => console.log("error bas verdi"));
        getProducts().then((response) => setProductdata(response)).catch((error) => console.log("Product Error"));
    }, [])
    

    return (
        <View>
            <View style={styles.headerView}>
                <Text style={styles.headerTxt}>MYSHOP</Text>
            </View>

            <View style={styles.searchView}>
                <View style={styles.searchBoxView}>
                    <FontAwesome
                        name="search"
                        size={20}
                        color="#757574" />

                    <TextInput
                        style={{ width: "80%", paddingBottom: 9 }}
                        fontSize={17}
                        color="#757574"
                        selectionColor="#757574"
                        placeholder="Əşya və ya xidmət axtar"
                        placeholderTextColor="#b3b5b4" />
                </View>

                <TouchableOpacity style={styles.filterButton}>
                    <SimpleLineIcons
                        name="equalizer"
                        size={18}
                        color="blue" />
                </TouchableOpacity>
            </View>
            <ScrollView stickyHeaderIndices={[1]}>

                <View style={{ height: 200, backgroundColor: "green" }}>

                    <Swiper showsButtons={false}
                        height={200}
                        width={SCREEN_WIDTH}
                        showsPagination={true}
                        loop={true}
                        autoplay={true}
                        dot={<View style={styles.dotView} />}
                        activeDot={
                            <View style={styles.activeDot} />}>

                        <SwipeItem color="#f6c4a3" text="Avtomobillər və xüsusi texnikalar" image="https://cdn.dribbble.com/users/1787323/screenshots/14677197/media/d699460e529ff1c026dce3931078ebcb.png?compress=1&resize=400x300" />
                        <SwipeItem color="#fed24d" text="Hər kəsə uyğun noutbuklar" image="https://media.istockphoto.com/vectors/levitation-laptop-mockup-vector-id1297051332?k=20&m=1297051332&s=612x612&w=0&h=DFvliaaf0ZhNf8PbqegKgJv4oSMP1u17BoAqEUKvY8w=" />
                        <SwipeItem color="#f15b40" text="Televizorlar və avadanlıqları" image="https://cdn1.vectorstock.com/i/1000x1000/77/30/flat-television-vector-19887730.jpg" />
                    </Swiper>
                </View>

                <View style={{ height: 100, backgroundColor: "white", paddingVertical:10}}>
                    <FlatList
                        horizontal={true}
                        data={data}
                        renderItem={({item, index}) => <MainCategoryItem item={item} index = {index} data = {data}/>}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent = {() => <View style = {{width: 16, backgroundColor: "white"}} />}
                    />
                </View>
                <View style={{ height: 10000, backgroundColor: "black" }}>
                    <FlatList
                    columnWrapperStyle = {{justifyContent: "space-between"}}
                       numColumns={2}
                       data = {productData}
                       renderItem= {({item, index}) => <ProductItem item={item} index = {index} data = {productData} /> }
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    headerView: {
        height: 40,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    headerTxt: {
        color: "#ffa321",
        fontWeight: "bold",
        fontSize: 20
    },
    searchView: {
        height: 60,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    searchBoxView: {
        width: "80%",
        backgroundColor: "#e6e6e6",
        height: 40,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    filterButton: {
        backgroundColor: "#e6e6e6",
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    },
    dotView: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 4,
        height: 4,
        borderRadius: 2,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    activeDot: {
        backgroundColor: '#fff',
        width: 6,
        height: 6,
        borderRadius: 3,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    }
})

export default HomeScreen;
