import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useDispatch} from 'react-redux';
import {setFilters} from '../store/reducers/meals';

const FilterSwitch = props => {
    return <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch value={props.value}
                onValueChange={props.onChange}/>
    </View>
}
export const FiltersScreen = (props) => {
    const dispatch = useDispatch()
    const {navigation} = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)
    const saveFilters = useCallback( () => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian,
        };
        dispatch(setFilters(appliedFilters))
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch])
    useEffect(()=> {
        navigation.setParams({
            save: saveFilters
        })
    }, [saveFilters]);
    return (
        <View>
            <Text style={styles.title}>Avaliable filters / Restrictions</Text>
            <FilterSwitch
                label={'Gluten-free'}
                value={isGlutenFree}
                onChange={newValue => setIsGlutenFree(newValue)}
            />
            <FilterSwitch
                label={'Lactose free'}
                value={isLactoseFree}
                onChange={newValue => setIsLactoseFree(newValue)}
            />
            <FilterSwitch
                label={'Vegan'}
                value={isVegan}
                onChange={newValue => setIsVegan(newValue)}
            />
            <FilterSwitch
                label={'Vegetarian'}
                value={isVegetarian}
                onChange={newValue => setIsVegetarian(newValue)}
            />
        </View>
    )
}

FiltersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Filters Screen',
        headerLeft: <View
            style={styles.icon}
        >
            <Ionicons onPress={()=> navData.navigation.toggleDrawer()} name="ios-menu" size={24} color="white"/>
        </View>,
        headerRight: <View
            style={styles.icon}
        >
            <Ionicons
                onPress={navData.navigation.getParam('save')}
                name="ios-save" size={24} color="white"/>
        </View>,
    };
};


const styles = StyleSheet.create({
    icon: {
        paddingLeft: 20,
        paddingRight: 20
    },
    title: {
        margin: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
});
