type ContentProps = {
  intro: string;
  highlights: string[];
};

const Content = ({ intro, highlights }: ContentProps) => {
  return (
    <main className="content">
      <section className="card">
        <h2 className="card__title">What I Built</h2>
        <p className="card__intro">{intro}</p>
        <ul className="card__list">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="card card--accent">
        <h2 className="card__title">Who am I?</h2>
        <p className="card__intro">
          Jithesh P Shetty, 4th year CSE student at Sahyadri College of
          Engineering and Management.
        </p>
        <a
          className="primary-button"
          href="https://jitheshshetty.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Click to know more about me!
        </a>
      </section>
    </main>
  );
};

export default Content;
