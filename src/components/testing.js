import React from "react"
import { useAuth0, Auth0Provider } from "@auth0/auth0-react"

const AppPage = () => {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0()
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Oops... {error.message}</div>
  }
  if (isAuthenticated) {
    return (
      <div>
        Hello {user.name}{" "}
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
      </div>
    )
  } else {
    return <button onClick={loginWithRedirect}>Log in</button>
  }
}

const App = () => {
  return (
    <Auth0Provider
      domain="oidc-test.eu.auth0.com"
      clientId="51ynzIhgABxZheLMCcZ9sg3dgqdbmyO5"
      redirectUri={"http://127.0.0.1:8000"}
    >
      <AppPage />
    </Auth0Provider>
  )
}
export default App
