import {createStackNavigator} from 'react-navigation-stack';
import {CategoriesScreen} from '../screens/CategoriesScreen';
import {CategoryMealsScreen} from '../screens/CategoryMealsScreen';
import {MealDetailScreen} from '../screens/MealDetailScreen';
import {createAppContainer} from 'react-navigation';
import {colors} from '../constants/colors';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: colors.primaryColor
        },
        headerTintColor: 'white'
    }
});

export default createAppContainer(MealsNavigator)
