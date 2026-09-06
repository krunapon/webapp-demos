async function showLocation() {
  const githubUser = await fetch("https://api.github.com/users/krunapon");
  const githubUserInfo = await githubUser.json();
  console.log(`${githubUserInfo.name} lives in ${githubUserInfo.location}`);
}
showLocation();
