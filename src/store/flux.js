const getState = ({ getStore, getActions, setStore }) => {
	return {
        store: {
            people: {},
            planet: {},
            peopleID: {},
            planetsID: {},
            favorites: [],
		},
        actions: {
            getPeopleID: (url) => {
                fetch(url)
                    .then(response => response.json())
                    .then(data => setStore({ peopleID: data }))
            },
            getPlanetsID: (url) => {
                fetch(url)
                    .then(response => response.json())
                    .then(data => setStore({ planetsID: data }))
            },
            getPeople:  (url) => {
                fetch(url)
                    .then(response => response.json())
                    .then(data => setStore({ people: data }))
            },
            getPlanet: (url) => {
                fetch(url)
                    .then(response => response.json())
                    .then(data => setStore( {planet: data}))
            },
            addFavorite: newFavorite => {
                const store = getStore();
                console.log(newFavorite);
                const onlyOne = store.favorites.some(item => item === newFavorite)
                if (onlyOne === true) {
                    return
                } else { 
                setStore( store.favorites.push(newFavorite) )
                }
            },
            removeFavorite: index => {
                //esta es mejor forma
                const { favorites } = getStore();
                favorites.splice(index,1) 
                setStore(...favorites)
            },
            },
		}
	};
export default getState;