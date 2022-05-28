import { View, Text, StyleSheet } from 'react-native';
import { useContext } from 'react';
import MealsList from '../components/MealsList/MealsList';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';

function FavoritesScreen() {
    const favoriteMealContext = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter((meal) => 
        favoriteMealContext.ids.includes(meal.id));

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.root}>
                <Text style={styles.text}>You have no Favorite Meals Yet!</Text>
            </View>
        );
    }

    return (
        <MealsList items={favoriteMeals} />
    )
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});