import pokebase as pb

def list_of_pokemon_names():
    pokemon = pb.APIResourceList("pokemon")
    return [name for name in pokemon.names]

def pokemon_dictionary():
    pokemon_names = list_of_pokemon_names()[:152]
    dex = {}
    for name in pokemon_names:
        print(name)
        dex[pb.pokemon(name).order] = name
    return dex
