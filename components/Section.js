/**
 * It returns a section element with a div inside it.
 * @returns A section element with an id attribute.
 */
export default function Section({ children, id }) {
  return (
    <section id={id} className="w-full g-px">
      <div className="g-max-w relative">{children}</div>
    </section>
  );
}
