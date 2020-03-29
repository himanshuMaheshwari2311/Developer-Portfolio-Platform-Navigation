import React from 'react'
import { Route, Switch } from 'react-router-dom'
import classes from '../App.module.css'
import Login from './Login'
import Sidebar from './Sidebar'
import Home from './Home'

const Body: React.FC<any> = ({ user, setUser, open, setOpen }) => {
  
  const userId = localStorage.getItem("userId");
  
  return (
      <div className={classes.mainContent} style={{ marginLeft: user !== '' ? (open ? '240px' : '60px') : '0px' }}>
        {userId === null ? null : <Sidebar open={open} setOpen={setOpen} />}
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path="/login">
            <Login setUser={setUser} />
          </Route>
        </Switch>
      </div>
  )
}

export default Body;