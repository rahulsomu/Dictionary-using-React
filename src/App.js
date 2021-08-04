import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from '@material-ui/core';
import Header from './components/Header';
import Result from './components/Result';


function App() {

  const [meaning,setMeaning]=useState([])
  const [word,setWord]=useState("")
  const [language,setLanguage]=useState('en')

  const dictionaryAPI=async()=>{
    try {
      const data=await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`)
      setMeaning(data.data)

      
    } catch (error) {
      console.log(error);
      
    }
  }
  
 
  useEffect(()=>{
    dictionaryAPI();

  },[language,word])
  return (
    <div className="App">
      <Container maxWidth='lg' className='container'>

    <Header language={language} setLanguage={setLanguage} word={word} setWord={setWord}/>
    <Result meaning={meaning} word={word} language={language}/>
      </Container>
    </div>
  );
}

export default App;
