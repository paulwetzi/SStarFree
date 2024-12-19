const toDelete = ["rq25k", "Cip2pk", "D5an6", "Cek20l", "Cto1rx", "Ei1by"]; // Removed the empty string

const removeElements = () => {
  for (const classname of toDelete) {
    document.querySelectorAll("." + classname).forEach((div) => div.remove());
  }
};

// Initialize the MutationObserver before using it
const Observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === "childList") {
      removeElements();
    }
  }
});

// Run the removal function initially
removeElements();

// Start observing changes in the document
Observer.observe(document, {
  attributes: true,
  childList: true,
  subtree: true,
});
