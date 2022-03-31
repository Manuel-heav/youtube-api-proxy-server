const API_URL = 'http://localhost:5000/videos'


fetch(API_URL)
.then(res => res.json())
.then(videos => {
    console.log(videos)
})