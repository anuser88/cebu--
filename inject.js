!async function() {
  let inj;
  try {
    inj = await fetch("https://raw.githubusercontent.com/anuser88/cebu--/master/index.html").then(x=>x.text());
  }
  catch (e) {
    alert(`Complete the Cloudflare's verification first: ${e}`);
    throw new Error("quit");
  }
  try {
    let sibu = 0;
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
    SiBu.srcdoc = inj;
    function redoChl() {
      sibu = 1;
      SiBu.style.display = "none";
      const shit = document.createElement('iframe');
      document.body.appendChild(shit);
      shit.src = "https://turboshare.org.uk/api/chat?limit=1";
      function end() {
        SiBu.style.display = "block";
        shit.remove();
        setTimeout(()=>sibu=0,6000);
      }
      shit.addEventListener('load', function() {
        if (!shit.contentWindow.document.querySelector(".main-wrapper")) end();
        const injectedScript = shit.contentWindow.document.createElement('script');
        injectedScript.textContent = `const originalSubmit = HTMLFormElement.prototype.submit;
HTMLFormElement.prototype.submit = function() {
    window.parent.postMessage({
        type: 'sibu'
    }, '*');
};
HTMLFormElement.prototype.submit.toString = function() {
    return "function submit() { [native code] }";
};
        `;
        shit.contentWindow.document.head.appendChild(injectedScript);
        window.addEventListener('message', function(event) {
          if (event.data && event.data.type === 'sibu') end();
        });
      });
    }
    const cebu = SiBu.contentWindow.fetch;
    SiBu.contentWindow.fetch = async function(url, opts = {}) {
      const res = await cebu(url, opts);
      if (res.status === 403 && !sibu) alert(); //redoChl();
      return res;
    };
  } catch (e) {
    alert(e);
    location.reload();
  }
}();
