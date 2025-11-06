
export default function Skills() {
  return (
    <section className="container mx-auto py-8 px-4 md:px-0 font-mono">
      <div className="flex items-center">
        <span className="text-green-400">[user@portfolio ~]$</span>
        <h2 className="text-2xl font-bold text-primary ml-2">cat skills.txt</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-muted-foreground mt-4">
        <div>
          <h3 className="text-lg font-semibold text-primary">Programming</h3>
          <ul className="list-disc list-inside">
            <li>C</li>
            <li>PHP</li>
            <li>JavaScript (ES6+)</li>
            <li>Java</li>
            <li>Python</li>
            <li>SQL</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary">Frameworks</h3>
          <ul className="list-disc list-inside">
            <li>Laravel</li>
            <li>React</li>
            <li>TailwindCSS</li>
            <li>Node.js</li>
            <li>JavaFX</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary">Databases</h3>
          <ul className="list-disc list-inside">
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>SQLite</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary">Tools</h3>
          <ul className="list-disc list-inside">
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary">Architecture</h3>
          <ul className="list-disc list-inside">
            <li>OOP</li>
            <li>MVC</li>
            <li>UML</li>
            <li>RESTful APIs</li>
            <li>SOAP</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary">Data</h3>
          <ul className="list-disc list-inside">
            <li>Analysis</li>
            <li>Warehousing</li>
            <li>Processing</li>
            <li>Modeling & Optimization</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary">Development</h3>
          <ul className="list-disc list-inside">
            <li>Web & Desktop Applications</li>
            <li>Algorithmic Problem Solving</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
