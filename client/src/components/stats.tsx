export default function Stats() {
  const stats = [
    { number: "5+", label: "Projects Completed" },
    { number: "5+", label: "Happy Clients" },
    { number: "1", label: "Years Experience" },
    { number: "5", label: "Awards Won" },
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="card-hover bg-card p-6 rounded-xl shadow-sm"
              data-testid={`stat-${index}`}
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
