import { DateTime } from 'luxon';
import Layout from '../layout';
import articles, { getArticleContent } from '../../articles';

const pathRegExp = /^([0-9]+)-.+$/;

const getArticleId = path => {
  const [, id] = pathRegExp.exec(path);
  return id;
};

export const getStaticProps = async ({ params }) => {
  const { path } = params;
  const id = getArticleId(path);
  const { title, date } = articles.find(article => article.id === id);
  const content = await getArticleContent(id);
  return {
    props: {
      title,
      content,
      date: DateTime.fromSeconds(date).toLocaleString(DateTime.DATE_FULL),
    },
  };
};

export const getStaticPaths = () => {
  const paths = articles.map(({ id, url }) => ({
    params: {
      path: `${id}-${url}`,
    },
  }));
  return { paths, fallback: false };
};

export default ({ title, content, date }) => (
  <Layout title={ title }>
    <div className="container">
      <div className="row mb-4">
        <div className="col-6 offset-3">
          <h1>{ title }</h1>
          <p className="text-muted">{ date }</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 offset-3">
          <div style={{ fontSize: '150%' }} dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  </Layout>
);
