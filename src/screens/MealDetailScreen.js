import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {MEALS} from '../data/dummy-data';
import { AntDesign } from '@expo/vector-icons';


export const MealDetailScreen = (props) => {
    const mealId = props.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id ===mealId)
    return (
        <View>
            <Text>{selectedMeal.title}</Text>
        </View>
    )
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id ===mealId)
    return {
        headerTitle: selectedMeal.title,
        headerRight: <View style={styles.rightIcon}>
            <AntDesign name="staro" size={24} color="#fff" />
        </View>
    }
};

const styles = StyleSheet.create({
    rightIcon: {
        paddingRight: 20,
    }
});
