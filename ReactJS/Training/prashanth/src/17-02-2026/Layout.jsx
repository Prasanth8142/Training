import React from 'react'
import Header from './Header'
import Footer from './Footer'
import A from './CustomHook/A'

function Layout({value}) {
    console.log(value)
  return (
    <div>
        <h1>Layout</h1>
        {/* <>{value}</> */}
        <Header/>
        <Footer/>
        <A/>
    </div>
  )
}

export default Layout