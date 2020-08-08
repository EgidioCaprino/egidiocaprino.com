import Link from 'next/link';

export default ({ url, title, formattedDate }) => (
  <li>{ title } - { formattedDate } - <Link href={url}><a>Read</a></Link></li>
);
