import { styled } from 'styled-components'

export const PurchaseItemsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: start;
  justify-content: left;
  padding-bottom: 2.4rem;
  border-bottom: 1px solid ${({ theme }) => theme['base-button']};

  > img {
    height: 6.4rem;
    width: 6.4rem;
  }

  > section {
    display: flex;
    flex-direction: column;
    margin-left: 1.6rem;

    strong {
      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.3;
      color: ${({ theme }) => theme['base-subtitle']};
    }
  }

  > span {
    position: absolute;
    top: 0;
    right: 0;

    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: bold;
  }
`

export const ControlAmount = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.8rem;
    background: ${({ theme }) => theme['base-button']};
    border-radius: 6px;
    gap: 0.7rem;

    button {
      border: none;
      background: none;
      color: ${({ theme }) => theme['purple-dark']};
    }
    button:hover {
      cursor: pointer;
      color: ${({ theme }) => theme['purple-base']};
    }

    span {
      color: ${({ theme }) => theme['base-title']};
      font-size: 1.5rem;
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 6px;
    background: ${({ theme }) => theme['base-button']};
    padding: 0.6rem 0.8rem;
    gap: 0.4rem;

    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    line-height: 1.6;
    text-transform: uppercase;
  }

  > button:hover {
    cursor: pointer;
    background: ${({ theme }) => theme['base-hover']};
  }
`
