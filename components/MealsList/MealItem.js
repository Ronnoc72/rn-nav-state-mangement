import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetails from '../MealDetails';

function MealItem({ title, imageUrl, duration, complexity, affordability, id }) {
    const navigation = useNavigation();

    function selectMealItemHander() {
        navigation.navigate('MealDetail', {
            mealId: id
        });
    }

    return  (
        <View style={styles.mealItem}>
            <Pressable andriod_ripple={{color: '#ccc'}} onPress={selectMealItemHander}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} affordability={affordability} complexity={complexity} />
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    }
});