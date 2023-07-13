import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
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

export function Payment() {
  const { coffeeCart } = useContext(CoffeeContext)

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

            <GenericInput placeholder="CEP" title="CEP" />

            <PlaceInput placeholder="Rua" title="RUA" />

            <section>
              <GenericInput placeholder="Número" title="NÚMERO" />

              <PlaceInput
                placeholder="Complemento  (opcional)"
                title="COMPLEMENTO"
              />
            </section>

            <section>
              <GenericInput placeholder="Bairro" title="Bairro" />
              <PlaceInput placeholder="Cidade" title="cidade" />
              <UfInput placeholder="UF" title="UF" />
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
              <button value="credit">
                <CreditCard size={16} color="#8047F8" />
                CARTÃO DE CRÉDITO
              </button>

              <button value="debit">
                <Bank size={16} color="#8047F8" />
                CARTÃO DE DÉBITO
              </button>

              <button value="money">
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
                <span>{`R$ ${totalItems}`}</span>
              </section>

              <section>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </section>

              <section>
                <strong>Total</strong>
                <strong>{`R$ ${(totalItems + 3.5).toFixed(2)}`}</strong>
              </section>

              <button>Confirmar pedido</button>
            </footer>
          </Details>
        </section>
      </main>
    </PaymentContainer>
  )
}
