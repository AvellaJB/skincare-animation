const tl = gsap.timeline({
  defaults: { duration: 0.75, ease: "Power3.easeOut" },
});

tl.fromTo(
  ".hero-img",
  { scale: 1.3, borderRadius: "0rem" },
  {
    scale: 1,
    borderRadius: "2rem",
    delay: 0.35,
    duration: 2.5,
    ease: "elastic.out(1.5,1)",
  }
);

tl.fromTo(".cta1", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta3", { x: "-100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta2", { y: "100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta4", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta6", { x: "-100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta5", { y: "100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<20%");

tl.fromTo(".cta-button", { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "<");

//Split text alternative
/* On récupère le logo */
const logo = document.querySelector(".logo");
/* On récupère les lettres et on les split dans un array */
const letters = logo.textContent.split("");
/* On supprime le text original */
logo.textContent = "";
/* Pour chaque lettre on crée une span avec la lettre dedans, le += permet de 
les ajouter à la suite l'une de l'autre. */
letters.forEach((letter) => {
  logo.innerHTML += '<span class ="letter">' + letter + "</span>";
});

/* On ajoute un inline block sur chaque lettre sinon on ne peux pas animer le y */
gsap.set(".letter", { display: "inline-block" });

gsap.fromTo(
  ".letter",
  { y: "100%" },
  { y: 0, delay: 2, stagger: 0.05, ease: "back.out(3)" }
);
