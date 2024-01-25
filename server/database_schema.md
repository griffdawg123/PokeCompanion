# PokeCompanion Database Schema 

## Pokemon - National
- pokemon_id (primary)
- dex_number
- name
- type_1 (link to Types)
- type_2 (link to Types)

## Encounters
- encounter_id (primary)
- pokemon_id (link to Pokemon)
- location_id (link to Locations)

## Locations
- location_id (primary)
- location_name
- region_id (link to Regions)

## Games
- game_id (primary)
- game_name
- game_generation
- region_id (link to Regions)

## Regions

## Evolutions

## Types

