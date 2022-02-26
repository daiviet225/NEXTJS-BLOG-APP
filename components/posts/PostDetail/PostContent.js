import styles from "./PostContent.module.css";
import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const PostContent = (props) => {
  const { slug, image, title, content } = props.post;

  const imagePath = `/images/posts/${slug}/${image}`;

  const customRenderers = {
    img(image) {
      return (
        <Image
          src={`/images/posts/${slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },

    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      return <Prism language={language} children={children} style={atomDark} />;
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader title={title} image={imagePath} />

      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
