import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from 'routes'
import './App.css'

function App() {
  return (
    <main data-testid="appContainer">
      <Suspense fallback={null}>
        <Switch>
          {routes.map((route) => (
            <Route key={String(route.path)} {...route} />
          ))}
        </Switch>
      </Suspense>
    </main>
  )
}

export default App
