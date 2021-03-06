import { Field, ArgsType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';

/*
 *  @ArgsType()
 *  해당 DTO을 사용하는 Resolver 에서 @Args() 이름을 넣어줄 필요가 없다.
 *  해당 Resolver 는 여러 개의 인자를 받게 된다. ( 단 하나의 객체만 받는 게 아니라는 것 )
 *  DTO에 명시해준 key값이 결국엔 인자들의 이름이다.
 */

@ArgsType()
export class CreateRestaurantDto {
  @Field(() => String)
  @IsString()
  @Length(5, 10)
  name: string;

  @Field(() => Boolean)
  @IsBoolean()
  isVegan: boolean;

  @Field(() => String)
  @IsString()
  address: string;

  @Field(() => String)
  @IsString()
  ownerName: string;
}
