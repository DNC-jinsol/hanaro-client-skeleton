import { AppNav } from '../components/AppNav'
import { SelectedDomainStatus } from '../components/SelectedDomainStatus'
import { ApiError } from '../api/client'
import { useInsertSampleCustomerMutation } from '../queries/sample/useInsertSampleCustomerMutation'
import { useSampleCustomersQuery } from '../queries/sample/useSampleCustomersQuery'

export function SampleApiPage() {
  const { data, isLoading, isError, error } = useSampleCustomersQuery()
  const { mutate, isPending } = useInsertSampleCustomerMutation()

  const handleInsertSample = () => {
    const timestamp = Date.now()

    mutate({
      name: `Sample User ${timestamp}`,
      email: `sample.${timestamp}@example.com`,
      city: 'Seoul',
      status: 'ACTIVE',
    })
  }

  return (
    <main className="app">
      <section className="app-shell">
        <h1>샘플 API 테스트</h1>
        <p>`GET /customers` 호출 결과를 확인하는 테스트 페이지입니다.</p>
        <AppNav />
        <SelectedDomainStatus />
        <div className="app-actions">
          <button
            type="button"
            className="app-action-button"
            onClick={handleInsertSample}
            disabled={isPending}
          >
            {isPending ? 'INSERT 처리 중...' : '샘플 고객 1건 INSERT'}
          </button>
        </div>

        {isLoading && (
          <section className="app-result">
            <h2>로딩 중</h2>
            <p>고객 목록을 조회하고 있습니다.</p>
          </section>
        )}

        {isError && (
          <section className="app-result">
            <h2>오류</h2>
            <pre className="app-result-pre">
              {JSON.stringify(
                {
                  message:
                    error instanceof ApiError
                      ? error.message
                      : '알 수 없는 오류가 발생했습니다.',
                  status: error instanceof ApiError ? error.status : undefined,
                  data: error instanceof ApiError ? error.data : undefined,
                },
                null,
                2,
              )}
            </pre>
          </section>
        )}

        {!isLoading && !isError && (
          <section className="app-result">
            <h2>응답 결과</h2>
            <pre className="app-result-pre">
              {JSON.stringify(data, null, 2)}
            </pre>
          </section>
        )}
      </section>
    </main>
  )
}
