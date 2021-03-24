import React from 'react';
import {FlatList, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import {colors} from '../constants/colors';


export const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity
                style={styles.gridItem}
                onPress={()=> {
                    props.navigation.navigate({routeName: 'CategoryMeals'})
                }}
            >
                <View>
                    <Text>
                        {itemData.item.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>
    );
};
CategoriesScreen.navigationOptions = {
    title: 'Categories',
    headerStyle: {
        backgroundColor: colors.primaryColor
    },
    headerTintColor: 'white'
};
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        padding: 15,
    },
});
