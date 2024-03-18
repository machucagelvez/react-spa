import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import { LoginPage } from '../auth'
import { childHeroesRoutes, HeroesRoutes } from '../heroes/routes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

const router = createBrowserRouter([
  {
    path: 'login',
    element: (
      // Todo lo que está dentro del conponente PublicRoute serían las rutas públicas:
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: '/',
    element: (
      // Todo lo que está dentro del conponente PrivateRoute serían las rutas privadas:
      <PrivateRoute>
        <HeroesRoutes />
      </PrivateRoute>
    ),
    children: childHeroesRoutes,
  },
  {
    path: '/*',
    element: <Navigate to={'marvel'} />,
  },
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
