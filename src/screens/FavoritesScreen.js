import React from 'react';
import {MealList} from '../components/MealList';
import {MEALS} from '../data/dummy-data';
import {StyleSheet, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';


export const FavoritesScreen = (props) => {
    const favoriteMeals = MEALS.filter(meal => meal.id ==='m1' || meal.id ==='m2')

    return (
        <MealList
            listData={favoriteMeals}
            navigation={props.navigation}
        />
    )
};

FavoritesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Favorites Screen',
        headerLeft: <View
            style={styles.burgerIcon}
        >
            <Ionicons onPress={()=> navData.navigation.toggleDrawer()} name="ios-menu" size={24} color="white"/>
        </View>,
    };
};

const styles = StyleSheet.create({
    burgerIcon: {
        paddingLeft: 20,
    },
});

