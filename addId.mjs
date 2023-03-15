import fs from "fs";

const uns = JSON.parse(fs.readFileSync("world_universities_and_domains.json"));

const unsIds = uns.map((un, index) => {
  return { id: index + 1, ...un };
});

console.log(unsIds[0]);

fs.writeFileSync(
  "world_universities_and_domains_index.json",
  JSON.stringify(unsIds)
);
