#Se importan las librerías necesarias.
from collections import Counter
import string

#Se crea la función para poder realizar el conteo de la frecuencia de aparición de palabras en el texto.
def contarPalabrasIguales(text):
    #Se envía la oración a minúsculas y se eliminan los signos de puntuación.
    text = text.lower().translate(str.maketrans("", "", string.punctuation))
    #Se convierte la oración a lista.
    listText = text.split()
    #Se realiza conteo de la frecuencia de las palabras.
    frecPal = Counter(listText)
    #Se imprime el resultado en consola.
    for palabra, frecuencia in frecPal.items():
        #Si la frecuencia es mayor a una, se imprime la palabra "veces", en cambio si la fracuencia solo es una
        #se imprime la palabra "vez".
        if frecuencia == 1:
            times = "vez"
        else:
            times = "veces"
        print(f'La palabra "{palabra}" aparece "{frecuencia}" {times}.')

#-------------------------------------------------------------------------------------------------------------------

# Bloque principal
#Se realiza la petición del texto a analizar
print("Ingrese el texto a analizar:")
text = input()
#Se manda a ejectuar la función de conteo de palabras.
contarPalabrasIguales(text)