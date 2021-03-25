import React from 'react'
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

export const CategoryGridTile = (props) => {
    return (
        <TouchableOpacity
            style={styles.gridItem}
            onPress={props.onSelect}
        >
            <View
                style={{
                    height: 100,
                    backgroundColor: props.color,
                    borderRadius: 10,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    padding: 20
                }}
            >
                <Text>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        padding: 15,
        height: 100,
        marginBottom: 10
    },
})

