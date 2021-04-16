import { fetchUsers as _fetchUsers } from '../service'
import * as actions from './action'
export const fetchUsers = () => (dispatch) => {
  dispatch(actions.getUsersRequested())
  return _fetchUsers()
    .then((user) => dispatch(actions.getUsersSucceed(user)))
    .catch((error) => dispatch(actions.getUsersFailed(error)))
}