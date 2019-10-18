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

// const doList = () => {
//   var node = document.createElement("LI");
//   var textNode = document.createTextNode(document.getElementById('Todo-input').value);
//   node.appendChild(textNode);
//   document.getElementById('Todo-output').appendChild(node);
//   }
  
//   document.getElementById('Todo-data').addEventListener('click', doList )

window.onload = () => {
  xhr.open('GET', 'AudioInputs.json', true)

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

/*jquery for the table (Didnt realise I Couldnt use it at first, keeping it here anyway)


$(_ => {
  $.get('AudioInputs.json', data => {
    var row = $("<tr />")
    $.each(data, (index, val) => {
    $("#Input-Device-Table").append(row);
    row.append($("<td>" +val.image + "</td>"));
    row.append($("<td>" +val.Device + "</td>"));      
    row.append($("<td>" +val.Developer + "</td>"));
    

      console.log(val.Device)
      console.log(val.Developer)
      console.log(val.image)
    })
  })
}); */


