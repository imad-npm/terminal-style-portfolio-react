// src/components/Header.jsx
export default function Header() {
  return (
    <header className="container mx-auto flex flex-col items-center justify-center py-18 px-4 md:px-0 text-center">
      <div>
        <h1 className="text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          John Doe
        </h1>
        <p className="text-muted-foreground mt-4">Frontend Developer</p>
      </div>
    </header>
  );
}
