import { useEffect, useState } from 'react';
import './App.css'
import api from './axios/axios';

function App() {

  const [data, setData] = useState();

  const handleFile = (e) => {
    console.log(e.target.files[0]);
    const formdata = new FormData();
    formdata.append("file", e.target.files[0]);
    api.post("/", formdata);
  }

  useEffect(() => {
    api.get("/").then(resdata => {
      console.log(resdata.data);
      setData(resdata.data)
    })
  }, [])

  return (
    <div className="App">
      <form>
        <input type="file" name="image" id="image" onChange={handleFile} />
      </form>
      {
        data && data.map(each => {
          return <a href={`http://localhost:4000/api/${each._id}`}><img src={`http://localhost:4000/api/${each._id}`} alt="dsadsa" key={each._id}/></a>
        })
      }
    </div>
  )
}

export default App
