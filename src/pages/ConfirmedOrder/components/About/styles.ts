import { styled } from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 50rem;
  width: 100%;

  border: double 1px transparent;
  border-radius: 0.6rem 4rem;
  background-image: linear-gradient(
      ${({ theme }) => theme.background},
      ${({ theme }) => theme.background}
    ),
    radial-gradient(
      circle at top left,
      ${({ theme }) => theme['yellow-base']},
      ${({ theme }) => theme['purple-base']}
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 4rem;
  gap: 3.2rem;

  section {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 1.8rem;

    div {
      display: flex;
      flex-direction: column;

      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.3;
      color: ${({ theme }) => theme['base-text']};

      strong {
        font-weight: bold;
      }
    }

    .map {
      background: ${({ theme }) => theme['purple-base']};
      width: 3rem;
      height: 3rem;
      padding: 0.7rem;
      border-radius: 50%;
    }

    .timer {
      background: ${({ theme }) => theme['yellow-base']};
      width: 3rem;
      height: 3rem;
      padding: 0.7rem;
      border-radius: 50%;
    }

    .dollar {
      background: ${({ theme }) => theme['yellow-dark']};
      width: 3rem;
      height: 3rem;
      padding: 0.7rem;
      border-radius: 50%;
    }
  }
`
