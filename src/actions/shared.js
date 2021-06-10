import { getInitialData } from '../utils/api'
import { recieveTweets } from './tweets'
import { receiveUsers } from './users'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

const authed_ID = 'tylermcginnis'

export function handleInitialData (){
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, tweets }) => {
                dispatch (receiveUsers(users))
                dispatch (recieveTweets(tweets))
                dispatch (setAuthedUser(authed_ID))
                dispatch (hideLoading())
            })
    }
}