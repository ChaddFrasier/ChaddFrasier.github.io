
/**
 * Function that sets up the control mechanisms for pages that require menu options to open
 * in a new tab.
 */
function enableContentPageControls (menuItemList) {
    document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      current = (current + 1) % menuItemList.length;
      updateHighlight();
    }
    else if (e.key === 'ArrowUp') {
      current = (current - 1 + menuItemList.length) % menuItemList.length;
      updateHighlight();
    }
    else if (e.key === 'Enter') {
      const link = menuItemList[current].dataset.link;
      if (link) {
          if(current != menuItemList.length - 1){
            window.open(link, "_blank");
          } else {
            window.location.href = link;
          }
        }
      }
  });
}

/**
 * Function that sets up the control mechanisms for a basic page navigation for the terminal
 */
function enableDefaultPageControls (menuItemList) {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      current = (current + 1) % menuItemList.length;
      updateHighlight();
    }
    else if (e.key === 'ArrowUp') {
      current = (current - 1 + menuItemList.length) % menuItemList.length;
      updateHighlight();
    }
    else if (e.key === 'Enter') {
      const link = menuItemList[current].dataset.link;
      if (link) window.location.href = link;
    }
  });
}