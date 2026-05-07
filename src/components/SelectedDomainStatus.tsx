import { APP_ROUTES } from '../routes/routeConfig'
import { useAppStore } from '../store/appStore'

export function SelectedDomainStatus() {
  const selectedDomainKey = useAppStore((state) => state.selectedDomainKey)

  const selectedRoute = APP_ROUTES.find(
    (route) => route.key === selectedDomainKey,
  )

  return (
    <section className="app-shared-state" aria-live="polite">
      <h2>공유 상태 확인</h2>
      <p>
        현재 선택된 도메인 키:
        <strong> {selectedDomainKey}</strong>
      </p>
      <p>
        현재 선택된 도메인 라벨:
        <strong> {selectedRoute?.label ?? '알 수 없음'}</strong>
      </p>
      <p className="app-shared-state-caption">
        이 값은 Zustand store에 저장되며, 여러 컴포넌트에서 동시에 읽고
        있습니다.
      </p>
    </section>
  )
}
