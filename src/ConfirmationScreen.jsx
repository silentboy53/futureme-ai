import React, { useEffect, useState } from 'react';

export default function ConfirmationScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return visible ? (
    <div className="bg-green-600 p-4 rounded mt-4">✅ Your capsule is sealed!</div>
  ) : null;
}
