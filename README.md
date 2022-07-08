## ZivoDB 
Json tabanlı çalışan bir veritabanıdır, kolay kullanımı vardır
 
## Tanımlama Nasıl Yapılır
```js
const zivodb = require("zivo.db");
const db = new zivodb("./zivo.json");
```


## Kullanım
```js
/// Veri değerini sabitlemek (set)

db.ayarla("İlk Veri", "Zivo Database"); // Verimiz verisini "Zivo Database" olarak sabiledik.

// Veri değerini çekmek
db.cek("İlk Veri"); // Çıktı olarak "Zivo Database" çıktısını alacaksınız.
db.bul("İlk Veri"); // Çıktı olarak "Zivo Database" çıktısını alacaksınız.

// Veri silme
db.sil("İlk Veri"); // Verimiz verisini sildik.

// Veri kontrolü
db.kontrol("İlk Veri"); // Eğer ki veri bulunuyor ise "true" çıktısı alırsınız, eğer ki veri bulunmuyorsa "false" çıktısını alırsınız. 

// Veri ekleme - Veri azaltma
db.ekle("Sayı", 5); // Sayı verimize 5 eklendi

db.eksilt("Sayı", 4); // Sayı verimizden 4 eksiltildi

// Verimize değer ekleme
db.degerekle("Kimlik", { Isim: "Zivo", Soyisim: "Database"}); // Kimlik verisine isim ve soyisim değerlerini ekledik.

// Jsondaki verileri silme 
db.temizle(); // Veritabanu ile tanımlı olan Json dosyasını tamamen temizledik.
```
