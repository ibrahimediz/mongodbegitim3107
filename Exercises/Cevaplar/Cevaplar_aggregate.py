"""
python üzerinde pymongo modülünü kullanarak 
1. sample training veritabanına bulunan trips koleksiyonun yer alan verilerden 
yıllara göre gruplanmış verileri üzerinden 1968 ile 1975 tarihleri arasındaki kayıtların 
yılara göre gruplandığında 
toplam seyahat süresini,yıl bilgisini 
bitiş istasyonu enlem (0) bilgisine göre sıralanmış halini 
raporlar veri tabanını içerisine ["isminiz"]_bisiklet_rapor şeklinde kaydedelim.
"""
import pymongo

import pymongo as pym
cli = pym.MongoClient("mongodb+srv://dbuser:dbuser123@garantibbva.nuggick.mongodb.net/?retryWrites=true&w=majority")

db = cli["sample_training"]
col = db["trips"]
pipeline = [
    {
        '$project': {
            'yil': '$birth year', 
            'endlocation': '$end station location.coordinates', 
            'sure': '$tripduration'
        }
    }, {
        '$group': {
            '_id': '$yil', 
            'toplamSeyahat': {
                '$sum': '$sure'
            }
        }
    }, {
        '$match': {
            '_id': {
                '$lte': 1975, 
                '$gte': 1968
            }
        }
    }, {
        '$sort': {
            'endlocation': 1
        }
    }, {
        '$out': {
            'db': 'raporlar', 
            'coll': 'Cevaplar_bisiklet_rapor'
        }
    }
]
sonuclar = col.aggregate(pipeline)
