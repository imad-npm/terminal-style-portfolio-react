import Typewriter from './ui/Typewriter';

export default function Header() {
  return (
    <header className="container mx-auto flex flex-col items-center justify-center py-9 px-4 md:px-0 text-center font-mono">
      <div>
        <div className="text-left">
          <span className="text-green-400">[user@portfolio ~]$</span>
          <h1 className="text-4xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary break-words">
            <Typewriter text="Benkaddour Imad Eddine" speed={100} />
          </h1>
        </div>
        <p className="text-muted-foreground mt-4">
          <Typewriter text="Fullstack Developer" speed={50} delay={2500} />
        </p>
      </div>
    </header>
  );
}

