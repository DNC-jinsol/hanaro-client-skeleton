import { AppNav } from '../components/AppNav'
import { SelectedDomainStatus } from '../components/SelectedDomainStatus'

export function HomePage() {
  return (
    <main className="app">
      <section className="app-shell">
        <h1>Hanaro Frontend Skeleton</h1>
        <p>3개 도메인이 공통으로 사용할 프론트엔드 스켈레톤입니다.</p>
        <AppNav />
        <SelectedDomainStatus />
      </section>
    </main>
  )
}
