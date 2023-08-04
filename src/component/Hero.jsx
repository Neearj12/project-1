const Hero = () => {
  return (
    <main className="hero cantainer">
      <div className="hero-content">
        <h1>Your feet Deserve The Best</h1>
     
        <div className="hero-button">
          <button>Shop_Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also available on </p>
          <div className="brand-icon">
            <img src="/images/amazon.png" alt="emazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/hero-image.png" alt="hero-image" />
      </div>
    </main>
  );
};
export default Hero;
