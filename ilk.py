liste = ["AliGalip","Bedirhan","Emsal","EnesAlper","HilalAltinbas","Ilker","Melek","Melih","Muzeyyen","Necmi","Ozge","Sinan","Suat"]
import os
import shutil
for item in liste:
    if not os.path.exists(os.path.join("Exercises",item)):
        os.mkdir(os.path.join("Exercises",item))
    source = "/workspace/mongodbegitim3107/Documents/ornek.js"
    destination = os.path.join("Exercises",item,"ornek.js")
    shutil.copy(source,destination)