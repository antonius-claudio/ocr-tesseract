import './App.css';
import React from 'react';
import { getTesseract } from './components/Tesseract';

function App() {
  const [url, setUrl] = React.useState('');
  const [data, setData] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleGet = async () => {
    setLoading(true);
    setData('loading...');
    const temp = await getTesseract(url);
    if (temp) setData(temp);
    if (temp) setLoading(false);
  };

  const handleOnChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <section className="App">
      <h4>Image to Text</h4>
      <form>
        <label>name</label>
        <input 
          name="surat"
          type="text"
          onChange={handleOnChange}
          disabled={loading}
        />
        <div>
          <button 
            onClick={handleGet}
            disabled={loading}
          >get data</button>
        </div>
      </form>
      <div>
        {data}
      </div>
    </section>
  );
}

export default App;
