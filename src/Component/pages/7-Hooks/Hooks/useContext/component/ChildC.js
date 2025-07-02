import React, { useContext } from 'react'
import { UserContext } from '../useContext'

const ChildC = () => {
    const user = useContext(UserContext);
    return (
    <div>
        <h1>
            {user.name}
            <br></br>
            {user.email}
            <br></br>
             I have top mission.
        </h1>
    </div>
  )
}

export default ChildC