const glowImgTag = document.querySelector("#glow-img");
const fadeBox = ()=>{
    const pixels = window.pageYOffset;
    const alpha = Math.min(pixels / 1600, 0.6);
    glowImgTag.style.boxShadow = `0 0 200px 10px rgba(225,180,109,${alpha})`;
};
fadeBox();
document.addEventListener("scroll", ()=>{
    fadeBox();
});

//# sourceMappingURL=index.0f2f53ab.js.map
