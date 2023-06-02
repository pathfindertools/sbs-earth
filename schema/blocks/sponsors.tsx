import { buttonsSchema } from "../buttons"
import { backgroundSchema } from "../background"
import { contentSchema } from "../content"
import { navigationLabelSchema } from "../navigation-label";
import { typographySchema } from "../typography"
import { imageSchema } from '../image';

const defaultCard = {
  headline: "Headline",
  subhead: "Subhead",
};

export const sponsorsBlockSchema: any = {
  name: "sponsors",
  label: "Sponsors",
  ui: {
    defaultItem: {
      style: {
        padding: "pt-20 pb-20 pr-20 pl-20",
        headlineStyles: "text-black",
      },
      background: {
        style: "bg-cover",
        position: "bg-center",
      },
      items: [defaultCard, defaultCard, defaultCard],
    },
  },
  fields: [
    {
      type: "object",
      label: "Section Styles",
      name: "style",
      ui: {
        component: "group",
      },
      fields: [
        {
          label: "Padding",
          name: "padding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        {
          type: "string",
          label: "Headline",
          name: "headlineStyles",
          ui: {
            component: "typeControl"
          }
        },
      ],
    },
    backgroundSchema,
    {
      type: "object",
      label: "Sponsors",
      name: "sponsors",
      list: true,
      itemProps: (item) => ({
        label: item.src?.replace('/uploads/', ''),
      }),
      fields: [
        {
          label: "Image Source",
          name: "src",
          type: "image",
          ui: {
            clearable: true,
          }
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        }
      ],
    },
    {
      type: "object",
      label: "Partners",
      name: "partners",
      list: true,
      itemProps: (item) => ({
        label: item.src?.replace('/uploads/', ''),
      }),
      fields: [
        {
          label: "Image Source",
          name: "src",
          type: "image",
          ui: {
            clearable: true,
          }
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        }
      ],
    },
    navigationLabelSchema,
  ],
};