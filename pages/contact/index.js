import Head from "next/head";
import ContactForm from "../../components/contact/contactForm";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>contact me </title>
        <meta name="description" content="send me message" />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
