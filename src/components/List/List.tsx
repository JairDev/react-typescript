interface Props {
  subscriber: Array<{
    nick: string
    subMonths: number
    avatar: string
    description?: string
  }>
}

function List({ subscriber }: Props) {
  return (
    <ul>
      {
        subscriber.map(subs =>
          <li key={subs.nick}>
            <img src={subs.avatar} alt='' />
            <h4>{subs.nick}</h4>
            <p>{subs.description?.substring(0, 100)}</p>
          </li>)
      }
    </ul>
  )
}

export default List