import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { AboutContainer } from './styles'
import { useContext } from 'react'
import { FormContext } from '../../../../contexts/FormContext'

export function About() {
  const { userPurchase } = useContext(FormContext)

  const { city, neighborhood, number, paymentType, street, uf } = userPurchase

  return (
    <AboutContainer>
      <section>
        <MapPin size={16} color="white" weight="fill" className="map" />
        <div>
          <p>
            Entrega em{' '}
            <strong>
              {`Rua ${street}`}, {number}
            </strong>
          </p>
          <span>{`${neighborhood} - ${city}, ${uf}`}</span>
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
          <strong>{paymentType}</strong>
        </div>
      </section>
    </AboutContainer>
  )
}
