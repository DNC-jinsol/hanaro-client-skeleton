import { AppNav } from '../components/AppNav'
import { SelectedDomainStatus } from '../components/SelectedDomainStatus'

export function SalesPage() {
  return (
    <main className="app">
      <section className="app-shell">
        <h1>영업관리</h1>
        <p>영업관리 도메인 placeholder 페이지입니다.</p>
        <AppNav />
        <SelectedDomainStatus />
      </section>
    </main>
  )
}
