import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from './actions/thunk'
function App(props) {
  const { fetchUsers, user } = props
  useEffect(() => {
    fetchUsers().then((res) => {
      console.log(res)
    })
  }, [fetchUsers])
  return <div className='App'>{user?.name}</div>
}
const mapState = (state) => ({
  user: state.user
})
const mapDispatch = {
  fetchUsers
}
export default connect(mapState, mapDispatch)(App)