// pages/api/logout.js
import { withIronSession } from 'next-iron-session';

async function handler(req, res) {
  req.session.destroy();
  res.json({ isLoggedIn: false });
}

export default withIronSession(handler, {
  password: 'your_password',
  cookieName: 'next-auth',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production' ? true : false,
  },
});
