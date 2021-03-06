import Layout from 'components/Layout'
import type { NextPage } from 'next'

import { user } from 'services/api'

const Home: NextPage = () => {
  return (
    <Layout>
      <h1>{user.username}</h1>
    </Layout>
  )
}

export default Home
