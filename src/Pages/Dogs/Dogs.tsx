import { useState } from 'react'
import { DogTypes } from '../../API/types'
import useGet from '../../API/useGet'
import DogSearch from '../../Components/DogSearch/DogSearch'
import Gallery from '../../Components/Gallery/Gallery'
import { DogsStyled } from './Dogs.style'
import Container from '../../Components/UI/Container.style'

function Dogs() {
  const [dogsState, setDogsState] = useState<DogTypes>({ data: [] })
  useGet({
    category: 'dogs',
    state: dogsState,
    setState: setDogsState,
  }) as DogTypes

  const [filteredDogsState, setFilteredDogsState] = useState<DogTypes>(dogsState)

  return (
    <DogsStyled data-testid="dogs-page">
      <Container>
        <DogSearch
          state={filteredDogsState}
          setState={setFilteredDogsState}
          options={dogsState as DogTypes}
        />
      </Container>
      <br />
      <Gallery state={filteredDogsState} />
    </DogsStyled>
  )
}

export default Dogs
