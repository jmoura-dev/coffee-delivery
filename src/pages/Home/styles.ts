import { styled } from 'styled-components'

export const HomeContainer = styled.div``

export const MainContainer = styled.main`
  h1 {
    color: ${({ theme }) => theme['base-subtitle']};

    font-family: 'Baloo 2', sans-serif;
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 1.3;
    margin-bottom: 5rem;
  }
`
export const CardsContainer = styled.div`
  > ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3.2rem;
  }
`
