import Head from "next/head";
import FeaturedPost from "../components/homePage/FeaturedPost";
import Hero from "../components/homePage/Hero";
import { getFeaturedPosts } from "../lib/post-util";

const homePage = (props) => {
  return (
    <>
      <Head>
        <title>welcome to co blog</title>
        <meta name="description" content="i post coding" />
      </Head>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </>
  );
};
export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
};

export default homePage;
