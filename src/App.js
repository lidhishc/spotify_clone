import React from 'react'
import { getTokenFromUrl } from './Networks/spotify'
function App() {
  return (
    <div >
      {getTokenFromUrl()}
     Redirecting....
    </div>
  );
}

export default App;
