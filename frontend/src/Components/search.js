swal({
    text: 'Search for a movie. e.g. "La La Land".',
    content: "input",
    button: {
      text: "Search!",
      closeModal: false,
    },
  })
  .then(name => {
    if (!name) throw null;
   
    return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
  })
  .then(results => {
    return results.json();
  })
  .then(json => {
    const movie = json.results[0];
   
    if (!entry) {
      return swal("No entry on that date...");
    }
   
    const date = entry.title;
    const title = entry.title;
   
    swal({
      title: "Top result:",
      date: date,
    });
  })
  .catch(err => {
    if (err) {
      swal("Oh noes!", "Couldn't find that entry!", "error");
    } else {
      swal.stopLoading();
      swal.close();
    }
  });