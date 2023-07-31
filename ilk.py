liste = ["AliGalip","Bedirhan","Emsal","EnesAlper","HilalAltinbas","Ilker","Melek","Melih","Muzeyyen","Necmi","Ozge","Sinan","Suat"]
import os
for item in liste:
    if not os.path.exists(os.path.join("Exercises",item)):
        os.mkdir(os.path.join("Exercises",item))
        
