import AddNewContact from './AddNewContact'
import UpdateCurrentContact from './UpdateCurrentContact'

const CheckDuplicate = ( contactObject, contact, setContact, setMessage ) => {
  const checkExists = contact.some(contact =>
    contact.name === contactObject.name)
  console.log('already exists? ', checkExists)
  checkExists
  ? UpdateCurrentContact( contactObject , contact )
  : AddNewContact( contactObject, setContact, contact, setMessage )
}

export default CheckDuplicate