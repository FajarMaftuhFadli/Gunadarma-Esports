import Section from "../Section";

export default function Content() {
  return (
    <Section>
      <div className="skew-y-6 flex flex-col items-center ">
        <h2 className="g-h2 g-text-c2 mb-5">VIDEOS</h2>
        <div class="youtube-video-container mb-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/1HyoWT-qvyA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full flex space-x-4 mb-4">
          <div class="youtube-video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/wI2qjqWcZ4Y"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="youtube-video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/JKsVkpXvFZI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="w-full flex space-x-4 mb-4">
          <div class="youtube-video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/5XoOVDHPngM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="youtube-video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/bAtdQsF8hIQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <button className="btn-orange g-text-c4">WATCH US ON YOUTUBE</button>
      </div>
    </Section>
  );
}
