import React, { useState } from "react";
import Bcrumbs from "../components/Bcrumbs";
import "../css/Gallery.css";
import Sectionhead from "../components/Sectionhead";
import Modal from "react-modal";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Bcrumbs breadcrumbspage="Gallery" />
      <section className="Gallery" id="Gallery">
        <Sectionhead
          sectionname="Gallery"
          sectiondescription="Our"
          sectiondescriptionbold="Gallery"
        />
        <div className="container">
          <div className="gallery-item">
            <div className="gallery-item">
              <div className="gallery-item-title">
                <h4> Summer medical camp 2023</h4>
              </div>
              <div className="row g-3">
                <div
                  className="col-6 col-md-4 col-lg-3 col-xl-2 gallery-img d-flex justify-content-center align-items-center"
                  onClick={() =>
                    openModal(
                      "https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    )
                  }
                >
                  <img
                    src="https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    alt="sample image"
                    className="img-fluid"
                  />
                </div>
                <div
                  className="col-6 col-md-4 col-lg-3 col-xl-2 gallery-img d-flex justify-content-center align-items-center"
                  onClick={() =>
                    openModal(
                      "https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    )
                  }
                >
                  <img
                    src="https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    alt="sample image"
                    className="img-fluid"
                  />
                </div>
                <div
                  className="col-6 col-md-4 col-lg-3 col-xl-2 gallery-img d-flex justify-content-center align-items-center"
                  onClick={() =>
                    openModal(
                      "https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    )
                  }
                >
                  <img
                    src="https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    alt="sample image"
                    className="img-fluid"
                  />
                </div>
                <div
                  className="col-6 col-md-4 col-lg-3 col-xl-2 gallery-img d-flex justify-content-center align-items-center"
                  onClick={() =>
                    openModal(
                      "https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    )
                  }
                >
                  <img
                    src="https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    alt="sample image"
                    className="img-fluid"
                  />
                </div>
                <div
                  className="col-6 col-md-4 col-lg-3 col-xl-2 gallery-img d-flex justify-content-center align-items-center"
                  onClick={() =>
                    openModal(
                      "https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    )
                  }
                >
                  <img
                    src="https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    alt="sample image"
                    className="img-fluid"
                  />
                </div>
                <div
                  className="col-6 col-md-4 col-lg-3 col-xl-2 gallery-img d-flex justify-content-center align-items-center"
                  onClick={() =>
                    openModal(
                      "https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    )
                  }
                >
                  <img
                    src="https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    alt="sample image"
                    className="img-fluid"
                  />
                </div>
                <div
                  className="col-6 col-md-4 col-lg-3 col-xl-2 gallery-img d-flex justify-content-center align-items-center"
                  onClick={() =>
                    openModal(
                      "https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    )
                  }
                >
                  <img
                    src="https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    alt="sample image"
                    className="img-fluid"
                  />
                </div>
                <div
                  className="col-6 col-md-4 col-lg-3 col-xl-2 gallery-img d-flex justify-content-center align-items-center"
                  onClick={() =>
                    openModal(
                      "https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    )
                  }
                >
                  <img
                    src="https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    alt="sample image"
                    className="img-fluid"
                  />
                </div>
                <div
                  className="col-6 col-md-4 col-lg-3 col-xl-2 gallery-img d-flex justify-content-center align-items-center"
                  onClick={() =>
                    openModal(
                      "https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    )
                  }
                >
                  <img
                    src="https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    alt="sample image"
                    className="img-fluid"
                  />
                </div>
                <div
                  className="col-6 col-md-4 col-lg-3 col-xl-2 gallery-img d-flex justify-content-center align-items-center"
                  onClick={() =>
                    openModal(
                      "https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    )
                  }
                >
                  <img
                    src="https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    alt="sample image"
                    className="img-fluid"
                  />
                </div>
                <div
                  className="col-6 col-md-4 col-lg-3 col-xl-2 gallery-img d-flex justify-content-center align-items-center"
                  onClick={() =>
                    openModal(
                      "https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    )
                  }
                >
                  <img
                    src="https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    alt="sample image"
                    className="img-fluid"
                  />
                </div>
                <div
                  className="col-6 col-md-4 col-lg-3 col-xl-2 gallery-img d-flex justify-content-center align-items-center"
                  onClick={() =>
                    openModal(
                      "https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    )
                  }
                >
                  <img
                    src="https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    alt="sample image"
                    className="img-fluid"
                  />
                </div>
                <div
                  className="col-6 col-md-4 col-lg-3 col-xl-2 gallery-img d-flex justify-content-center align-items-center"
                  onClick={() =>
                    openModal(
                      "https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    )
                  }
                >
                  <img
                    src="https://images.hdqwalls.com/wallpapers/age-of-wonders-4-2023-50.jpg"
                    alt="sample image"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={selectedImage !== null}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="image-modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <button className="close-button" onClick={closeModal}>
            {/* <AiOutlineClose /> */}
            <i className="bx bx-x"></i>
          </button>
          <img
            src={selectedImage}
            alt="sample image"
            className="modal-image image-fluid"
          />
        </div>
      </Modal>
    </>
  );
}
