//Action Generator
export const userActionGenerator = () => {
    return function (dispatch) {
         axios.get(`https://jsonplaceholder.typicode.com/users`)
         .then((resp)=> {
              //First Call to Dispatch 
              dispatch({ type: 'GETUSER', payload: resp.data});
         })

    }       
        
}


//Component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActionGenerator} from '../store/appStore'

class Users extends Component {
  render() {
       console.log(this.props)
       return (
          <div>
            Users Component
            <button onClick={this.props.getAllUsers}>
            Load Users</button>
            {this.props.data.map(item => {
                return (
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                    </div>
                )
            })}
          </div>
       )
   }
}
const mapStateToProps = (state, props) => ({data: state.users})
const mapDispatchToProps = dispatch => (
        {
            getAllUsers: () => {
                //Second Call to Dispatch
                dispatch(userActionGenerator());
            }
        }
    )
export default connect(mapStateToProps,mapDispatchToProps)(Users);