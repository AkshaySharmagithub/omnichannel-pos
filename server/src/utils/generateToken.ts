import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

/**
 * Generates a signed JWT token for the given user.
 * @param id   - The user's MongoDB ObjectId
 * @param role - The user's role (cashier | manager | admin)
 * @returns A signed JWT string
 */
const generateToken = (id: Types.ObjectId, role: string): string => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET as string, {
    expiresIn: (process.env.JWT_EXPIRES_IN || '7d') as string,
  });
};

export default generateToken;
