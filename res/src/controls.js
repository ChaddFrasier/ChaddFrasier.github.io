function enableContentPageControls () {
    document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      current = (current + 1) % items.length;
      updateHighlight();
    }
    else if (e.key === 'ArrowUp') {
      current = (current - 1 + items.length) % items.length;
      updateHighlight();
    }
    else if (e.key === 'Enter') {
      const link = items[current].dataset.link;
      if (link) {
          if(current != items.length - 1){
            window.open(link, "_blank");
          } else {
            window.location.href = link;
          }
        }
      }
  });
}

function enableDefaultPageControls () {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      current = (current + 1) % items.length;
      updateHighlight();
    }
    else if (e.key === 'ArrowUp') {
      current = (current - 1 + items.length) % items.length;
      updateHighlight();
    }
    else if (e.key === 'Enter') {
      const link = items[current].dataset.link;
      if (link) window.location.href = link;
    }
  });
}