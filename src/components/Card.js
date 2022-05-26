import React from 'react'
import useStore from '../zustand/store'


const Card = ({ user, setEdit }) => {
  const { deleteUsers } = useStore()
  
  return (
    <div className='card'>
      <h2>{user?.name}</h2>
      <img src={user?.avatar} alt="avatar" />
      <div className='btn_nav'>
        <button className='btn_edit'
        onClick={() => setEdit(user)}>Edit</button>

        <button className='btn_delete'
        onClick={() => deleteUsers(user.id)}>Delete</button>
      </div>
    </div>
  )
}

export default Card