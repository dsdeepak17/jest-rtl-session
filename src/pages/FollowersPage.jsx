import React from 'react'
import Follower from '../components/Follower/Follower';
import GlimmerLine from '../components/GlimmerLine/GlimmerLine';
// import { fetchFollowers } from '../api';
import { useGetFollowersQuery } from '../redux/followerApi';

function FollowersPage() {
  const { data: followers, error, isLoading } = useGetFollowersQuery(10)

  if (error) {
    return <>Error has occured</>
  }

  return (
    <div className='followers-page' data-testid='followers-page'>
      {isLoading ?
        <>
          <GlimmerLine style={{ height: "5.5rem", borderRadius: "var(--border-radius)" }} />
          <GlimmerLine style={{ height: "5.5rem", borderRadius: "var(--border-radius)" }} />
          <GlimmerLine style={{ height: "5.5rem", borderRadius: "var(--border-radius)" }} />
        </>
        :
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