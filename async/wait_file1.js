async function getFile() {
    const response = await fetch('mycar.html');
    if (!response.ok) {
        throw new Error('HTTP error! status: ${response.status}');
    }
    const myText = await response.text();
    console.log(myText);
}
getFile();