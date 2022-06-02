import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import errorReducer from './errorReducer';
import meetingsReducer from './meetingsReducer';
import oneMeetingReducer from './oneMeetingReducer';
import playersReducer from './playersReducer';
import userMeetingsReducer from './userMeetingsReducer';
import userReducer from "./userReducer";
import themesReducer from './themesReduces';

const rootReducer = combineReducers({
    user: userReducer,
    games: gameReducer,
    meetings: meetingsReducer,
    meeting: oneMeetingReducer,
    players: playersReducer,
    themes: themesReducer,

    usermeetings: userMeetingsReducer,

    error: errorReducer,

  });
  
export default rootReducer;
