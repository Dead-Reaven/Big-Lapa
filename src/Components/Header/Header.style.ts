import { styled, css } from 'styled-components'
import { theme } from '../../styles/Theme.styles'
import Button from '../../styles/Button.styles'
import Flex from '../../styles/Flex.styles'

const StyledHeader = styled.header`
  z-index: 10;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.background};
  height: ${({ theme }) => theme.headerHeight};
`

interface BurgerMenuProps {
  className?: string
  extendNavbar?: boolean
}

const StyledBurgerMenu = styled(Flex)<BurgerMenuProps>`
  flex: 0.8;

  @media (${theme.breakPoints.tablet}) {
    flex-direction: column-reverse;
    align-items: start;
    justify-content: start;
    gap: 40px;
    z-index: 5;
    position: fixed;
    width: 100%;
    max-width: 380px;
    height: 384px;
    background-color: ${({ theme }) => theme.colors.background};
    right: ${({ extendNavbar }) => (extendNavbar ? '0' : '-100%')};
    top: 98px;
    padding: 44px 40px 78px;
    overflow: auto;
    transition: all ease 0.3s;
    font-size: ${({ theme }) => theme.fontSizes.mobileBodyText};
  }

  @media (${theme.breakPoints.mobile}) {
    align-items: center;
    max-width: 100%;
    height: 100vh;
    top: 90px;
    gap: 100px;
  }
`

const BurgerMenuButton = styled(Button)`
  display: none;
  @media (${theme.breakPoints.mobile}) {
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.buttonText};
    padding: ${({ theme }) => theme.paddings.button};
  }
`

const StyledNavBar = styled.nav`
  @media (${theme.breakPoints.tablet}) {
    width: 100%;
  }
`

const NavFlex = styled(Flex)`
  @media (${theme.breakPoints.tablet}) {
    flex-direction: column;
    align-items: start;
    width: 100%;
    gap: 40px;
  }
`

const StyledNavItem = styled.li`
  transition: ${({ theme }) => theme.transitions.quick};
  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }

  @media (${theme.breakPoints.tablet}) {
    width: 100%;
    text-align: start;

    &::after {
      content: ' ';
      display: block;
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.lightGrey};
      top: 20px;
      left: 0;
    }
  }

  @media (${theme.breakPoints.mobile}) {
    text-align: center;
  }
`

interface DogSearchProps {
  direction?: string
  align?: string
  justify?: string
  gap?: string
  height?: string
}

const StyledDogSearch = styled.form<DogSearchProps>`
  padding: ${({ theme }) => theme.paddings.input};
  border: 1px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 4px;
  width: 40%;
  max-width: 300px;

  @media (${theme.breakPoints.tablet}) {
    width: 100%;
  }

  input:focus + button svg {
    transition: ${({ theme }) => theme.transitions.long};
    stroke: ${({ theme }) => theme.colors.green};
  }
`

interface HeaderRightProps {
  extendNavbar?: boolean
}

const StyledHeaderRight = styled(Flex)<HeaderRightProps>`
  @media (${theme.breakPoints.tablet}) {
    flex: 0.5;
  }
  @media (${theme.breakPoints.mobile}) {
    ${({ extendNavbar }) => extendNavbar && 'flex-direction: row-reverse;'}
  }
  @media (max-width: 600px) {
    flex: 0.7;
  }
  @media (max-width: 500px) {
    flex: 1;
  }
`

interface HeaderButtonProps {
  extendNavbar?: boolean
}

const HeaderButton = styled(Button)<HeaderButtonProps>`
  @media (${theme.breakPoints.mobile}) {
    ${({ extendNavbar }) => extendNavbar && 'display: none;'}
  }
`

interface BurgerBtnProps {
  isActive?: boolean
}

const StyledBurgerBtn = styled.button<BurgerBtnProps>`
  display: none;

  @media (${theme.breakPoints.tablet}) {
    display: block;
    flex: 0 0 35px;
    height: 20px;
    position: relative;
    z-index: 3;

    span,
    &::before,
    &::after {
      content: '';
      right: 0;
      position: absolute;
      width: 100%;
      height: 4px;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.dark};
      transition: all 0.3s ease 0s;
    }

    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
    }

    span {
      top: calc(50% - 2px);
    }

    ${({ isActive }) =>
      isActive &&
      css`
        span {
          width: 0;
        }
        &::before {
          top: calc(50% - 2px);
          transform: rotate(-45deg);
          border-radius: 0;
        }
        &::after {
          bottom: calc(50% - 2px);
          transform: rotate(45deg);
          border-radius: 0;
        }
      `}
  }
`

export {
  StyledHeader,
  StyledBurgerMenu,
  BurgerMenuButton,
  StyledHeaderRight,
  HeaderButton,
  StyledDogSearch,
  StyledNavBar,
  NavFlex,
  StyledNavItem,
  StyledBurgerBtn,
}
