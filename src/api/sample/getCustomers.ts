import { get } from '../client'

export async function getSampleCustomers(): Promise<unknown> {
  return get<unknown>('/customers')
}
