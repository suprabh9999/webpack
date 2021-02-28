import loadHome from "./home";

const navList = document.getElementById("navList");
const routes = [
  { label: "Investment Portal", id: "home" },
  { label: "Stocks", id: "stocks" },
  { label: "Mutual Funds", id: "mutualFunds" },
  { label: "Real Estate", id: "realEstate" },
];
for (let { id, label } of routes) {
  const routeItem = document.createElement("li");
  routeItem.id = id;
  const anchor = document.createElement("a");
  anchor.href = "#";
  anchor.id = id;
  anchor.innerText = label;
  anchor.className = "nav-link";
  anchor.addEventListener("click", ({ target: { id } }) =>
    handleNavigation(id)
  );
  if (id === "home") {
    routeItem.classList.add("active");
    routeItem.classList.add("navbar-brand");
  }
  routeItem.classList.add("nav-item");
  routeItem.appendChild(anchor);
  navList.appendChild(routeItem);
}

function updateActiveLink(routeId) {
  const navLinks = navList.childNodes;
  for (let navLink of navLinks) {
    if (navLink.id === routeId) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  }
}

export function handleNavigation(routeId) {
  updateActiveLink(routeId);
  switch (routeId) {
    case "stocks":
      import("./stocks").then((module) => module.default());
      break;
    case "mutualFunds":
      import("./mutualFunds").then((module) => module.default());
      break;
    case "realEstate":
      import("./realEstate").then((module) => module.default());
      break;
    case "home":
    default:
      loadHome();
  }
}
loadHome();
