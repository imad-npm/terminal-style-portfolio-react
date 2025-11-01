// src/components/About.jsx
export default function About() {
  return (
    <section className="container mx-auto py-8 px-4 md:px-0 font-mono">
      <div className="flex items-center">
        <span className="text-green-400">[user@portfolio ~]$</span>
        <h2 className="text-2xl font-bold text-primary ml-2">cat about.txt</h2>
      </div>
      <div className="space-y-4 text-muted-foreground mt-4">
        <p>Hi! I’m John, a frontend developer passionate about React and UI design.</p>
        <p>Skills: React, JavaScript, CSS, HTML</p>
      </div>
    </section>
  );
}
