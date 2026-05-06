import { useNavigate } from 'react-router-dom'

import { APP_ROUTES } from '../routes/routeConfig'

export function AppNav() {
  const navigate = useNavigate()

  return (
    <nav className="app-nav" aria-label="도메인 내비게이션">
      {APP_ROUTES.map((route) => (
        <button
          key={route.key}
          type="button"
          className="app-nav-button"
          onClick={() => navigate(route.path)}
        >
          {route.label}
        </button>
      ))}
    </nav>
  )
}
