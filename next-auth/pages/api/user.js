// pages/api/user.js
import { withIronSession } from 'next-iron-session';

async function handler(req, res) {
  const user = req.session.get('user');
  if (user) {
    res.json({ isLoggedIn: true, user });
  } else {
    res.json({ isLoggedIn: false });
  }
}

export default withIronSession(handler, {
  password: 'your_password',
  cookieName: 'next-auth',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production' ? true : false,
  },
});
