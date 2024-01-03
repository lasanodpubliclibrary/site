import { CollectionConfig } from "payload/types";
import { VerificationEmailHtml } from "../../email/verification-email";

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    verify: {
      generateEmailHTML: ({ token, user }) => {
        return VerificationEmailHtml({
          name: user.name,
          href: `${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}`,
        });
      },
      generateEmailSubject: ({ user }) =>
        `Welcome ${user.name}, verify your email`,
    },
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "role",
      type: "select",
      defaultValue: "user",
      required: true,
      options: [
        { label: "User", value: "user" },
        { label: "Librarian", value: "librarian" },
        { label: "Writer", value: "writer" },
        { label: "Admin", value: "admin" },
      ],
    },
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
  ],
};
