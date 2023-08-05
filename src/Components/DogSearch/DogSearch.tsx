import { useEffect } from 'react'
import { DogTypes } from '../../API/types/types'
import { Menu } from './CheckBox.styles'
import CheckBoxItem from './CheckBoxItem'
import { SearchInput, StyledDogSearch } from './DogSearch.style'
import { ReactComponent as IcoSearch } from './icons/search_ico.svg'
import { ReactComponent as IcoSettings } from './icons/settings_ico.svg'
import useQuery from './useParams'

interface DogSearchProps {
  state: DogTypes
  setState: (state: DogTypes) => void
  readonly options: DogTypes | null
}

function DogSearch({ options, setState }: DogSearchProps) {
  //searching by name

  const [
    { breeds, chips, genders, isOpen, sizes, searchInput },
    { setBreeds, setChips, setGenders, setIsOpen, setSizes, setSearchInput },
  ] = useQuery() // Destructure the state object

  const onClickHandler = (current: boolean) => setIsOpen(!current)

  const filterState = () => {
    if (options?.data) {
      const filtered = options?.data
        .filter(({ sex }) => {
          if (genders.female && genders.male) return true
          if (genders.male) return sex.includes('Хлопчик')
          if (genders.female) return sex.includes('Дівчинка')
        })
        .filter(({ size }) => {
          if (sizes.small && sizes.medium && sizes.big) return true
          if (sizes.small && sizes.medium)
            return size.includes('small') || size.includes('medium')
          if (sizes.small && sizes.big)
            return size.includes('small') || size.includes('big')
          if (sizes.medium && sizes.big)
            return size.includes('medium') || size.includes('big')

          if (sizes.small) return size.includes('small')
          if (sizes.medium) return size.includes('medium')
          if (sizes.big) return size.includes('big')
        })
        .filter(({ haschip }) => {
          if (chips.hasChip && chips.noChip) return true
          if (chips.hasChip) return haschip
          if (chips.noChip) return !haschip
        })
        .filter(({ hasbreed }) => {
          if (breeds.hasBreed && breeds.noBreed) return true
          if (breeds.hasBreed) return hasbreed
          if (breeds.noBreed) return !hasbreed
        }) // searching by name
        .filter(({ name }) => name.toLowerCase().includes(searchInput.toLowerCase()))

      setState({ data: filtered })
    }
  }
  useEffect(() => {
    if (options) setState(options)
    filterState()
  }, [searchInput, genders, sizes, chips, breeds, options])

  return (
    <>
      <StyledDogSearch>
        <IcoSearch />
        <SearchInput
          type="text"
          placeholder="Пошук собаки за кличкою"
          value={searchInput}
          onChange={(e: any) => setSearchInput(e.target.value)}
        />
        <IcoSettings
          type="button"
          onClick={() => onClickHandler(isOpen)}
          style={{ cursor: 'pointer' }}
        />
      </StyledDogSearch>
      {isOpen && (
        <Menu>
          <CheckBoxItem
            title="Стать"
            options={[
              { name: 'male', label: 'Хлопець', checked: genders.male },
              { name: 'female', label: 'Дівчина', checked: genders.female },
            ]}
            onChange={setGenders}
          />

          <CheckBoxItem
            title="Розмір"
            options={[
              { name: 'small', label: 'Маленька', checked: sizes.small },
              { name: 'medium', label: 'Середня', checked: sizes.medium },
              { name: 'big', label: 'Велика', checked: sizes.big },
            ]}
            onChange={setSizes}
          />
          <CheckBoxItem
            title="Наявність чипу"
            options={[
              { name: 'hasChip', label: 'Так', checked: chips.hasChip },
              { name: 'noChip', label: 'Ні', checked: chips.noChip },
            ]}
            onChange={setChips}
          />
          <CheckBoxItem
            title="Наявність породи"
            options={[
              { name: 'hasBreed', label: 'Так', checked: breeds.hasBreed },
              { name: 'noBreed', label: 'Ні', checked: breeds.noBreed },
            ]}
            onChange={setBreeds}
          />
        </Menu>
      )}
    </>
  )
}

export default DogSearch
