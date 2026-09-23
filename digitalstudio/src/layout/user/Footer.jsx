function Footer (){
    return (
        <>
         <footer id="footer" className="footer">
    <div className="container">
      <div className="copyright text-center ">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">PhotoFolio</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
      </div>
      <div className="social-links d-flex justify-content-center">
        <a href="">
          <i className="bi bi-twitter-x" />
        </a>
        <a href="">
          <i className="bi bi-facebook" />
        </a>
        <a href="">
          <i className="bi bi-instagram" />
        </a>
        <a href="">
          <i className="bi bi-linkedin" />
        </a>
      </div>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you've purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> |{" "}
        <a href="https://bootstrapmade.com/tools/">DevTools</a>
      </div>
    </div>
  </footer>
  {/* Scroll Top */}
  <a
    href="#"
    id="scroll-top"
    className="scroll-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </a>
  {/* Preloader
  <div id="preloader">
    <div className="line" />
  </div> */}
</>
    )
}
export default Footer