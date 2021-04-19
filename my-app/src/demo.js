/* eslint-disable import/no-cycle */
import * as ActionTypes from '../action-types';
import * as Helper from '../../custom/Helper';
import Http from '../../Http';
import path from '../../components/util/path';

const initState = {
  isShowToMessenger: false,
  socket: false,
  source_channel_id: '',
  handleLogAction: () => {},
};

const connect = (state, payload) => {
  const channels = path(['channels'], JSON.parse(localStorage.getItem('user')));
  const { socket, source_channel_id } = payload;
  const isAuthenticated = !!localStorage.getItem('access_token');
  const user = JSON.parse(localStorage.getItem('user'));
  if (isAuthenticated) {
    Helper.refreshUser(data => {
      const selectedChannel = data.channels
        ? data.channels.find(e => e.source_channel_id === source_channel_id)
        : null;
      if (!selectedChannel || selectedChannel === undefined) {
        console.log('not found channel');
      } else if (!selectedChannel.is_active) {
        console.log('channel not connected is active false');
      }
    }, source_channel_id); // refresh user

    socket.on('connect', () => {
      socket.emit(
        'login',
        {
          user_id: user.user_id,
          token: localStorage.getItem('access_token'),
          channel_id: source_channel_id,
        },
        err => {
          if (err) console.log('connect socket err', err);
        },
      );
      console.log('socket connected');
    });
  }

  const selectedChannel = channels.find(
    cc => cc.source_channel_id === source_channel_id,
  );

  return {
    ...state,
    socket,
    channels,
    source_channel_id,
    handleLogAction: (action, otherParams = {}) => {
      Http.post(process.env.MIX_ACTION_LOG_URL, {
        user_id: user.user_id,
        channel_id: source_channel_id,
        feature: 'user_click',
        action,
        package_type:
          (path(['contract_id'], selectedChannel) &&
            path(['package_type'], selectedChannel)) ||
          'freemium',
        ...otherParams,
      }).catch(err => console.log(err));
    },
  };
};

const Socket = (state = initState, { type, payload = {} }) => {
  switch (type) {
    case ActionTypes.OPEN_SOCKET:
      return connect(state, payload);
    default:
      return state;
  }
};

export default Socket;
