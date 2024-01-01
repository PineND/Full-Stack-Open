import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = contactObject => {
  const request = axios.post(baseUrl, contactObject)
  return request.then(response => response.data)
}

const update = (id, contactObject) => {
  const request = axios.put(`${baseUrl}/${id}`, contactObject)
  return request.then(response => response.data)
}

const remove = (id) => {
  return axios
  .delete(`${baseUrl}/${id}`)
  .catch(error => {
    console.log(`the contact with id ${id} was already deleted`)})
}

export default { 
  getAll,
  create,
  update,
  remove,
}