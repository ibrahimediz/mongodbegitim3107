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
    # fileName = f"{item}_aggregate2.mongodb.js"
    fileName = f"{item}_aggregate.py"
    if not os.path.exists(os.path.join("workspace","mongodbegitim3107","Documents",fileName)):
        open(os.path.join("Exercises",item,fileName),"w+")
    else:
        source = f"/workspace/mongodbegitim3107/Documents/{fileName}"
        destination = os.path.join("Exercises",item,fileName)
        if not os.path.exists(os.path.join("Exercises",item,fileName)):
            shutil.copy(source,destination)
        

# class A:
#     def __init__(self,a):
#         self.a = a

#     def __gt__(self,obj):
#         return self.a > obj.a
# var1 = A(1)
# var2 = A(2)
# print(var1>var2)