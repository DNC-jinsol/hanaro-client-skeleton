export type SampleCustomerStatus = 'ACTIVE' | 'INACTIVE'

export type SampleCustomer = {
  id: number
  name: string
  email: string
  city: string
  status: SampleCustomerStatus
  created_at: string
}

export type GetSampleCustomersResponse = {
  customers: SampleCustomer[]
}

export type InsertSampleCustomerRequest = {
  name: string
  email: string
  city: string
  status: SampleCustomerStatus
}

export type InsertSampleCustomerResponse = {
  customer: SampleCustomer
}
