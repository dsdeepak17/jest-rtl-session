import React, { useEffect, useState } from 'react'
import Follower from '../components/Follower/Follower';
import { fetchFollowers } from '../api';

function FollowersPage() {
  const [followers, setFollowers] = useState([])

  const isLoading = followers.length === 0;

  useEffect(() => {
    fetchFollowers().then(users => setFollowers(users))
  }, [])


  return (
    <div className='followers-page' data-testid='followers-page'>
      {isLoading ? <span className='centered-item'>Loading...</span> :
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