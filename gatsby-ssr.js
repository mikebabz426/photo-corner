import React from "react"
import { Auth0Provider } from "@auth0/auth0-react"

export const wrapRootElement = ({ element }) => {
  return (
    <Auth0Provider
      domain={`${process.env.AUTH0_DOMAIN}`}
      clientId={`${process.env.AUTH0_CLIENTID}`}
      redirectUri={`${process.env.AUTH0_CALLBACK}`}
    >
      {element}
    </Auth0Provider>
  )
}
