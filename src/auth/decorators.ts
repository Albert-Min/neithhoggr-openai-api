import {
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const IS_PUBLIC_KEY = 'isPublic';

export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const { _id, email } =
      GqlExecutionContext.create(context).getContext().req.user;
    return {
      _id,
      email,
    };
  },
);
