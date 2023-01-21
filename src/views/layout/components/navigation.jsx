import React, { useCallback } from 'react'
import styled from 'styled-components'
import { Outlet, Link } from 'react-router-dom'
import { useStateValue } from '../../../state'
import { STATE_KEY as AUTH_STATE_KEY, STATE_USER_KEY } from '../../../state/auth/reducer'
import { logout } from '../../../state/auth/actions'

const Nav = styled.nav`
  position: relative;
  padding: 1em;
  padding-top: 2em;

  @media (max-width: 700px) {
    padding-top: 1em;
  }
  @media (min-width: 700px) {
    width: 220px;
    overflow-y: scroll;
  }
`

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1em;
    color: #333333;
  }
  a:hover,
  a:focus {
    color: #757778;
  }
`

const Navigation = () => {
  const [state, dispatch] = useStateValue()
  const loggedInUser = state[AUTH_STATE_KEY][STATE_USER_KEY]

  const handleLogoutOnClick = useCallback(
    async (e) => {
      e.preventDefault()
      await dispatch(logout())
    },
    [dispatch]
  )

  return (
    <>
      <Nav>
        <NavList>
          <li>
            <Link to="/">Home</Link>
          </li>
          {loggedInUser === null && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {loggedInUser !== null && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {loggedInUser !== null && (
            <li>
              <Link to="/logout" onClick={handleLogoutOnClick}>
                Logout
              </Link>
            </li>
          )}
        </NavList>
      </Nav>

      <Outlet />
    </>
  )
}

export default Navigation
