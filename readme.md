## ZivoDB 
Json tabanlı çalışan bir veritabanıdır, kolay kullanımı vardır
 
## Tanımlama Nasıl Yapılır
```js
const zivodb = require("zivo.db");
const db = new zivodb("./zivo.json");
```


## Kullanım
```js

// Veri değerini sabitlemek
db.ayarla("İlk Veri", "Zivo Database"); 
db.set("İlk Veri", "Zivo Database");
```
```js
// Veri değerini çekmek

db.cek("İlk Veri"); // Çıktı olarak "Zivo Database" çıktısını alacaksınız.
db.get("İlk Veri");
db.bul("İlk Veri"); // Çıktı olarak "Zivo Database" çıktısını alacaksınız.
db.has("İlk Veri");
```

```js
// Veri silme
db.sil("İlk Veri"); // Verimiz verisini sildik.
db.delete("İlk Veri");
```
// Veri kontrolü
```js
db.kontrol("İlk Veri"); // Eğer ki veri bulunuyor ise "true" çıktısı alırsınız, eğer ki veri bulunmuyorsa "false" çıktısını alırsınız. 
db.control("İlk Verii");
```
// Veri ekleme - Veri azaltma
```js
db.add("Sayı", 3);
db.ekle("Sayı", 5); // Sayı verimize 5 eklendi
```
```js
db.eksilt("Sayı", 4); // Sayı verimizden 4 eksiltildi
db.substract("Sayı", 3);
```
```js
// Verimize değer ekleme
db.degerekle("Kimlik", { Isim: "Zivo", Soyisim: "Database"}); // Kimlik verisine isim ve soyisim değerlerini ekledik.
db.push("Kimlik", { Isim: "Zivo", Soyisim: "Database" });
```
```js
// Jsondaki verileri silme 
db.temizle(); // Veritabanı ile tanımlı olan Json dosyasını tamamen temizledik.
db.clear();
```

[Discord Sunucumuz](https://discord.gg/UwPZm6p4rH)
[Web Sitemiz](https://zivocodes.tk)