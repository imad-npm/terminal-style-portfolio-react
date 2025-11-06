export default function About() {
  return (
    <section className="container mx-auto py-8 px-4 md:px-0 font-mono">
      <div className="flex items-center">
        <span className="text-green-400">[user@portfolio ~]$</span>
        <h2 className="text-2xl font-bold text-primary ml-2">cat about.txt</h2>
      </div>
      <div className="space-y-4 text-muted-foreground mt-4">
        <p>Computer science graduate with a Master’s in Information Systems and Data. Passionate about software engineering, data-driven systems, and designing intelligent, scalable applications. Combines solid academic grounding in system architecture, data management, and algorithmic thinking with hands-on experience in application development, data processing, and automation. Motivated by innovation, clean design, and building solutions that connect theory with real-world impact.</p>
      </div>
    </section>
  );
}
