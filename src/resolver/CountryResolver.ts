import { Arg, Mutation, Query, Resolver } from "type-graphql";
import datasource from "../database/database";
import Country, { CountryInput } from "../entity/Country";
import Continent from "../entity/Continent";

@Resolver(Country)
export class CountryResolver {
  @Query(() => [Country])
  async getAllCountries(): Promise<Country[]> {
    return datasource.getRepository(Country).find();
  }

  @Mutation(() => Country)
  async createCountry(@Arg("data") data: CountryInput): Promise<Country> {
    const country = await datasource.getRepository(Country).save(data);
    const continent = await datasource.getRepository(Continent).save({
      continentCode: data.continentCode,
    });
    return country;
  }

  @Query(() => Country)
  async getCountryByCode(@Arg("code") code: string): Promise<Country> {
    const countryExist = await datasource
      .getRepository(Country)
      .findOne({ where: { code } });

    if (countryExist === null) throw new Error("Country not found");

    return countryExist;
  }
}
