function checkAddress() {
    var walletAddress = document.getElementById('walletAddress').value;
    var network = document.getElementById('network').value;
    var originalApiUrl = `https://wallet-validation.gotcha-labs.workers.dev/${network}/${walletAddress}`;
    var proxyDomain = 'https://cors-proxy-alpha.vercel.app';

    fetch(proxyDomain, {
        headers: {
            'my-url': originalApiUrl
        }
    })
    .then(response => response.json())
    .then(data => {
        var resultText = data ? "This wallet address is rogue" : "Valid wallet address";
        document.getElementById('result').innerText = resultText;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerText = "Error checking address";
    });
}
