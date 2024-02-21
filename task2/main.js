const URL = './data.json';

let data = []
let showData = []

const getData = async () => {
    const res = await fetch(URL);
    const jsonData = await res.json();
    data = jsonData
    showData = data
    displayData()
}

getData()

const displayData = () => {
    let nameSection = document.querySelector('.nameData')
    let genderSection = document.querySelector(".genderData")
    let physicSection = document.querySelector(".physicData")
    let mathSection = document.querySelector(".mathData")
    let englishSection = document.querySelector(".englishData")

    nameSection.innerHTML = ``;
    genderSection.innerHTML = ``;
    physicSection.innerHTML = ``;
    mathSection.innerHTML = ``;
    englishSection.innerHTML = ``;


    showData.forEach(student => {
        nameSection.innerHTML += `<div>${student.name}</div>`;
        genderSection.innerHTML += `<div>${student.gender}</div>`;
        physicSection.innerHTML += `<div>${student.physics}</div>`;
        mathSection.innerHTML += `<div>${student.maths}</div>`;
        englishSection.innerHTML += `<div>${student.english}</div>`;
    })

}

const nameSearch = document.querySelector('.nameSearch')
const nameFilterText = document.getElementById("nameText")

nameSearch.addEventListener('click', () => {
    nameFilterData()
})

const nameFilterData = () => {
    const nameText = nameFilterText.value;
    const newData = data.filter((student) => {
        return student.name.toLowerCase().includes(nameText.toLowerCase())
    })
    showData = newData
    console.log(showData)

    displayData()
}

const phySearch = document.querySelector('.physicSearch')
const phyFilterLs = document.getElementById("lsPhy")
const phyFilterGt = document.getElementById("gtPhy")
const mathSearch = document.querySelector('.mathSearch')
const mathFilterLs = document.getElementById("lsMath")
const mathFilterGt = document.getElementById("gtMath")
const englishSearch = document.querySelector('.englishSearch')
const englishFilterLs = document.getElementById("lsEng")
const englishFilterGt = document.getElementById("gtEng")

console.log({ a: "abc" }, [1, 2, 3, 4]);
phyFilterGt.addEventListener('change', () => {
    const less = phyFilterLs.value;
    const great = phyFilterGt.value
    console.log("gt")
    numFilterData("physics", less, great)
})

phyFilterLs.addEventListener('change', () => {
    // alert("")
    console.log("first")
    const less = phyFilterLs.value;
    const great = phyFilterGt.value;
    console.log("ls")
    numFilterData("physics", less, great)
})


mathSearch.addEventListener('click', () => {
    const less = mathFilterLs.value;
    const great = mathFilterGt.value
    numFilterData("maths", less, great)
})

englishSearch.addEventListener('click', () => {
    const less = englishFilterLs.value;
    const great = englishFilterGt.value
    numFilterData("english", less, great)
})

const numFilterData = (id, ls, gt) => {
    const newData = data.filter((student) => {
        if (ls == "" && gt === "") return true;
        else if (ls === "") return student[id] <= gt;
        else if (gt === "") return student[id] >= ls;
        return student[id] >= ls && student[id] <= gt
    })
    showData = newData

    displayData()
}