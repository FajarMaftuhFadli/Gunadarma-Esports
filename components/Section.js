export default function Section({ children, id }) {
  return (
    <section id={id} className="w-full g-px">
      <div className="g-max-w relative">{children}</div>
    </section>
  );
}
