import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

export const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                            <Text style={styles.title}>
                                {props.title}
                            </Text>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <Text>
                            {props.duration}m
                        </Text>
                        <Text>
                            {props.complexity.toUpperCase()}
                        </Text>
                        <Text>
                            {props.affordability.toUpperCase()}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row',
    },
    mealItem: {
        backgroundColor: '#ccc',
        height: 200,
        width: '100%'
    },
    mealHeader: {
        height: '85%',
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 22,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,.7)',
        paddingHorizontal: 12,
        paddingVertical: 7
    }
});
