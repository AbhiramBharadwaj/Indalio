import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Our Projects" pageTitle="Installation Projects" />
      <section className="project-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Success Stories
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Our Monitor Arm Installation Projects Across India
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="row justify-content-center">
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="project-card-items">
                    <div className="project-image">
                      <img src="assets/img/products/monitor-arm-9.png" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Corporate Office - Bangalore</p>
                      <h3>
                        <Link href="project-details">
                          500+ Dual Monitor Arms <br />
                          Deployed for IT Company
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="project-card-items">
                    <div className="project-image">
                      <img src="assets/img/products/monitor-arm-8.png" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Security Operations Center</p>
                      <h3>
                        <Link href="project-details">
                          Wall-Mounted CCTV Monitor <br />
                          Setup for Control Room
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="project-card-items">
                    <div className="project-image">
                      <img src="assets/img/products/monitor-arm-10.png" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Trading Firm - Mumbai</p>
                      <h3>
                        <Link href="project-details">
                          Complete Workspace Transformation with Gas Spring Arms
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="project-card-items">
                    <div className="project-image">
                      <img src="assets/img/products/monitor-arm-16.png" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Startup Office - Hyderabad</p>
                      <h3>
                        <Link href="project-details">
                          Ergonomic Monitor Setup for Tech Startup
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="project-card-items">
                    <div className="project-image">
                      <img src="assets/img/products/monitor-arm-17.png" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>BPO Center - Pune</p>
                      <h3>
                        <Link href="project-details">
                          200+ Monitor Arms for <br /> Call Center Operations
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="project-card-items">
                    <div className="project-image">
                      <img src="assets/img/products/monitor-arm-18.png" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Government Office - Delhi</p>
                      <h3>
                        <Link href="project-details">
                          Dual Screen Setup for <br /> Administrative Efficiency
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="project-card-items">
                    <div className="project-image">
                      <img src="assets/img/products/monitor-arm-19.png" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Educational Institute - Chennai</p>
                      <h3>
                        <Link href="project-details">
                          Computer Lab Monitor Arms Installation
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="project-card-items">
                    <div className="project-image">
                      <img src="assets/img/products/monitor-arm-15.png" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Manufacturing Facility - Ludhiana</p>
                      <h3>
                        <Link href="project-details">
                          Quality Control Station Monitor Setup
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};
export default page;
