import React from 'react'
import { FlatList, View } from 'react-native'
import PropTypes from 'prop-types'

import { Card, Loading, Heading } from '~/components'

import { styleSheet } from './styles'

export default function HomeList({ data, title, loading }) {
  const styles = styleSheet({})

  function renderItemHandler({ item }) {
    return <Card content={item} />
  }

  return (
    <View style={styles.ListContainer}>
      <Heading
        size={18}
        font="black"
        text={title}
        marginLeft={24}
        marginBottom={12}
      />
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={data}
          horizontal
          renderItem={renderItemHandler}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.ListContentStyle}
        />
      )}
    </View>
  )
}

HomeList.propTypes = {
  data: PropTypes.array.isRequired,
}
