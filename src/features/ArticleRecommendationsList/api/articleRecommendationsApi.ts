import { Article } from '@/entity/Article';
import { rtkApi } from '@/shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query<Array<Article>, number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
          _expand: 'user',
        },
      }),
    }),
  }),
});

export const useArticleRecommendationsList =
  recommendationsApi.useGetArticleRecommendationsListQuery;
