window.addEventListener('load', _ => {
  const tabs = document.querySelectorAll("#tabs #header .tab");

  for (let t of tabs) {
    const id = t.getAttribute('data-tab-id');
    t.onclick = _ => {
      if (t.classList.contains('unClick')) {
        return;
      } else {
        document.querySelector("#tabs #header .tab.active").classList.remove('active');
        t.classList.add('active');
        document.querySelector("#tabs #content .page.active").classList.remove('active');
        document.querySelector("#tabs #content .page[data-tab-id='"+id+"']").classList.add('active');
      }
    };
  }
});