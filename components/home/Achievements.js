import Section from "../Section";

export default function Showcase() {
  return (
    <Section>
      <h2 className="g-h2 g-text-c2">ACHIEVEMENTS</h2>
      <div>
        {Array(3)
          .fill()
          .map((v, i) => (
            <div key={i}>test</div>
          ))}
      </div>
    </Section>
  );
}
