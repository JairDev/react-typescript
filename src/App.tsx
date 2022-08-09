import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import List from './components/List/List'

const INITIAL_STATE = [
  {
    nick: "shogun",
    subMonths: 2,
    avatar: 'https://i.pravatar.cc/150?u=shogun',
    description: 'Desarrollador web'
  },
  {
    nick: "kirt",
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=kirt',
  }
]

interface AppState {
  subscriber: Array<Sub>
  newSubscriber: number
}

// Definir los tipos que tendrá, en este caso el objeto del estado
interface Sub {
  nick: string
  subMonths: number
  avatar: string
  description?: string
}

// ? tipo genérico, el tipo que se espera es parametrizable,
// ? un array puede ser de objects, numbers, string, etc.

function App() {
  // * typescript + state
  // <> tipo genérico number, string, etc.
  // En el estado inicial, typescript infiere los tipos de cada
  // propiedad, por ejemplo en este caso donde el estado es un 
  // array de objetos
  const [subscriber, setSubscriber] = useState<AppState["subscriber"]>([])
  const [newSubscriber, setNewSubscriber] = useState<AppState["newSubscriber"]>(0)

  useEffect(() => {
    setSubscriber(INITIAL_STATE)
  }, [])

  return (
    <div className="App">
      <h1>Subs App</h1>
      <List subscriber={subscriber} />
      <Form />
    </div>
  )
}

export default App
