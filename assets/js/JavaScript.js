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