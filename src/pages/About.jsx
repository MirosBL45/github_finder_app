function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React-app to search GitHub profiles and see profile details. This
        project is part of the
        <a
          href="https://www.udemy.com/course/modern-react-front-to-back/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          React Front To Back
        </a>{' '}
        Udemy course by
        <strong>
          <a href="https://traversymedia.com" target="_blank" rel="noreferrer">
            {' '}
            Brad Traversy
          </a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Coded By:{' '}
        <a
          className="text-white"
          href="https://github.com/MirosBL45"
          target="_blank"
          rel="noreferrer"
        >
          Miroslav Jovic
        </a>
      </p>
    </div>
  );
}

export default About;
