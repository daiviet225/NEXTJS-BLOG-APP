import Head from "next/head";
import AllPosts from "../../components/posts/AllPosts";
import { getAllpost } from "../../lib/post-util";

const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>All Post</title>
        <meta name="description" content="a list all post" />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllpost();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
