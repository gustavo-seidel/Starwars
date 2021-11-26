const API_BASE = 'https://swapi.dev/api';


/*
-Pilots
-Starships
*/
/*
função pega json e tras para uso
*/ 

//await espera a resposta

const basicFetch = async (endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}


export default{
    getHomeList: async () => {
        return[
            {
                slug: 'Pilots',
                title: 'Pilosts',
                items: await basicFetch(`/people`)
            },
            {
                slug: 'Starships',
                title: 'Starships',
                items: await basicFetch('/starships')
            }
        ];
    }
}