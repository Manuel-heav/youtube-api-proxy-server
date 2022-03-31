const API_URL = 'https://server-manuel-heav.vercel.app/videos'
const videosElement = document.querySelector('#videos')
const filterInput = document.querySelector('#filter')

let allVideos = []
filterInput.addEventListener('keydown', filterList)

fetch(API_URL)
.then(res => res.json())
.then(videos => {
    allVideos = videos
    videos.forEach((video) =>{
        
        const videoElement = document.createElement('div');
        videoElement.dataset.id = video.id

        videoElement.className = 'card col-4';
        const img = document.createElement('img');
        img.src = video.snippet.thumbnails.high.url;
        img.className = 'card-img-top';

        videoElement.appendChild(img);
        const mediaBody = document.createElement('div'); 
        mediaBody.className="card-body";

        videoElement.appendChild(mediaBody);
        const h5 = document.createElement('h5');
        h5.className = 'card-title';
        h5.textContent = video.snippet.title;

        mediaBody.appendChild(h5);

        videosElement.appendChild(videoElement)
    })
})


const filterList = (e) => {
    const filter = e.target.value
    console.log(filter)
    if(allVideos){
        const regExp = new RegExp(filterInput.value, 'gi')
        allVideos.forEach(video => {
            if(video.snippet.title.match(regExp)){
                document.querySelector(`div[data-id=${video.id}]`).getElementsByClassName.display = ''
            }else{
                document.querySelector(`div[data-id=${video.id}]`).getElementsByClassName.display = 'none'
            }
        })    
    }

}