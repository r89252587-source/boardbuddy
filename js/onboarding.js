document.querySelectorAll('input[type="range"]').forEach(slider => {
  slider.oninput = () => {
    const id = slider.dataset.val;
    document.getElementById(id).textContent = slider.value;
  };
});

document.getElementById("onboardingForm").onsubmit = (e) => {
  e.preventDefault();
  localStorage.setItem("onboarded", "true");
  alert("Your 90-Day Board Plan is Ready! Dashboard coming soon.");
  window.location.href = "dashboard.html";
};