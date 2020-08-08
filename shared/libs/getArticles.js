import { DateTime } from 'luxon';
import articles from '../../articles';

export default () => articles.map(article => ({
  ...article,
  formattedDate: DateTime.fromSeconds(article.date).toLocaleString(DateTime.DATE_FULL),
  url: `/articles/${article.id}-${article.name}`,
}));
