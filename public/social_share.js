// Function to share on Twitter
function shareOnTwitter(url, text) {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
}

// Function to share on Facebook
function shareOnFacebook(url) {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
}

// Function to share on LinkedIn
function shareOnLinkedIn(url, title, summary) {
    const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
}

// Function to copy URL to clipboard
function copyToClipboard(url) {
    navigator.clipboard.writeText(url).then(() => {
        alert('URL copied to clipboard!');
    }, (err) => {
        console.error('Failed to copy URL: ', err);
    });
}

// Add event listeners to buttons
document.addEventListener('DOMContentLoaded', () => {
    const shareTwitterBtn = document.querySelector('#share-twitter');
    const shareFacebookBtn = document.querySelector('#share-facebook');
    const shareLinkedInBtn = document.querySelector('#share-linkedin');
    const copyUrlBtn = document.querySelector('#copy-url');

    if (shareTwitterBtn) {
        shareTwitterBtn.addEventListener('click', () => {
            const url = window.location.href;
            const text = "Check out this obituary!";
            shareOnTwitter(url, text);
        });
    }

    if (shareFacebookBtn) {
        shareFacebookBtn.addEventListener('click', () => {
            const url = window.location.href;
            shareOnFacebook(url);
        });
    }

    if (shareLinkedInBtn) {
        shareLinkedInBtn.addEventListener('click', () => {
            const url = window.location.href;
            const title = "Obituary Details";
            const summary = "Read about the obituary details on our platform.";
            shareOnLinkedIn(url, title, summary);
        });
    }

    if (copyUrlBtn) {
        copyUrlBtn.addEventListener('click', () => {
            const url = window.location.href;
            copyToClipboard(url);
        });
    }
});
