import React, { useState, useEffect } from 'react';
import Timeline from '../components/Timeline';
import axios from 'axios';

function N1() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://172.17.0.1:8080/api/post?page=0&size=1&sort=string')
      .then(response => {
        if (response.data.success) {
          setPosts(response.data.response);
        }
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  window.scrollTo(0, 0);

  return (
    <div className='homepage'>
      <div>
        {/* <button onClick={()=>{
          axios.put('http://localhost:8080/api/s3/test')
          .then((response)=>{
            console.log(response.data)
          })
          .catch(()=>{
            console.log('실패애애')
          })
        }}>버튼</button> */}
        <p>Hello, World!</p>
      </div>
      <div className='homepage__timeline'>
        <Timeline posts={posts} />
      </div>
    </div>
  );
}

export default N1;
