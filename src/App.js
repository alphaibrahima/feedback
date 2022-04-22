function App() {

  const title = 'Invictus Digital'
  const body = 'This is the blog post of invictus digital'
  const comments = [
    {id: 1, text: 'comment one'},
    {id: 2, text: 'comment two'},
    {id: 3, text: 'comment three'},
  ]

  const loading = false
  const showComments = true

  if(loading) return <h2>Loading...............</h2>
  const commentBlock = (
    <div className="comments">
      <h3>comments ({comments.length})</h3>
      <ul>
        {comments.map( (comment, index) => (
          <li key={index}> {comment.text} </li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className="container">
      <h1> {title.toUpperCase()} </h1>
      <p> {body} </p>

    {showComments && commentBlock}

    </div>
  )
}

export default App;