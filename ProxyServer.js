function browse() {
    const urlInput = document.getElementById('urlInput').value;
    console.log(`URL Entered: ${urlInput}`);
    
    if (urlInput) {
        const proxyUrl = `https://cors-anywhere.herokuapp.com/${urlInput}`;
        console.log(`Proxy URL: ${proxyUrl}`);
        document.getElementById('proxyFrame').src = proxyUrl;
        console.log('Iframe source updated.');
    } else {
        alert('Please enter a URL');
    }
}
