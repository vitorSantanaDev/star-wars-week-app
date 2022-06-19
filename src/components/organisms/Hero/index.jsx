import React from 'react'
import { ImageBackground, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import PropTypes from 'prop-types'

import { Heading, Logo } from '~/components/atoms'
import { IconButton, PlayButton, Tag } from '~/components/molecules'

import { styleSheet } from './styles'
import { theme } from '~/styles'

export default function Hero({ content, onDetail = false }) {
  const styles = styleSheet({})
  const { image_url, title, subtitle, type } = content

  return (
    <View style={styles.HeroWrapper}>
      <ImageBackground
        style={styles.HeroImageBackground}
        source={{
          uri: image_url,
        }}
      >
        <LinearGradient
          style={styles.GradientStyle}
          colors={[
            theme.colors.backLight,
            'transparent',
            theme.colors.backLight,
          ]}
        >
          {!onDetail && <Logo size="small" />}
          <Tag text={type} marginTop={onDetail ? 214 : 200} />
          <Heading text={title} size={28} font="bold" marginTop={8} />
          <Heading text={subtitle} font="regular" size={18} />
          <View style={styles.ButtonsWrapper}>
            <IconButton label="Favoritos" iconName="add-circle-outline" />
            <PlayButton />
            {!onDetail && (
              <IconButton
                label="Saiba mais"
                iconName="information-circle-outline"
              />
            )}
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

Hero.propTypes = {
  content: PropTypes.object.isRequired,
  onDetail: PropTypes.bool,
}
