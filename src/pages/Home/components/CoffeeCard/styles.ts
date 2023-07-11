import { styled } from 'styled-components'

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  max-width: 25.6rem;
  max-height: 31rem;

  border-radius: 0.8rem 3.8rem;
  background: ${({ theme }) => theme['base-card']};
  padding: 2rem;
  margin-bottom: 1rem;

  .imageCoffee {
    height: 12rem;
    width: 12rem;
    margin-top: calc(0px - 3.2rem - 10px);
    margin-bottom: 1rem;
  }

  > span {
    text-transform: uppercase;
    color: ${({ theme }) => theme['yellow-dark']};
    background: ${({ theme }) => theme['yellow-light']};

    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: bold;

    line-height: 1.3;
    padding: 0.3rem 0.7rem;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.3;

    text-align: center;
    color: ${({ theme }) => theme['base-subtitle']};
    margin-bottom: 0.8rem;
  }

  p {
    text-align: center;
    color: ${({ theme }) => theme['base-label']};

    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: 3.2rem;
  }
`

export const FooterCard = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    > span {
      font-family: 'Roboto', sans-serif;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.3;
    }

    > strong {
      font-family: 'Baloo 2', sans-serif;
      font-size: 2.4rem;
      font-weight: 800;
      line-height: 1.3;
    }
  }

  div:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    > a {
      background: ${({ theme }) => theme['purple-dark']};
      padding: 0.8rem;
      border-radius: 0.6rem;
      display: flex;
      transition: background 0.2s;

      &:hover {
        background: ${({ theme }) => theme['purple-base']};
      }
    }
  }
`

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.6rem;

  background-color: ${({ theme }) => theme['base-button']};
  padding: 0.8rem 1.2rem;

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`