export default function Skills() {
  return (
    <section className="container mx-auto py-8 px-4 md:px-0 font-mono">
      <div className="flex items-center">
        <span className="text-green-400">[user@portfolio ~]$</span>
        <h2 className="text-2xl font-bold text-primary ml-2">cat skills.txt</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-muted-foreground mt-4">

        {/* Languages */}
        <div>
          <h3 className="text-lg font-semibold text-primary">Languages</h3>
          <ul className="list-disc list-inside">
            <li>C</li>
            <li>PHP</li>
            <li>JavaScript </li>
            <li>SQL</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-lg font-semibold text-primary">Backend</h3>
          <ul className="list-disc list-inside">
            <li>Laravel </li>
            <li>Node.js</li>
          </ul>
        </div>

        {/* Frontend */}
        <div>
          <h3 className="text-lg font-semibold text-primary">Frontend</h3>
          <ul className="list-disc list-inside">
            <li>React</li>
            <li>TailwindCSS</li>
          </ul>
        </div>

        {/* Databases */}
        <div>
          <h3 className="text-lg font-semibold text-primary">Databases</h3>
          <ul className="list-disc list-inside">
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>SQLite</li>
            <li>MongoDB</li>
          </ul>
        </div>
{/* Data Technologies */}
<div>
  <h3 className="text-lg font-semibold text-primary">Data Technologies</h3>
  <ul className="list-disc list-inside">
    <li>Hadoop</li>
    <li>Spark</li>
  </ul>
</div>

        {/* Software Design */}
        <div>
          <h3 className="text-lg font-semibold text-primary">Software Design</h3>
          <ul className="list-disc list-inside">
            <li>OOP</li>
            <li>MVC</li>
            <li>UML</li>
          </ul>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-lg font-semibold text-primary">Tools</h3>
          <ul className="list-disc list-inside">
            <li>Git</li>
            <li>GitHub</li>
            <li>Linux</li>

          </ul>
        </div>

      </div>
    </section>
  );
}
