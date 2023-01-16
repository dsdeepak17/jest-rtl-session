import React from 'react'
import Follower from '../components/Follower/Follower';
// import { fetchFollowers } from '../api';
import { useGetFollowersQuery } from '../redux/followerApi';

function FollowersPage() {
  const { data: followers, error, isLoading } = useGetFollowersQuery(10)

if(error){
  return <>Error has occured</>
}

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