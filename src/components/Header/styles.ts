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
      position: relative;
      background-color: ${({ theme }) => theme['yellow-light']};
      color: ${({ theme }) => theme['yellow-dark']};
      padding: 0.5rem 0.8rem;

      border-radius: 5px;
      border: none;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1.8rem;
        width: 1.8rem;
        position: absolute;
        top: -20%;
        right: -20%;

        background: ${({ theme }) => theme['yellow-dark']};
        color: ${({ theme }) => theme.white};
        border-radius: 50%;

        font-size: 1.2rem;
        font-weight: bold;
      }

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
