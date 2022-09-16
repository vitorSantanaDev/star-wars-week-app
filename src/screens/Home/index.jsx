import React, { useEffect, useState } from 'react'

import { useGetData } from '~/services/hooks'

import { HomeList, Hero, ScreenWrapper } from '~/components'

export default function Home() {
  const [filmsState, setFilmsState] = useState(null)
  const [charactersState, setCharactersState] = useState(null)
  const [loading, setLoading] = useState(false)

  const { getFilms, getCharacters } = useGetData()

  const callGetFilmsAndCharacteres = async () => {
    setLoading(true)
    const responseFilms = await getFilms()
    const responseCharacters = await getCharacters()

    if (responseFilms && responseCharacters) {
      const filmsData = responseFilms.map((item) => ({
        ...item,
        type: 'Filme',
      }))

      const charactersData = responseCharacters.map((item) => ({
        ...item,
        type: 'Personagem',
      }))

      setFilmsState(filmsData)
      setCharactersState(charactersData)
      setLoading(false)
      return
    }
  }

  useEffect(() => {
    callGetFilmsAndCharacteres()
  }, [])

  return (
    <ScreenWrapper justifyContent="center" alignItem="center">
      {filmsState && <Hero content={filmsState[0]} />}
      <HomeList title="Filmes" loading={loading} data={filmsState} />
      <HomeList loading={loading} title="Personagens" data={charactersState} />
    </ScreenWrapper>
  )
}
