const containerDesign = document.getElementById("design");
const containerArt = document.getElementById("art");
const containerPhotography = document.getElementById("photography");
const containerDesignCarousel = document.getElementById("design-carousel");
const containerArtCarousel = document.getElementById("art-carousel");
const containerPhotographyCarousel = document.getElementById("photography-carousel");
const designBtn = document.getElementById("designBtn");
const artBtn = document.getElementById("artBtn");
const photographyBtn = document.getElementById("photographyBtn");

designBtn.onclick = function () {
  if (window.innerWidth > 1000){
    containerDesign.style.display = "inherit";
    containerArt.style.display="none";
    containerPhotography.style.display="none"
  } else {
    containerDesignCarousel.style.display = "inherit";
    containerArtCarousel.style.display="none";
    containerPhotographyCarousel.style.display="none"
  }
};
artBtn.onclick = function () {
  if (window.innerWidth > 1000) {
    containerDesign.style.display = "none";
    containerArt.style.display="inherit";
    containerPhotography.style.display="none";
  } else {
    containerDesignCarousel.style.display = "none";
    containerArtCarousel.style.display="inherit";
    containerPhotographyCarousel.style.display="none";
  }
};
photographyBtn.onclick = function () {
  if (window.innerWidth > 1000) {
    containerDesign.style.display = "none";
    containerArt.style.display="none";
    containerPhotography.style.display="inherit"
  } else {
    containerDesignCarousel.style.display = "none";
    containerArtCarousel.style.display="none";
    containerPhotographyCarousel.style.display="inherit"
  }
};
