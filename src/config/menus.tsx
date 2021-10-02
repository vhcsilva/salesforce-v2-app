import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const AppBarItems = [
  {
    code: 'home',
    title: 'Início',
    href: '/',
    icon: <FontAwesomeIcon icon="home" />
  },
  {
    code: 'order',
    title: 'Novo Pedido',
    href: '/orders/new',
    icon: <FontAwesomeIcon icon="cart-plus" />
  },
  {
    code: 'orders',
    title: 'Meus Pedidos',
    href: '/orders',
    icon: <FontAwesomeIcon icon="shopping-basket" />
  },
  {
    code: 'policies',
    title: 'Políticas',
    href: '/policies',
    icon: <FontAwesomeIcon icon="percentage" />
  },
  {
    code: 'products',
    title: 'Produtos',
    href: '/products',
    icon: <FontAwesomeIcon icon="tags" />
  }
]
