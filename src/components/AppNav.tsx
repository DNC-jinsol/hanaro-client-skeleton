import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { APP_ROUTES, findRouteByPath } from '../routes/routeConfig'
import { useAppStore } from '../store/appStore'

export function AppNav() {
  const navigate = useNavigate()
  const location = useLocation()
  const selectedDomainKey = useAppStore((state) => state.selectedDomainKey)
  const setSelectedDomainKey = useAppStore(
    (state) => state.setSelectedDomainKey,
  )

  useEffect(() => {
    const currentRoute = findRouteByPath(location.pathname)

    if (currentRoute && currentRoute.key !== selectedDomainKey) {
      setSelectedDomainKey(currentRoute.key)
    }
  }, [location.pathname, selectedDomainKey, setSelectedDomainKey])

  return (
    <div className="app-nav-wrap">
      <p className="app-nav-status">
        AppNav에서 읽은 현재 선택 키:
        <strong> {selectedDomainKey}</strong>
      </p>
      <nav className="app-nav" aria-label="도메인 내비게이션">
        {APP_ROUTES.map((route) => (
          <button
            key={route.key}
            type="button"
            className={
              route.key === selectedDomainKey
                ? 'app-nav-button app-nav-button-active'
                : 'app-nav-button'
            }
            onClick={() => {
              setSelectedDomainKey(route.key)
              navigate(route.path)
            }}
          >
            {route.label}
          </button>
        ))}
      </nav>
    </div>
  )
}
