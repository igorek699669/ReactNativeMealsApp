import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {CategoriesScreen} from '../screens/CategoriesScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {CategoryMealsScreen} from '../screens/CategoryMealsScreen';
import {MealDetailScreen} from '../screens/MealDetailScreen';
import {createAppContainer} from 'react-navigation';
import {colors} from '../constants/colors';
import {FavoritesScreen} from '../screens/FavoritesScreen';
import {Ionicons} from '@expo/vector-icons';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {FiltersScreen} from '../screens/FiltersScreen';

const defaultOptions = {
    headerStyle: {
        backgroundColor: colors.primaryColor
    },
    headerTintColor: 'white'
}
const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
}, {
    defaultNavigationOptions: defaultOptions
});

const favoritesNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
}, {
    defaultNavigationOptions: defaultOptions
});
const MealsFavTabNavigator = createBottomTabNavigator({
   Meals: {
       screen: MealsNavigator, navigationOptions: {
           tabBarIcon: (tabInfo) => {
               return <Ionicons
                   name={'ios-restaurant'}
                   color={tabInfo.tintColor}
                   size={25}
               />
           }
       }
   },
   Favorites: {screen: favoritesNavigator,navigationOptions: {
           tabBarIcon: (tabInfo) => {
               return <Ionicons
                   name={'ios-star'}
                   color={tabInfo.tintColor}
                   size={25}
               />
           }
       }}
},{
    tabBarOptions: {
        activeTintColor: colors.accentColor
    }
});
const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
},
    {
        defaultNavigationOptions: defaultOptions
    });
const MainNavigator = createDrawerNavigator({
   MealsFavs: MealsFavTabNavigator,
   Filters: FiltersNavigator
});

export default createAppContainer(MainNavigator)
