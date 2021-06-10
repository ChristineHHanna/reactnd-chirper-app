import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tweet from './tweet'


class Dashboard extends Component {
    render() {
        return (
            <div>
                <h3 className='center'>Your Timeline</h3>
                <ul className='dashboard-list'>
                    {this.props.TweetsIds.map((id) => (
                        <li key = {id}>
                            <Tweet id={id}/>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({ tweets }) {
    return {
        TweetsIds : Object.keys(tweets)
            .sort((a,b) => tweets[b].timeStamp - tweets[a].timeStamp)
    }
}

export default connect(mapStateToProps)(Dashboard)