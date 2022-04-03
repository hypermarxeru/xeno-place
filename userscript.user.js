// ==UserScript==
// @name         Xeno Server Template
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  highlight xeno stuff :)
// @author       hyper, kinda (Credit to Kaguya Discord and Ship for template)
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://i.imgur.com/EZPKHLq.png?";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;";
            console.log(i);
            function a() {
              i.style.display = 'none';
              setTimeout(b, 1000);
            }
            function b() {
              i.style.display = null;
              setTimeout(a, 1000);
            }
            setInterval(() => {
              i.src += 'a';
            }, 120000)
            b();
            return i;
        })())

    }, false);

}
