import React, { useState, useEffect } from "react";

const ScrollPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Check if the popup has already been shown in this session
  const popupShown = JSON.parse(sessionStorage.getItem("popupShown"));

  useEffect(() => {
    console.log(popupShown);

    if (!popupShown) {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          // Show the popup once when the user scrolls
          setShowPopup(true);
          // Set a flag in sessionStorage to prevent it from showing again during this session
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setShowPopup(false);
    }
  }, [popupShown]);

  const handleClose = () => {
    setShowPopup(false);
    sessionStorage.setItem("popupShown", "true");
  };
  return (
    <>
      <div
        className={`modal d-block ${showPopup ? "scale1" : "scale0"}`}
        tabIndex="-1"
      >
        <div className="modal-dialog ">
          <div className="modal-content rounded-5 overflow-hidden">
            <div className="modal-header bg-warning  text-white">
              <h5 className="modal-title fs-20">Warning!</h5>
              <button
                type="button"
                className="btn-close me-3 fs-12 fw-bold"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body fs-16 px-4">
              <p>
                Someone from the UK, likely a scammer, is sending emails under
                the name "CreditBucket" and "Samridh," pretending to be "Suman."
                Please double-check the sender's email address and verify its
                authenticity before responding, as this could potentially be a
                scam.
                <strong className="ms-1 text-secondary">
                  Stay cautious <span className="text-warning"> !!</span>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollPopup;
