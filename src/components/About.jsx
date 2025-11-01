// src/components/About.jsx
export default function About() {
  return (
    <section className="container mx-auto py-8 px-4 md:px-0 font-mono">
      <div className="flex items-center">
        <span className="text-green-400">[user@portfolio ~]$</span>
        <h2 className="text-2xl font-bold text-primary ml-2">cat about.txt</h2>
      </div>
      <div className="space-y-4 text-muted-foreground mt-4">
        <p>Hi! I’m John, a software developer with a Master degree in Computer Science, 
</p>
        <p>I’ve worked on a variety of projects using C, Java, PHP, Python, and JavaScript.
Built web apps with React and Laravel, experimented with backend APIs and automation scripts.
Enjoy tackling problems at different levels, from low-level logic to high-level design.
Always open to exploring new technologies and frameworks.</p>
      </div>
    </section>
  );
}
