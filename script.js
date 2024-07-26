Updates to keyboard shortcuts … On Thursday, August 1, 2024, Drive keyboard shortcuts will be updated to give you first-letters navigation.Learn more
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};