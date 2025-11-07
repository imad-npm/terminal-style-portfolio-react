
export default function Projects() {
  return (
    <section className="container mx-auto py-8 px-4 md:px-0 font-mono">
      <div className="flex items-center">
        <span className="text-green-400">[user@portfolio ~]$</span>
        <h2 className="text-2xl font-bold text-primary ml-2">cat projects.txt</h2>
      </div>
      <div className="space-y-8 text-muted-foreground mt-4 break-words">
        <div>
          <h3 className="text-xl font-bold text-primary">Final-Year Projects Management & Assignment Platform (Master’s Thesis)</h3>
          <p className="mt-2">Developed an academic web platform to automate the management and assignment of Final-Year Projects (PFE) within the department.</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Replaced fragmented, manual workflows with a centralized digital system ensuring fairness and transparency.</li>
            <li>Designed role-based multi-user architecture for Administrators, Teachers, and Students.</li>
            <li>Engineered automated assignment algorithm based on preferences and academic averages.</li>
            <li>Modeled system with comprehensive UML diagrams for maintainability.</li>
          </ul>
          <p className="mt-2"><span className="font-semibold text-primary">Technologies:</span> Laravel (PHP), MySQL, TailwindCSS</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Medical Office Management System (Bachelor’s Project)</h3>
          <p className="mt-2">Designed and built a desktop application to digitize operations within a medical practice.</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Automated patient management, consultations, prescriptions, and appointments.</li>
            <li>Eliminated data redundancy by migrating from paper-based to digital records.</li>
            <li>Applied object-oriented design principles with full UML modeling.</li>
            <li>Delivered modular, maintainable codebase following software engineering standards.</li>
          </ul>
          <p className="mt-2"><span className="font-semibold text-primary">Technologies:</span> Java, JavaFX</p>
        </div>
      </div>
    </section>
  );
}

