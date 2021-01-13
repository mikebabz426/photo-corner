/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { Auth0Provider } from "@auth0/auth0-react"

export const wrapRootElement = ({ element }) => {
  return (
    <Auth0Provider
      domain="dev--6zxelc5.eu.auth0.com"
      clientId="ziZ0SMv62QDrqUgi2r1q1Rpk22oEUEBO"
      redirectUri="http://localhost:8000/app"
    >
      {element}
    </Auth0Provider>
  )
}
