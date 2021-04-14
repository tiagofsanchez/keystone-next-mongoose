import { relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const Tag = list({
  ui: {
    isHidden: true,
  },
  fields: {
    name: text(),
    posts: relationship({
      ref: "Post.tags",
      many: true,
    }),
  },
});
