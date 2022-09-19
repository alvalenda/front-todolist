import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoProvider } from './contexts/TodoContext'
import { ModalProvider } from './contexts/ModalContext'
import { App } from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <TodoProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </TodoProvider>
  </React.StrictMode>
)

// TodoProvider and ModalProvider wrapping the App component here because it neet to use ModalContext inside him.
