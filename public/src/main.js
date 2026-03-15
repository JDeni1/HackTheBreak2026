console.log("js is loaded");
const shortcutContent = document.getElementById("shortcutContent");
const searchBar = document.getElementById("searchBar");
const resultsDropdown = document.getElementById("resultsDropdown");

      // Shortcut texts
      const shortcutsData = {
        eclipse: `
          <h2>Eclipse Shortcuts</h2>
              <h3>Editing</h3>
          <ul>
            <li><b>Ctrl + Space</b> - Content assist (auto-complete suggestions)</li>
            <li><b>Ctrl + Shift + F</b> - Format Code</li>
            <li><b>Ctrl + / </b> - Toggle line comment</li>
            <li><b>Ctrl + Shift + / </b> - Add block comment</li>
            <li><b>Ctrl + Shift + \ </b> - Remove block comment</li>
            <li><b>Ctrl + Alt + up / down </b> - Copy line up/down</li>
            <li><b>Ctrl + D </b> - Delete the current line</li>
            <li><b>Alt + up / Alt down </b> - Move current line up/down</li>
          </ul>

              <h3>Navigation</h3>
          <ul>
              <li><b>Ctrl + O </b> - Quick outline of the current file</li>
              <li><b>Ctrl + T </b> - Show type hierarchy</li>
              <li><b>Ctrl + Shift + T </b> - Open type (class/interface) by name</li>
              <li><b>Ctrl + Shift + R </b> - Open resource (file) by name</li>
              <li><b>Ctrl + Shift + F4 </b> - Close all editors</li>
              <li><b>Ctrl + Shift + E </b> - Show open editors</li>
              <li><b>Ctrl + Shift + P </b> - Show package explorer</li>
              <li><b>Ctrl + L </b> - Go to a specific line number</li>
              <li><b>F3</b> - Go to definition</li>
          </ul>

              <h3>Refactoring</h3>
          <ul>
              <li><b>Alt + Shift + R</b> - Rename variable/method/class</li>
              <li><b>Alt + Shift + M</b> - Extract method</li>
              <li><b>Alt + Shift + L</b> - Extract local variable</li>
              <li><b>Alt + Shift + F</b> - Extract field</li>
              <li><b>Alt + Shift + I</b> - Inline variable</li>
          </ul>

              <h3>Running and Debugging</h3>
          <ul>
              <li><b>Ctrl + F11</b> - Run the application</li>
              <li><b>F5</b> - Step into (debugging)</li>
              <li><b>F6</b> - Step over (debugging)</li>
              <li><b>F7</b> - Step return (debugging)</li>
              <li><b>F8</b> - Resume (debugging)</li>
              <li><b>F11</b> - Debug the application</li>
          </ul>
        `,
        vscode: `
          <h2>VS Code Shortcuts</h2>
              <h3>Editing</h3>
          <ul>
            <li><b>Ctrl + Space</b> - Suggestions / auto-complete</li>
            <li><b>Ctrl + Alt + F</b> - Format Document</li>
            <li><b>Ctrl + / </b> - Toggle line comment</li>
            <li><b>Ctrl + \ </b> - Split Editor</li>
            <li><b>Ctrl + D </b> - Select next occurrence of word</li>
            <li><b>Ctrl + Shift + K </b> - Delete line</li>
            <li><b>Alt + Up / Alt + Down </b> - Move line up/down</li>
            <li><b>Shift + Alt + Up / Down </b> - Copy line up/down</li>
          </ul>

              <h3>Navigation</h3>
          <ul>
              <li><b>Ctrl + P</b>  - Quickly open any file</li>
              <li><b>Ctrl + Tab</b> - Switch between open editors</li>
              <li><b>Ctrl + Shift + O</b> - Go to symbol in workspace (Eg. method/class)</li>
              <li><b>Ctrl + Shift + F</b> - Search across all files (finding functions, renaming variables, locating bugs)</li>
              <li><b>Ctrl + T</b> - Search all symbols in project</li>
              <li><b>Ctrl + G</b> - Go to line number</li>
              <li><b>F12</b> - Go to definition</li>
          </ul>

              <h3>Refactoring</h3>
          <ul>
              <li><b>F2</b> - Rename symbol (variable/method/class)</li>
              <li><b>Ctrl + . </b> - Quick fix (e.g., import missing classes, create methods)</li>
              <li><b>Shift + F12</b> - Show references</li>
          </ul>

              <h3>Running & Debugging</h3>
          <ul>
              <li><b>F5</b> - Start/Continue debugging</li>
              <li><b>Ctrl + F5</b> - Run without debugging</li>
              <li><b>F9</b> - Toggle breakpoint</li>
              <li><b>F10</b> - Step over</li>
              <li><b>F11</b> - Step into</li>
              <li><b>Shift + F11</b> - Step out</li>
          </ul>
        `,
      };
      //Links to each how-to guide
      const howToLinks = {
        eclipse: [
          {
            title: "Create Eclipse Project",
            url: "eclipse/create_proj_ec.html",
          },
          {
            title: "Create Eclipse Class",
            url: "eclipse/create_class_ec.html",
          },
          {
            title: "Create Eclipse Package",
            url: "eclipse/create_pack_ec.html",
          },
          {
            title: "Add Library to Eclipse Project",
            url: "eclipse/add_lib_ec.html",
          },
          {
            title: "Debug in Eclipse",
            url: "eclipse/debug_ec.html",
          },
          {
            title: "Import Eclipse Project",
            url: "eclipse/import_proj_ec.html",
          },
        ],
        vscode: [
          {
            title: "Create VS Code Settings",
            url: "public/vscode/how_to_vscode/create_vscode.html",
          },
          {
            title: "Import VS Code Settings",
            url: "public/vscode/how_to_vscode/import_settings.html",
          },
          {
            title: "Customize VS Code Shortcuts",
            url: "public/vscode/how_to_vscode/customize_shortcuts.html",
          },
        ],
      };

      //shoows the Shortcut pages
      function showShortcuts(software){
        shortcutContent.innerHTML =
              `<div class="inner-content">` +
              (shortcutsData[software] || "<p>No shortcuts available.</p>") +
              `</div>`;
      }

      //shows the how to pages
      function showHowTo(software){
        // clickable list of How To links
            let listHTML = `<h2>${software === "eclipse" ? "Eclipse" : "VS Code"} How To Guides</h2><ul>`;
            howToLinks[software].forEach((item) => {
              listHTML += `<li><a href="${item.url}" target="_blank">${item.title}</a></li>`;
            });
            listHTML += `</ul>`;

            shortcutContent.innerHTML = `<div class="inner-content">${listHTML}</div>`;
      }

      //picks which one the user clicks
      function handleFeatureClick(item){
        const software = item.dataset.software;
        const feature = item.dataset.feature;

        if (feature === "shortcuts") {
            showShortcuts(software);  
        } else if (feature === "howto") {
            showHowTo(software);
        }
      }

      // Handle click on nested feature
      document.querySelectorAll(".feature").forEach((item) => {
        item.addEventListener("click", () => {
          handleFeatureClick(item);
          
        });
      });


      /**
       * this whole section loads in the info into an arry
       */
      const searchItems = [];

      //added the eclipse shortcut titles
      searchItems.push({
        title: "Eclipse Shortcuts",
        type: "shortcuts",
        software: "eclipse"
      });

      //add the vs shortcut titles
      searchItems.push({
        title: "VS Code Shortcuts",
        type: "shortcuts",
        software: "vscode"
      });

      //Add the items of eclipse how to into the array
      howToLinks.eclipse.forEach(item => {
        searchItems.push({
          title: item.title,
          type: "howto",
          software: "eclipse",
          url: item.url
        });
      });

      //add the items of vs how tos into the array
      howToLinks.vscode.forEach(item => {
        searchItems.push({
          title: item.title,
          type: "howto",
          software: "vscode",
          url: item.url
        });
      })

      console.log(searchItems);

      /** (query) is what the use searchs up in the search bar
       *  .filter() keeps only the ones that pass a condition 
       */
      function getMatches(query){
        return searchItems.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );
      }

      function renderDropdownResult(matches) {
        //.innerHTML represent the html content inside the element
        //sets it to an empty set
        resultsDropdown.innerHTML = "";

        matches.forEach((item) => {
          const result = document.createElement("div");
          result.textContent = item.title;

          result.addEventListener("click", () => {
            handleResultClick(item);
          });

          resultsDropdown.appendChild(result);
        });
      }

      /**
       * Gets text form searchbar
       * remove extra spaces
       * check if the user typed nothing
       * if empty, clears the dropdown and stops
       * if not empty finds matching itmes
       * displays those mathces in the dropdown
       * @returns 
       */
      function handleSearchInput() {
        const query = searchBar.value.trim();

        if(query === ""){
          resultsDropdown.innerHTML = "";
          return;
        }

        const matches = getMatches(query);
        renderDropdownResult(matches);
      }

      searchBar.addEventListener("input", handleSearchInput);

      /**
       * if it is a shortcut 
       * show the short cut for that software
       * if it is a how to
       * navigate to the how to page
       */
      function handleResultClick(item){
        if(item.type === "shortcuts"){
          showShortcuts(item.software);
          resultsDropdown.innerHTML = "";
          searchBar.value = item.title;
        }
        else if(item.type === "howto"){
          window.location.href = item.url;
        }
      }

    