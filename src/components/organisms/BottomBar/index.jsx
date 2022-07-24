import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { styleSheet } from './styles'
import { theme } from '~/styles'

const routeIcons = {
  Home: 'home-outline',
  Search: 'search-outline',
  Favorites: 'heart-outline',
}

export default function BottomBar({ state, descriptors, navigation }) {
  const styles = styleSheet({})
  const focusedOptions = descriptors[state.routes[state.index].key].options

  if (focusedOptions.tabBarVisible == false) {
    return null
  }

  return (
    <View style={styles.bottomBarWrapper}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true })
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.routeTouchableStyle}
          >
            <Ionicons
              name={routeIcons[route.name]}
              size={theme.metrics.pixel(20)}
              color={isFocused ? theme.colors.redPrimary : theme.colors.white}
            />
            <Text
              style={[
                styles.textRouteTouchable,
                {
                  color: isFocused
                    ? theme.colors.redPrimary
                    : theme.colors.white,
                },
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
