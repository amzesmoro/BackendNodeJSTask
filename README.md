# BackendNodeJSTask

## Solution Number 1
### Simple Database Querying
Terdapat sebuah Table "User" memiliki tiga attribut yaitu ID (sebagai PK), UserName, dan Parent.
Contoh Data:
* 1-Ali-2 -> 1 merupakan ID, Ali merupakan UserName dan 2 merupakan Parent. 
* 2-Budi-0 -> 2 merupakan ID, Budi merupakan UserName dan 0 merupakan Parent.
* 3-Cecep-1 -> 3 merupakan ID, Cecep merupakan UserName dan 1 merupakan Parent.

Dan *Expected Result* nya -> ID, UserName, ParentUserName
* 1-Ali-Budi
* 2-Budi-NULL
* 3-Cecep-Ali

Untuk memperoleh *Expected Result*, maka kita harus menambah kolom dengan nama ParentUserName, dimana isi untuk kolom tersebut merupakan UserName yang diambil dari ID User. 
Didalam file **SolutionNumber1.sql** , saya telah melampirkan solusi untuk case tersebut. Saya memberikan dua opsi untuk solusi soal ini. Untuk mendapatkan *Expected Result*, saya menggunakan *LEFT JOIN Keyword*

## Solution Number 3
### Refactor Code
Di dalam soal ini terdapat sebuah fungsi **findFirstStringInBracket(str)** yang memiliki satu parameter yaitu "str". Perintah dalam soal ini adalah melakukan *refactor code* agar *code* menjadi lebih ringkas, efisien, mudah dibaca dengan logika yang baik. Di file **SolutionNumber3.js** saya telah memberikan sebuah solusi yang menurut saya sudah lebih ringkas, efisien dan mudah dibaca. Didalam file .js tersebut terdapat *Before* dan *After code*. Saya mengubah *code* dengan memecahnya menjadi sebuah *function*. Jika ingin menggunakan *function* tersebut, tinggal menggunakannya saja. Terdapat juga beberapa *Sample Test Cases*. Untuk menjalankan *function* tersebut, saya menggunakan *Web Browser Chrome* dengan mengaktifkan *Developer tools*. Saya menjalankannya di *Tab Console*. Namun untuk beberapa case seperti: "((amzesmoro))" atau yang memiliki *kurung ganda* belum dapat di*cover* menggunakan fungsi ini, karena tujuan awalnya adalah hanya *refactor code* dengan *code* yang ada.


## Solution Number 2
### Create a Small ExpressJS 
Untuk solusi soal nomor 2 dapat dilihat pada folder **SolutionNumber2**, terdapat juga *README.md* untuk mengetahui struktur proyek, config dan cara instalasi proyek.