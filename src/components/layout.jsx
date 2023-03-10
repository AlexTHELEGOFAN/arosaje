import React, { useContext, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ToastContainer } from "react-toastify"

import Header from "./header"
import "./global.css"
import { UserContext } from "../context/UserContext"
import Footer from "./footer"

const Layout = ({ children }) => {
  const { setCurrentUser, currentUser } = useContext(UserContext)
  const { filteredAds, setFilteredAds } = useState("")

  // useEffect(() => {
  //   setFilteredAds(
  //     participants.filter(participantToShow =>
  //       participantToShow.fullname
  //         .toLowerCase()
  //         // .replace(/[\u0300-\u036f]/g, '')
  //         .includes(searchValue.toLowerCase())
  //     )
  //   )
  // }, [searchValue])

  // window.scrollTo(0, 500)

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
