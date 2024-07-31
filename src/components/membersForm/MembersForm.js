import React, { useState } from 'react';
import axios from 'axios';

const MemberForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/v1/members/create', formData);
            console.log('Response:', response.data);
            // Optionally, clear the form or provide user feedback here
            setFormData({ name: '', email: '', phoneNumber: '' });
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <br/>
            <table>
                <tbody>
                    <tr>
                        <td><label htmlFor="name">Name:</label></td>
                        <td>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="email">Email:</label></td>
                        <td>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="phoneNumber">Phone Number:</label></td>
                        <td>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button type="submit">Submit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
};

export default MemberForm;