const getCharacters = () => {
    return fetch("https://rickandmortyapi.com/api/character/")
        .then(result => {
            return result.json();
        })
        .then(data => {
            return data.results;
        });
};

export { getCharacters };