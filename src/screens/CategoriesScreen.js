import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import {CategoryGridTile} from '../components/CategoryGridTile';
import {Ionicons} from '@expo/vector-icons';

export const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id,
                        },
                    });
                }}/>
        );
    };

    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>
    );
};

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Categories',
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
