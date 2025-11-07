export default function Education() {
  return (
    <section className="container mx-auto py-8 px-4 md:px-0 font-mono">
      <div className="flex items-center">
        <span className="text-green-400">[user@portfolio ~]$</span>
        <h2 className="text-2xl font-bold text-primary ml-2">cat education.txt</h2>
      </div>
      <div className="text-muted-foreground mt-4 space-y-4 break-words">
        <div>
          <h3 className="text-xl font-bold text-primary">Master in Information Systems & Data (SID)</h3>
          <p className="italic">University of Science and Technology of Oran (USTO-MB)</p>
          <p className="mt-1"><span className="font-semibold text-primary">Thesis:</span> Design and Development of an Online Platform for Final-Year Project Management and Assignment</p>
          <p className="mt-1"><span className="font-semibold text-primary">Key Areas:</span> Big Data, Cloud Computing, Data Warehousing, Machine Learning, Information Systems Design, Web Services, Advanced Databases</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Bachelor in Software & Information Systems Engineering (ISIL)</h3>
          <p className="italic">University of Science and Technology of Oran (USTO-MB)</p>
          <p className="mt-1"><span className="font-semibold text-primary">Project:</span> Design of a Medical Office Management Software</p>
          <p className="mt-1"><span className="font-semibold text-primary">Key Areas:</span> Software Engineering, Object-Oriented Programming , Database Design, Web Technologies, System Analysis, Business Intelligence</p>
        </div>
      </div>
    </section>
  );
}
