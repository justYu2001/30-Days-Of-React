import React, { Component } from 'react';

class SubscriptionForm extends Component {
    render() {
        return (
            <div className="subscription-form">
                <h1 className='title'>SUBSCRIBE</h1>
                <p className='description'>Sign up with your email address to receive news and updates.</p>
                <div>
                    <input type="text" placeholder='First name'/>
                    <input type="text" placeholder='Last name'/>
                    <input type="text" placeholder='Email'/>
                </div>
                <button>Subscribe</button>
            </div>
        );
    }
}

export default SubscriptionForm;