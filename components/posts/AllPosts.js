import styles from "./AllPosts.module.css";
import PostGrid from "./Post-grid.js";

const AllPosts = (props) => {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
};

export default AllPosts;
