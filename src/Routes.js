import React, { lazy, Suspense } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Loader from './components/common/loader/Loader'

const AppBar = lazy(() => import('./components/common/appbar/Appbar'))
const Home = lazy(() => import('./components/home/Home'))
const Videos = lazy(() => import('./components/videos/Videos'))
const Quotes = lazy(() => import('./components/quotes/Quotes'))
const Pictures = lazy(() => import('./components/pictures/Pictures'))

export default function Routes() {
    return (
      <div>
          <BrowserRouter>
            <Suspense fallback={<Loader />}>
              <Route path="/" component={AppBar} />
                <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route exact={true} path="/Videos" component={Videos} />
                    <Route exact={true} path="/Quotes" component={Quotes} />
                    <Route exact={true} path="/Pictures" component={Pictures} />
                </Switch>
            </Suspense>
          </BrowserRouter>
      </div>
    )
  }
  