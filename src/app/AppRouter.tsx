import { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { APP_ROUTES, HOME_ROUTE } from '../routes/routeConfig'

function RouteFallback() {
  return (
    <main className="app">
      <section className="app-shell">
        <h1>로딩 중</h1>
        <p>페이지를 불러오고 있습니다.</p>
      </section>
    </main>
  )
}

export function AppRouter() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        {APP_ROUTES.map(({ key, path, Component }) => (
          <Route key={key} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<Navigate to={HOME_ROUTE.path} replace />} />
      </Routes>
    </Suspense>
  )
}
