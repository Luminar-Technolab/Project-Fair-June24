//rafce
import React, { useContext } from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthContext } from '../contexts/AuthContextAPI'

const Header = ({insideDashboard}) => {
  const {isAuthorised,setIsAthorised}  = useContext(tokenAuthContext)
  const navigate = useNavigate()

  const logout = ()=>{
    sessionStorage.clear()
    setIsAthorised(false)
    navigate("/")
  }

  return (
    <Navbar style={{zIndex:1}} className="border shadow rounded position-fixed w-100">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}} >
            <Navbar.Brand style={{color:'white'}} className=' fw-bolder' >
            <i className="fa-brands fa-docker me-2"></i> Project Fair
            </Navbar.Brand>
          </Link>
          {
            insideDashboard &&
            <div className="ms-auto">
              <button onClick={logout} className='btn btn-link fw-bolder'>Logout <i className="fa-solid fa-right-from-bracket ms-1"></i></button>
            </div>
          }
        </Container>
    </Navbar>
  )
}

export default Header