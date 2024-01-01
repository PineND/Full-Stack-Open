import RemoveName from "./RemoveName"

const Note = ({ note }) => {
  return (
    <li className='list'>
      {note.content} <button onClick={() => RemoveName(note.id)} > delete </button>
    </li>
  )
}

export default Note