// steps
// 1 create Context
// 2 wrap all the child inside a provider 
// 3 pass value 
// 4 go to consumer and do consume that where you created context 

import React, { createContext, useState } from 'react'
import ChildA from './component/ChildA'

const UserContext = createContext();


const MyuseContext = () => {
  const [user] = useState({name:"I can do it!",email:"vivek@gmail.com"});
  return (
    <>
    <UserContext.Provider value={user}>
    <ChildA/>
    </UserContext.Provider>
    </>
  )
}

export default MyuseContext;
export {UserContext}