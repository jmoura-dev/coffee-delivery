import { styled } from 'styled-components'

export const PaymentContainer = styled.div`
  > a {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 0.5rem;
    width: 7rem;

    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 800;
    text-decoration: none;

    color: ${({ theme }) => theme['purple-base']};
    margin: 2rem 0;
  }

  main {
    display: grid;
    grid-template-columns: 2fr 1fr;

    h2 {
      font-size: 'Baloo 2', sans-serif;
      font-size: 1.8rem;
      font-weight: bold;
      line-height: 1.3;

      color: ${({ theme }) => theme['base-subtitle']};
    }
  }
`

export const FormContainer = styled.form`
  max-width: 64rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > div {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.6rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;

      p {
        color: ${({ theme }) => theme['base-subtitle']};
        font-size: 1.6rem;
        line-height: 1.3;
      }

      span {
        color: ${({ theme }) => theme['base-text']};
        font-size: 1.4rem;
        line-height: 1.3;
        opacity: 0.9;
      }
    }
  }

  > section {
    display: flex;
    gap: 1rem;
  }
`

const baseInput = styled.input`
  background: ${({ theme }) => theme['base-input']};
  padding: 1.2rem;
  border: none;
  border-radius: 5px;

  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-label']};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['yellow-base']};
  }
`

export const GenericInput = styled(baseInput)`
  max-width: 20rem;
  width: 100%;
`

export const PlaceInput = styled(baseInput)`
  width: 100%;
`

export const UfInput = styled(baseInput)`
  max-width: 6rem;
`

export const Details = styled.div``
