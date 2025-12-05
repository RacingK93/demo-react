import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import { store } from './app/store'
import router from './router'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  )
}

export default App
