import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/signin'); 
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light"> 
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#4a4a4a' }}>
        <div className="container">
          <a className="navbar-brand text-white" href="/">Testbook</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {!isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="/signin">Sign In</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="/signup">Sign Up</a>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <button className="btn btn-link text-white" onClick={handleLogout}>Logout</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <header className="text-center py-5 mb-5" style={{ backgroundColor: '#d3d3d3', color: '#333' }}>
        <div className="container">
          <h1 className="display-3">India's Largest Online Book Centre</h1>
          <p className="lead">"It's your library, do as you please"</p>
        </div>
      </header>

      {isLoggedIn && (
        <section className="container py-5">
          <div className="row text-center">
            {/* View All Books */}
            <div className="col-md-3 mb-4">
              <div className="card shadow-lg border-0 rounded-3" style={{ backgroundColor: '#f0f8ff' }}>
                <div className="card-body">
                  <h5 className="card-title text-info">View All Books</h5>
                  <p className="card-text">Explore all books available in your collection.</p>
                  <a href="/books" className="btn btn-outline-info w-100">View Books</a>
                </div>
              </div>
            </div>

            {/* Add a New Book */}
            <div className="col-md-3 mb-4">
              <div className="card shadow-lg border-0 rounded-3" style={{ backgroundColor: '#e6ffe6' }}>
                <div className="card-body">
                  <h5 className="card-title text-success">Add a New Book</h5>
                  <p className="card-text">Add new books to your library.</p>
                  <a href="/addbook" className="btn btn-outline-success w-100">Add Book</a>
                </div>
              </div>
            </div>

            {/* Update a Book */}
            <div className="col-md-3 mb-4">
              <div className="card shadow-lg border-0 rounded-3" style={{ backgroundColor: '#fffacd' }}>
                <div className="card-body">
                  <h5 className="card-title text-warning">Update a Book</h5>
                  <p className="card-text">Modify details of an existing book.</p>
                  <a href="/updatebook" className="btn btn-outline-warning w-100">Update Book</a>
                </div>
              </div>
            </div>

            {/* Delete a Book */}
            <div className="col-md-3 mb-4">
              <div className="card shadow-lg border-0 rounded-3" style={{ backgroundColor: '#ffe6e6' }}>
                <div className="card-body">
                  <h5 className="card-title text-danger">Delete a Book</h5>
                  <p className="card-text">Remove a book from your collection.</p>
                  <a href="/deletebook" className="btn btn-outline-danger w-100">Delete Book</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="text-white text-center py-3 mt-auto" style={{ backgroundColor: '#333' }}>
        <p>&copy; 2024 Testbook. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
