import {useState} from 'react'

const App = () => {
    const [studens, setStudents] = useState([])
    fetch ("https://659c9936633f9aee7907baad.mockapi.io/api/v1/students")
  return (
    <main className="app">
        <h1>Student List</h1>
    </main>
  )
}

export default App