import React from 'react';
import './contact.css'

const Contact = ({name, avatar, online}) => {
    return (
        <div className="Contact">
            <img className="avatar" src={avatar} alt={name}/>
            <div>
                <h1 className="name">{name}</h1>
                <div className="status">
                    <div className="status-text">
                    <div className={online?"status-online" : "status-offline"}></div>
                    {online? 'online': 'offline'}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;