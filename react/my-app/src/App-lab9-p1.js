function GitHubRepoURL() {
  return (
    <h2><a href="http://github.com/krunapon">My GitHub repository</a></h2>
  )
}


function GitHubAvatar() {
  return (
    <img
      src="https://avatars.githubusercontent.com/u/1028997?v=4"
      alt="Kanda Runapongsa Saikaew"
    />
  );
}

export default function GitHubInfo() {
  return (
    <center> 
      <h1>My GitHub Information</h1>
      <GitHubAvatar />
      <GitHubRepoURL />
    </center>
  );
}
