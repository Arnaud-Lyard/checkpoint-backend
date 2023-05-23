import { Arg, Mutation, Query, Resolver } from "type-graphql";
import datasource from "../database/database";
import Continent from "../entity/Continent";

@Resolver(Continent)
export class ContinentResolver {
  @Query(() => [Continent])
  async getCountriesByContinent(
    @Arg("continentCode") continentCode: string
  ): Promise<Continent[]> {
    const continentExist = await datasource.getRepository(Continent).findOne({
      where: { continentCode },
    });
    if (continentExist === null) throw new Error("Continent not found");

    const countriesByContinent = await datasource
      .getRepository(Continent)
      .find({
        where: { id: continentExist.id },
        relations: ["countries"],
      });

    return countriesByContinent;
  }
}
