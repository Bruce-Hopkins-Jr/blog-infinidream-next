import React from "react"

function Layout (props) {
    return (
      <main className={props.className}>        
          {props.children}
      </main>
    )
        }
export default Layout