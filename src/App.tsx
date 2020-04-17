import React, { Suspense } from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import routes from 'routes'
import './App.css'

const history = createBrowserHistory()

function App() {
  return (
    <main data-testid="appContainer">
      <Router history={history}>
        <Suspense fallback={null}>
          <Switch>
            {routes.map((route) => (
              <Route key={String(route.path)} {...route} />
            ))}
          </Switch>
        </Suspense>
      </Router>
    </main>
  )
}

export default App
