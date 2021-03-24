import React from 'react'
import {View, Text, Button} from 'react-native'
import {CATEGORIES} from '../data/dummy-data';
import {colors} from '../constants/colors';


export const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat=>cat.id ===catId)
    return (
        <View>
            <Text>Category meals screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title={'to meals detail'} onPress={()=> {
                props.navigation.navigate({routeName: 'MealDetail'})
            }}/>
        </View>
    )
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId  = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat=>cat.id ===catId)
    return {
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: colors.primaryColor
        },
        headerTintColor: 'white'
    }
}
