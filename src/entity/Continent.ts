import { Field, InputType, ObjectType } from "type-graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Country from "./Country";

@ObjectType()
@Entity()
class Continent {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  continentCode: string;

  @OneToMany(() => Country, (country) => country.continent)
  @Field(() => [Country])
  countries: Country[];
}

export default Continent;
