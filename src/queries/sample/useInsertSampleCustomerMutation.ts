import { useMutation, useQueryClient } from '@tanstack/react-query'

import {
  insertSampleCustomer,
  type InsertSampleCustomerRequest,
} from '../../api/sample/insertCustomer'
import { SAMPLE_CUSTOMERS_QUERY_KEY } from './useSampleCustomersQuery'

export function useInsertSampleCustomerMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (payload: InsertSampleCustomerRequest) =>
      insertSampleCustomer(payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: SAMPLE_CUSTOMERS_QUERY_KEY,
      })
    },
  })
}
