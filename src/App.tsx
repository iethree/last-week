import './App.css'
import { Header } from './components/Header';
import { Form } from './components/Form';


function App() {
  return (
    <div className="px-6">
      <Header />
      <main className="mx-auto max-w-3xl mt-8">
        <Form />
        <footer className="text-gray-800 text-center bottom-0 right-0 p-2 text-xs">
          Seriously, this is a joke.
        </footer>
      </main>
    </div>
  )
}

export default App
