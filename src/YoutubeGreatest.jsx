import React from 'react'
import { Provider } from 'react-redux'

import {store} from './store'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'

export const YoutubeGreatest = () => {
  return (
    <Provider store={store}>
        <AppRouter />
    </Provider>
  )
}
