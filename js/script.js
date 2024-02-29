//Toggle & Responsive Navigation
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navList = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navList.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();

//reset form
window.onbeforeunload = () => {
    for (const from of document.getElementsByTagName("form")){
        form.reset();
    }
}

console.log('ok');

function kirim() {
// array nama bulan
const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "Desember"];

// membuat waktu saat ini
let date = new Date();
let tanggal = date.getDate()+" "+(bulan[date.getMonth()])+" "+ date.getFullYear();
let jam = date.getHours() +":"+ date.getMinutes();

waktuIni = jam+", "+tanggal



// mengambil data input fom
let name = document.forms["message-form"]["name"].value;
let ttl = document.forms["message-form"]["ttl"].value;
let gender = document.forms["message-form"]["gender"].value;
let msg = document.forms["message-form"]["msg"].value;


// validasi form ke-2 | validasi form pertama memakai atribut required pada tag input form
if( name === "" || ttl === "" || gender === "" || msg === "" ) {
    alert("Input form tidak boleh kosong!");
    return false;
}


// DOM element lalu diberi isi dari form
document.getElementById("waktu").innerText = waktuIni;
document.getElementById("name-result").innerText = name;
document.getElementById("ttl-result").innerText = ttl;
document.getElementById("jk-result").innerText = gender;
document.getElementById("msg-result").innerText = msg;
}