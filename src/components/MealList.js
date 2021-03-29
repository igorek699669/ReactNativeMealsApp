import React from 'react'
import {FlatList, StyleSheet, View} from 'react-native';
import {MealItem} from './MealItem';

export const MealList = props => {
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
    return <View>
        <FlatList
            data={props.listData}
            renderItem={renderMealItem}
        />
    </View>
}
