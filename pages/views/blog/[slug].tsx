import { NextPage, NextPageContext } from 'next';
import { IPost } from '../../../types/types';
import { BlogService } from '../../../src/blog/blog.service';

interface Props {
  post: { id: number; attributes: IPost };
  source: string;
}

interface SSProps {
  post: { id: number; attributes: IPost };
  source: string;
}

const Post: NextPage<Props> = ({ post: { id, attributes }, source }) => {
  return (
    <div>
      <h1>{attributes.title}</h1>
      <div>
        <p>{attributes.content}</p>
      </div>
      <div style={{ fontStyle: 'italic', fontSize: 14 }}>
        this page was rendered on the {source}
      </div>
    </div>
  );
};

// When the page was rendered server side the ctx.query will contain the data
// returned by the controller's method. When the page was rendered on the client
// side, the ctx.query will only contain the query params for the url.
//
// To better understand why this happens, reference the following next
// documentation about how getServerSideProps only runs on the server:
// https://nextjs.org/docs/basic-features/data-fetching#only-runs-on-server-side
export async function getServerSideProps(ctx: NextPageContext) {
  const post = ctx.query.post || null;

  const props: SSProps = {
    source: 'server',
    post: post as any,
  };

  if (!props.post) {
    const service = new BlogService();
    props.post = await service.find(ctx.query.slug as string);
    props.source = 'client';
  }

  if (props.post === null) {
    // https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
    // return object with notFound equal to true for 404 error
    return {
      notFound: true,
    };
  }

  return { props };
}

export default Post;
