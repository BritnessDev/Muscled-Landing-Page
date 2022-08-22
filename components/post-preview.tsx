import { FC } from 'react';
import { IPost } from '../types/types';
import Link from 'next/link';

interface Props {
  post: { id: number; attributes: IPost };
}

const PostPreview: FC<Props> = ({ post }) => {
  return (
    <div style={{ marginBottom: 25 }}>
      <h2 style={{ fontSize: 16, textTransform: 'uppercase' }}>
        {post.attributes.title}
      </h2>
      <p>{post.attributes.content.substring(0, 200) + '...'}</p>
      <Link
        href={{
          pathname: '/views/blog/[slug]',
          query: { slug: post.id },
        }}
        as={`/blog/${post.id}`}>
        <a
          style={{
            display: 'inline-flex',
            background: 'black',
            color: 'white',
            padding: '5px 10px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontSize: 12,
          }}>
          View
        </a>
      </Link>
    </div>
  );
};

export default PostPreview;
