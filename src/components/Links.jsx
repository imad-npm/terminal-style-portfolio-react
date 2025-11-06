import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Links() {
  return (
    <section className="container mx-auto py-8 px-4 md:px-0 font-mono">
      <div className="flex items-center">
        <span className="text-green-400">[user@portfolio ~]$</span>
        <h2 className="text-2xl font-bold text-primary ml-2">ls -l links</h2>
      </div>
      <div className="flex gap-4 flex-wrap mt-4">
        <a href="https://github.com/imad-npm" target="_blank" className="flex items-center space-x-2 bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground py-2 px-4 rounded-md">
          <FaGithub />
          <span>GitHub</span>
        </a>
        <a href="https://linkedin.com/in/imad-benkaddour-2a5a0621b" target="_blank" className="flex items-center space-x-2 bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground py-2 px-4 rounded-md">
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
}
