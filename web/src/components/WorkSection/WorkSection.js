import axios from 'axios'
import React, { useEffect, useState } from 'react';

const WorkSection = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get('http://localhost:1337/users');
      console.log(response.data);
      setUsers(response.data);
    }
    fetch();
  }, []);
  return (<>
  <br/>
  This is a test. Users: {users[0]?.username ?? 'no users'}
  <br/>
  </>);
}

export default WorkSection;
