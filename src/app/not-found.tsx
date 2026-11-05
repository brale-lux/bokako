import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-5 py-24 text-center sm:px-10">
      <h1 className="text-5xl font-extrabold tracking-tight">Page not found</h1>
      <p className="mt-4 text-ink-soft">The page you are looking for does not exist or has moved.</p>
      <Link href="/" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-lime px-8 font-bold shadow-glow">
        Back to home
      </Link>
    </section>
  );
}
