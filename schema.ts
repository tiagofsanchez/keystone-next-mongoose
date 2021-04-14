import { createSchema, list } from "@keystone-next/keystone/schema";
import {
  text,
  relationship,
} from "@keystone-next/fields";

import { User } from "./schemas/User";
import { Post } from "./schemas/Post";
import { Tag } from "./schemas/Tag";

export const lists = createSchema({
  User,
  Post,
  Tag 
});
