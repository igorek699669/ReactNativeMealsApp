import React , {useEffect, useCallback} from 'react'
import {View,Image, Text, StyleSheet, ScrollView} from 'react-native'
import {MEALS} from '../data/dummy-data';
import { AntDesign } from '@expo/vector-icons';
import {useSelector, useDispatch} from 'react-redux';
import {toggleFavorite} from '../store/reducers/meals';

const ListItem = (props) => {
    return (
        <View style={styles.listItem}>
            <Text>{props.children}</Text>
        </View>
    )
}
export const MealDetailScreen = (props) => {
    const {meals} = useSelector(state => state.meals)
    const mealId = props.navigation.getParam('mealId')
    const currentMealIsFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id ===mealId))

    const selectedMeal = meals.find(meal => meal.id ===mealId)
    const dispatch = useDispatch()
    const toggleFavoriteHandler = useCallback( () => {
        dispatch(toggleFavorite(selectedMeal.id))
    }, [dispatch, mealId])
    useEffect(()=> {
        props.navigation.setParams({
            mealTitle: selectedMeal.title
        })
    }, [selectedMeal])
    useEffect(()=> {
       props.navigation.setParams({toggleFav: toggleFavoriteHandler})
    }, [selectedMeal])
    useEffect(()=> {
        props.navigation.setParams({isFav: currentMealIsFavorite})
    }, [currentMealIsFavorite])
    return (
        <ScrollView>
            <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                <Text>{selectedMeal.duration}m</Text>
                <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(item=> {
                return (
                    <ListItem key={item}>{item}</ListItem>
                )
            })}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(item=> {
                return (
                    <ListItem key={item}>{item}</ListItem>
                )
            })}
        <View>
            <Text>{selectedMeal.title}</Text>
        </View>
        </ScrollView>
    )
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const toggleFavorite = navigationData.navigation.getParam('toggleFav')
    const mealTitle = navigationData.navigation.getParam('mealTitle')
    const isFavorite = navigationData.navigation.getParam('isFav')
    return {
        headerTitle: mealTitle,
        headerRight: <View style={styles.rightIcon}>
            <AntDesign onPress={toggleFavorite} name={isFavorite? 'star': 'staro'} size={24} color="#fff" />
        </View>
    }
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});
