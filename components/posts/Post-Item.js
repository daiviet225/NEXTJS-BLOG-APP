import Link from "next/link";
import styles from "./Post-Item.module.css";
import Image from "next/image";

const PostItem = (props) => {
  const { date, title, text, image, slug } = props.post;

  const formatDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={styles.post}>
      <Link href={linkPath}>
        <a>
          <div className={styles.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>{formatDate}</time>
            <p>{text}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
