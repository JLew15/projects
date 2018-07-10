$.get(window.location.href, (data) => {
    console.log(data);
    let listing = parseDirectoryListing(data);
    $('body').append(JSON.stringify(listing));
});

function parseDirectoryListing(text) {
    let docs = text
        .match(/href="([\w]+)/g) // pull out the hrefs
        .map((x) => x.replace('href="', '')); // clean up
    console.log(docs);
    return docs;
}