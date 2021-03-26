import React from 'react';
import {FlatList, View} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import {MealItem} from '../components/MealItem';


export const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId')
    const displayedMeals = MEALS.filter( meal => meal.categoryIds.indexOf(catId)>=0)
    const renderMealItem = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                image={itemData.item.imageUrl}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={
                    () => {
                        props.navigation.navigate({
                            routeName: 'MealDetail',
                            params: {
                                mealId: itemData.item.id
                            }
                        })
                    }
                }
            />
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
