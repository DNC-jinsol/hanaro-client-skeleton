import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 조회 성공 후 1분 동안은 데이터를 최신(fresh) 상태로 간주한다.
      // 이 시간 안에는 같은 쿼리를 다시 써도 오래된 데이터로 보지 않는다.
      staleTime: 1000 * 60 * 1,
      // 어떤 화면에서도 더 이상 사용하지 않는 쿼리 캐시를 10분 동안 메모리에 유지한다.
      // 그 안에 다시 같은 화면으로 돌아오면 캐시를 재사용할 수 있고, 시간이 지나면 정리 대상이 된다.
      gcTime: 1000 * 60 * 10,
      // 조회 실패 시 1회만 재시도한다.
      retry: 1,
      // 브라우저 포커스 복귀 시 자동 재조회하지 않는다.
      refetchOnWindowFocus: false,
    },
  },
})
