function header(pageTitle = "Korey's Development Journey") {
  const headerHTML = `
    <header>
      <nav class="nav-bar">
        <ul class="nav-bar">
          <li class="nav-bar">
            <a href="${getRelativePath()}index.html">
              <span class="nav-star">&#8902;</span> Home
            </a>
          </li>
          <li class="nav-bar">
            <a href="${getRelativePath()}index.html">
              <span class="nav-star">&#8902;</span> About Me
            </a>
          </li>
          <li class="nav-bar">
            <a href="${getRelativePath()}index.html">
              <span class="nav-star">&#8902;</span> Projects
            </a>
          </li>
          <li class="nav-bar">
            <a href="${getRelativePath()}index.html">
              <span class="nav-star">&#8902;</span> Blogs
            </a>
          </li>
        </ul>
      </nav>
      <h2>${pageTitle}</h2>
    </header>
  `
  document.body.insertAdjacentHTML('afterbegin', headerHTML)
}
