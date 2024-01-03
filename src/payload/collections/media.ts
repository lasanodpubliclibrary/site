import { CollectionConfig } from "payload/types";

import { isAdmin } from "../access/admin";

export const Media: CollectionConfig = {
  slug: "media",
  hooks: {
    beforeChange: [
      ({ req, data }) => {
        return { ...data, id: req.user.id };
      },
    ],
  },
  access: {
    read: isAdmin,
    delete: isAdmin,
    update: isAdmin,
  },
  admin: {
    hidden: ({ user }) => user.role !== "admin",
  },
  upload: {
    staticURL: "/media",
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
};
