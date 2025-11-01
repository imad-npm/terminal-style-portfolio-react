import { useState } from 'react';
import { FiCopy } from 'react-icons/fi';

const CopyToClipboard = ({ text, children }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="relative">
      <button onClick={handleCopy} className="flex items-center space-x-2 bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground py-2 px-4 rounded-md">
        {children}
        <FiCopy />
      </button>
      {isCopied && <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-500 text-white py-1 px-2 rounded-md">Copied!</div>}
    </div>
  );
};

export default CopyToClipboard;
