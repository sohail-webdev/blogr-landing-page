import phone_image from "../assets/images/illustration-phones.svg";

export default function Speed() {
  return (
    <section className="section section-speed">
      <div className="section-speed-content-container">
        <div className="section-speed-circle-illustration"></div>
        <img src={phone_image} alt="" className="section-speed-phone-illustration" />
        <div className="section-speed-content">
          <h2>State of the Art Infrastructure</h2>
          <p>
            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will
            load instantly, no matter where your readers are, keeping your site competitive.
          </p>
        </div>
      </div>
    </section>
  );
}
