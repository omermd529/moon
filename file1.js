async function fetchUser(userId) {
  try {
    const res = await fetch(`https://api.example.com/users/${userId}`);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status} – ${res.statusText}`);
    }
    const user = await res.json();
    console.log('User data:', user);
    return user;
  } catch (err) {
    console.error('API call failed:', err);
  }
}

// Example usage:
fetchUser(42);
Another line of code
Unstaging commits demo
