import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Grid,
  Typography,
  useTheme,
  Button,
  TextField
} from '@mui/material'
import type { NextPage } from 'next'

import Layout from 'components/Layout'
import Products from 'components/Products'
import { STypography } from 'styles/orders.new'
import Items from 'components/Items'

const NewOrder: NextPage = () => {
  const theme = useTheme()

  return (
    <Layout>
      <Grid container padding={theme.spacing(2)} spacing={theme.spacing(1)}>
        <Grid item xs={12} md={8}>
          <Card variant="outlined" sx={{ minHeight: '180px' }}>
            <CardHeader
              title="Cliente"
              avatar={<FontAwesomeIcon icon="user" size="1x" />}
            />
            <CardContent>
              <Grid container spacing={theme.spacing(1)}>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6">
                    <strong>Razão Social: </strong> FARMÁCIA PERMANENTE
                  </Typography>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Typography variant="h6">
                    <strong>Nome Fantasia: </strong> FARMÁCIA PERMANENTE
                  </Typography>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Typography variant="h6">
                    <strong>CNPJ: </strong> 03.636.036/0001-54
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h6">
                    <strong>Endereço: </strong> Rua Estudante José de Oliveira
                    Leite, Nº 255, Arapiraca, Alagoas
                  </Typography>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Typography variant="h6">
                    <strong>E-mail: </strong> permanente@permanente.com.br
                  </Typography>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Typography variant="h6">
                    <strong>Telefone: </strong> 3522-7857
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={{ minHeight: '180px' }}>
            <CardHeader
              title="Carrinho"
              avatar={<FontAwesomeIcon icon="shopping-cart" size="1x" />}
            />
            <CardContent>
              <Typography align="center" variant="h4">
                R$ 485,99
              </Typography>
            </CardContent>

            <CardActions>
              <Typography align="center" variant="body1" sx={{ width: '50%' }}>
                Total Itens: 10
              </Typography>
              <Typography align="center" variant="body1" sx={{ width: '50%' }}>
                Total Unidades: 10
              </Typography>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card variant="outlined" sx={{ height: '180px' }}>
            <CardHeader
              title="Produtos"
              avatar={<FontAwesomeIcon icon="list" size="1x" />}
              action={
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  startIcon={<FontAwesomeIcon icon="plus" size="1x" />}
                >
                  Adicionar produto
                </Button>
              }
            />
            <CardContent>
              <Items />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default NewOrder
