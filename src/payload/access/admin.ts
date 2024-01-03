import type { AccessArgs } from "payload/config";

import { checkRole } from "../lib/utils/check-role";
import type { User } from "../../types/payload-types";

type isAdmin = (args: AccessArgs<unknown, User>) => boolean;

export const isAdmin: isAdmin = ({ req: { user } }) => {
  return checkRole("admin", user);
};
