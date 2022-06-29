
async function PerformsAsynchrony() {
let loading = document.getElementById('loading');

btn.disabled = true;
loading.innerHTML = "<img  src='images/loading_load.gif' />"
    try {
        return await fetch('https://moviesmern.herokuapp.com/movies/all')
            .then(printtolog =>
                printtolog.json()
            )
    }
    catch (err) {

    }

}




function printtoscreen() {
    PerformsAsynchrony()
        .then((printto) => {
            printto.data.forEach((item) => {
                printmovuename.innerHTML += `<li>${item.movieName} '<img style= heigt:10vh width:10vw src=" ${item.image}"'/></li>`
            }
            );
        })
}





async function Performs() {

    let btn1 = document.getElementById('btn1');
    let loading1 = document.getElementById('loading1');
    btn1.disabled = true;
    loading1.innerHTML = "<img  src='images/loadingload.gif' />";
    await fetch('https://cat-fact.herokuapp.com/facts')
        .then((printtoLg) => { console.log(printtoLg) })

}





async function samePerforms() {

    let loading2 = document.getElementById('loading2');;
    let giftouser = document.getElementById('giftouser');
    let btn2 = document.getElementById('btn2');
    try {
        btn2.disabled = true;
        giftouser.innerHTML = "<img  src='images/confusedunga.gif' />"
       return await fetch('150/200/https://placekeanu.com')
            .then((printtrue) => {
                loading2.innerHTML = printtrue
            })
    }
    catch (ereeor) {
        loading2.innerHTML = ereeor;
    }
}









async function getToLogAnsScreen() {
    let loading3 = document.getElementById('loading3');;
    let giftouser = document.getElementById('giftouser1');
    let btn3 = document.getElementById('btn3')

    try {
        giftouser.innerHTML = "<img  src='images/confusedunga.gif' />"
        btn3.disabled = true;

        return await fetch('https://api.jikan.moe/v4/anime')
            .then((printtolog) => { return printtolog.json() })
    }
    catch (errr) { }


}



function printData() {
    getToLogAnsScreen().then(resulr=>{
        console.log(resulr);
    })
    
}





const data = {
    movie: {
        image: "https://www.thefilmik.com/wp-content/uploads/2022/06/Black-Adam.webp",
        linkToMovie: "https://www.thefilmik.com/upcoming-big-budget-hollywood-movies-2022/",
        movieName: "the filmk",
        rating: "9",
        synopsis: "The Film is a 2005 Indian thriller film directed by Junaid Memon also produced along with Amitabh Bhattacharya",
    }
}

async function ucssesnovie() {
    await fetch("https://moviesmern.herokuapp.com/movies/saveMovie",
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: { 'content-type': 'appliccation/json' }
        })
}






async function craeateMvoveByUaer() {

    const dataUser = {
        movie: {
            image: imageinput.value,
            linkToMovie: linkinput.input,
            movieName: nameinput.value,
            rating: rauitinginput.value,
            synopsis: synopsisinput.value,
        }
    }


    try {
        await fetch("https://moviesmern.herokuapp.com/movies/saveMovie",
            {
                method: "POST",
                body: JSON.stringify(dataUser),
                headers: { 'content-type': 'appliccation/json' }
            })
    }
    catch(err){}
}


