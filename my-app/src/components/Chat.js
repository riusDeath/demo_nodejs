import React from 'react';
import { connect } from 'react-redux';
import logAction from '../store/actions/logAction'

class Chat extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick  = this.handleClick.bind(this);
    }

    _onChange(event) {
        const value = event.target.value;
        this.setState({
          username: value
        })
    }

    handleClick = (name) => {
        const payload = {
            'action_id': name
        }
        this.props.logAction(payload);
    }

    render() {
        const menuSidaBar = [
            {id : 'conversation_click', name : 'Quan ly hoi thoai'},
            {id : 'audience_clioc', name : 'Quan ly khach hang'}
        ];
        const listItems = menuSidaBar.map((key) =>
        <li key={key.id} onClick={() => this.handleClick(key.id)}>
            {key.name}
        </li>
        );
        return (
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>
           
        )
    }

}
const mapState = state => ({
    loading: state.loading
})

const mapDispatch = dispatch => ({
    logAction: data => dispatch(logAction(data))
})

export default connect(mapState, mapDispatch)(Chat);