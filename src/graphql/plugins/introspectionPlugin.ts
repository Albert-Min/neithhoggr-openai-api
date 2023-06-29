import { ApolloServerPlugin, GraphQLRequestListener } from '@apollo/server';
import { ForbiddenError } from '@nestjs/apollo';
import { Plugin } from '@nestjs/apollo';
import { print } from 'graphql';

@Plugin()
export class IntrospectionPlugin implements ApolloServerPlugin {
  async requestDidStart(): Promise<GraphQLRequestListener<any>> {
    return {
      async didResolveOperation({ request, document }) {
        const query = print(document);
        const isIntrospection = query.startsWith('query IntrospectionQuery');
        const allowIntrospection = request.http.headers.get(
          'x-allow-introspection',
        );

        if (isIntrospection && allowIntrospection !== 'true') {
          throw new ForbiddenError(
            'You are not allowed to introspect the schema',
          );
        }
      },
    };
  }
}
