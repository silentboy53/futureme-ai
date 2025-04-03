import React from 'react';
import MessageForm from './MessageForm.jsx';
import ConfirmationScreen from './ConfirmationScreen.jsx';

export default function App() {
  return (
    <div className="min-h-screen p-4 bg-blue-950 text-white">
      <h1 className="text-2xl font-bold mb-4">💌 FutureMe.AI</h1>
      <MessageForm />
      <ConfirmationScreen />
    </div>
  );
}