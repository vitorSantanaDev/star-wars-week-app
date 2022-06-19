import React from 'react'
import { ScrollView } from 'react-native'

import { ScreenWrapper } from '~/components'
import { HomeList, Hero } from '~/components'

const MOCK_DATA_FILMES = [
  {
    id: 0,
    image_url:
      'https://www.themoviedb.org/t/p/original/suaJuFprbgdZaTE0mOt0xWIGFyQ.jpg',
    title: 'Title example 1',
    subtitle: 'subtitle example 1',
    type: 'Filme',
  },
  {
    id: 1,
    image_url:
      'https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/2/125820180226-uau-posters-filmes-star-wars-last-jedi.jpg',
    title: 'Title example 2',
    subtitle: 'subtitle example 2',
    type: 'Filme',
  },
  {
    id: 2,
    image_url:
      'https://img.elo7.com.br/product/original/2D6E8FA/quadro-poster-star-wars-9-ler-detalhes-abaixo-posters.jpg',
    title: 'Title example 3',
    subtitle: 'subtitle example 3',
    type: 'Filme',
  },
  {
    id: 3,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7s6f_TPmovKhjX4PgbhlCTCZnayeEbtyDXw&usqp=CAU',
    title: 'Title example 4',
    subtitle: 'subtitle example 4',
    type: 'Filme',
  },
  {
    id: 4,
    image_url:
      'https://a-static.mlcdn.com.br/1500x1500/poster-m-py-pp-34635-star-wars-action-wall-street-posters/apaginadistribuidoradelivros/9780004012148/7b0cc0c22dd5fabd41e57c85ad1202ce.jpg',
    title: 'Title example 5',
    subtitle: 'subtitle example 5',
    type: 'Filme',
  },
  {
    id: 5,
    image_url:
      'https://i.pinimg.com/736x/d6/57/99/d65799619f9ab8fded3f8a7de721aada.jpg',
    title: 'Title example 6',
    subtitle: 'subtitle example 6',
    type: 'Filme',
  },
  {
    id: 6,
    image_url:
      'https://ae01.alicdn.com/kf/HTB1kk_0LpXXXXXWXXXXq6xXFXXXs/Frete-gr-tis-star-wars-epis-dio-vii-a-for-a-desperta-papel-de-parede-poster.jpg_Q90.jpg_.webp',
    title: 'Title example 7',
    subtitle: 'subtitle example 7',
    type: 'Filme',
  },
]
const MOCK_DATA_CHARACTERES = [
  {
    id: 0,
    image_url:
      'https://www.blitzcosplay.com.br/urlfiles/contratar-cosplay-star-wars-personagem-vivo-sp-9.jpg',
    title: 'Title example 1',
    subtitle: 'subtitle example 1',
    type: 'Personagem',
  },
  {
    id: 1,
    image_url:
      'https://i.pinimg.com/236x/2c/84/31/2c8431aafca1f36be6269073c075c286.jpg',
    title: 'Title example 2',
    subtitle: 'subtitle example 2',
    type: 'Personagem',
  },
  {
    id: 2,
    image_url:
      'https://i.pinimg.com/originals/92/b1/6a/92b16a93af53b10d577ab881a652cbaf.jpg',
    title: 'Title example 3',
    subtitle: 'subtitle example 3',
    type: 'Personagem',
  },
  {
    id: 3,
    image_url:
      'data:image/jpeg;base64,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',

    title: 'Title example 4',
    subtitle: 'subtitle example 4',
    type: 'Personagem',
  },
  {
    id: 4,
    image_url:
      'https://a-static.mlcdn.com.br/1500x1500/poster-m-py-pp-34635-star-wars-action-wall-street-posters/apaginadistribuidoradelivros/9780004012148/7b0cc0c22dd5fabd41e57c85ad1202ce.jpg',
    title: 'Title example 5',
    subtitle: 'subtitle example 5',
    type: 'Personagem',
  },
  {
    id: 5,
    image_url:
      'https://lulacerda.ig.com.br/wp-content/uploads/2019/11/tz864j4br_5yhzzupbrc_file.jpg',
    title: 'Title example 6',
    subtitle: 'subtitle example 6',
    type: 'Personagem',
  },
  {
    id: 6,
    image_url:
      'https://i.pinimg.com/736x/97/e8/97/97e8975618f453809cbb48911a566b17.jpg',
    title: 'Title example 7',
    subtitle: 'subtitle example 7',
    type: 'Personagem',
  },
]

export default function Home() {
  return (
    <ScreenWrapper justifyContent="center" alignItem="center">
      <Hero
        content={{
          title: 'Title example 1',
          subtitle: 'subtitle example 1',
          type: 'Filme',
          image_url:
            'https://www.themoviedb.org/t/p/original/suaJuFprbgdZaTE0mOt0xWIGFyQ.jpg',
        }}
      />
      <HomeList title="Filmes" data={MOCK_DATA_FILMES} />
      <HomeList title="Personagens" data={MOCK_DATA_CHARACTERES} />
    </ScreenWrapper>
  )
}
