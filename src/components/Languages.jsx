export default function Languages() {
  return (
    <section className="container mx-auto py-8 px-4 md:px-0 font-mono">
      <div className="flex items-center">
        <span className="text-green-400">[user@portfolio ~]$</span>
        <h2 className="text-2xl font-bold text-primary ml-2">cat languages.txt</h2>
      </div>
      <div className="text-muted-foreground mt-4">
        <ul className="list-disc list-inside">
          <li>Arabic: Native</li>
          <li>French: Fluent (academic and professional)</li>
          <li>English: Technical proficiency</li>
        </ul>
      </div>
    </section>
  );
}
