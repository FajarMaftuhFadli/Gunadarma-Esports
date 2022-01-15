export default function SponsorSection() {
  return (
    <section className="flex h-5 space-x-4 justify-center items-center my-5 g-px">
      {Array(3)
        .fill()
        .map((v, i) => (
          <div key={i} className="uppercase p-1 rounded-sm text-white">
            Sponsor {++i}
          </div>
        ))}
    </section>
  );
}
