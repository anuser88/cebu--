!async function() {
  let inj;
  const simele = Date.now() + 0;
  try {
    inj = await fetch("https://raw.githubusercontent.com/anuser88/cebu--/master/index.html").then(x=>x.text());
  }
  catch (e) {
    alert(`Complete the Cloudflare's verification first: ${e}`);
    throw new Error("quit");
    return;
  }
  try {
    window.parent.postMessage({
      type: 'sebu',
      payload: simele
    }, '*');
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
    SiBu.addEventListener('load', function() {
    const proScript = SiBu.contentWindow.document.createElement('script');
      proScript.textContent = `const cebu = window.fetch;
        window.fetch = async function(url, opts = {}) {
          const res = await cebu(url, opts);
          if (res.status === 403) {
            window.parent.postMessage({
              type: 'cibu'
            }, '*');
          }
          return res;
        };
        const a=()=>fetch("https://turboshare.org.uk/api/chat?limit=1");a();
        setInterval(a, 7000);`;
      SiBu.contentWindow.document.head.appendChild(proScript);
    });
    function redoChl() {
      sibu = 1;
      SiBu.style.display = "none";
      const shit = document.createElement('iframe');
      document.body.appendChild(shit);
      shit.src = "https://turboshare.org.uk/api/chat?limit=1";
      function ee(event) {
        if (event.data && event.data.type === 'sibu') end();
      }
      function end() {
        SiBu.style.display = "block";
        shit.remove();
        setTimeout(()=>sibu=0,6000);
        window.removeEventListener('message', ee);
      }
      shit.addEventListener('load', function() {
        alert("Your access has expired, verify again to continue!");
        if (!shit.contentWindow.document.querySelector(".main-wrapper")) end();
        shit.contentWindow.addEventListener('beforeunload', (event) => {
            event.preventDefault();
            end();
            event.returnValue = ''; 
        });
        window.addEventListener('message', ee);
      });
    }
    function aa(event) {
      if (event.data && event.data.type === 'cibu' && !sibu) redoChl();
      if (event.data && event.data.type === 'sebu' && event.data.payload !== simele) {
        window.removeEventListener('message', aa);
        throw new Error("quit");
      }
    }
    window.addEventListener('message', aa);
  } catch (e) {
    alert(e);
    location.reload();
    return;
  }
}();
