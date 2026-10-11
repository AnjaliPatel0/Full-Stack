import React from 'react'

 function Header(props){
    // console.log(props.email)
    return(
        <div>
            {props.children}
            <h1> {props.email} </h1>
            <div>hello jungle </div>
        </div>
    )

    
}
// export default Header
export { Header}
