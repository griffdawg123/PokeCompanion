import pokebase as pb

def list_of_pokemon_names():
    pokemon = pb.APIResourceList("pokemon")
    return [name for name in pokemon.names]