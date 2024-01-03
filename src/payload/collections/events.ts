import { EVENT_AUDIENCE, EVENT_TYPE } from "../../lib/constants";
import { CollectionConfig } from "payload/types";

export const Events: CollectionConfig = {
  slug: "events",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      label: "Event Title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Event Description",
      type: "textarea",
      required: true,
      maxLength: 500,
      minLength: 10,
    },
    {
      name: "date",
      label: "Event Date",
      type: "date",
      required: true,
      index: true,
    },

    {
      name: "type",
      label: "Event Type",
      type: "select",
      options: EVENT_TYPE,
    },
    {
      name: "audience",
      label: "Event Audience",
      type: "select",
      options: EVENT_AUDIENCE,
      defaultValue: "All ages",
    },
    {
      name: "image",
      label: "Event Cover Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};
