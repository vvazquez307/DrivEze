const Home = () => {
  return (
    <main className="home-page">
      <div id="home-buttons">
        <button id="button">Vehicles</button>
        <button id="button">Locations</button>
        <button id="button">About Us</button>
      </div>
      <div id="welcome-section">
        <div id="welcome-user">
          <h1>Welcome (User) to DrivEze!</h1>
        </div>
        <div id="welcome-desc">
          <h2>
            The rental car industry has been stagnant for over 60 years, lets
            change that.
        <button id="available-button">View Available Cars</button>
          </h2>
        </div>
      </div>
    </main>
  );
};
export default Home;
