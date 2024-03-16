//import { StyleSheet, Text, View } from 'react-native'
//import React from 'react'

//const Caritem = (props) => {
   // const { brand,year,km}=props;

  //return (
   // <View>
        
     // <Text>{ `Brand:${brand}`}</Text>
     // <Text>{ `Year:${year}`}</Text>
    //<Text>{ `km:${km}`}</Text>
      



    //</View>
//)
//}

//export default Caritem

//const styles = StyleSheet.create({})
// import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
// import React from 'react';
// import {Cars} from '../res/Data';
// import CarItem from '../components/CarItem';
// import ScreenNames from '../../route/ScreenNames';

// const Screen1 = props => {
//   const renderCars = () => {
//     const carsComponents = Cars.map(car => {
//       return (
//         <CarItem brand={car.brand} year={car.year} km={car.km} img={car.img} id={car.id} />
//       );
//     });

//     return carsComponents;
//   };

//   const onPayPress = () => {
//     props.navigation.navigate(ScreenNames.screen3);
//   };

//   return (
//     <View style={{flex: 1}}>
//       <ScrollView>{renderCars()}</ScrollView>
//       <Button title="PAY" onPress={onPayPress} />
//     </View>
//   );
// };

// export default Screen1;

// const styles = StyleSheet.create({});
   
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import Images from '../assets/images/images';
import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../../route/ScreenNames';

/**
 * 1- component will amount
 *    ** componentWillUpdate
 * 2- render ( loading the component )
 *    ** componentDidUpdate
 * 3- componentDidLoad
 * 4- compomemtWillUnMount
 */

const CarItem = props => {
  const {brand, year, km , hideImage , id} = props;
  const navigation = useNavigation();

  // const[state , setState] = useState(init value)
  const [x, setX] = useState(0);
  // var x = 0;

  const onCardPress = () => {

    const car = {
      brand: props.brand,
      year: props.year,
      km: props.km,
      img: props.img,
      id: id,
    };
    navigation.navigate(ScreenNames.screen2 , /**params */ {car: car})
  }

  return (
    <TouchableOpacity onPress={onCardPress}>
      <View style={styles.container}>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>{`Brand: ` + props.brand}</Text>
          <Text style={styles.txt}>{`Year: ${year}`}</Text>
          <Text style={styles.txt}>{'KM: ' + km}</Text>
        </View>
        { !hideImage && <Image style={styles.img} source={props.img} />}
      </View>
    </TouchableOpacity>
  );
};

export default CarItem;

const styles = StyleSheet.create({
  txt: {
    fontSize: 35,
  },
  container: {
    borderWidth: 1,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  plus: {
    fontSize: 45,
    textAlign: 'center',
  },
  plusContainer: {
    borderWidth: 1,
    flex: 1,
  },
  txtContainer: {
    flex: 1,
  },
  img: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
});



