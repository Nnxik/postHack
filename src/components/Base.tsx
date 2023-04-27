import React from 'react';
import Login from './Login';
import './Base.css';

export default function Base() {
  const handleSubmit = (username: string, communityId: string, role: string) => {
    console.log(username, communityId, role);
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="community.html">Community</a>
            </li>
            <li>
              <a href="personal.html">Personal</a>
            </li>
          </ul>
          <a href="login.html" className="login-btn">
            Login
          </a>
        </nav>
      </header>
      <main>
        <Login onSubmit={handleSubmit} />
      </main>
      <footer>
        <p>&copy; 2023 My Website</p>
      </footer>
    </div>
  );
}
