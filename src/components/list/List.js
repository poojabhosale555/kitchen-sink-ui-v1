import React from 'react'
import './List.css'
import MembersForm from '../membersForm/MembersForm';

const List = ({ members = [] }) => {
    return (
        <><div >
            <h1> Mongo DB Kitchen Sink Technical Migration Challange </h1>
            <br/>
            <br/>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member, index) => (
                        <tr key={index}>
                            <td>{member.name}</td>
                            <td>{member.email}</td>
                            <td>{member.phoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <MembersForm /></>
    );
};


export default List