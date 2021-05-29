import { useState } from 'react';
import moment from 'moment';
import './App.css';
import Axios from 'axios';

export default function App() {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState('');
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleClick = () => {
    Axios.get('https://goweather.herokuapp.com/weather/' + input).then(
      (response) => {
        setWeather(response.data);
        setInput('');
      }
    );
    let currentDate = new Date();
    console.log(currentDate);
  };
  return (
    <div className='card mx-auto h-90 md:w-3/5 lg:w-2/5 mt-20 md:rounded-lg'>
      <div className='flex flex-wrap text-white px-8 py-8 '>
        <div className='w-3/6'>
          <h1 className='text-xl'>Weather App</h1>
          <p className='text-4xl mb-1 font-bold tracking-widest'>
            {moment().format('dddd')}
          </p>
          <p className='font-bold text-2xl tracking-widest'>
            {moment().format('MMM Do YY')}
          </p>
        </div>
        <div className='w-3/6'>
          <p className='text-right mt-2 font-bold text-2xl mt-8'>
            {weather && weather.description}
          </p>
        </div>
        <div className='w-3/6 mb-4'>
          <p className='mt-44 text-4xl font-bold tracking-widest'>
            {weather && weather.temperature}
          </p>
        </div>
        <div className='w-full'>
          <input
            className='box-border focus:outline-none px-2 py-4 w-3/6 text-black rounded-tl-lg rounded-bl-lg'
            type='text'
            onChange={handleInputChange}
            value={input}
            placeholder='Enter your city'
          />
          <button
            className='px-2 py-4 w-3/6 focus:outline-none rounded-tr-lg rounded-br-lg'
            onClick={handleClick}
          >
            Get Weather
          </button>
        </div>
      </div>
    </div>
  );
}
