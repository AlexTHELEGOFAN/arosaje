import React from "react"

const Home = React.lazy(() => import("../pages/home"))

const index = () => {
  return <Home path="/home" />
}

export default index
