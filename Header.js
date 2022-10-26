import React from 'react'

function Header() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light  " style = {{background:"#b1dae6"}}>
    <div className="container-fluid">
          
      <div className='' style = {{marginRight:"10px"}}><img src = '../../fb-icon-three.png' alt='fb' height = '50px'/></div>
      <a className="navbar-brand me-5 text-dark" href="#">
  
        Facebook
      </a>
      <button
        className="collapsible "
        type="button"
        data-toggle="collapse"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        ariaControls="collapseExample"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="content collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item me-5">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item me-5">
            <a className="nav-link" href="#">
              blogs
            </a>
          </li>
          <li className="nav-item me-5">
            <a className="nav-link" href="#">
              about
            </a>
          </li>
          
       
        </ul>
        <form className="d-flex" role="search">
          <input
            className="form-control me-1"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-dark" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
  







//         <nav className="navbar navbar-expand-lg navbar-light  " style = {{background:"#b1dae6"}}>
//   <div className="container-fluid">
        
//     <div className='' style = {{marginRight:"10px"}}><img src = '../../fb-icon-three.png' alt='fb' height = '50px'/></div>
//     <a className="navbar-brand me-5 text-dark" href="#">

//       Facebook
//     </a>
//     <button
//       className="navbar-toggler "
//       type="button"
//       data-toggle="collapse"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarSupportedContent"
//       aria-controls="navbarSupportedContent"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//       ariaControls="collapseExample"
//     >
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item me-5">
//           <a className="nav-link active" aria-current="page" href="#">
//             Home
//           </a>
//         </li>
//         <li className="nav-item me-5">
//           <a className="nav-link" href="#">
//             blogs
//           </a>
//         </li>
//         <li className="nav-item me-5">
//           <a className="nav-link" href="#">
//             about
//           </a>
//         </li>
        
     
//       </ul>
//       <form className="d-flex" role="search">
//         <input
//           className="form-control me-1"
//           type="search"
//           placeholder="Search"
//           aria-label="Search"
//         />
//         <button className="btn btn-outline-dark" type="submit">
//           Search
//         </button>
//       </form>
//     </div>
//   </div>
// </nav>

  )
}

export default Header