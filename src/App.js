import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getTokenFromUrl } from './Networks/spotify'

function App() {
  useEffect(() => {
    getTokenFromUrl()

  }, [])
  return (
    <div >

      Redirecting....
    </div>
  );
}

export default connect()(App);
