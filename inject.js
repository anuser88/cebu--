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
    window.postMessage({
      type: 'sebu',
      payload: simele
    }, '*');
    var sibu = 0;
	let SiBu;
	let cceebbuu = 0;
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
	!async function(){for(;;){
	  document.title=SiBu?.contentWindow?.document?.title??"cebu--";if(cceebbuu)break;await sleep(200);
	}}();
	function bubu() {
      SiBu = document.createElement('iframe');
      document.body.prepend(SiBu);
	  let rl = 0;
  	  SiBu.src = "https://turboshare.org.uk";
  	  SiBu.contentWindow.document.open();
      SiBu.contentWindow.document.write(inj);
      SiBu.contentWindow.document.close();
      SiBu.addEventListener('load', function() {
	    if (rl) {
		  SiBu.remove();
		  new Promise(bubu);
		  return;
	    }
	    rl=1;
        const proScript = SiBu.contentWindow.document.createElement('script');
        proScript.textContent = `
          !async function() {
            const cebu = window.fetch;
            const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
            window.fetch = async function(url, opts = {}) {
              while (window.parent.sibu === 1) await sleep(200);
              const res = await cebu(url, opts);
              if (res.headers.get('cf-mitigated')) {
                window.parent.postMessage({
                  type: 'cibu'
                }, '*');
              }
              return res;
            };
            for(;;) {
              while (window.parent.sibu === 1) await sleep(1000);
              await fetch(\`https://turboshare.org.uk/api/chat?limit=1&_t=\${Date.now()}\`);
              await sleep(8000);
            }
          }();
		  !async function(){for(;;){
			const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
	        parent.document.title = document?.title ?? "cebu--";
	        await sleep(200);
     	  }}();`;
        SiBu.contentWindow.document.head.appendChild(proScript);
      });
	}
	bubu();
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
        setTimeout(()=>sibu=0,1000);
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
		cceebbuu = 1;
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
