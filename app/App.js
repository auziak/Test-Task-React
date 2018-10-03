import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, NavLink, Route, Switch, Redirect } from 'react-router-dom'
import AsyncComponent from './AsyncComponent'
import './index.css'

// Dynamic import
const getPromise = path => import(`./${path}`)

// Sort Tabs
const sortByOrder = tabs => tabs.sort((a, b) => a.order > b.order)

//Not found
const NotFound = ({location}) => {
    const path = location ? location.pathname : ""
    return <h3>Page not found {path} </h3>
}

const sortTabs = arr => arr.filter(t => t.order==0).map(ord => '/'.concat(ord.id)).pop()

const DefaultTab = ({tabs}) => {
  const tab = sortTabs(tabs)
  return tab ? <Redirect to={tab} /> : <NotFound/>
}

class App extends Component {
  
  state = {
    tabs: []
  }

  async componentDidMount(){
    const loadTabs = () => {
      return fetch('http://localhost:3001/tabs').then(resp => resp.json())
    }
    loadTabs().then(res => this.setState({tabs: sortByOrder(res)}))
  }

  render() {
    const { tabs } = this.state

    return (
      <Router>
      <Fragment>
        
          {tabs.map(({id, title, order})=>
              <NavLink 
                key={order}
                to={`/${id}`}>
                {title}
              </NavLink>
            )
          }          

        <hr/>

        <Switch>
        {
            tabs
                .map(({id, order, path}) => (
                <Route
                    exact
                    key={order}
                    path={`/${id}`}
                    render={({match}) => <AsyncComponent loader={match ? getPromise(path) : null} />}/>
                ))
        }

        <Route path="/" exact render={(props) => <DefaultTab tabs={tabs}/>}/>
        <Route component={NotFound}/>
        
        </Switch>

      </Fragment>
      </Router>
    )
  }
}

export default App;