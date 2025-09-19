async function showLocation() {
    let githubUser = await fetch('https://api.github.com/users/krunapon');
    let githubUserInfo = await githubUser.json();   
    console.log(githubUserInfo.name + " lives in " + githubUserInfo.location)
}
showLocation();