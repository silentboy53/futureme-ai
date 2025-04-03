import React, { useState } from 'react';

export default function MessageForm() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message:', message, 'Email:', email, 'Date:', date);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
      <textarea
        placeholder="Write your future message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="p-2 text-black rounded"
      />
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 text-black rounded"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="p-2 text-black rounded"
      />
      <button type="submit" className="bg-white text-blue-950 font-semibold px-4 py-2 rounded">
        Send to the Future
      </button>
    </form>
  );
}