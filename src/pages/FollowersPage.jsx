import React, { useEffect, useState } from 'react'
import Follower from '../components/Follower/Follower';
import { fetchFollowers } from '../api';

function FollowersPage() {
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    fetchFollowers().then(users => setFollowers(users)).catch(e => console.log(e));
  }, [])

  return (
    <div className='followers-page' data-testid='followers-page'>
      {followers.length === 0 ? <span className='loader'>Loading...</span> :
        <div className='follower-list' data-testid='follower-list'>
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