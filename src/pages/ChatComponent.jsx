// import React, { useState, useEffect } from 'react';
// import { initializeApp } from 'firebase/app';
// import { getDatabase, ref, push, onValue } from 'firebase/database';

// const firebaseConfig = {
//     apiKey: import.meta.env.apiKey,
//     authDomain: import.meta.env.authDomain,
//     databaseURL: import.meta.env.databaseURL,
//     projectId: import.meta.env.projectId,
//     storageBucket: import.meta.env.storageBucket,
//     messagingSenderId: import.meta.env.messagingSenderId,
//     appId: import.meta.env.appId,
//     measurementId: import.meta.env.measurementId,
// };

// console.log(firebaseConfig);

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// const ChatComponent = () => {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);

//   const sendMessage = () => {
//     if (message.trim() !== '') {
//       const messageRef = ref(database, 'messages');
//       push(messageRef, {
//         text: message,
//         timestamp: new Date().getTime()
//       });
//       setMessage('');
//     }
//   };

//   useEffect(() => {
//     const messageRef = ref(database, 'messages');
//     onValue(messageRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         const messageList = Object.values(data);
//         setMessages(messageList);
//       }
//     }, { once: true });
//   }, []);

//   return (
//     <div>
//       <h1>Live Chat</h1>
//       <div>
//         {messages.map((msg, index) => (
//           <div key={index}>
//             <p>{msg.text}</p>
//             <small>{new Date(msg.timestamp).toLocaleTimeString()}</small>
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         placeholder="Type your message..."
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// };

// export default ChatComponent;