import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MealsNavigator from './src/navigation/MealsNavigator';
import {enableScreens} from 'react-native-screens'
import { createStore, combineReducers } from 'redux';
import {mealsReducer} from './src/store/reducers/meals';
import {Provider} from 'react-redux';

const store = createStore(combineReducers({
    meals: mealsReducer,
}));

enableScreens()
const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./src/assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
    });
};
const App = () => {
    const [fontLoaded, setFontLoaded] = useState(false);
    if (!fontLoaded) {
        return <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setFontLoaded(true)}
            onError={(e)=> console.log(e)}
        />;
    }
    return (
        <Provider store={store}>
            <MealsNavigator/>
        </Provider>
    );
};

const styles = StyleSheet.create({});

export default App;
