import PostGrid from "../posts/Post-grid";
import styles from "./FeaturedPost.module.css";

const FeaturedPost = (props) => {


  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts}/>
    </section>
  );
};

export default FeaturedPost;
