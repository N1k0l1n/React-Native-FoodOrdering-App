import React, { useContext } from 'react'
import MealList from '../components/MealsList/MealList'
import { FavoritesContext } from '../store/context/favorites-context'
import { MEALS } from '../data/dummy-data';
import { StyleSheet, View, Text } from 'react-native';

export default function FavoriteScreen() {

  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id));

  if(favoriteMeals.length ===0){
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no Favorites Meals Yet.</Text>
      </View>
    )
  }

  return <MealList items={favoriteMeals}/>
}

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:18,
    fontWeight:'bold',
    color:'white'
  }
})