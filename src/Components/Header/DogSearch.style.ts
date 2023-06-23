import styled from 'styled-components'

interface Props {
  direction?: string
  align?: string
  justify?: string
  gap?: string
  height?: string
}

const StyledDogSearch = styled.form<Props>`
  padding: ${({ theme }) => theme.paddings.input};
  border: 1px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 4px;
  /* width: 300px; */
  width: 23.5%;

  input:focus + button svg {
    transition: ${({ theme }) => theme.transitions.long};
    stroke: ${({ theme }) => theme.colors.green};
  }
`

export default StyledDogSearch
