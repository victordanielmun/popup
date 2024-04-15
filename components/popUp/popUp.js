/**
 * Template Name: PopUp - v1.0
 * Updated: 2024-04-16
 * Author: Lemonk Studio
 */

(function () {
  "use strict";

  // variable to validate if the popup has been shown in the browser
  let viewNotification = false;

  // variable for delay on mobile devices
  let timeDelay = 2000;

  // variable to validate if the resolution is maximum 600px (Mobile devices)
  const isMobile = window.matchMedia(
    "only screen and (max-width: 600px)"
  ).matches;

  // variable to validate if the resolution is maximum 960px (Tablet devices)
  const isTablet = window.matchMedia(
    "only screen and (min-width: 601px) and (max-width: 960px)"
  ).matches;


  /**
   * Active popup and remove mouseOut event listener on screens larger than 960px and call PopUp.
   */
  function popUpHandler() {
    viewNotification = true;
    addPopup();
    window.removeEventListener("mouseout", function () {});
  }

  /** Function that when loading the page validates if the resolution
   *  is greater than 960px and adds the mouseout event to activate
   * the function removeEventListene once if the mouse leaves the page
   * or if the resolution is less than 960px call the PopUp once after a delay */

  window.addEventListener("load", function () {
    if (
      viewNotification === false &&
      isMobile === false &&
      isTablet === false
    ) {
      setTimeout(function () {
        window.addEventListener("mouseout", function (event) {
          
          event.preventDefault();
          const y = event.pageY;
          if (y < 5 && viewNotification === false) {
            popUpHandler();
          }
        });s
      }, timeDelay);
    } else {
      setTimeout(function () {
        addPopup();
      }, timeDelay);
    }
  });
})();

function addPopup() {
  
// Create the <aside> element
  let aside = document.createElement("aside");
  aside.id = "popup";
  aside.className = "popup-bg";

  // Destination URL for the link
  const linkUrl = "https://www.example.com";

  //Create the internal structure of the popup
  aside.innerHTML = `
  <div class="popup-body">
    <div class="popup-content">
      <div class="popup-exit-btn" id="closePopup">
        X
      </div>
      <div class="popup-row">
        <div class="popup-image">
          <div class="popup-img-container">
            <img 
              src="assets/img/popUp/girl in ipad 1.png" 
              alt="popup-image" 
            />
            <div class="popup-img-banner">
              <img
                src="assets/img/popUp/logoB.svg"
                alt="popup-image-banner"
              />
            </div>
          </div>
        </div>
        <div class="popup-text">
          <div class="popup-text-container">
            <hr>
            <h3>3 MONTHS OF</h3>
            <h2>Britannica Premium</h2>
            <div id="popup-text-price">
              <hr>
              <h3>FOR $10</h3>
              <hr>
            </div>
            <a href="${linkUrl}" target="_blank" class="popup-button">Subscribe!</a>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  // Add the popup to the end of the document body
  document.body.appendChild(aside);

  // Remove the aside when the close button is clicked
  let closeBtn = document.getElementById("closePopup");
    closeBtn.addEventListener("click", function() {
        aside.remove(); 
    });
  
}
