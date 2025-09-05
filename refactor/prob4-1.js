let walkTheCat = function () { let currTime = new Date().getTime(); let
secondsElapsed = (currTime - startTime) / 1000; let position = secondsElapsed *
100; if (position >= 1000) { position = 1000; catEl.style.left = position +
"px"; cat.src = "img/cat-walk.png"; } else { catEl.style.left = position + "px";
requestAnimationFrame(walkTheCat); } }; walkTheCat();
