// src/components/Header.jsx
export default function Header() {
  return (
    <header className="container mx-auto flex items-center justify-between py-8 px-4 md:px-0">
      <div>
        <h1 className="text-3xl font-bold text-primary">John Doe</h1>
        <p className="text-muted-foreground">Frontend Developer</p>
      </div>
    </header>
  );
}
