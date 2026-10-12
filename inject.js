!async function() {
  try {
    document.head.replaceChildren();
    document.body.replaceChildren();
    const styleTag = document.createElement('style');
    styleTag.textContent = `
        * {
            margin: 0px;
            padding: 0px;
            overflow: hidden;
        }
        iframe {
            width: 100%;
            height: 100svh;
            border: none;
        }
    `;
    document.head.appendChild(styleTag);
    const SiBu = document.createElement('iframe');
    document.body.appendChild(SiBu);
    SiBu.srcdoc = await fetch("https://raw.githubusercontent.com/anuser88/cebu--/master/index.html").then(x=>x.text());
  } catch (e) {
    //location.reload();
    alert(e);
  }
}();
