import type { Access } from "payload/config";
import type { FieldAccess } from "payload/types";

import type { User } from "../../types/payload-types";
import { check } from "prettier";
import { checkRole } from "../lib/utils/check-role";

export const isMeOrAdmin: Access = ({ req }) => {
  const user: User | undefined = req.user as User | undefined;

  if (!user) return false;

  // If any other type of user, only provide access to themselves
  return (
    checkRole("admin", user) || {
      id: {
        equals: user.id,
      },
    } ||
    false
  );

  // Reject everyone else
  return false;
};

export const isMeOrAdminFieldLevel: FieldAccess<
  { id: string },
  unknown,
  User
> = ({ req: { user }, id }) => {
  // Return true or false based on if the user has an admin role
  if (!user) return false;
  return checkRole("admin", user) || user?.id === id || false;
};
