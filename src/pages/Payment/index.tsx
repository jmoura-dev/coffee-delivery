import { NavLink, useNavigate } from 'react-router-dom'
import { ChangeEvent, useContext, useState } from 'react'
import {
  FormContainer,
  PaymentContainer,
  Details,
  GenericInput,
  PlaceInput,
  UfInput,
} from './styles'
import {
  ArrowCircleLeft,
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { PurchaseItems } from './components/PurchaseItems'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { FormContext } from '../../contexts/FormContext'

export function Payment() {
  const { coffeeCart, setCoffeeCart } = useContext(CoffeeContext)
  const { setUserPurchase } = useContext(FormContext)

  const [cep, setCep] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [neighborhood, setNeighborhood] = useState<string>('')
  const [number, setNumber] = useState<string>('')
  const [street, setStreet] = useState<string>('')
  const [uf, setUf] = useState<string>('')
  const [complement, setComplement] = useState<string>('')
  const [paymentType, setPaymentType] = useState<string>('')

  const navigate = useNavigate()

  function onFinishBuy() {
    if (!cep || !city || !neighborhood || !number || !street || !uf) {
      return alert('Preencha todos os campos que são obrigatórios.')
    }

    if (!paymentType) {
      return alert('Selecione o tipo de pagamento')
    }

    setUserPurchase({
      cep,
      city,
      neighborhood,
      number,
      street,
      uf,
      complement,
      paymentType,
    })
    navigate('/order')
    setCoffeeCart([])
  }

  function handleSelectPaymentType(event: React.MouseEvent<HTMLButtonElement>) {
    const value = event.currentTarget.value
    setPaymentType(value)
  }

  const arrayItems = coffeeCart.map((item) => {
    return item.amount * item.price
  })

  const totalItems = arrayItems.reduce((acc, item) => {
    return acc + item
  }, 0)

  return (
    <PaymentContainer>
      <NavLink to="/">
        <ArrowCircleLeft size={20} />
        Voltar
      </NavLink>
      <main>
        <section>
          <h2>Complete seu pedido</h2>
          <FormContainer>
            <div>
              <MapPinLine size={22} color="#C47F17" />
              <div>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </div>

            <GenericInput
              placeholder="CEP"
              title="CEP"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCep(e.target.value)
              }
            />

            <PlaceInput
              placeholder="Rua"
              title="RUA"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setStreet(e.target.value)
              }
            />

            <section>
              <GenericInput
                placeholder="Número"
                title="NÚMERO"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNumber(e.target.value)
                }
              />

              <PlaceInput
                placeholder="Complemento  (opcional)"
                title="COMPLEMENTO"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setComplement(e.target.value)
                }
              />
            </section>

            <section>
              <GenericInput
                placeholder="Bairro"
                title="Bairro"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNeighborhood(e.target.value)
                }
              />
              <PlaceInput
                placeholder="Cidade"
                title="cidade"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCity(e.target.value)
                }
              />
              <UfInput
                placeholder="UF"
                title="UF"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setUf(e.target.value)
                }
              />
            </section>
          </FormContainer>

          <footer>
            <div>
              <CurrencyDollar size={22} color="#8047F8" />
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </div>

            <div>
              <button
                value="Cartão de Crédito"
                onClick={handleSelectPaymentType}
              >
                <CreditCard size={16} color="#8047F8" />
                CARTÃO DE CRÉDITO
              </button>

              <button
                value="Cartão de Débito"
                onClick={handleSelectPaymentType}
              >
                <Bank size={16} color="#8047F8" />
                CARTÃO DE DÉBITO
              </button>

              <button value="Dinheiro" onClick={handleSelectPaymentType}>
                <Money size={16} color="#8047F8" />
                DINHEIRO
              </button>
            </div>
          </footer>
        </section>

        <section>
          <h2>Cafés selecionados</h2>
          <Details>
            <ul>
              {coffeeCart.map((item) => {
                return (
                  <PurchaseItems
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    amount={item.amount}
                    totalPrice={Number((item.price * item.amount).toFixed(2))}
                  />
                )
              })}
            </ul>

            <footer>
              <section>
                <span>Total de itens</span>
                <span>{`R$ ${totalItems.toFixed(2)}`}</span>
              </section>

              <section>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </section>

              <section>
                <strong>Total</strong>
                <strong>{`R$ ${(totalItems + 3.5).toFixed(2)}`}</strong>
              </section>

              <button onClick={onFinishBuy}>Confirmar pedido</button>
            </footer>
          </Details>
        </section>
      </main>
    </PaymentContainer>
  )
}
