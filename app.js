const rmGifs = document.getElementById('rmGifs');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', function(){
    const searchBox = document.getElementById('searchBox');
    if(searchBox.value === ''){
        alert('You must type something in search box.')
    }else{
        getGif(searchBox.value)
    }})

async function getGif(searchValue){
    const token = 'lnFJ6CWkb2BCb3W01boEFZ4VBwqOh2VH'
    try{
        const res = await axios.get(`https://api.giphy.com/v1/gifs/search`, {params: {api_key:token, q:searchValue, limit:"1", offset:'0',rating:'g',lang:'en'}});
        newGif(res.data.data[0].images.looping.mp4);
        console.log(res.data.data[0].images.looping.mp4)
    }
    catch {
        console.log('Error loading image')
    }
}

function newGif(imgurl){
    const newImg = document.createElement('video');
    const newCol = document.createElement('div');
    newCol.classList.add('col-4');
    newImg.src=`${imgurl}`;
    newImg.autoplay=true;
    newImg.looping=true;
    const gifBox = document.getElementById('gifBox');
    newCol.append(newImg);
    gifBox.append(newCol);
}

rmGifs.addEventListener('click', function (){
    const picList = document.getElementsByClassName('col-4');
    for (const pics of picList) {
        pics.remove();
    }
})