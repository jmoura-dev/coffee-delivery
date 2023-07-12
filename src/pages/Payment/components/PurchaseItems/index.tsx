import { ControlAmount, PurchaseItemsContainer } from './styles'

import Image from '../../../../assets/Café-Gelado.svg'
import { Minus, Plus, Trash } from 'phosphor-react'

interface PurchaseItemsProps {
  image: string
  amount: number
  price: number
  name: string
}

export function PurchaseItems({
  name,
  image,
  price,
  amount,
}: PurchaseItemsProps) {
  return (
    <PurchaseItemsContainer>
      <img src={Image} alt="" />
      <section>
        <strong>Expresso Tradicional</strong>
        <ControlAmount>
          <div>
            <button>
              <Minus size={14} />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} />
            </button>
          </div>
          <button>
            <Trash size={16} color="#4B2995" />
            REMOVER
          </button>
        </ControlAmount>
      </section>
      <span>R$ 9,90</span>
    </PurchaseItemsContainer>
  )
}
