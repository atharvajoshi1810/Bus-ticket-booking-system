import { Link } from 'react-router-dom'
import '../App';

const onLogout = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('customer');
}

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg' 
      // data-bs-theme='dark' 
      style={{ backgroundColor: 'turquoise' }} 
    >
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          Bus Booking System
        </a>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
          <li className='nav-item'>
              <Link
                to='/customer'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                Users
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/routeList'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                Routes
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/buslist'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                Buses
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/feedbackList'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                Feedback
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link onClick={onLogout}
                to='/login'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
