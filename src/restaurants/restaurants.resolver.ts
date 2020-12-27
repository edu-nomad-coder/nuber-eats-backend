import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';

@Resolver(() => Restaurant)
export class RestaurantsResolver{

  @Query(() => [Restaurant])
  restaurant(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    return [];
  }

  @Mutation(() => Boolean)
  createRestaurant(
    @Args() createRestaurantDTO: CreateRestaurantDto
  ): boolean {
    console.log(createRestaurantDTO);
    return true;
  }
}
