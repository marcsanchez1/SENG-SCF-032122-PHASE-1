// GLOBAL VARS
const pokeContainer = document.querySelector("#poke-container");
const pokeForm = document.getElementById("poke-form");
const pokeFormContainer = document.getElementById("poke-form-container");
const BASE_URL = `http://localhost:3000`

// INITIALIZE
// re-written to catch any errors
const getPokemon = async () => {
  const result = await fetch(`${BASE_URL}/characters`)
  const returnedArr = await result.json()
  returnedArr.forEach((pokeObject) => renderPokemon(pokeObject))
  // The below commented code is a long way of the above async
  /* .then(resp => {
    if(resp.ok){
      return resp.json()
    } else {
      // if there is an error, we create a new Error and pass it to .catch()
      throw new Error(`yikes there was an error: ${resp.status}, ${resp.statusText}`)
    }
  })
  .then(returnedArr => returnedArr.forEach(pokeObject => renderPokemon(pokeObject)))
  .catch(function(err){
    console.log(err)
  }) */
}

// EVENT LISTENER to INITIALIZE
const init = () => {
  pokeForm.addEventListener("submit", addPoke);
  // INVOKE INITIALIZE
  getPokemon()
}

// create poke function will not work with our API -- yet. But it still works with our static pokemonDB.
const addPoke = async (e) => {
  e.preventDefault();
  const name = document.getElementById("name-input").value;
  const img = document.getElementById("img-input").value;

  const newPoke = {
    name, img,
    likes: 0,
  };

  const config = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(newPoke)
  }

  try {
    const result = await fetch(`${BASE_URL}/characters`, config)
    if(result.ok) {
      const newPokeObj = await result.json()
      renderPokemon(newPokeObj)
    } else {
        throw new Error(`ooopsie.... ${response.status}: ${response.statusText}`)
    }
  }
  catch(err) {
    alert(err)
  }

  // without try catch block - no error handling at all boooooo
  const result = fetch(`${BASE_URL}/characters`, config )
  const newPokeObj = await result.JSON
  renderPokemon(newPokeObj)
  .then(resp => resp.json())
  .then(newPokeObject => renderPokemon(newPokeObject))

  // add new character object to pokemonDB array. Note: this will not persist on page refresh.
  // pokemonDB.push(newPoke)
  pokeForm.reset()
  alert("nice job! your new poke is added to page")
}

init()

//  SHOW PAGE - 1 POKE
function showCharacter(character) {
  fetch(`${BASE_URL}/characters/${character.id}`)
  .then(response => {
    return response.json()
  })
  .then(returnedChar => {
    const newPokeCard = renderPokemon(returnedChar)
    newPokeCard.id = 'poke-show-card'
    newPokeCard.dataset.id = returnedChar.id
    // newPokeCard.dataset.ability = "toxicwhip"
    loadComments(newPokeCard, returnedChar)
    pokeContainer.replaceChildren(newPokeCard)
    pokeFormContainer.replaceChildren(commentsForm())
  })
  } 
// reminder: when we invoke our commentsForm method as our argument above, we are passing the RETURN VALUE of the function to our replaceChildren method. The return value is the comments form

// CREATE COMMENT FORM FOR SHOW PAGE
function commentsForm() {
  const form = document.createElement("form");
  form.id = "comment-form";
  
  // attach an event listener to the #comment-form here
  form.addEventListener('submit', (e) => {
    submitComment(e)
    form.reset()
  });
    

  const commentInput = document.createElement("input");
  commentInput.type = "text";
  commentInput.id = "comment-input";

  const label = document.createElement("label");
  label.className = "form-label";
  label.textContent = "Give this Poke some 💙 ...  ";

  const submit = document.createElement("input");
  submit.type = "submit";
  submit.id = "submit";

  form.append(label, commentInput, submit);

  return form;
}

function submitComment(e) {
  e.preventDefault()
  const commentsList = document.querySelector("ul")
  const content = document.querySelector('#comment-input').value
  const characterId = parseInt(document.getElementById('poke-show-card').dataset.id)
  
  // Target my input, eventually do a POST request
  // need an object to pass into the funciton
  // input is a comment with a key property to of content
  const newComment = {
    characterId: characterId,
    content: content,
  // from here we will POST and then we have a renderComment function
};
// console.log(newComment)
fetch(`${BASE_URL}/comments`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify(newComment)
})
.then(resp => resp.json())
.then(commentObj => renderComment(commentsList, commentObj))
}

// rendering one comment ("li") and append
function renderComment(ul, comment) {
  const newComment = document.createElement("li")
  newComment.textContent = comment.content
  ul.append(newComment)
  return newComment
}

// LOAD COMMENTS AND RENDER THEM ON POKE SHOW PAGE
function loadComments(pokeCard, character){
  const commentsDiv = document.createElement("div")
  commentsDiv.id = `comment-card-${character.id}`
  const commentsList = document.createElement("ul")
  const numComments = document.createElement("h4")
  // numComments.textContent = `${character.comments.length} comments: `
  numComments.textContent = `${character.comments.length} ${character.comments.length > 1 ? "comments" : "comment"} : `

  // numComments.textContent = character.comments.length + (character.comments.length === 1 ? ' comment:': ' comments:' )

  commentsDiv.append(numComments, commentsList)
  pokeCard.append(commentsDiv)
  character.comments.forEach(comment => 
    renderComment(commentsList, comment))
}

function renderPokemon(character) {
  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${character.id}`;
  pokeCard.className = "poke-card";

  pokeCard.addEventListener("click", () => showCharacter(character))

  const pokeImg = document.createElement("img");
  pokeImg.src = character.img;
  pokeImg.alt = `picture of ${character.name}`;

  const pokeName = document.createElement("h3");
  pokeName.innerText = character.name;

  const pokeLikes = document.createElement("h3");
  pokeLikes.innerText = "Likes: ";

  const likesNum = document.createElement("h5");
  likesNum.className = "likes-num";
  likesNum.textContent = character.likes;

  const likeBtn = document.createElement("button");
  likeBtn.className = "like-btn";
  likeBtn.textContent = "♥";
  
  likeBtn.addEventListener("click", addLikes);

  function addLikes(e) {
    e.stopPropagation()

    fetch(`${BASE_URL}/characters/${character.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({likes: ++character.likes})
    })
    .then(resp => resp.json())
    .then(updatedChar => likesNum.textContent = updatedChar.likes)
    // character.likes += 1; <<< Used the ++ increment in the body: JSON in place of this
    // likesNum.textContent = character.likes;
  }

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation()

    fetch(`${BASE_URL}/characters/${character.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    .then(resp => resp.json())
    .then(() => pokeCard.remove())

    // Optimistic Rendering
    // pokeCard.remove()
  });

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likeBtn, deleteBtn);
  pokeContainer.append(pokeCard);

  // returning our pokeCard so we can use the return value of the render function in our pokeCard div event listener
  return pokeCard
}