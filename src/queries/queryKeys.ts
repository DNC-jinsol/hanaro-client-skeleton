/**
 * 프론트엔드 스켈레톤 단계에서 사용할 TanStack Query key 규칙.
 *
 * 규칙:
 * - query key는 항상 배열 형태로 작성한다.
 * - 순서는 domain -> resource -> view -> 식별자/필터를 유지한다.
 * - 목록 조회는 `list`, 단건 조회는 `detail`을 사용한다.
 * - 실제 도메인명과 리소스명은 실서비스 구현 단계에서 확정한다.
 */

export type QueryKeyView = 'list' | 'detail' | 'summary' | 'options'

export type AppQueryKey = readonly unknown[]

export function createQueryKey(
  domain: string,
  resource: string,
  view: QueryKeyView,
  ...rest: readonly unknown[]
): AppQueryKey {
  return [domain, resource, view, ...rest] as const
}

/**
 * 향후 구현 시 사용할 수 있는 예시 패턴:
 *
 * createQueryKey('crm', 'customers', 'list')
 * createQueryKey('crm', 'customers', 'detail', customerId)
 * createQueryKey('sales', 'quotes', 'list', filters)
 * createQueryKey('route-management', 'subjects', 'summary')
 */
