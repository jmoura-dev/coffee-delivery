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
    grid-template-columns: 57% 1fr;
    gap: 3.2rem;

    h2 {
      font-size: 'Baloo 2', sans-serif;
      font-size: 1.8rem;
      font-weight: bold;
      line-height: 1.3;
      margin-bottom: 1.6rem;

      color: ${({ theme }) => theme['base-subtitle']};
    }

    > section {
      > footer {
        background: ${({ theme }) => theme['base-card']};
        padding: 4rem;
        border-radius: 0.8rem;
        margin-top: 1.3rem;

        > div:first-child {
          display: flex;
          gap: 0.8rem;

          p {
            font-family: 'Roboto', sans-serif;
            font-size: 1.6rem;
            line-height: 1.3;
            color: ${({ theme }) => theme['base-subtitle']};
          }
          span {
            font-family: 'Roboto', sans-serif;
            font-size: 1.4rem;
            line-height: 1.3;
            color: ${({ theme }) => theme['base-text']};
          }
        }

        > div:last-child {
          display: flex;
          gap: 1.2rem;
          margin-top: 3.2rem;
          justify-content: space-between;

          button {
            height: 4.8rem;
            display: flex;
            align-items: center;
            justify-content: start;
            padding-left: 1.4rem;
            padding-right: 1.4rem;
            gap: 0.8rem;
            border: none;
            border-radius: 8px;
            background: ${({ theme }) => theme['base-button']};
            font-family: 'Roboto', sans-serif;
            font-size: 1.2rem;
            text-transform: uppercase;

            &:focus {
              outline: 0;
              box-shadow: 0 0 0 1px ${({ theme }) => theme['purple-base']};
              background: ${({ theme }) => theme['purple-light']};
            }
          }

          button:hover {
            cursor: pointer;
            background: ${({ theme }) => theme['base-hover']};
          }
        }
      }
    }
  }
`

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  background: ${({ theme }) => theme['base-card']};
  padding: 4rem;
  border-radius: 0.8rem;

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

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  background: ${({ theme }) => theme['base-card']};
  border-radius: 0.6rem 4.4rem;

  > ul {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  > footer {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 2.4rem;
    gap: 1.2rem;

    section {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;

      span {
        font-size: 1.4rem;
        line-height: 1.3;
        color: ${({ theme }) => theme['base-text']};
      }

      strong {
        font-size: 2rem;
        font-weight: bold;
        line-height: 1.3;
        color: ${({ theme }) => theme['base-subtitle']};
      }
    }

    button {
      width: 100%;
      padding: 1.2rem 0.8rem;
      border: none;
      border-radius: 6px;
      margin-top: 1.2rem;
      text-transform: uppercase;
      font-size: 1.4rem;

      background-color: ${({ theme }) => theme['yellow-base']};
      color: ${({ theme }) => theme.white};
      transition: background 0.2s ease;
    }

    button:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme['yellow-dark']};
    }
  }
`
