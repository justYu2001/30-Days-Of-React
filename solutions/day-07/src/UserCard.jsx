import React, { Component } from 'react';
import checkIcon from './assets/icons/check-circle-fill.svg';
import clockIcon from './assets/icons/clock.svg';

class UserCard extends Component {    
    createdAtTimeString = (date) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      
        const [monthString, dayString, yearString] = date.split('/');
      
        return `${months[parseInt(monthString) - 1]} ${dayString}, ${yearString}`;
    }

    render() {
        const { name, avatar, job, country, skills, createdAt } = this.props.user;

        return (
            <div className="user-card">
                <img src={avatar} alt="" style={{ width: '200px', borderRadius: '50%' }}/>
                <div style={{ display: 'flex' }}>
                    <span className='username'>{name}</span>
                    <img src={checkIcon} alt="" />
                </div>
                <p style={{ margin: '0 5px', color: '#aaa' }}>{job}, {country}</p>
                <h2 style={{ fontSize: '20px' }}>SKILLS</h2>
                <ul style={{ padding: 0 }}>
                    {skills.map(skill => <li key={skill} className='skill'>{skill}</li>)}
                </ul>
                <div style={{ display: 'flex' }}>
                    <img src={clockIcon} alt="" />
                    <span style={{ padding: '0 5px' }}>{this.createdAtTimeString(createdAt)}</span>
                </div>
            </div>
        );
    }
}

export default UserCard;