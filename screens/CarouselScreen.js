import React, { useState } from "react";
import { View, Image, Text, Dimensions } from 'react-native';
import Swiper from "react-native-swiper";

// const data = [
//     {
//       title: "Aenean leo",
//       body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
//       imgUrl: "https://picsum.photos/id/11/200/300",
//     },
//     {
//       title: "In turpis",
//       body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
//       imgUrl: "https://picsum.photos/id/10/200/300",
//     },
//     {
//       title: "Lorem Ipsum",
//       body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
//       imgUrl: "https://picsum.photos/id/12/200/300",
//     },
//   ];


// const CarouselCardItem = ({item, index}) => {

//     return (
//         <View style = {{width: "100%", height: 200}} key = {index}>

//             <Image
//               source={{uri: item.imgUrl}}
//               style = {{width: "100%", height: "100%"}}
//             />

//         </View>
//     )
// }

const CarouselScreen = () => {

    //  const isCarousel = useState(null);
    const SCREEN_WIDTH = Dimensions.get('window').width;

    return (
        //    <View>
        //      <Carousel  layout="stack"
        //       layoutCardOffset={9}
        //       ref = {isCarousel}
        //       data = {data}
        //       renderItem={CarouselCardItem}
        //       sliderWidth={200}
        //       itemWidth={200}
        //       inactiveSlideShift={0}
        //       useScrollView={true}
        //       loop = {true}
        //       autoplay = {true}
        //       enableMomentum = {false}
        //       lockScrollWhileSnapping = {true}
        //       />
        //    </View>

        <View style = {{width: SCREEN_WIDTH, height: 200}}>
            <Swiper showsButtons={false} height={200} width={SCREEN_WIDTH} showsPagination={true} loop={true} autoplay={true}>

                <View style={{ height: 200, width: SCREEN_WIDTH, backgroundColor: "green" }}>
                    <Text>Salam</Text>
                </View>

                <View style={{ height: 200, width: SCREEN_WIDTH, backgroundColor: "yellow" }}>
                    <Text>Salam</Text>
                </View>

                <View style={{ height: 200, width: SCREEN_WIDTH, backgroundColor: "red" }}>
                    <Text>Salam</Text>
                </View>
            </Swiper>
        </View>



    );
}

export default CarouselScreen;