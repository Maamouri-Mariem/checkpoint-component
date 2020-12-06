import React from "react"

import Address from "./component/profile/Address";
import FullName from "./component/profile/FullName";
import ProfilePhoto from "./component/profile/ProfilPhoto";


function App() {
  return (
    <div className = "container">

<FullName />
<ProfilePhoto />
<Address />
    </div>

  )
}

export default App ; 
