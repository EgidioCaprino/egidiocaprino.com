import { DateTime } from 'luxon';
import articles from '../../articles';
import getArticleContent from './getArticleContent';

export default async (articleId) => {
  const article = articles.find(({ id }) => id === articleId);
  if (!article) {
    throw new Error(`Article ${articleId} not found`);
  }
  const content = await getArticleContent(articleId);
  return {
    ...article,
    content,
    formattedDate: DateTime.fromSeconds(article.date).toLocaleString(DateTime.DATE_FULL),
  };
};
