import {Link} from 'react-router-dom'
function Contact(){
    return(
        <>
<main className="main">
  {/* Page Title */}
  <div className="page-title" data-aos="fade">
    <div className="heading">
      <div className="container">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-lg-8">
            <h1>Contact</h1>
            <p className="mb-0">
              Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
              quo odio sint voluptas consequatur ut a odio voluptatem. Sit
              dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
              quaerat ipsum dolorem.
            </p>
          </div>
        </div>
      </div>
    </div>
    <nav className="breadcrumbs">
      <div className="container">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="current">Contact</li>
        </ol>
      </div>
    </nav>
  </div>
  {/* End Page Title */}
  {/* Contact Section */}
  <section id="contact" className="contact section">
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="info-wrap" data-aos="fade-up" data-aos-delay={200}>
        <div className="row gy-5">
          <div className="col-lg-4">
            <div className="info-item d-flex align-items-center">
              <i className="bi bi-geo-alt flex-shrink-0" />
              <div>
                <h3>Location</h3>
                <p>Model House,Jalandhar</p>
              </div>
            </div>
          </div>
          {/* End Info Item */}
          <div className="col-lg-4">
            <div className="info-item d-flex align-items-center">
              <i className="bi bi-telephone flex-shrink-0" />
              <div>
                <h3>Call</h3>
                <p>+91 6280700858</p>
              </div>
            </div>
          </div>
          {/* End Info Item */}
          <div className="col-lg-4">
            <div className="info-item d-flex align-items-center">
              <i className="bi bi-envelope flex-shrink-0" />
              <div>
                <h3>Email</h3>
                <p>admin@gmail.com</p>
              </div>
            </div>
          </div>
          {/* End Info Item */}
        </div>
      </div>
      <form
        action="forms/contact.php"
        method="post"
        className="php-email-form"
        data-aos="fade-up"
        data-aos-delay={300}
      >
        <div className="row gy-4">
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              required=""
            />
          </div>
          <div className="col-md-6 ">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Your Email"
              required=""
            />
          </div>
          <div className="col-md-12">
            <input
              type="text"
              className="form-control"
              name="subject"
              placeholder="Subject"
              required=""
            />
          </div>
          <div className="col-md-12">
            <textarea
              className="form-control"
              name="message"
              rows={6}
              placeholder="Message"
              required=""
              defaultValue={""}
            />
          </div>
          <div className="col-md-12 text-center">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">
              Your message has been sent. Thank you!
            </div>
            <button type="submit">Send Message</button>
          </div>
        </div>
      </form>
      {/* End Contact Form */}
    </div>
  </section>
  {/* /Contact Section */}
</main>
        </>
    )

}
export default Contact