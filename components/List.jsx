import Note from './Note'

const List = ({ item }) => {
  const formatItem = item.map(item => ({
    content: `${item.name} ${item.number}`,
    id: item.id
  }))

  return (
    <ul>
      {formatItem.map(
        formatItem => <Note key={formatItem.id} note={formatItem} />
       )}
    </ul>
  )
}

export default List