import noteService from '../services/persons'

const RemoveName = (id) => {
  const remove = (id) => {
    noteService.remove(id)
    console.log(`contact with id ${id} has been deleted`)
  }

  confirm(`Remove contact with id ${id}?`) ? remove(id) : console.log('action cancelled')
}

export default RemoveName