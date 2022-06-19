import React from 'react'
import PropTypes from 'prop-types'
import { ImageBackground, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useDataStore } from '~/services/store'

import { styleSheet } from './styles'
import { routeName } from '~/routes/routesName'

export default function Card({ content }) {
  const styles = styleSheet({})
  const { setSelectedData } = useDataStore()
  const navigation = useNavigation()

  function goToDetailsScreen() {
    setSelectedData(content)
    navigation.navigate(routeName.DETAIL)
  }

  return (
    <TouchableOpacity onPress={goToDetailsScreen}>
      <View style={styles.CardWrapper}>
        <ImageBackground
          style={styles.CardImage}
          source={{ uri: content.image_url }}
        />
      </View>
    </TouchableOpacity>
  )
}

Card.propTypes = {
  content: PropTypes.object.isRequired,
}
