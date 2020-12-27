import { Field, InputType } from '@nestjs/graphql';

/*
 * @InputType()
 * 해당 DTO를 사용하는 Resolver 에서는 @Args("apple") 해당 객체에 대한 이름을 반드시 넣어주어야 한다.
 * 해당 Resolver 는 @Args("apple") 명시해준 이름을 통해 하나의 객체가 들어오게 된다.
 * apple이라는 object가 들어오게 되는 것. 그 내부의 데이터는 DTO로 명시해준 타입에 맞게끔 들어오게 된다.
 */

@InputType()
export class CreateRestaurantDto {
  @Field(() => String)
  name: string;
  @Field(() => Boolean)
  isVegan: boolean;
  @Field(() => String)
  address: string;
  @Field(() => String)
  ownerName: string;
}
