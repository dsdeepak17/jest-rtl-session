import React from 'react'

function Follower({ follower }) {
  const { firstName, lastName, phone, age, image } = follower;



  return (
    <div className='follower' data-testid='follower-item'>
      <img src={image} alt="user-img" className='follower-image' />
      <div className="follower-detail">
        <span>{`${firstName} ${lastName}`}</span>
        <span>{`${age} years ${ageEmoji(age)}`}</span>
        <span>{`☎️: ${phone}`}</span>
      </div>

    </div>
  )
}

export default Follower

const ageEmoji = (age) => {
  if (age < 10) return '👶'
  if (age >= 10 && age < 25) return '👦'
  if (age >= 25 && age < 60) return '👨'
  return '👴'
}