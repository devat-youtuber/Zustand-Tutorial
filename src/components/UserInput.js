import React, { useState, useEffect } from 'react'
import useStore from '../zustand/store'

const UserInput = ({ edit, setEdit }) => {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')

  const { 
    createUsers, 
    updateUsers, 
    themeState: { txtColor } 
  } = useStore()

  useEffect(() => {
    if(edit){
      setName(edit.name)
      setAvatar(edit.avatar)
    }
  }, [edit])

  const handleSubmit = (e) => {
    e.preventDefault()
    const createdAt = new Date().toISOString()

    if(edit){
      updateUsers({...edit, name, avatar})
    }else{
      createUsers({name, avatar, createdAt})
    }

    setName('')
    setAvatar('')
    setEdit(undefined)
  }

  return (
    <form className="user_input" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input type="text" required value={name}
        onChange={e => setName(e.target.value)}
        style={{color: txtColor}} />
      </div>

      <div className="input-group">
        <label htmlFor="avatar">Avatar</label>
        <input type="text" required value={avatar}
        onChange={e => setAvatar(e.target.value)}
        style={{color: txtColor}} />
      </div>

      <button type="submit">
        { edit ? 'Update' : 'Add' }
      </button>
    </form>
  )
}

export default UserInput