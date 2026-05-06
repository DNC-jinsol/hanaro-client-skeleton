import { Link, Navigate, Route, Routes } from 'react-router-dom'
import styles from './App.module.css'

function HomePage() {
  return (
    <main className={styles.app}>
      <section className={styles.appShell}>
        <h1>Hanaro Frontend Skeleton</h1>
        <p>3개 도메인이 공통으로 사용할 프론트엔드 스켈레톤입니다.</p>

        <nav className={styles.appNav} aria-label="도메인 내비게이션">
          <Link to="/route-management">동선관리</Link>
          <Link to="/sales">영업관리</Link>
          <Link to="/crm">마케팅 CRM</Link>
        </nav>
      </section>
    </main>
  )
}

function RouteManagementPage() {
  return (
    <main className={styles.app}>
      <section className={styles.appShell}>
        <h1>동선관리</h1>
        <p>동선관리 도메인 placeholder 페이지입니다.</p>
      </section>
    </main>
  )
}

function SalesPage() {
  return (
    <main className={styles.app}>
      <section className={styles.appShell}>
        <h1>영업관리</h1>
        <p>영업관리 도메인 placeholder 페이지입니다.</p>
      </section>
    </main>
  )
}

function CrmPage() {
  return (
    <main className={styles.app}>
      <section className={styles.appShell}>
        <h1>마케팅 CRM</h1>
        <p>마케팅 CRM 도메인 placeholder 페이지입니다.</p>
      </section>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/route-management" element={<RouteManagementPage />} />
      <Route path="/sales" element={<SalesPage />} />
      <Route path="/crm" element={<CrmPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
