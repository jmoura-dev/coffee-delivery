import { NavLink } from 'react-router-dom'
import {
  FormContainer,
  PaymentContainer,
  Details,
  GenericInput,
  PlaceInput,
  UfInput,
} from './styles'
import { ArrowCircleLeft, MapPinLine } from 'phosphor-react'

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
        </section>

        <section>
          <h2>Cafés selecionados</h2>
          <Details></Details>
        </section>
      </main>
    </PaymentContainer>
  )
}
