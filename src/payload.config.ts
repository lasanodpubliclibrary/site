import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";

import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

import { buildConfig } from "payload/config";
import { siteConfig } from "./config/site";
import Logo from "./payload/components/graphics/logo";
import Icon from "./payload/components/graphics/icon";
import { Users } from "./payload/collections/users";
import { Events } from "./payload/collections/events";
import { Media } from "./payload/collections/media";

// import { Pages } from "./collections/Pages";

const storageAdapter = s3Adapter({
  config: {
    endpoint: process.env.AWS_S3_API_ENDPOINT!,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  },
  bucket: process.env.AWS_S3_BUCKET_NAME!,
});

export default buildConfig({
  serverURL: process.env.next_PUBLIC_SERVER_URL || "",
  collections: [Users, Events, Media],
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    meta: {
      titleSuffix: ` - ${siteConfig.name}`,
      favicon: "/favicon.ico",
      ogImage: "/opengraph.png",
    },
    components: {
      // beforeLogin: [BeforeLogin],
      graphics: {
        Logo,
        Icon,
      },
    },
    css: path.resolve(__dirname, "./styles/admin.scss"),
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URI!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "types/payload-types.ts"),
  },
  plugins: [
    cloudStorage({
      collections: {
        media: {
          adapter: storageAdapter, // see docs for the adapter you want to use
        },
      },
    }),
  ],
  upload: {
    limits: {
      fileSize: 5000000, // 5MB
    },
  },
});
