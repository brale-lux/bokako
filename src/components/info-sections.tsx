const steps = [
  { title: "Choose a template", text: "Pick the calculator or tracker that fits your decision." },
  { title: "Download securely", text: "After purchase, your file is delivered by our checkout provider." },
  { title: "Enter your data", text: "Fill in your own numbers in the clearly marked input cells." },
  { title: "Explore insights", text: "See results, comparisons and charts update as you go." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="px-5 py-16 sm:px-10">
      <div className="mx-auto max-w-[1240px]">
        <h2 id="how-title" className="text-4xl font-extrabold tracking-tight">How It Works</h2>
        <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-card bg-white p-7 shadow-soft ring-1 ring-navy/5">
              <span className="grid size-11 place-items-center rounded-full bg-lime text-lg font-extrabold">{i + 1}</span>
              <h3 className="mt-5 text-lg font-extrabold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="px-5 pb-16 pt-4 sm:px-10">
      <div className="mx-auto max-w-[1240px] rounded-card bg-gradient-to-br from-sky to-mint p-8 shadow-soft sm:p-12">
        <h2 id="about-title" className="text-3xl font-extrabold tracking-tight">About Bokako</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Bokako makes practical digital tools that turn data into decisions. Our Excel templates and calculators help
          you analyse options, plan ahead and track what matters, without needing specialist software.
        </p>
      </div>
    </section>
  );
}
