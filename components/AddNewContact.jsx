import noteService from '../services/persons'

const AddNewContact = ( contactObject, setContact, contact, setMessage ) => {

  noteService
  .create(contactObject)
  .then(newAdded => {
    setContact(contact.concat(newAdded))

    const message = `Added ${newAdded.name}`
    setMessage(message)

    setTimeout(() => {
      setMessage(null)
    }, 5000)
  })
}

export default AddNewContact