import { useEffect, useRef, useState } from "react";
import styles from "./contactForm.module.css";
import Notification from "../ui/notification";

const sendContactData = async (contact) => {
  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contact),
    headers: { "Content-type": "application/json" },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "something went wrong");
  }
};

const ContactForm = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const [reqStatus, setReqStatus] = useState();
  const [errorMes, setErrorMes] = useState();

  useEffect(() => {
    if (reqStatus === "success" || reqStatus === "error") {
      const time = setTimeout(() => {
        setReqStatus(null);
        setErrorMes(null);
      }, 3000);

      return () => clearTimeout(time);
    }
  }, [reqStatus]);

  const formHandler = async (event) => {
    event.preventDefault();

    setReqStatus("pending");

    const enterEmail = emailRef.current.value;
    const enterName = nameRef.current.value;
    const enterMessage = messageRef.current.value;

    const dataSend = {
      email: enterEmail,
      name: enterName,
      message: enterMessage,
    };

    try {
      await sendContactData(dataSend);
      setReqStatus("success");
    } catch (error) {
      setErrorMes(error.message);
      setReqStatus("error");
    }
  };

  let notification;

  if (reqStatus === "pending") {
    notification = {
      status: "pending",
      title: "sending message..",
      message: "on it way",
    };
  }

  if (reqStatus === "error") {
    notification = {
      status: "error",
      title: "error",
      message: errorMes,
    };
  }

  if (reqStatus === "success") {
    notification = {
      status: "success",
      title: "success",
      message: "message send",
    };
  }

  return (
    <>
      <section className={styles.contact}>
        <h1>how can i help you ?</h1>
        <form className={styles.form} onSubmit={formHandler}>
          <div className={styles.controls}>
            <div className={styles.control}>
              <label htmlFor="email">your Email</label>
              <input type="email" id="email" required ref={emailRef} />
            </div>

            <div className={styles.control}>
              <label htmlFor="name">your Name</label>
              <input type="text" id="name" required ref={nameRef} />
            </div>
          </div>

          <div className={styles.control}>
            <label htmlFor="message">your Name</label>
            <textarea id="message" rows={5} ref={messageRef} required />
          </div>

          <div className={styles.actions}>
            <button>send message</button>
          </div>
        </form>

        {notification && (
          <Notification
            title={notification.title}
            message={notification.message}
            status={notification.status}
          />
        )}
      </section>
    </>
  );
};

export default ContactForm;
