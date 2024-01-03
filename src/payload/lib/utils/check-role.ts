import type { User } from "../../../types/payload-types";

export const checkRole = (role: User["role"], user?: User | null): boolean => {
  if (!user) return false;

  return user.role === role;
};
