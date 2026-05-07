import { useQuery } from '@tanstack/react-query'

import { getSampleCustomers } from '../../api/sample/getCustomers'
import { createQueryKey } from '../queryKeys'

export const SAMPLE_CUSTOMERS_QUERY_KEY = createQueryKey(
  'sample',
  'customers',
  'list',
)

export function useSampleCustomersQuery() {
  return useQuery({
    queryKey: SAMPLE_CUSTOMERS_QUERY_KEY,
    queryFn: getSampleCustomers,
  })
}
