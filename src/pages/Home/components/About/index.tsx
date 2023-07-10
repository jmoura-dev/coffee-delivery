import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { AboutContainer, TagsContainer, TextAbout } from './styles'

import ImageAbout from '../../../../assets/ImagemSobre.png'

export function About() {
  return (
    <AboutContainer>
      <TextAbout>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <TagsContainer>
          <div>
            <span>
              <ShoppingCart size={16} color="white" weight="fill" />
            </span>
            Compra simples e segura
          </div>

          <div>
            <span>
              <Package size={16} color="white" weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </div>

          <div>
            <span>
              <Timer size={16} color="white" weight="fill" />
            </span>
            Entrega rápida e rastreada
          </div>

          <div>
            <span>
              <Coffee size={16} color="white" weight="fill" />
            </span>
            O café chega fresquinho até você
          </div>
        </TagsContainer>
      </TextAbout>

      <img src={ImageAbout} alt="" />
    </AboutContainer>
  )
}
