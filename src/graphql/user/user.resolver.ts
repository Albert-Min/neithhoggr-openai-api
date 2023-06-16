import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { Types } from 'mongoose';
import { CurrentUser } from 'src/auth/decorators';

import { GqlAuthGuard } from '../../auth/gql-auth.guard';
import { User } from './user.entity';
import { UserService } from './user.service';
import { CreateUserInput, UpdateUserInput } from './user-inputs.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    try {
      return await this.userService.create(createUserInput);
    } catch (err) {
      console.error(err);
    }
  }

  @Mutation(() => String)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<string | GraphQLError> {
    try {
      return await this.userService.login({ email, password });
    } catch (err) {
      console.error(err);
    }
  }

  @Query(() => [User])
  @UseGuards(GqlAuthGuard)
  async findAll() {
    try {
      return await this.userService.findAll();
    } catch (err) {
      console.error(err);
    }
  }

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  async findOne(@Args('_id', { type: () => String }) _id: Types.ObjectId) {
    try {
      return await this.userService.findOne(_id);
    } catch (err) {
      console.error(err);
    }
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async updateUser(
    @CurrentUser() user: User,
    @Args('updateUserInput')
    updateUserInput: UpdateUserInput,
  ) {
    try {
      return await this.userService.update(user._id, updateUserInput);
    } catch (err) {
      console.error(err);
    }
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async updatePassword(
    @CurrentUser() user: User,
    @Args('currPass') currPass: string,
    @Args('newPass') newPass: string,
  ) {
    try {
      return await this.userService.updatePassword(user._id, currPass, newPass);
    } catch (err) {
      console.error(err);
    }
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async removeUser(@Args('_id') _id: string) {
    try {
      return await this.userService.remove(_id);
    } catch (err) {
      console.error(err);
    }
  }

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  async CurrentUser(@CurrentUser() user: User) {
    try {
      return await this.userService.findOne(user._id);
    } catch (err) {
      console.error(err);
    }
  }
}
