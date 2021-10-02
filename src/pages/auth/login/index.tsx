import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import Image from 'next/image'

import * as S from '../../../styles/auth.login'

const Login: NextPage = () => {
  return (
    <S.Wrapper>
      <S.Aside>
        <S.TextContainer>
          <S.Welcome>Bem-vindo(a) ao nosso portal de vendas</S.Welcome>

          <S.Description>
            Todas as marcas reunidas em um único lugar.
          </S.Description>
        </S.TextContainer>

        <S.DeliveryIllustration
          src="/img/delivery.svg"
          alt="Imagem de uma mão segurando um smartphone e um caminhão ao fundo simbilizando o acompanhamento da entrega de um pedido."
        />

        <S.Logos>
          <Image
            src="/img/logos/asa-branca.png"
            alt="Logo da empresa Asa Branca Distribuidora"
            width={170}
            height={100}
          />
          <Image
            src="/img/logos/cose.png"
            alt="Logo da empresa Cose Importadora"
            width={170}
            height={70}
          />
          <Image
            src="/img/logos/maceio-distribuidora.png"
            alt="Logo da empresa Maceió Distribuidora"
            width={170}
            height={60}
          />
          <Image
            src="/img/logos/mais-leve.png"
            alt="Logo da empresa Mais Leve"
            width={170}
            height={80}
          />
        </S.Logos>
      </S.Aside>

      <S.Main>
        <S.FormWrapper>
          <S.Title>Login</S.Title>

          <S.Form action="#">
            <S.Label htmlFor="username">Usuário</S.Label>
            <S.Input
              type="text"
              name="username"
              id="username"
              placeholder="Digite o seu usuário"
              required
            />

            <S.Label htmlFor="password">Senha</S.Label>
            <S.Input
              type="password"
              name="password"
              id="password"
              placeholder="Digite a sua senha"
              required
            />

            <S.Button type="submit">Entrar</S.Button>
          </S.Form>
        </S.FormWrapper>
      </S.Main>
    </S.Wrapper>
  )
}

export default Login
