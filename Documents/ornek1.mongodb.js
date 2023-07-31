/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/


// mongodb+srv://dbuser:dbuser123@garantibbva.nuggick.mongodb.net/

// Select the database to use.

use('kutuphane');

db.getCollection('kitap').findOne();

veri = {
    'isbn':null,
    'best_seller':true,
    'fiyat':50.25,
    'sayfa': NumberInt("168"),
    'baslik':'Puslu Kıtalar Atlası',
    'baski_tarihi': new Date(),
    'pattern': /\d+/,
    'satin_alan':["Ali",3,"İsmail",5],
    'yazar':{
        "isim":"İhsan Oktay",
        "soyisim":"Anar"
    },
}