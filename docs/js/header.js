// window.addEventListener('DOMContentLoaded', () => {
// might go back to using this kind of code later but i just don't want
// the header to stutter on load

let header = document.createElement("div");
header.id = "common-header";
header.innerHTML = `
<nav>
  <a id="named-link" href="/index.html">Camden MacIver</a>
  <ul>
    <li>
      <a href="programming.html"> 
        Programming
      </a>
    </li>
    <li>
      <a href="audio.html">
        Audio Projects
      </a>
    </li>
    <li>
      <a href="web-development.html">
        Web Development
      </a>
    </li>
  </ul>
</nav>
  `;

document.getElementsByTagName("body")[0].prepend(header);
// })