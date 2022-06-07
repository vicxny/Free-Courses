//Example fetch using LIBRARY api
// https://openlibrary.org/dev/docs/api/books

// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   console.log(choice)
//   const url = `https://api.nasa.gov/planetary/apod?api_key=iJy0Nd4wZZzfW2HFgBkNV4DDUsZ6PxL3RqQRgFfI&date=${choice}`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         if(data.media_type === "image"){
//           document.querySelector('img').src = data.hdurl
//         }else if(data.media_type === 'video'){
//           document.querySelector('iframe').src = data.url
//         }else{
//           alert('Media Not Supported - Contact NASA IMMEDIATLY')
//         }
       
//         document.querySelector('h3').innerText = data.explanation
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }


//Example fetch using LIBRARY api
// https://openlibrary.org/dev/docs/api/books
// https://openlibrary.org/api/books?bibkeys=ISBN:0201558025,LCCN:93005405&format=json
// https://openlibrary.org/api/books?bibkeys=ISBN:045152653&format=json
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=iJy0Nd4wZZzfW2HFgBkNV4DDUsZ6PxL3RqQRgFfI&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
