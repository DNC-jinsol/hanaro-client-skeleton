import { post } from '../client'
import type {
  InsertSampleCustomerRequest,
  InsertSampleCustomerResponse,
} from './types'

export async function insertSampleCustomer(
  payload: InsertSampleCustomerRequest,
): Promise<InsertSampleCustomerResponse> {
  return post<InsertSampleCustomerRequest, InsertSampleCustomerResponse>(
    '/customers',
    payload,
  )
}
