import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Pocketmon from './component/Pocketmon';
import pocketmonName from './data/data';

function App() {

  const [ isLoading, setIsLoading ] = useState(false)
  const [ imgs, setImgs ] = useState([])
  const [ types, setTypes ] = useState([])
  const [ input, setInput ] = useState('')
  const [ text, setText ] = useState('')
  const [ id, setId ] = useState(null)
  const url = `https://pokeapi.co/api/v2/pokemon-form/${pocketmonName[input]}`
  const idUrl = `https://pokeapi.co/api/v2/pokemon-form/${id}`
  
  const onSubmit = e => {
    if(e.key === 'Enter') {
      setInput(text);
      setText('');
      console.log(typeof input);
      console.log(pocketmonName[input])
    }
  }
  const onChange = (e) => {
    setText(e.target.value)
  }

  useEffect(() => {
    axios.get(url)
    .then(res => {
      setId(res.data.id)
      console.log(id)
    })
    .catch(err => console.log(err))
  }, [input])

  useEffect(() => {
    axios.get(idUrl)
    .then(res => {
      console.log(res.data)
      setImgs([res.data.sprites.front_default, res.data.sprites.back_default])
      setTypes(res.data.types)
      setIsLoading(true)
    })
    .catch(err => console.log(err))
  }, [id])
  
  return (
    <section className='inputWrapper'>
      <input
        onChange={onChange}
        onKeyUp={onSubmit}
        value={text}
        className='nameInput'
        type={'text'}
        placeholder="포켓몬 이름을 입력해주세요"/>
        

      <h1>포켓몬 도감</h1>
      {isLoading ? 
      <Pocketmon 
      imgs={imgs}
      types={types}>
      </Pocketmon>
      : <span>Loading...</span>
      }
    </section>
  );
}

export default App;
