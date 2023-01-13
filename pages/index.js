// ** Default import

import React, { useEffect, useState } from 'react';

// ** Utils

import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';

// ** Home page

function Home() {
  const [events, setEvents] = useState([]);
  const cookies = new Cookies();
  const jwt = cookies.get('jwt');

  return (
    <div className=''>
      <div className=''>
        <h1 className=''>Evènements</h1>
        <h2 className=''>Test</h2>
      </div>
    </div>
  );
}

export default Home;