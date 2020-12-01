import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'


const App = () => {
  return (
    <main style={{
      padding: `10px`
    }}>
      <Switch>
        <Route path={`/`} exact render={() => <HomePage />}></Route>
        <Route path={`/item/:itemId`} exact render={() => <NewsPage />}></Route>
      </Switch>
    </main >
  )
}


export default App