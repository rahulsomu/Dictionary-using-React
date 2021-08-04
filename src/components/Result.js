import React from 'react';
import './Result.css';

const Result = ({ word, meaning, language }) => {
  return (
    <div className='result'>
        <h1 className='big-text'>{word? word:''}</h1>
     
      {
          meaning[0] && word && language==='en' && (
              <div className="audio">

                  <audio src={meaning[0].phonetics[0] && meaning[0].phonetics[0].audio} controls></audio>
                  <p className='top-text'>{word?'Results':'Search Something to see results'}</p>
              </div>
          )
      }
      <div className="item-container">
        {
          !word? <div className="image">
          <p>Search Anything</p>
          <img src="Search.svg"  />
        </div>:''
        }
        
      {word &&
        meaning.map(mean =>
          mean.meanings.map(item =>
            item.definitions.map(def => (
              <div className='result-item'>
                <h2>{def.definition}</h2>
               {
                   def.example && (
                       <div className='example'>
                           <h4>Example</h4>
                           <p>{def.example}</p>
                       </div>)
                   
               }
               {
                   def.synonyms && (
                    <div className='synonyms'>
                    <h4>Synonyms</h4>
                    <p className='synonyms-para'>
                    {     
                      def.synonyms.map((syn)=>
                      `${syn}, `)
                  }
                    </p>
                  
                </div>
                   )
               }
                
              </div>
            ))
          )
        )}
        </div>
    </div>
  );
};

export default Result;
