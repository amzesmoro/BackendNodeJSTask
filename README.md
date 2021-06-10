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
