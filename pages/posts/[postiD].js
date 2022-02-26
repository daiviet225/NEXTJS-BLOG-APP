import PostContent from "../../components/posts/PostDetail/PostContent";
import { getPostsData, getPostsFiles } from "../../lib/post-util";
import Head from "next/head";

const PostDetailPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.text} />
      </Head>
      <PostContent post={props.post} />
    </>
  );
};

export const getStaticProps = (context) => {
  const postDetail = getPostsData(context.params.postiD);

  return {
    props: {
      post: postDetail,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFilesName = getPostsFiles();

  const slugs = postFilesName.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({
      params: {
        postiD: slug,
      },
    })),
    fallback: false,
  };
};

export default PostDetailPage;
