import { NavLink } from 'react-router-dom'
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

export function Payment() {
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
              <button>
                <CreditCard size={16} color="#8047F8" />
                CARTÃO DE CRÉDITO
              </button>

              <button>
                <Bank size={16} color="#8047F8" />
                CARTÃO DE DÉBITO
              </button>

              <button>
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
              <PurchaseItems />
              <PurchaseItems />
            </ul>

            <footer>
              <section>
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </section>

              <section>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </section>

              <section>
                <strong>Total</strong>
                <strong>R$ 33,20</strong>
              </section>

              <button>Confirmar pedido</button>
            </footer>
          </Details>
        </section>
      </main>
    </PaymentContainer>
  )
}
