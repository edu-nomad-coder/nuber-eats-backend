import { Args, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';

@Resolver(() => Restaurant)
export class RestaurantsResolver{

  @Query(() => [Restaurant])
  restaurant(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    return [];
  }
}
