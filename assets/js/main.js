const allOpinions = [
    ...document.querySelectorAll(".opinie .opinionContainer .opinion"),
];
const centerOpinion = document.querySelector(".centerOpinion");

const showMoreButton = document.querySelector("#moreOpinions");

const buttonsLeadingToForm = [...document.querySelectorAll(".toForm")];

// const showMoreAboutSylwiaButton = document.querySelectorAll(
//     ".showMoreAboutStaff"
// );

const showMoreAboutStaff = [...document.querySelectorAll(".showMoreAboutStaff")];

const longerText = [...document.querySelectorAll(".zespol .part-left .longerText")];

showElements = () => {
    showMoreButton.classList.toggle("active");
    if (showMoreButton.className === "active") {
        showMoreButton.textContent = "Zwiń";
        allOpinions.forEach((e) => (e.style.display = "block"));
    } else {
        showMoreButton.textContent = "Rozwiń więcej opini";
        allOpinions.forEach((e) => (e.style.display = "none"));
        centerOpinion.style.display = "block";
    }
};

const handleScrollToForm = () => {
    const concatForm = document.querySelector(".kontakt");
    let toScroll =
        concatForm.offsetTop - document.querySelector("nav").clientHeight;
    window.scrollTo(0, toScroll + 1000);
};

console.log(longerText)


handleShowLongerText = () => {
    showMoreAboutStaff.forEach(e => {
        e.classList.toggle('active');
        if(e.classList[1] === 'active') {
            e.textContent = 'Zwiń...';
            longerText.forEach( text => text.style.display = 'block');
        } else {
            e.textContent = 'Rozwiń więcej...';
            longerText.forEach( text => text.style.display = 'none');
        }
    })
};

showMoreButton.addEventListener("click", showElements);
buttonsLeadingToForm.forEach((e) =>
    e.addEventListener("click", handleScrollToForm)
);

showMoreAboutStaff.forEach( e => {
    e.addEventListener('click', handleShowLongerText);
})
