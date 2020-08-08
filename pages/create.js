import { useRef, useState } from "react";
import styles from '../styles/Create.module.css'

export default function Create () {

  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
      
      // const data = new FormData(form.current);
      const data = {
        firstname,
        surname,
        message
      }

    fetch("/api/postTribute", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      }
    }).then(() => {
      setFirstname('');
      setSurname('');
      setMessage('');
    });


  }

  function handleChange({ target }) {
    const { name, value } = target;

    switch (name) {
      case 'firstname':
        setFirstname(value);
        break;
      case 'surname':
        setSurname(value);
        break;
      case 'message':
        setMessage(value);
        break;
        default:
          break;
    }
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <form ref={form} onSubmit={handleSubmit} id="form">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={handleChange}
          />
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            name="surname"
            value={surname}
            onChange={handleChange}
          />
          <label htmlFor="message">Message</label>
          <textarea
            rows={8}
            cols={50}
            name="message"
            value={message}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}