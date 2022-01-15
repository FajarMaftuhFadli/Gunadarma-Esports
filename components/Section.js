export default function Section({ children }) {
  return (
    <section className="w-full g-px">
      <div className="g-max-w relative">{children}</div>
    </section>
  );
}
