import { styled } from 'styled-components'

export const OrderContainer = styled.div`
  > a {
    display: flex;
    align-items: center;
    justify-content: left;
    margin: 1.5rem 0;

    text-decoration: none;
    gap: 0.6rem;
    width: 8.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.6rem;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({ theme }) => theme['purple-base']};
    background: ${({ theme }) => theme['base-button']};

    &:hover {
      background: ${({ theme }) => theme['base-hover']};
    }
  }

  > header {
    margin-top: 5rem;

    h2 {
      font-family: 'Baloo 2';
      font-size: 3.2rem;
      font-weight: 800;
      line-height: 1.3;
      color: ${({ theme }) => theme['yellow-dark']};
    }

    p {
      font-size: 2rem;
      font-weight: 400;
      line-height: 1.3;
    }
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3.2rem;
  }
`
