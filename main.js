const linksSocialMedia = {
  github: "PedroGabriel1996",
  youtube: "channel/UCHhglbzMzpP3F7dY1vh9j0g",
  facebook: "profile.php?id=100032383353594",
  instagram: "braganca.pg",
  twitter: "pedro_g001",
}

function changeSocialMediaLinks() {
  for(let li of socialLinks.children) {
  const social = li.getAttribute('class')

  li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
