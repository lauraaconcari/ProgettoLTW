from geopy.geocoders import Nominatim

geolocator = Nominatim(user_agent="my_app_name") # sostituisci "my_app_name" con il nome della tua applicazione

place = input("Inserisci il nome del ristorante: ")

# Cerca il ristorante tramite il nome
location = geolocator.geocode(place, exactly_one=True)

# Estrae le informazioni del ristorante dal risultato della ricerca
name = location.raw['address']['restaurant']
address = location.address
lat = location.latitude
lng = location.longitude

print("Nome:", name)
print("Indirizzo:", address)
print("Coordinate geografiche:", lat, lng)


print("Le coordinate geografiche di", place, "sono:", lat, lng)
