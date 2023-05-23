import { DataSource } from "typeorm";
import Country from "../entity/Country";
import Continent from "../entity/Continent";

export default new DataSource({
  type: "sqlite",
  database: "./db.sqlite3",
  synchronize: true,
  entities: [Country, Continent],
  logging: ["query", "error"],
});
