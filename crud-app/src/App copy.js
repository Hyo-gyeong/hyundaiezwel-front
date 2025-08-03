import React , {useState} from 'react';

function Header(props){
  return (
    <header>
      <h1><a href="/" onClick={
        (event) => {
          event.preventDefault();
          props.onChangeMode()
        }
      }>
      {props.title}
      </a></h1>
    </header>
  );
}

function Article(props){
  return (
    <div>
      <h1>{props.title}</h1>
      {props.body}
    </div>
  );
}

function Nav(props){
  const list = []
  for (var i = 0; i < props.topics.length; i++){
    let topic = props.topics[i];
    list.push(
      <li key={topic.id}>
        <a id={topic.id} href={"/"+topic.id} onClick={
          event => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
          }}>{topic.title}</a>
      </li>);
  }
  return (
    <div>
      <ul>
        {list}
      </ul>
    </div>
  );
}


function CREATE(props){
  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault();
        let title = event.target.title.value;
        let body = event.target.body.value;
        props.onCreate(title, body);
      }}>
        <input type="text" name="title"></input>
        <textarea cols="10" rows="30" name="body"></textarea>
        <input type="submit" value="제출"></input>
      </form>
    </div>
  );
}

function UPDATE(props){
  const [title, setTitle] = useState(props.title)
  const [body, setBody] = useState(props.body)
  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault();
        props.onUpdate(title, body);
      }}>
        <input type="text" name="title" value={title} onChange={
          (event) => {setTitle(event.target.value);}
        }></input>
        <textarea cols="10" rows="30" name="body" value={body} onChange={
          (event) => {setBody(event.target.body);}
        }></textarea>
        <input type="submit" value="제출"></input>
      </form>
    </div>
  );
}

const App copy = () => {
  let content = null;
  let update = null;
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, title='html', body='html is ...'},
    {id:2, title='css', body='css is ...'},
    {id:3, title='javascript', body='javascript is ...'},
  ])

  if (mode == 'WELCOME'){
    content = <Article title='Welcome' body='Hello, Web'></Article>
  }
  else if (mode == 'READ'){
    let topic = null;
    for (let i = 0; i < topics.length; i++){
      if (topics[i].id == id){
        topic = topics[i];
        break;
      }
    }
    content = <Article title={topic.title} body={topic.body}></Article>
    update = <UPDATE title={topic.title} body={topic.body} onUpdate={
      (_title, _body) => {
        
      }
    }></UPDATE>
  }
  else if (mode == 'CREATE'){
    content = <CREATE onCreate={
      (_title, _body) => {
        const newTopic = {id:nextId, title:_title, body:_body};
        const newTopics = [...topics];
        newTopics.push(newTopic);
        setTopics(newTopics);
        setMode('READ');
        setId(nextId);
        setNextId(nextId+1);
    }}></CREATE>
  }
  }
  return (
    <div>
      <Header title='WEB' onChangeMode={
        () => setMode('WELCOME')
      }></Header>
      <Nav topics={topics} onChangeMode={
        (_id) => {
          setMode('READ');
          setId(_id);
        }}></Nav>
      {content}
      <ul>
        <li>
          <a href="/create" onClick={
            (event) => {
              event.preventDefault();
              setMode('CREATE');
          }}>Create</a>
        </li>
        <update></update>
      </ul>
    </div>
  );
};

export default App copy;