export type Seller = {
  company: string
  code: string
  supervisor: string
}

export type Client = {
  company: string
  code: string
  store: string
  name: string
  fantasy_name: string
  cgc: string
  address: string
}

export type Parameters = {
  menu: string[]
  sync: Record<string, unknown>
  permissions: Record<string, unknown>
}

export type User = {
  username: string
  name: string
  sellers: Seller[]
  parameters: Parameters
  clients: Client[]
}
