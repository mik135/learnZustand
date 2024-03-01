import './App.css'
import {useStore, usePersonStore} from './store.js'

function App() {

  return (
    <div className='App'>
      <BearCounter />
      <Controls />
      <Person />
    </div>
  )
}

function BearCounter() {
  const bears = useStore((state) => state.bears)
  return <h1>{bears} bears around here...</h1>
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation)
  const removeAllBears = useStore((state) => state.removeAllBears)

  const state = useStore()
  return (
  
    <div>
      <button onClick={state.increasePopulation}>one up</button>
      <button onClick={state.removeAllBears}>Remove All</button>
    </div>
  )
}

function Person() {
  const {firstName, lastName, updateFirstName, updateLastName} = usePersonStore()
  return (
    <div>
      <input type='text' onChange={(e) => updateFirstName(e.target.value)}/>
      <input type='text' onChange={(e) => updateLastName(e.target.value)}/>
      <h2>Hello {firstName} {lastName}</h2>
    </div>
  )
}

export default App
