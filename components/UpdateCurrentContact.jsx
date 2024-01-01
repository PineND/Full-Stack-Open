import noteService from '../services/persons'

const update = ( contactObject, duplicate ) => {

  const id = duplicate.id
  const updatedContact = {...duplicate, number: contactObject.number}

  noteService
  .update(id, updatedContact)
  .then(updated =>
    console.log(`updated contact info for ${updated.name}`)
  ) 
}

const UpdateCurrentContact = ( contactObject, contact ) => {
  const duplicate = contact.find(contact => contact.name === contactObject.name)
  console.log('found one existing contact: ', duplicate)

  confirm(`${duplicate.name} is already added to phonebook, replace the old number with a new one?`)
  ? update( contactObject, duplicate )
  : console.log('action cancelled')
}

export default UpdateCurrentContact