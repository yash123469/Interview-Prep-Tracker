let companies = JSON.parse(localStorage.getItem("companies")) || [];

function addCompany() {
  let name = document.getElementById("companyName").value;
  companies.push(name);
  localStorage.setItem("companies", JSON.stringify(companies));
  displayCompanies();
}
function displayCompanies() {
  let list = document.getElementById("companyList");
  list.innerHTML = "";
  companies.forEach(company => {
    list.innerHTML += `<div class="card">${company}</div>`;
  });
}
let dsaCount = localStorage.getItem("dsa") || 0;

function increaseDSA() {
  dsaCount++;
  localStorage.setItem("dsa", dsaCount);
  document.getElementById("dsaCount").innerText = dsaCount;
}
document.getElementById("themeToggle").onclick = function() {
  document.body.classList.toggle("dark");
};
