import React, { useState } from 'react';

type LoginProps = {
  onSubmit: (username: string, communityId: string, role: string) => void;
};

export default function Login({ onSubmit }: LoginProps) {
  const [username, setUsername] = useState('');
  const [communityId, setCommunityId] = useState('');
  const [role, setRole] = useState('leader');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username && communityId) {
      onSubmit(username, communityId, role);
    } else {
      setError(true);
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form id="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Name:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="communityId">Community ID:</label>
        <input
          type="text"
          id="communityId"
          name="communityId"
          required
          value={communityId}
          onChange={(e) => setCommunityId(e.target.value)}
        />
        <div className="roles">
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="radio1"
              name="optradio"
              value="leader"
              checked={role === 'leader'}
              onChange={() => setRole('leader')}
            />
            <label className="form-check-label" htmlFor="radio1">
              Leader
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="radio2"
              name="optradio"
              value="member"
              checked={role === 'member'}
              onChange={() => setRole('member')}
            />
            <label className="form-check-label" htmlFor="radio2">
              Member
            </label>
          </div>
        </div>
        <button type="submit" id="login-btn">
          Login
        </button>
      </form>
      {error && (
        <p id="login-error" className="error-message">
          Invalid username or CommunityID
        </p>
      )}
    </div>
  );
}
