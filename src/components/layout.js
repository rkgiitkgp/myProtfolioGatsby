/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

import "./layout.css"

const Layout = props => {
  return (
    <div>
      <main>{props.children}</main>
    </div>
  )
}

export default Layout
