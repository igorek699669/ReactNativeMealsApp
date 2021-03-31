import React from 'react';
import {CATEGORIES} from '../data/dummy-data';
import {MealList} from '../components/MealList';
import {useSelector} from 'react-redux';
import {View, Text} from 'react-native';

export const CategoryMealsScreen = (props) => {
    const {filteredMeals} = useSelector(state => state.meals)
    const catId = props.navigation.getParam('categoryId')
    const displayedMeals = filteredMeals.filter( meal => meal.categoryIds.indexOf(catId)>=0)
    if (displayedMeals.length === 0) {
        return <View>
            <Text>
                No meals found for that filter
            </Text>
        </View>
    }
    return (
        <MealList
            listData={displayedMeals}
            navigation={props.navigation}
        />
    )
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId  = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat=>cat.id ===catId)
    return {
        headerTitle: selectedCategory.title,
    }
}
