import { Arg, Mutation, Query, Resolver } from "type-graphql";
import datasource from "../database/database";
import Country, { CountryInput } from "../entity/Country";

@Resolver(Country)
export class CountryResolver {
  @Query(() => [Country])
  async countries(): Promise<Country[]> {
    return datasource.getRepository(Country).find();
  }

  @Mutation(() => Country)
  async createCountry(@Arg("data") data: CountryInput): Promise<Country> {
    const { raw: country } = await datasource
      .getRepository(Country)
      .insert(data);
    return country;
  }
}
