liste = ["AliGalip","Bedirhan","Emsal","EnesAlper","Cevaplar","HilalAltinbas","Ilker",
"Melek","Melih","Muzeyyen","Necmi","Ozge","Sinan","Suat"]
# ornekListe = ["a","b","c","d"]
# #              0.  1.  2.  3. 
# # ornekListe[0] => a
# sozluk = {"1":"Bir"}
#         # key:value
# # sozluk["1"]
import os
import shutil
for item in liste:
    if not os.path.exists(os.path.join("Exercises",item)):
        os.mkdir(os.path.join("Exercises",item))
    fileName = f"{item}_find_2.mongodb.js"
    if not os.path.exists(os.path.join("workspace","mongodbegitim3107","Documents",fileName)):
        open(os.path.join("Exercises",item,fileName),"w+")
    else:
        source = f"/workspace/mongodbegitim3107/Documents/{fileName}"
        destination = os.path.join("Exercises",item,"ornek.js")
        if not os.path.exists(os.path.join("Exercises",item,"ornek.js")):
            shutil.copy(source,destination)