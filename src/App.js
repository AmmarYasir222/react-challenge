import { useEffect, useState } from 'react';
import './App.css';
// Questions:
// 1. Load data from local file (path: “https://ac.aws.citizennet.com/assets/qspreviews/qs_interview_data.json”)
// 2. Use the screenshot as an example, implement a generic function for reading any JSON file in that format, then display the top 12 brands based on audience_size. We always want to have 4 items in one row.
// 3. Add a hover state with a dark, semi-transparent overlay and display the ID of the hovered brand.

function App() {

  const [Jdata,setData] =  useState([]);
  const getData =  new Promise( function(resolve, reject){
    fetch('https://ac.aws.citizennet.com/assets/qspreviews/qs_interview_data.json'
    ,{
     
    }
    )
      .then(function(response){
        
        resolve(response.json())
        
      })  
     
    })
  useEffect(() => {
    getData.then((res)=>{
      let sorted  = [];
      sorted = res.data.sort(function(a, b){

        return  b.source_items.audience_size - a.source_items.audience_size
      
      });

      console.log(sorted);
      setData(sorted);
    });
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="images__cont">
         

          {Jdata?.map((val, key) => {
            return (
              <div key={key}  className="images__item">
                    <div className='image_wrap'>
                    <img src={val.social_media_pages.picture} />
                    </div>
                    <div className='onhover'>
                      {val.social_media_pages.id}
                    </div>
              </div>
            );
          })}
          
          
        </div>
        
      </header>
    </div>
  );
}

export default App;
