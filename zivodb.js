const fs = require("fs");

module.exports = class zivoDB {

   
    constructor(filePath){

        this.jsonFilePath = filePath || "./db.json";

    
        this.data = {};
/*

*/
        if(!fs.existsSync(this.jsonFilePath)){
            fs.writeFileSync(this.jsonFilePath, "{}", "utf-8");
        } else {
            this.fetchDataFromFile();
        }
    }

   
    fetchDataFromFile(){
        const savedData = JSON.parse(fs.readFileSync(this.jsonFilePath));
        if(typeof savedData === "object"){
            this.data = savedData;
        }
    }

   
    saveDataToFile(){
        fs.writeFileSync(this.jsonFilePath, JSON.stringify(this.data, null, 2), "utf-8");
    }

///////////////  CEK - GET  ///////////////
    cek(key){
////
if(!key) {
    return console.error("Çekilecek veri belirtilmemiş!")
}
////
return this.data[key];
    }
///////////////  CEK - GET  ///////////////

///////////////  BUL - HAS  ///////////////
   bul(key){
////
if(!key) {
    return console.error("Bulanacak veri belirtilmemiş!")
}
////
return this.data[key];
    }
///////////////  BUL - HAS  ///////////////

///////////////  KONTROL - CONTROL  ///////////////
    kontrol(key){
////
        if(!key) {
            return console.error("Kontrol edilecek veri belirtilmemiş!")
        }
////
        return Boolean(this.data[key]);
    }
///////////////  KONTROL - CONTROL  ///////////////
    
///////////////  AYARLA - SET  ///////////////
    ayarla(key, value){
////
        if(!key) {
            return console.error("Ayarlanacak veri belirtilmemiş!")
        }
        if(!value) {
            return console.error("Ayarlancak değer belirtilmemiş!")
        }
////
        this.data[key] = value;
        this.saveDataToFile();
    }
///////////////  AYARLA - SET  ///////////////

///////////////  SIL - DELETE  ///////////////
    sil(key){
////
        if(!key) {
            return console.error("Silinecek veri belirtilmemiş!")
        }
////
        delete this.data[key];
        this.saveDataToFile();
    }
///////////////  SIL - DELETE  ///////////////

///////////////  EKLE - ADD  ///////////////
    ekle(key, count){
////
        if(!key) {
            return console.error("Eklenecek veri belirtilmemiş!")
        }
        if(!count) {
            return console.error("Eklenecek değer belirtilmemiş!")
        }
////
        if(!this.data[key]) this.data[key] = 0;
        this.data[key] += count;
        this.saveDataToFile();
    }
///////////////  EKLE - ADD  ///////////////

///////////////  EKSILT - SUBSTRACT  ///////////////
    eksilt(key, count){
////
        if(!key) {
            return console.error("Eksiltilecek veri belirtilmemiş!")
        }
        if(!count) {
            return console.error("Eksiltilecek değer belirtilmemiş!")
        }
////
        if(!this.data[key]) this.data[key] = 0;
        this.data[key] -= count;
        this.saveDataToFile();
    }
///////////////  EKSILT - SUBSTRACT  ///////////////

///////////////  PUSH - DEGEREKLE  ///////////////
    degerekle(key, element){
////
        if(!key) {
            return console.error("Değer eklenecek veri belirtilmemiş!")
        }
        if(!element) {
            return console.error("Eklenecek değer belirtilmemiş!")
        }
////
        if (!this.data[key]) this.data[key] = [];
        this.data[key].push(element);
        this.saveDataToFile();
    }
///////////////  PUSH - DEGEREKLE  ///////////////

///////////////  TEMIZLE - CLEAR  ///////////////
    temizle(){
        this.data = {};
        this.saveDataToFile();
    }
///////////////  TEMIZLE - CLEAR  ///////////////
///////////////  CEK - GET  ///////////////
    cek(key){
////
if(!key) {
    return console.error("Çekilecek veri belirtilmemiş!")
}
////
return this.data[key];
    }
///////////////  CEK - GET  ///////////////

///////////////  BUL - HAS  ///////////////
   bul(key){
////
if(!key) {
    return console.error("Bulanacak veri belirtilmemiş!")
}
////
return this.data[key];
    }
///////////////  BUL - HAS  ///////////////

///////////////  KONTROL - CONTROL  ///////////////
    kontrol(key){
////
        if(!key) {
            return console.error("Kontrol edilecek veri belirtilmemiş!")
        }
////
        return Boolean(this.data[key]);
    }
///////////////  KONTROL - CONTROL  ///////////////
    
///////////////  AYARLA - SET  ///////////////
    ayarla(key, value){
////
        if(!key) {
            return console.error("Ayarlanacak veri belirtilmemiş!")
        }
        if(!value) {
            return console.error("Ayarlancak değer belirtilmemiş!")
        }
////
        this.data[key] = value;
        this.saveDataToFile();
    }
///////////////  AYARLA - SET  ///////////////

///////////////  SIL - DELETE  ///////////////
    sil(key){
////
        if(!key) {
            return console.error("Silinecek veri belirtilmemiş!")
        }
////
        delete this.data[key];
        this.saveDataToFile();
    }
///////////////  SIL - DELETE  ///////////////

///////////////  EKLE - ADD  ///////////////
    ekle(key, count){
////
        if(!key) {
            return console.error("Eklenecek veri belirtilmemiş!")
        }
        if(!count) {
            return console.error("Eklenecek değer belirtilmemiş!")
        }
////
        if(!this.data[key]) this.data[key] = 0;
        this.data[key] += count;
        this.saveDataToFile();
    }
///////////////  EKLE - ADD  ///////////////

///////////////  EKSILT - SUBSTRACT  ///////////////
    eksilt(key, count){
////
        if(!key) {
            return console.error("Eksiltilecek veri belirtilmemiş!")
        }
        if(!count) {
            return console.error("Eksiltilecek değer belirtilmemiş!")
        }
////
        if(!this.data[key]) this.data[key] = 0;
        this.data[key] -= count;
        this.saveDataToFile();
    }
///////////////  EKSILT - SUBSTRACT  ///////////////

///////////////  PUSH - DEGEREKLE  ///////////////
    degerekle(key, element){
////
        if(!key) {
            return console.error("Değer eklenecek veri belirtilmemiş!")
        }
        if(!element) {
            return console.error("Eklenecek değer belirtilmemiş!")
        }
////
        if (!this.data[key]) this.data[key] = [];
        this.data[key].push(element);
        this.saveDataToFile();
    }
///////////////  PUSH - DEGEREKLE  ///////////////

///////////////  TEMIZLE - CLEAR  ///////////////
    temizle(){
        this.data = {};
        this.saveDataToFile();
    }
///////////////  TEMIZLE - CLEAR  ///////////////
///////////////  CEK - GET  ///////////////
get(key){
    ////
    if(!key) {
        return console.error("Çekilecek veri belirtilmemiş!")
    }
    ////
    return this.data[key];
        }
    ///////////////  CEK - GET  ///////////////
    
    ///////////////  BUL - HAS  ///////////////
       has(key){
    ////
    if(!key) {
        return console.error("Bulanacak veri belirtilmemiş!")
    }
    ////
    return this.data[key];
        }
    ///////////////  BUL - HAS  ///////////////
    
    ///////////////  KONTROL - CONTROL  ///////////////
        control(key){
    ////
            if(!key) {
                return console.error("Kontrol edilecek veri belirtilmemiş!")
            }
    ////
            return Boolean(this.data[key]);
        }
    ///////////////  KONTROL - CONTROL  ///////////////
        
    ///////////////  AYARLA - SET  ///////////////
        set(key, value){
    ////
            if(!key) {
                return console.error("Ayarlanacak veri belirtilmemiş!")
            }
            if(!value) {
                return console.error("Ayarlancak değer belirtilmemiş!")
            }
    ////
            this.data[key] = value;
            this.saveDataToFile();
        }
    ///////////////  AYARLA - SET  ///////////////
    
    ///////////////  SIL - DELETE  ///////////////
        delete(key){
    ////
            if(!key) {
                return console.error("Silinecek veri belirtilmemiş!")
            }
    ////
            delete this.data[key];
            this.saveDataToFile();
        }
    ///////////////  SIL - DELETE  ///////////////
    
    ///////////////  EKLE - ADD  ///////////////
        add(key, count){
    ////
            if(!key) {
                return console.error("Eklenecek veri belirtilmemiş!")
            }
            if(!count) {
                return console.error("Eklenecek değer belirtilmemiş!")
            }
    ////
            if(!this.data[key]) this.data[key] = 0;
            this.data[key] += count;
            this.saveDataToFile();
        }
    ///////////////  EKLE - ADD  ///////////////
    
    ///////////////  EKSILT - SUBSTRACT  ///////////////
        substract(key, count){
    ////
            if(!key) {
                return console.error("Eksiltilecek veri belirtilmemiş!")
            }
            if(!count) {
                return console.error("Eksiltilecek değer belirtilmemiş!")
            }
    ////
            if(!this.data[key]) this.data[key] = 0;
            this.data[key] -= count;
            this.saveDataToFile();
            console.log(`${key} İsimli Veritabanından ${count} Eksiltildi`) 
        }
    ///////////////  EKSILT - SUBSTRACT  ///////////////
    
    ///////////////  PUSH - DEGEREKLE  ///////////////
        push(key, element){
    ////
            if(!key) {
                return console.error("Değer eklenecek veri belirtilmemiş!")
            }
            if(!element) {
                return console.error("Eklenecek değer belirtilmemiş!")
            }
    ////
            if (!this.data[key]) this.data[key] = [];
            this.data[key].push(element);
            this.saveDataToFile();
        }
    ///////////////  PUSH - DEGEREKLE  ///////////////
    
    ///////////////  TEMIZLE - CLEAR  ///////////////
        clear(){
            this.data = {};
            this.saveDataToFile();
        }
    ///////////////  TEMIZLE - CLEAR  ///////////////

    bilgi(){
    console.log("Test")
}
        deneme(){
    console.error('Test', "Test")
}

};

