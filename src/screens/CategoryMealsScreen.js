import React from 'react'
import {View, Text, Button} from 'react-native'


export const CategoryMealsScreen = (props) => {
    return (
        <View>
            <Text>Category meals screen</Text>
            <Button title={'to meals detail'} onPress={()=> {
                props.navigation.navigate({routeName: 'MealDetail'})
            }}/>
        </View>
    )
}
