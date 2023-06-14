import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
export const landingPagePlugin = () => {
  return ApolloServerPluginLandingPageLocalDefault({ embed: true });
};
