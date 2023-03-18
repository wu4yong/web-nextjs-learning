import React from 'react';

//user component
const User = ({ user }) => {
    return (
        <div>
            <h2>{user.username}--{user.email}</h2>
        </div>
    );
};

export default User;
