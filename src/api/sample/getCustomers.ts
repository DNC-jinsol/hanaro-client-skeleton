import { get } from '../client'
import type { GetSampleCustomersResponse } from './types'

export async function getSampleCustomers(): Promise<GetSampleCustomersResponse> {
  return get<GetSampleCustomersResponse>('/customers')
}
