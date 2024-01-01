import { useEffect, useState } from 'react'
import List from './components/List'
import CheckDuplicate from './components/CheckDuplicate'
import ContactForm from './components/ContactForm'
import noteService from './services/persons'

const App = () => {

  const [contact, setContact] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')

  useEffect(() => {
    console.log('effect ran')
    noteService
      .getAll()
      .then(initialContact => {
        console.log('promise fufilled')
        setContact(initialContact)
    })
  },[])

  const clearForm = () => {
    setNewName('')
    setNewNum('')
  }

  const addContact = (event) => {
    event.preventDefault()
    const contactObject = {name: newName, number: newNum, id: contact.length + 1}
    console.log('new contact: ', contactObject)
    CheckDuplicate(contactObject, contact, setContact)
    clearForm()
  }

  const handleNameChange = (event) =>
    setNewName(event.target.value)
  
  const handleNumChange = (event) =>
    setNewNum(event.target.value)

  return (
    <div>
      
      <h2>Phonebook</h2>
      <ContactForm
        addContact={addContact}
        newName={newName}
        newNum={newNum}
        handleNameChange={handleNameChange}
        handleNumChange={handleNumChange}
      />


      <h2>Numbers</h2>
      <List 
        item={contact}
      />

    </div>
  )
}

export default App