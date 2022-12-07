# [Zee5-Clone](https://zee5clonep.netlify.app/)
<h2>Online OTT platform</h2>
<h3>Zee5 offers an exhaustive array of content; with 90+ live TV channels and 1.25 lac+ hours of viewing across the languages of English, Hindi, Bengali, Malayalam, Tamil, Telugu, Kannada, Marathi, Oriya, Bhojpuri, Gujarati & Punjabi making it a complete video destination for OTT viewers.</h3>
<h3>A collaborative project built by 5 Developers within 7 days.</h3>
<h4>Tech Stack : HTML | CSS | JavaScript | JSON Server</h4>
<h4>Features : </h4>
<p>---> Sign Up | Login</p>
<p>---> Landing Page | Home Page | Movie Page | Profile Page ( Dynamic )</p>
<p>---> Add Movie in Watch list | Buy </p>
<p>---> Buy plan | Apply Coupons | Payment</p>
<p>---> Video Page | Help Center</p>
<br />

## ** Problem statement**
<br>
Our Problem statement is creating a pixel-perfect clone of [Zee5](https://www.zee5.com/). Previously we did a clone of a few web pages but in this problem, we were supposed to make pages dynamic.

## ** The Idea**
<br>
We are pursuing a Full Stack Web Development course at Masai school, In Masai school, we have given a project to clone the Zee5 website. It was a pretty good project to work on. We are five members of the team. The task was to clone the pixel-perfect layout of the Zee5 website. Let's look at how we designed it 

 ### Home Page 👇


![image](https://cdn.hashnode.com/res/hashnode/image/upload/v1660048819280/KLONeRtEq.png )

### Language Change option 👇


![image](https://cdn.hashnode.com/res/hashnode/image/upload/v1660049302894/dMLtDGmbS.png )

### Login Page 👇

![image](https://cdn.hashnode.com/res/hashnode/image/upload/v1660049429161/oc-okn5dm.png)

### Profile Page 👇

![image](https://cdn.hashnode.com/res/hashnode/image/upload/v1660049531648/ovOz2h0gM.png)

### Edit Profile 👇

![image](https://cdn.hashnode.com/res/hashnode/image/upload/v1660049607620/AB82dwzQQ.png)

### Buy plan  👇


![image](https://cdn.hashnode.com/res/hashnode/image/upload/v1660050596847/5MFgTbQXF.png )

### Payment Section 👇


![image](https://cdn.hashnode.com/res/hashnode/image/upload/v1660050695925/a84r6zMoo.png )
### Payment Cnfirmation👇

![image](https://cdn.hashnode.com/res/hashnode/image/upload/v1660050667533/8YAVnyL1u.png )

### Subscription Details 👇

![image](https://cdn.hashnode.com/res/hashnode/image/upload/v1660051391459/Gy5mWCEnY.png)

### Search Option 👇

![image](https://cdn.hashnode.com/res/hashnode/image/upload/v1660051443444/_wRweaLM2.png)

### More Results 👇
![image](https://cdn.hashnode.com/res/hashnode/image/upload/v1660051481067/6TH-zr4rj.png)
### Sorting and Filter 👇

![image](https://cdn.hashnode.com/res/hashnode/image/upload/v1660051553740/_aUGpie0p.png )
### Watch selected video 👇 

![image](https://cdn.hashnode.com/res/hashnode/image/upload/v1660051606450/VZaLOBtsR.png )
### Add to watch list 👇

![image](https://cdn.hashnode.com/res/hashnode/image/upload/v1660051633754/POzVADdTN.png)
### Watch list 👇

![image](https://cdn.hashnode.com/res/hashnode/image/upload/v1660051842840/1gHrTeKP7.png)
### Logout option 👇

![image](https://cdn.hashnode.com/res/hashnode/image/upload/v1660051887597/K8KK818CZ.png )

### Create JSON Server
```
{
  "UserLoginDetails": [
    {
      "password": "12345678",
      "email": "",
      "phone": "8585858585",
      "userLoginId": 1658656526044,
      "id": 1,
      "name": "",
      "gender": "Male",
      "dateOfBirth": "",
      "plan699": true,
      "plan499": false,
      "watchList": [
        {
          "VID": "BKviRM0KF2A",
          "title": "AVENGERS: ENDGAME All Movie Clips - Final Battle (2019)",
          "photo": "https://i.ytimg.com/vi/BKviRM0KF2A/mqdefault.jpg "
        },
        {
          "VID": "QblXRGSTJlU",
          "title": "Rangbaaz: Darr Ki Rajneeti - OFFICIAL TRAILER (HD) | A ZEE5 Original | Watch Now on ZEE5",
          "photo": "https://i.ytimg.com/vi/QblXRGSTJlU/mqdefault.jpg "
        },
        {
          "VID": "tUkEl5pYMpk",
          "title": "Dance india dance S03 6 August 2022 full episode | DID S03 6 August 2022 full episode",
          "photo": "https://i.ytimg.com/vi/tUkEl5pYMpk/mqdefault.jpg "
        },
        {
          "VID": "epTjTuZSX6Y",
          "title": "Meet the Hindi voice behind NICK FURY",
          "photo": "https://i.ytimg.com/vi/epTjTuZSX6Y/mqdefault.jpg "
        }
      ]
    }
  ],
  "zeeOriginalData": [
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z51248/portrait/1920x770cac95b31db724e7eae3dd3401aad05a2.jpg",
      "moviename": "Dial 100"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z51560/portrait/1920x770087ff5f6d15f44f98b6a27adc7130aac.jpg",
      "moviename": "Helmet"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-369273/portrait/1920x7707c47b251e254462c80266717d90ba9be.jpg",
      "moviename": "Silence...Can You Hear It?"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z573699/portrait/1920x77025b1b234a8ca480cae0f64c2e006f9e3.jpg",
      "moviename": "36  Farmhouse"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z51134/portrait/1920x7705ba0721ce7f4418aa2eb3de2c6863c90.jpg",
      "moviename": "State of Siege: Temple Attack"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z562203/portrait/1920x770f86e37b3d5cd4766b4327cbb2b4608cc.jpg",
      "moviename": "Antim: The Final Truth"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3187/portrait/1920x770d8a19e87180644a0a983d40116ef6baf.jpg",
      "moviename": "Kori Khala"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-4z531922/portrait/1920x770f0c7e8ef8cbf47a8a5a8ac68dcedca73.jpg",
      "moviename": "Jodhya Akbar"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3021/portrait/1920x7707464fcdbe7e54788aaf8031570f41c52.jpg",
      "moviename": "Jiban Sathi"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-22/portrait/1920x770b68edeee6eed47febe62bc6035d1dc1c.jpg",
      "moviename": "RannaGhar"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-4z541514/portrait/1920x770a7f0b1b166ad4c27b6ccaeb8eec085ba.jpg",
      "moviename": "Pilu"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3252/portrait/1920x770e86f02452ead429587c85e0a3e1fbc85.jpg",
      "moviename": "Amader Ei Poth Jodi na Sesh Hoy"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3103/portrait/1920x770f9184713291d4a60a13420e3c6bc9c27.jpg",
      "moviename": "Aparajita Apu"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3121/portrait/1920x77026b50f0fc02f4193a1417677ec00b009.jpg",
      "moviename": "Mithai"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3328/portrait/1920x770611fdd1bb6a842938b3bc32c09a826d8.jpg",
      "moviename": "Sorbojaya"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3493/portrait/1920x770e95592d66bc04e4e89b807cbf6e37184.jpg",
      "moviename": "Uma"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-4z587354/portrait/1920x770d654eabf22fc4471aaa4e04da5828833.jpg",
      "moviename": "Lakki kakima"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-4z587360/portrait/1920x770ce1b009d79e24e6f995f91987203e1f7.jpg",
      "moviename": "Didi Number 1"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3731/portrait/1920x770a7fc19d082c444dba4ec7aaf78e4e4cc.jpg",
      "moviename": "DadaGiri Unlimited"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-2887/portrait/1920x7704bd494eaa6f5459e9a4a9d4232cd95ca.jpg",
      "moviename": "Jomuna Dhaki"
    }
  ],
  "TvShowsZee5": [
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_407,h_229,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-1-6z599316/list/00000004d9765b80dbe642d5a121ca361feb2143.jpg",
      "text": "Happu Ki Ultan Paltan - February 22, 2022 - Episode Spoiler",
      "smallText": "E 702"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_407,h_229,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-1-6z599236/list/00000013ae1d187ce59f4a97ae8d1bc1604c8bb5.jpg",
      "text": "Baal Shiv",
      "smallText": "E 66"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_407,h_229,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-1-6z599143/list/00000009763098f334fc472dbd1628fc69413258.jpg",
      "text": "Meet ",
      "smallText": "E 172"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_407,h_229,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-1-6z599031/list/000000060a9ad90c83774b53b9ba187b6ed20c68.jpg",
      "text": "Kashibai Bajirao Ballal ",
      "smallText": ""
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_407,h_229,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-1-6z599019/list/00000007ffc0534639944b7b94603e85c2d99667.jpg",
      "text": "Rishton ka Manjha",
      "smallText": "E 157"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_407,h_229,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-1-6z599043/list/00000012af028e9f0728401d81840769ec98b37b.jpg",
      "text": "Iss Mod Se Jaate Hain",
      "smallText": "E 68"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_407,h_229,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-1-6z599171/list/00000008690a1dd3186b48609553cf0edf657a38.jpg",
      "text": "Aggar Tum Na Hote ",
      "smallText": "E 76"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_407,h_229,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-1-6z599111/list/00000009621ed377f8c048e88ae6d631b83c2ef4.jpg",
      "text": "Kumkum Bhagya ",
      "smallText": "E 2069"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_407,h_229,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-1-6z599052/list/00000005fe666d60942846da99923e1c0b5b018a.jpg",
      "text": "Kundali Bhagya",
      "smallText": "E 1182"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_407,h_229,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-1-6z599060/list/00000006b1d34ebde0f94a01b8a319cd12e1f566.jpg",
      "text": "Ek Mahanayak - Dr B R Ambedkar ",
      "smallText": "E 496"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_407,h_229,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-1-6z599268/list/000000067240c8eab1904f26825d925d2390d66f.jpg",
      "text": "Tere Bina Jiya Jaye Na ",
      "smallText": "E 76"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_407,h_229,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-1-6z599203/list/00000006db0c3195a06945258f92624a972c7d4c.jpg",
      "text": "Tere Bina Jiya Jaye Na ",
      "smallText": "E 76"
    }
  ],
  "webseries": [
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z588913/portrait/1920x77062e38594ff8e4f5092d8f1ddd6e233cd.jpg",
      "moviename": "Topnic",
      "cat": "Drama"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-119468/portrait/00119468incove144662735.jpg",
      "moviename": "Sudaksinar Sari",
      "cat": "Drama"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z571422/portrait/1920x770845d575b57cb43599009f12008dba3a2.jpg",
      "moviename": "Bini Sutoy",
      "cat": "Drana"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-48836/portrait/0048836incover.jpg",
      "moviename": "Onek Diner Por",
      "cat": "Drama"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z541512/portrait/1920x770bbe9c8c511064804967dd0c4a427f0f0.jpg",
      "moviename": "Comedy",
      "cat": "Horor"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-bonolata/portrait/bonolota20151920x770.jpg",
      "moviename": "Bonolota",
      "cat": "Horor"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-42014/portrait/1920x770dac3a32c1fea44f38fa4f7a925828961c8a73dee1a834a7cb8cebd214512b104.jpg",
      "moviename": "Bijaya",
      "cat": "Drama"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-74622/portrait/satyamevajayate298776966.jpg",
      "moviename": "Satyameva Jayate",
      "cat": "Action"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-26040/portrait/jayojayodebi1920x770.jpg",
      "moviename": "Joy Joy Debi",
      "cat": "Comedy"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-ebhabeophireashajay/portrait/1920x7701429554124.jpg",
      "moviename": "Avabeo Fire Asa Jai",
      "cat": "Comedy"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-399328/portrait/1920x77094fc5e4c855e4875bd8d022eb2c6ca5f.jpg",
      "moviename": "Radhe - Your Most Wanted Bhai",
      "cat": "Action"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-35166/portrait/1920x770a6695f542cf3419291a6bc299aa894f3.jpg",
      "moviename": "Simba",
      "cat": "Action"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-96839/portrait/1920x77062fa79ad2a00435ca0ef053f6a476a74.jpg",
      "moviename": "Dream Girl",
      "cat": "Romance"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-27132/portrait/1920x770d1edc80582d845ffadbb89aa802c967b5ee1a2f6dd514d9bb193c3c269165cc3.jpg",
      "moviename": "Kedarnath",
      "cat": "Romance"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-307715/portrait/00307715incov1533673836.jpg",
      "moviename": "Suraj Pe Mangal Vari",
      "cat": "Comedy"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-33204/portrait/1920x770ab13e3472dce436a9e87bcd9b77bfad4.jpg",
      "moviename": "URI",
      "cat": "Action"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-toiletekpremkatha/portrait/1920x7701497425846.jpg",
      "moviename": "Toilet",
      "cat": "Comedy"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-6728/portrait/006728incover12314315123104ac0c30c9504cd28e37143696169d67.jpg",
      "moviename": "MULK",
      "cat": "Thriller"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-122732/portrait/00122732incov1352570625135217a753ba57e64c269633ffe0a6fed413.jpg",
      "moviename": "Hotel Mumbai",
      "cat": "Thriller"
    }
  ],
  "bhojpuriData": [
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z517068/portrait/1920x770aa5981730b664d2ebd63cea1c0d3a489.jpg",
      "moviename": "Thoda Gussa Thoda Pyaar"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z51017/portrait/1920x77068f6962f4b124bd7a162371a0915e3b2.jpg",
      "moviename": "Nirahua Chalal London"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-19144/portrait/0019144cover538975139.jpg",
      "moviename": "Dabang Sarkar"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-nirahuachalalsasural/portrait/00nirahuachalalsasuralcov746333240b59a67fdcc00456a9e8d20e1904e6b20.jpg",
      "moviename": "Nirahua Chalal Sasural 2"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z51261/portrait/1920x77069864077637c4812915d97ccf96aee4a.jpg",
      "moviename": "Jo Jeeta Wohi Sikandar"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z513111/portrait/1920x770dfed6f74d7b24186a5739b423199c08e.jpg",
      "moviename": "Jeena Marna Tere Sang"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-265644/portrait/1920x7701732222031.jpg",
      "moviename": "Leke Aaja Band Baja Ae Pawan Raja"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-265780/portrait/1920x7702111095970.jpg",
      "moviename": "Babbar"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-257026/portrait/1920x770557973062.jpg",
      "moviename": "Parvarish"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z51620/portrait/1920x770inceda04401dfc4d67863f4d3f7d1b73e8.jpg",
      "moviename": "Chutki Bhar Sindoor"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z513111/portrait/1920x770dfed6f74d7b24186a5739b423199c08e.jpg",
      "moviename": "Jeena Marna Tere Sang"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z51017/portrait/1920x77068f6962f4b124bd7a162371a0915e3b2.jpg",
      "moviename": "Nirahua Chalal London"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-movie_1577869076/portrait/jigar1920x770.jpg",
      "moviename": "Jigar"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z55609/portrait/1920x7701b85db0477a34b518f162045398ab7a7.jpg",
      "moviename": "Dulhin Ganga Paar Ke"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z51698/portrait/1920x770e5aa1f96a0a34a8ab8c4b5d1969ba64b.jpg",
      "moviename": "Yadav Paan Bhandar"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-movie_1259872199/portrait/00movie12598722098072721.jpg",
      "moviename": "Mahabharat"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-19305/portrait/biwino11920x770.jpg",
      "moviename": "Biwi No. 1"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z597182/portrait/1920x770c46471e3057849bf858e25be8e1a3088.jpg",
      "moviename": "Daamadji"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z548495/portrait/1920x770388a96f8a09947019f62485b3f187b2b.jpg",
      "moviename": "Diljale"
    },
    {
      "img_url": "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-142683/portrait/1920x770622255331.jpg",
      "moviename": "Ghoonghat Mein Ghotala"
    }
  ]
}

```
## Team Members
> ### •[Akash Surve](https://github.com/Akash2377)
> ### •[Rupesh Karale](https://github.com/rupeshkarale)
> ### • [Vaibhav Suryawanshi](https://github.com/Vaibhav3534)
> ### • [Aniket Mhalungekar](https://github.com/aniket-0703)
> ### • [Parteek Aurora](https://github.com/PART00007)

## Technology Used
> • HTML
> • CSS
> • JAVASCRIPT
> • DOM
> • Local Storage
> • JSON Server

## Tools
> • VS Code
> • Github


## Project link
> ### •[Zee5](https://zee5clonep.netlify.app/)

## Github link
> ### •[Zee5](https://github.com/Akash2377/Zee5)

## Runner-up of Presentation. Thank you, Masai

![image](https://cdn.hashnode.com/res/hashnode/image/upload/v1660052427079/fRXpGMe2R.png)


