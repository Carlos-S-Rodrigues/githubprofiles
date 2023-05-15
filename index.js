// api.github.com/users/

const API_URL = "https://api.github.com/users/"

const formEl = document.querySelector("#form")
const searchEl = document.querySelector("#search")
const mainEl = document.querySelector("#main")

async function getUser(user){
  const response = await fetch(API_URL+user)
  const data = await response.json()
  return data
  //avatar_url, bio,followers,following, name, repos_url, public_repos
}



async function getRepos(reposUrl){
  const response = await fetch(reposUrl)
  const data = await response.json()
  //name, html_url, stargazers_count
  return data
  
}
async function createCard(login) {
    const user = await getUser(login)
    const cardHtml = `
    <div class="card">
    <img class="avatar" src="${user.avatar_url}" alt="${user.name}"/>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.bio}</p>
      <ul class="info">
        <li>${user.followers}</li>
        <strong>Followers</strong>
        <li>${user.following}</li>
        <strong>Following</strong>
        <li>${user.public_repos}</li>
        <strong>Repos</strong>
      </ul>
      <div id="repos"></div>
    </div>
  </div>
`

  mainEl.innerHTML = cardHtml
  await addReposToCard(user.repos_url)
}

createCard("Carlos-S-Rodrigues")

async function addReposToCard(reposUrl){
  const reposData = await getRepos(reposUrl)
  const reposEl = document.querySelector("#repos")
  reposEl.innerHTML = "testando"

  reposData.sort((a,b)=> b.stargazers_count - a.stargazers_count).forEach()
}