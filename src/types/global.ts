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

export type Products = {
  company: string
  branch: string
  code: string
  description: string
  um: string
  ean: string
  activePrinciple: string | undefined
  group: string
  category: string
  subcategory: string
  model: string
  provider: string
  multiple: number
  taxes: number | undefined
  promotional: string
  balance: number
  price1: number
  price2: number | undefined
  price3: number | undefined
  price4: number | undefined
  price5: number | undefined
}
