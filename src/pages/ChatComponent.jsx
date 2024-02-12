import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue } from 'firebase/database';

// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_apiKey,
//     authDomain: import.meta.env.VITE_authDomain,
//     databaseURL: import.meta.env.VITE_databaseURL,
//     projectId: import.meta.env.VITE_projectId,
//     storageBucket: import.meta.env.VITE_storageBucket,
//     messagingSenderId: import.meta.env.VITE_messagingSenderId,
//     appId: import.meta.env.VITE_appId,
//     measurementId: import.meta.env.VITE_measurementId,
// };


const firebaseConfig = {
    apiKey: "AIzaSyBm3--ubPJARyUzEGmwUVqqmiGeLBQbATU",
    authDomain: "curiocamp-b13dc.firebaseapp.com",
    databaseURL: "https://curiocamp-b13dc-default-rtdb.firebaseio.com",
    projectId: "curiocamp-b13dc",
    storageBucket: "curiocamp-b13dc.appspot.com",
    messagingSenderId: "346127704571",
    appId: "1:346127704571:web:4c77347a938eb9481e2b5e",
    measurementId: "G-1PYWZ9RYPH"
};

// const analytics = getAnalytics(app);

console.log(firebaseConfig);

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const ChatComponent = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message.trim() !== '') {
      const messageRef = ref(database, 'messages');
      push(messageRef, {
        text: message,
        timestamp: new Date().getTime()
      });
      setMessage('');
    }
  };

  useEffect(() => {
    const messageRef = ref(database, 'messages');
    onValue(messageRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageList = Object.values(data);
        setMessages(messageList);
      }
    }, { once: true });
  }, []);

  return (
    <div>
      <h1>Live Chat</h1>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <p>{msg.text}</p>
            <small>{new Date(msg.timestamp).toLocaleTimeString()}</small>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatComponent;