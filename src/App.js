import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'


const Main = styled.main`
  padding: 10px 0;
`

const App = () => {
  return (
    <Main>
      <Switch>
        <Route path={`/`} exact render={() => <HomePage />}></Route>
        <Route path={`/item/:itemId`} exact render={() => <NewsPage />}></Route>
      </Switch>
    </Main >
  )
}


export default App