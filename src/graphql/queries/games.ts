import { QueryGames, QueryGamesVariables } from '@/graphql/generated/QueryGames'
import { QueryHookOptions, gql, useQuery } from '@apollo/client'

export const QUERY_GAMES = gql`
    query QueryGames($limit: Int!, $start: Int) {
        games(pagination: { limit: $limit, start: $start }) {
            data {
                attributes {
                    name
                    slug
                    price
                    cover {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                    developers {
                        data {
                            attributes {
                                name
                            }
                        }
                    }
                }
            }
        }
    }
`

export const QUERY_GAME_BY_SLUG = gql`
query QueryGameBySlug($slug: String!) {
    games(filters: { slug: { eq: $slug } }) {
    	data {
        attributes {
          name
          short_description
          description
          price
          rating
          release_date
          gallery {
            data {
              attributes {
                src: url
                label: alternativeText
              }
            }
          }
          cover {
            data {
              attributes {
                src: url
              }
            }
          }
          developers {
            data {
              attributes {
                name
              }
            }
          }
          publisher {
            data {
              attributes {
                name
              }
            }
          }
          categories {
            data {
              attributes {
                name
              }
            }
          }
          platforms {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`

export function useQueryGames(
  options?: QueryHookOptions<QueryGames, QueryGamesVariables>
) {
  return useQuery<QueryGames, QueryGamesVariables>(QUERY_GAMES, options)
}
