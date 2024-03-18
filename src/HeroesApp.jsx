import { AuthProvider } from './auth'
import { AppRouter } from './router/AppRouter'

export const HeroesApp = () => {
  return (
    // Lo que está contenido dentro de AuthProvider tiene acceso a ese contexto:
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}
