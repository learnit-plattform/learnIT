window.addEventListener("load", function(){
  if (!localStorage.getItem("cookieConsent")) {
    const banner = document.createElement("div");
    banner.innerHTML = `
      <div style="
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #333;
        color: #fff;
        padding: 1em;
        text-align: center;
        z-index: 1000;
      ">
        Diese Seite verwendet keine Cookies von Drittanbietern. 
        <button id="acceptCookies" style="margin-left: 1em;">Verstanden</button>
      </div>
    `;
    document.body.appendChild(banner);
    document.getElementById("acceptCookies").onclick = () => {
      localStorage.setItem("cookieConsent", "true");
      banner.remove();
    };
  }
});
