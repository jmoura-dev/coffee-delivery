import { styled } from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  margin: 3rem 0;
  padding: 2rem 0;

  background: linear-gradient(
    to right,
    ${({ theme }) => theme.background},
    ${({ theme }) => theme['yellow-light']} 90%
  );
  border-radius: 8px;

  > img {
    height: 36rem;
    width: 44rem;
  }
`

export const TextAbout = styled.div`
  display: flex;

  flex-direction: column;
  max-width: 56rem;
  color: ${({ theme }) => theme['purple-dark']};

  h1 {
    color: ${({ theme }) => theme['base-title']};

    font-family: 'Baloo 2', sans-serif;
    font-size: 4.2rem;
    font-weight: 800;
    line-height: 130%;
    margin-bottom: 1.6rem;
  }

  p {
    color: ${({ theme }) => theme['base-subtitle']};

    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    line-height: 130%;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  padding: 5rem 0;

  div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.8rem;
    font-size: 1.4rem;

    span {
      display: flex;
      background: ${({ theme }) => theme['yellow-dark']};
      padding: 0.8rem;
      border-radius: 100%;
    }
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: stretch;
    gap: 0.8rem;
    font-size: 1.4rem;

    span {
      display: flex;
      background: ${({ theme }) => theme['base-text']};
      padding: 0.8rem;
      border-radius: 100%;
    }
  }

  div:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: stretch;
    font-size: 1.4rem;

    gap: 0.8rem;

    span {
      display: flex;
      background: ${({ theme }) => theme['yellow-base']};
      padding: 0.8rem;
      border-radius: 100%;
    }
  }

  div:nth-child(4) {
    display: flex;
    align-items: center;
    justify-content: stretch;
    font-size: 1.4rem;

    gap: 0.8rem;

    span {
      display: flex;
      background: ${({ theme }) => theme['purple-base']};
      padding: 0.8rem;
      border-radius: 100%;
    }
  }
`
