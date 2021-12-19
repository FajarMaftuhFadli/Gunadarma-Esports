export default function Lorem() {
  return (
    <section className="flex flex-col justify-center items-center text-center space-y-5 g-px">
      <h2 className="text-6xl">Lorem</h2>
      {Array(10)
        .fill()
        .map((v, i) => (
          <div key={i} className="g-bg2 p-4 rounded-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            neque obcaecati suscipit voluptates, in quisquam quo nemo iste,
            nobis id eos, aut sed. Fugiat sunt impedit corporis ipsum veniam
            itaque.
          </div>
        ))}
      <a id="testa"></a>
    </section>
  );
}
