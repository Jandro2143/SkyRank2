import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // For navigation

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Airtable API Configuration
      const AIRTABLE_BASE = 'appjBE1cS049PHpg6'; // Replace with your Base ID
      const AIRTABLE_TABLE = 'User'; // Replace with your Table Name
      const AIRTABLE_API_KEY =
        'patu3ckkjrFVR855b.cfa6221346f5cc550a8d144f015ff8645ff0347e7dfb475ae3f852e139356223'; // Replace with your API Key

      const url = `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`;

      // Fetch records from Airtable
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        },
      });

      // Check if user exists
      const users = response.data.records;
      const user = users.find(
        (record) =>
          record.fields.email?.toLowerCase().trim() === email.toLowerCase().trim() &&
          record.fields.password === password
      );

      if (user) {
        // Store user info in localStorage
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({
            Name: user.fields.Name,
            email: user.fields.email,
            password: user.fields.password,
          })
        );

        // Redirect to the portal page
        router.push('/portal');
      } else {
        setError('Invalid email or password.');
      }
    } catch (err) {
      console.error(err);
      setError('Error connecting to Airtable.');
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSignIn}>
        <h2>Sign In</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
