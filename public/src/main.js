<<<<<<< HEAD
//JS
=======
const shortcutContent = document.getElementById("shortcutContent");

const shortcutsData = {
  eclipse: `
    <h2>Eclipse Shortcuts</h2>
    <ul>
      <li><b>Ctrl+Shift</b> - Content assist (auto-complete suggestions)</li>
      <li><b>Ctrl+Shift+F</b> - Format Code</li>
      <li><b>Ctrl+ /</b> - Toggle line comment</li>
    </ul>
  `,
  vscode: `
    <h2>VS Code Shortcuts</h2>
    <ul>
      <li><b>Ctrl+P</b> - Quick Open</li>
      <li><b>Ctrl+Shift+P</b> - Command Palette</li>
      <li><b>Ctrl+\`</b> - Toggle Terminal</li>
    </ul>
  `,
};

document.querySelectorAll(".feature").forEach((item) => {
  item.addEventListener("click", () => {
    const software = item.dataset.software;
    const feature = item.dataset.feature;

    if (feature === "shortcuts") {
      shortcutContent.innerHTML =
        shortcutsData[software] || "<p>No shortcuts available.</p>";
    } else if (feature === "howto") {
      const urls = {
        eclipse: "eclipse-howto.html",
        vscode: "vscode-howto.html",
      };
      window.location.href = urls[software];
    }
  });
});
>>>>>>> main
