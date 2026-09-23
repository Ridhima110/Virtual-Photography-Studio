import {Link} from 'react-router-dom'
function About(){
    return(
        <>
  <main className="main">
  {/* Page Title */}
  <div className="page-title" data-aos="fade">
    <div className="heading">
      <div className="container">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-lg-8">
            <h1>About</h1>
            <p className="mb-0">
  We believe every moment deserves to be remembered beautifully. From
  joyful celebrations to quiet, candid moments, we capture the emotions
  and stories that make each occasion special. Our goal is to create
  natural, timeless photographs that you can cherish for years to come.
            </p>
            <a href="contact.html" className="cta-btn">
              Available for Hire
              <br />
            </a>
          </div>
        </div>
      </div>
    </div>
    <nav className="breadcrumbs">
      <div className="container">
        <ol>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li className="current">About</li>
        </ol>
      </div>
    </nav>
  </div>
  {/* End Page Title */}
  {/* About Section */}
  <section id="about" className="about section">
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row gy-4 justify-content-center">
        <div className="col-lg-4">
          <img src="assets/img/profile-img.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-5 content">
          <h2>
        Professional Photographer from Punjab &amp;
          </h2>
          <p className="fst-italic py-3">
            I’m Jagdish Kumar, a professional photographer from Jalandhar, Punjab, passionate about capturing genuine emotions, beautiful moments, and memories that last a lifetime.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="bi bi-chevron-right" />{" "}
                  <strong>Birthday:</strong> <span>06 september 1973</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />{" "}
                  <strong>Website:</strong> <span>admin@gmail.com</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" /> <strong>Phone:</strong>{" "}
                  <span>+91 6280700858</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" /> <strong>City:</strong>{" "}
                  <span>Jalandhar, Punjab</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="bi bi-chevron-right" /> <strong>Degree:</strong>{" "}
                  <span>B.A.</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" /> <strong>Email:</strong>{" "}
                  <span>email@example.com</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />{" "}
                  <strong>Freelance:</strong> <span>Available</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="py-3">
          With a deep passion for photography, I love capturing the moments that make life special. Whether it is a wedding, family celebration, portrait, or a memorable occasion, I believe every photograph should tell a story and preserve the emotions of that moment.

Over the years, photography has allowed me to meet wonderful people and capture countless memories through my lens. I focus on natural expressions, genuine emotions, and the small details that often become the most precious memories.

Through The Bright Studio, my aim is to provide photographs that are not only beautiful to look at but also meaningful to the people in them. Every moment is unique, and I put my heart into making sure that every photograph reflects its story.

<p>
    Through my work, I have always believed that photography is about creating something that becomes more valuable with time. I enjoy finding the beauty in simple moments and turning them into lasting memories. Every client, every celebration, and every photograph gives me a new story to capture. My goal is to make every person feel comfortable and confident in front of the camera while creating photographs they will proudly cherish.

</p>
          </p>

        </div>
      </div>
    </div>
  </section>
  {/* /About Section */}
  {/* Testimonials Section */}
  <section id="testimonials" className="testimonials section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Testimonials</h2>
      <p>What they are saying</p>
    </div>
    {/* End Section Title */}
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="swiper init-swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              </p>
              <div className="profile mt-auto">
                <img
                  src="assets/img/testimonials/testimonials-1.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>
          </div>
          {/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
                Export tempor illum tamen malis malis eram quae irure esse
                labore quem cillum quid cillum eram malis quorum velit fore eram
                velit sunt aliqua noster fugiat irure amet legam anim culpa.
              </p>
              <div className="profile mt-auto">
                <img
                  src="assets/img/testimonials/testimonials-2.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>
          </div>
          {/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
                Enim nisi quem export duis labore cillum quae magna enim sint
                quorum nulla quem veniam duis minim tempor labore quem eram duis
                noster aute amet eram fore quis sint minim.
              </p>
              <div className="profile mt-auto">
                <img
                  src="assets/img/testimonials/testimonials-3.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div>
          </div>
          {/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
                F<p>
  We believe every moment deserves to be remembered beautifully. From
  joyful celebrations to quiet, candid moments, we capture the emotions
  and stories that make each occasion special. Our goal is to create
  natural, timeless photographs that you can cherish for years to come.
</p>
              </p>
              <div className="profile mt-auto">
                <img
                  src="assets/img/testimonials/testimonials-4.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div>
          </div>
          {/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
  We believe every moment deserves to be remembered beautifully. From
  joyful celebrations to quiet, candid moments, we capture the emotions
  and stories that make each occasion special. Our goal is to create
  natural, timeless photographs that you can cherish for years to come.
              </p>
              <div className="profile mt-auto">
                <img
                  src="assets/img/testimonials/testimonials-5.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>
          </div>
          {/* End testimonial item */}
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  </section>
  {/* /Testimonials Section */}
</main>

        </>
    )}
    export default About