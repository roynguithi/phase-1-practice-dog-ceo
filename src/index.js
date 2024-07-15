//dog images API
document.addEventListener('DOMContentLoaded',()=>{
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const dogImagesContainer = document.getElementById('dog-images');
    
    fetch(umgUrl)
         .then(response = response.json())
         .then(data => {
            data.message.foreach(imgUrl => {
                const img = document.createElement('img');
                img.src=imgUrl;
                dogImagesContainer.appendChild(img);
            })
         })
         . catch(error => {
              console.error('Error fetching images:',error);
         })
})


document.addEventListener('DOMContentLoaded', =>{
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    const breedList = document.getElementById('breed-list')
        
    fetch(breedUrl)
    .then(response = response.json());
    .then(data =>{
        const breeds = Object.keys(data.message);
        breeds.forEach(breed => {
            const li = document.createElement('li');
            li.textContent = breed;
            breedList.appendChild(li);
         })
    })
    .catch( error => {
        console.error('error fetching breeds:',error);
    });
});  
