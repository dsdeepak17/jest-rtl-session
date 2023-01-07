import React, { useEffect, useState } from 'react'
import Follower from '../components/Follower/Follower';

const USER_API = 'https://dummyjson.com/users';
const NUMBER_OF_USERS = 8;

function FollowersPage() {
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    console.log({ followers });
  }, [followers])

  const fetchFollwers = async () => {
    const data = await fetch(`${USER_API}?limit=${NUMBER_OF_USERS}`);
    const users = await data.json();
    setFollowers(users.users)
  }

  useEffect(() => {
    fetchFollwers();
  }, [])

  return (
    <div className='followers-page'>
      {followers.length === 0 ? 'Loading...' :
        <div className='follower-list'>
          {
            followers?.map(follower => {
              return <Follower follower={follower} key={follower.id} />
            })
          }
        </div>
      }
    </div>
  )
}

export default FollowersPage