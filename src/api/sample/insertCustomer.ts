import { post } from '../client'

export type InsertSampleCustomerRequest = {
  name: string
  email: string
  city: string
  status: string
}

export async function insertSampleCustomer(
  payload: InsertSampleCustomerRequest,
): Promise<unknown> {
  return post<InsertSampleCustomerRequest, unknown>('/customers', payload)
}
