// Variables to store copied folder, copy count, and paste count
let copiedFolder = null;
let copyCounter = 0;
let pasteCounter = 0;

// Function to copy the folder
function copyFolder() {
  if (copyCounter < 3) {
    copiedFolder = document.querySelector('.folder').cloneNode(true);
    resetCopiedFolderStyles();
    copyCounter++;

    // Disable copy button if limit is reached
    if (copyCounter === 3) {
      document.getElementById("copy-btn").disabled = true;
    }
  }
}

// Function to paste the folder
function pasteFolder() {
  if (pasteCounter < 3) {
    if (copiedFolder !== null) {
      const folderContainer = document.querySelector('.folder-container');
      folderContainer.appendChild(copiedFolder.cloneNode(true));
      resetCopiedFolderStyles();
      pasteCounter++;

      // Disable paste button if limit is reached
      if (pasteCounter === 3) {
        document.getElementById("paste-btn").disabled = true;
      }
    }
  }
}

// Function to reset copied folder styles
function resetCopiedFolderStyles() {
  if (copiedFolder !== null) {
    copiedFolder.style.opacity = 0.5;
    copiedFolder.style.pointerEvents = 'none';
  }
}

// Event listeners for copy and paste buttons
document.getElementById("copy-btn").addEventListener("click", copyFolder);
document.getElementById("paste-btn").addEventListener("click", pasteFolder);