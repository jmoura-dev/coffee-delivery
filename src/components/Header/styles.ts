import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  img {
    width: 8rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    a {
      background-color: ${({ theme }) => theme['yellow-light']};
      color: ${({ theme }) => theme['yellow-dark']};
      padding: 0.5rem 0.8rem;

      border-radius: 5px;
      border: none;

      :hover {
        cursor: pointer;
        color: ${({ theme }) => theme['yellow-base']};
      }
    }
  }
`
export const CartContainer = styled.button``

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  border-radius: 8px;

  background: ${({ theme }) => theme['purple-light']};
  border: none;
  color: ${({ theme }) => theme['purple-dark']};
  padding: 0.7rem 1rem;

  span {
    font-size: 1.4rem;
  }
`
