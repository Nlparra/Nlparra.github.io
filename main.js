function navBar() {
    let a = document.querySelectorAll("Navbar__Items");
    console.log(a)

    if (a.style.display === "none") {
      a.style.display = "block";
    } else {
      a.style.display = "none";
    }
  }

