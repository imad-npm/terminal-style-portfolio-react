import { FaEnvelope, FaPhone } from 'react-icons/fa';
import CopyToClipboard from './ui/CopyToClipboard';

export default function Contact() {
  return (
    <section className="container mx-auto py-8 px-4 md:px-0 font-mono">
      <div className="flex items-center">
        <span className="text-green-400">[user@portfolio ~]$</span>
        <h2 className="text-2xl font-bold text-primary ml-2">cat contact.txt</h2>
      </div>
      <div className="flex gap-4 flex-wrap mt-4">
        <CopyToClipboard text="imad.benkaddour@yahoo.com">
          <FaEnvelope />
          <span>imad.benkaddour@yahoo.com</span>
        </CopyToClipboard>
        <div className="flex items-center space-x-2 bg-secondary text-secondary-foreground py-2 px-4 rounded-md">
          <FaPhone />
          <span>+213-792019450</span>
        </div>
        <div className="flex items-center space-x-2 bg-secondary text-secondary-foreground py-2 px-4 rounded-md">
          <span>Oran, Algeria</span>
        </div>
      </div>
    </section>
  );
}
