import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { AboutContainer } from './styles'

export function About() {
  return (
    <AboutContainer>
      <section>
        <MapPin size={16} color="white" weight="fill" className="map" />
        <div>
          <p>
            Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
          </p>
          <span>Farrapos - Porto Alegre, RS</span>
        </div>
      </section>

      <section>
        <Timer size={16} color="white" weight="fill" className="timer" />
        <div>
          <p>Previsão de entrega</p>
          <strong>20 min - 30 min</strong>
        </div>
      </section>

      <section>
        <CurrencyDollar
          size={16}
          color="white"
          weight="fill"
          className="dollar"
        />
        <div>
          <p>Pagamento na entrega</p>
          <strong>Cartão de Crédito</strong>
        </div>
      </section>
    </AboutContainer>
  )
}
