/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { useContext, useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ToastContainer } from "react-toastify"

import Header from "./header"
import "./global.css"
import { UserContext } from "../context/UserContext"
import { useLocation } from "@reach/router"
import Footer from "./footer"

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const { setCurrentUser, currentUser } = useContext(UserContext)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ToastContainer />
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        currentUser={currentUser}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main className="flex-1">
          <div className=" xl:mx-10 ">
            <div className="mx-[140px] my-[70px] md:max-w-full lg:max-w-[84%]">
              {children}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Layout
