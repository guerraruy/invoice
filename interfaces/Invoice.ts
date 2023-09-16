export interface invoiceItems {
  description: string
  amount: number
}

export interface Client {
  name: string
}

export interface Invoice {
  _id: string
  paid: boolean
  items: invoiceItems[]
  dueDate: Date
  clientId: string
  client?: Client
}
