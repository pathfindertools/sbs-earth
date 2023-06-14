import { backgroundSchema } from "../background"
import { buttonsSchema } from "../buttons"
import { contentSchema } from "../content"
import { imageSchema } from '../image';
import { navigationLabelSchema } from "../navigation-label";
import { typographySchema } from "../typography"

const defaultCard = {
  label: "First Name",
  headline: "Last Name",
  subhead: "Title",
};

export const speakersBlockSchema: any = {
  name: "speakers",
  label: "Speakers",
  ui: {
    defaultItem: {
      label: "",
      headline: "Headline",
      subhead: "Subhead",
      style: {
        alignment: "flex-col-reverse items-start gap-6",
        padding: "pt-20 pb-20 pr-20 pl-20",
        featureContent: "w-1/2 min-h-0 text-left",
        labelStyles: "text-black",
        headlineStyles: "text-black",
        subheadStyles: "text-black",
        textStyles: "text-black",
      },
      cardStyle: {
        fillStyles: "bg-gray",
        grid: "grid-cols-3 justify-start gap-6",
        alignment: "flex-row items-start text-left",
        labelStyles: "text-black",
        headlineStyles: "text-black",
        subheadStyles: "text-black",
        textStyles: "text-black",
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
          label: "Alignment",
          name: "alignment",
          type: "string",
          ui: {
            component: "alignmentControl",
          },
        },
        {
          label: "Padding",
          name: "padding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        {
          label: "Content",
          name: "featureContent",
          type: "string",
          ui: {
            component: "featureContentControl",
          }
        },
        ...typographySchema
      ],
    },
    {
      type: "object",
      label: "Card Style",
      name: "cardStyle",
      ui: {
        component: "group",
      },
      fields: [
        {
          type: "string",
          label: "Background",
          name: "fillStyles",
          ui: {
            component: "fillControl"
          }
        },
        {
          label: "Grid",
          name: "grid",
          type: "string",
          ui: {
            component: "gridControl",
          },
        },
        {
          label: "Alignment",
          name: "alignment",
          type: "string",
          ui: {
            component: "cardAlignmentControl",
          },
        },
        ...typographySchema
      ],
    },
    backgroundSchema,
    ...contentSchema,
    {
      type: "object",
      label: "Speakers",
      name: "items",
      list: true,
      itemProps: (item) => ({
        label: `${item.label} ${item.headline}`,
      }),
      fields: [
        imageSchema,
        {
          label: "First Name",
          name: "label",
          type: "string",
        },
        {
          label: "Last Name",
          name: "headline",
          type: "string",
        },
        {
          label: "Title",
          name: "subhead",
          type: "string",
        },
        {
          label: "Body",
          name: "body",
          type: "rich-text",
        }
      ],
    },
    buttonsSchema,
    navigationLabelSchema,
  ],
};