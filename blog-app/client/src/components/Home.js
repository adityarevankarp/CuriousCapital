import React from 'react'
import Draft from './Draft'
import { useEffect, useState } from 'react'
import { HashLoader } from 'react-spinners'
import { Navbar } from './Navbar'
const Home = ({user}) => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/blog/all');
        const jsonData = await response.json();
        setBlogs(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>


      {
        !loading ?
          <div>
            <h1 className='m-6 text-2xl font-extralight'>Upload Blogs</h1>
              <Draft isAuthenticated={user !== "*"}/>
          </div>
          :
          <HashLoader
            className='absolute mt-[50%] md:mt-[150px] mx-auto align-middle '
            color='#36d7b7'
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
      }

    </div>
  )
}

export default Home