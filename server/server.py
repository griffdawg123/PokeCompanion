from flask import Flask
from pokebase_api import list_of_pokemon_names, pokemon_dictionary

app = Flask(__name__)

@app.route("/")
def hello():
    return "<h1>Hello World!</h1>"

@app.route("/pokemon")
def pokemon():
    return list_of_pokemon_names()

@app.route("/pokedex")
def pokedex():
    return pokemon_dictionary()

if __name__ == "__main__":
    app.run(debug=True)