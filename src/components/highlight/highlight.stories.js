import { storiesOf } from "@storybook/vue";
import Vue from "vue";

import Highlight from ".";

Vue.use(Highlight);

const CODE_SQL = `
CREATE TABLE "topic" (
  "id" serial NOT NULL PRIMARY KEY,
  "forum_id" integer NOT NULL,
  "subject" varchar(255) NOT NULL
);
ALTER TABLE "topic"
ADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")
REFERENCES "forum" ("id");

-- Initials
insert into "topic" ("forum_id", "subject")
values (2, 'D''artagnian');
`;

storiesOf("Components|Highlight", module).add("基本用法", () => ({
  template: `
      <div>
        <wi-highlight :code="code" :language="language"/>
      </div>
    `,
  props: {
    code: {
      default: CODE_SQL
    }
  }
}));
