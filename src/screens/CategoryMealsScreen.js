import React from 'react';
import {Button, Text, View, FlatList} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';



export const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId')
    const displayedMeals = MEALS.filter( meal => meal.categoryIds.indexOf(catId)>=0)
    const renderMealItem = itemData => {
        return (
            <View>
                <Text>
                    {itemData.item.title}
                </Text>
            </View>
        )
    }
    return (
        <View>
            <FlatList
                data={displayedMeals}
                renderItem={renderMealItem}
            />
        </View>
    )
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId  = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat=>cat.id ===catId)
    return {
        headerTitle: selectedCategory.title,
    }
}
