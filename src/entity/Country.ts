import { Field, InputType, ObjectType } from "type-graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Continent from "./Continent";

@ObjectType()
@Entity()
class Country {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  code: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  emoji: string;

  @ManyToOne(() => Continent, (continent) => continent.countries)
  continent: Continent;
}

@InputType()
export class CountryInput {
  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  emoji: string;
  @Field()
  continentCode: string;
}

export default Country;
