import styles from "./Post-grid.module.css";
import PostItem from "./PostItem.js";

const PostGrid = (props) => {
  const { posts } = props;
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem post={post} key={post.slug} />
      ))}
    </ul>
  );
};

export default PostGrid;
