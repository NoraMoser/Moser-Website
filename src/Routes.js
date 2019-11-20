import React, { lazy, Suspense } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Loader from './components/common/loader/Loader'

const Home = lazy(() => import('./components/home/Home'))

export default function Routes() {
    return (
      <div>
          <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </Suspense>
          </BrowserRouter>
      </div>
    )
  }
  