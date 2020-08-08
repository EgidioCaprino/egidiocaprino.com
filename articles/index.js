import { readFile } from 'fs';
import { promisify } from 'util';
import marked from 'marked';

const readFileAsync = promisify(readFile);
const parseMarkdown = promisify(marked);

export const getArticleContent = async (id) => {
  const contentBuffer = await readFileAsync(`${process.cwd()}/articles/${id}.md`);
  return parseMarkdown(contentBuffer.toString());
};

export default [
  {
    id: '1',
    title: 'Secure your business website for free',
    url: 'secure-your-business-website-for-free',
    date: 1510488000,
  },
];
