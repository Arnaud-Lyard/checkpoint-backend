import { DataSource } from "typeorm";
import Country from "../entity/Country";

export default new DataSource({
  type: "sqlite",
  database: "./db.sqlite3",
  synchronize: true,
  entities: [Country],
  logging: ["query", "error"],
});
