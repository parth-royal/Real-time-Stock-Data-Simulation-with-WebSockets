// pages/api/login.js
import { withIronSession } from 'next-iron-session';

async function handler(req, res) {
  const { username, password } = req.body;

  // Your authentication logic here
  if (username === 'user' && password === 'password') {
    req.session.set('user', { username });
    await req.session.save();
    res.json({ isLoggedIn: true });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
}

export default withIronSession(handler, {
  password: 'your_password',
  cookieName: 'next-auth',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production' ? true : false,
  },
});
