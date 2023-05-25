import { View, Text } from 'react-native'
import React from 'react'

export default function MealsDetailsScreen({route, navigation}) {
    const mealId = route.params.mealId;
  return (
    <View>
      <Text>This is the Meal Detail Screen ({mealId})</Text>
    </View>
  )
}