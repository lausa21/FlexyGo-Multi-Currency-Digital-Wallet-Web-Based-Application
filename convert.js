function toggleDropdown() {
    const dropdown = document.getElementById("currency-options");
    const selectedCurrency = document.querySelector(".dropdown-btn").getAttribute("data-selected");
  
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  
    const items = document.querySelectorAll("#currency-options > div");
    items.forEach(item => {
      if (item.getAttribute("data-currency") === selectedCurrency) {
        item.style.display = "none";
      } else {
      }
    });
  }

  function updateBalanceDisplay() {
    const selectedCurrency = document.getElementById("selected-currency").textContent.trim().toLowerCase();
    const balanceElement = document.getElementById('rate-best');
    if (bestRates[selectedCurrency]) {
        balanceElement.textContent = bestRates[selectedCurrency];
    } else {
        balanceElement.textContent = "N/A";
    }
    document.getElementById('selected').textContent = document.getElementById('selected-currency').textContent
}

  
  function selectCurrency(currencyCode, flagPath) {
    document.getElementById("selected-currency").innerText = currencyCode;
    document.querySelector(".dropdown-btn img").src = flagPath;
  
    document.getElementById("currency-options").style.display = "none";
  
    document.querySelector(".dropdown-btn").setAttribute("data-selected", currencyCode);
  
    const items = document.querySelectorAll("#currency-options > div");
    items.forEach(item => {
      if (item.getAttribute("data-currency") === currencyCode) {
        item.style.display = "none";
      } else {
        item.style.display = "flex";
      }
    });
    updateBalanceDisplay()
  }
  
  
  window.onclick = function(e) {
    if (!e.target.closest(".dropdown")) {
      document.getElementById("currency-options").classList.remove("show");
    }
  }

  window.addEventListener('load', function(){
    updateBalanceDisplay()
  })

  