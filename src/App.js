import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import Theme from './components/Theme'
import Spinner from './components/Spinner'

import useStore from './zustand/store'
import UserInput from './components/UserInput'

const App = () => {
  const [edit, setEdit] = useState()

  const { 
    themeState: { bgColor },
    userState: { data: users, loading, error }, 
    getUsers 
   } = useStore()

  useEffect(() => {
    getUsers()
  }, [getUsers])


  return (
    <div className='wrap' style={{background: bgColor}}>
      <Theme />

      <UserInput edit={edit} setEdit={setEdit} />

      { error && <span>{error.message}</span> }

      <div className='card_container'>
        {
          users.map(user => (
            <React.Fragment key={user.id}>
              <Card user={user} setEdit={setEdit} />
            </React.Fragment>
          ))
        }
      </div>

      { loading && <Spinner /> }
    </div>
  )
}

export default App