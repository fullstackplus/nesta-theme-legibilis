/*
 *article>header+p
 *and
 *article>h1+p
 *
 *1) find the first p as above, declare it relatively positioned;
 *2) add dropcap
 *
 **/


function addDropCaps() {
    //some IE8 love
    if (typeof String.trim == "undefined") {
        String.prototype.trim = function() {
            return this.replace(/(^\s*)|(\s*$)/g, "");
        }
    }

    var articles = document.querySelectorAll("section.articles article");
    var article = document.querySelector("body.article article[role=main]");
    for (i=0; i<articles.length; i++) {createDropCappedParagraph(articles[i]);}
    createDropCappedParagraph(article);
}

function createDropCappedParagraph(article) {
    pars = article.getElementsByTagName("p");
    first_par = pars[0];
    var text = first_par.innerHTML;
    text = text.trim();
    var first_letter = text.substr(0,1)
    text = text.slice(1);
    var t = document.createTextNode(text);
    var dropcap = document.createElement("span");
    dropcap.className = "dropcap";
    dropcap.innerHTML = first_letter
    var dcpar = document.createElement("p");
    dcpar.style.position = "relative";
    dcpar.appendChild(dropcap);
    dcpar.appendChild(t);
    article.insertBefore(dcpar, pars[0]);
    article.removeChild(pars[1]);
}
  
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

addLoadEvent(addDropCaps);

