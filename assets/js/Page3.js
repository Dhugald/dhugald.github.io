const xhr = new XMLHttpRequest()
const showComment = (e) => {
    //grabbing the value from the text area with the id comment-input
  const commentVal = document.getElementById('comment-input').value
  const FirstName = document.getElementById("First-Name").value
  console.log(e.target.id)
  console.log(document.lastModified)
  document.getElementById(
    'comment-output'
  ).innerHTML =`Comment: ${commentVal}`
document.getElementById("Name-And-Date").innerHTML= `Date: ${document.lastModified} \nPosted by: ${FirstName}`
}
document.getElementById('comment-data').addEventListener('click', showComment)






window.onload = () => {
  xhr.open('GET', 'AudioOutputs.json', true)
  console.log('current state: ', xhr.readyState)
  xhr.onprogress = () =>{
  console.log('current state: ', xhr.readyState)
}
xhr.onload = () => {
  var i = 0;
  if (xhr.status === 200){
    console.log('current state: ', xhr.readyState)
    console.log(xhr.responseText)
    const device = JSON.parse(xhr.responseText)
    console.log(device)
    device.forEach(p => {
      const {Device, Developer, image} = p
      console.log(p)
      var URL = p.image;
      document.getElementById(`Image${i}`).src = URL
      document.getElementById(`Device-Head${i}`).append(p.Device)
      document.getElementById(`Developer-Head${i}`).append(p.Developer)
      i++;
    
  });
  }else if (xhr.status === 404){
    console.log('Error. file not found.')
  }
  }
  xhr.send()
}

