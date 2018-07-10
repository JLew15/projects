$.get(window.location.href, (data) => {
    console.log(data);
    let listing = parseDirectoryListing(data);
    $('body').append(JSON.stringify(listing));
});

function parseDirectoryListing(text) {
    console.log(docs);
    return docs;
}