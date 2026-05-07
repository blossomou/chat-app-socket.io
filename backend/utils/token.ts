import jwt from 'jsonwebtoken';
import type { UserProps } from '../types.ts';

export const generateToken = (user: UserProps) => {
  const payload = {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    },
  };
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: '30d',
  });
};

//"30d" for 30 days,
//"1h" for 1 hour,
//"1m" for 1 minute
//"24h" for 24 hours.
//"60s" for 60 seconds.
