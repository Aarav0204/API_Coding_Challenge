import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const UpdateBook = () => {
  const [isbn, setIsbn] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Use useNavigate

  // Retrieve JWT token from localStorage or sessionStorage
  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the updated book data to send in the PUT request
    const updatedBook = {
      isbn,               // ISBN for backend identification
      title,              // Updated title
    };

    try {
      // Make the PUT request with the updated book details
      const response = await axios.put(`http://localhost:8080/api/admin/updateBook/${isbn}/${title}`, updatedBook, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setMessage('Book updated successfully');
        navigate('/books'); // Redirect to the books list after update
      } else {
        setMessage('Error updating the book');
      }
    } catch (error) {
      setMessage('Error updating the book');
    }
  };

  return (
    <div className="container">
      <h2>Update Book</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="isbn" className="form-label">ISBN</label>
          <input
            type="text"
            className="form-control"
            id="isbn"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">New Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBook;