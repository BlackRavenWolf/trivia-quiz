/*
Trivia Quiz

Copyright (c) 2026 Dominique Striekwold

Licensed under the MIT License.
See the LICENSE file in the repository for details.

Built as part of a web development learning journey.
*/

const geographyQuestions = [

{
  question: "What is the capital of France?",
  answers: ["Paris", "Berlin", "Madrid", "Rome"],
  correct: "Paris",
  difficulty: "easy",
  category: "geography"
},
{
  question: "Which continent is Egypt in?",
  answers: ["Africa", "Asia", "Europe", "South America"],
  correct: "Africa",
  difficulty: "easy",
  category: "geography"
},
{
  question: "What is the capital of Italy?",
  answers: ["Rome", "Milan", "Naples", "Venice"],
  correct: "Rome",
  difficulty: "easy",
  category: "geography"
},
{
  question: "Which country is famous for kangaroos?",
  answers: ["Australia", "Brazil", "Canada", "India"],
  correct: "Australia",
  difficulty: "easy",
  category: "geography"
},
{
  question: "What ocean is on the east coast of the United States?",
  answers: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
  correct: "Atlantic Ocean",
  difficulty: "easy",
  category: "geography"
},
{
  question: "What is the capital of Spain?",
  answers: ["Madrid", "Barcelona", "Valencia", "Seville"],
  correct: "Madrid",
  difficulty: "easy",
  category: "geography"
},
{
  question: "Which continent is Brazil in?",
  answers: ["South America", "Africa", "Europe", "Asia"],
  correct: "South America",
  difficulty: "easy",
  category: "geography"
},
{
  question: "What is the capital of Germany?",
  answers: ["Berlin", "Hamburg", "Munich", "Frankfurt"],
  correct: "Berlin",
  difficulty: "easy",
  category: "geography"
},
{
  question: "Which country has the maple leaf on its flag?",
  answers: ["Canada", "USA", "Sweden", "Norway"],
  correct: "Canada",
  difficulty: "easy",
  category: "geography"
},
{
  question: "What is the largest ocean on Earth?",
  answers: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Southern Ocean"],
  correct: "Pacific Ocean",
  difficulty: "easy",
  category: "geography"
},
{
  question: "What is the capital of the United Kingdom?",
  answers: ["London", "Manchester", "Liverpool", "Birmingham"],
  correct: "London",
  difficulty: "easy",
  category: "geography"
},
{
  question: "Which continent is India in?",
  answers: ["Asia", "Europe", "Africa", "Australia"],
  correct: "Asia",
  difficulty: "easy",
  category: "geography"
},
{
  question: "Which country is shaped like a boot?",
  answers: ["Italy", "France", "Japan", "Mexico"],
  correct: "Italy",
  difficulty: "easy",
  category: "geography"
},
{
  question: "What is the capital of Japan?",
  answers: ["Tokyo", "Osaka", "Kyoto", "Nagoya"],
  correct: "Tokyo",
  difficulty: "easy",
  category: "geography"
},
{
  question: "Which continent is the Sahara Desert in?",
  answers: ["Africa", "Asia", "Australia", "Europe"],
  correct: "Africa",
  difficulty: "easy",
  category: "geography"
},
{
  question: "Which country is the Eiffel Tower in?",
  answers: ["France", "Italy", "Germany", "Belgium"],
  correct: "France",
  difficulty: "easy",
  category: "geography"
},
{
  question: "What is the capital of the Netherlands?",
  answers: ["Amsterdam", "Rotterdam", "Utrecht", "Eindhoven"],
  correct: "Amsterdam",
  difficulty: "easy",
  category: "geography"
},
{
  question: "Which ocean is between Africa and Australia?",
  answers: ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Arctic Ocean"],
  correct: "Indian Ocean",
  difficulty: "easy",
  category: "geography"
},
{
  question: "Which country is famous for pizza and pasta?",
  answers: ["Italy", "Spain", "Greece", "Turkey"],
  correct: "Italy",
  difficulty: "easy",
  category: "geography"
},
{
  question: "What is the capital of Canada?",
  answers: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
  correct: "Ottawa",
  difficulty: "easy",
  category: "geography"
},
{
  question: "Which continent is Argentina in?",
  answers: ["South America", "Europe", "Africa", "Asia"],
  correct: "South America",
  difficulty: "easy",
  category: "geography"
},
{
  question: "Which country has the Great Wall?",
  answers: ["China", "Japan", "Korea", "Thailand"],
  correct: "China",
  difficulty: "easy",
  category: "geography"
},
{
  question: "What is the capital of Portugal?",
  answers: ["Lisbon", "Porto", "Braga", "Faro"],
  correct: "Lisbon",
  difficulty: "easy",
  category: "geography"
},
{
  question: "Which continent is Kenya in?",
  answers: ["Africa", "Asia", "Europe", "Australia"],
  correct: "Africa",
  difficulty: "easy",
  category: "geography"
},
{
  question: "Which country is Mount Fuji in?",
  answers: ["Japan", "China", "Nepal", "Thailand"],
  correct: "Japan",
  difficulty: "easy",
  category: "geography"
},
{
  question: "What is the capital of Greece?",
  answers: ["Athens", "Sparta", "Thessaloniki", "Rhodes"],
  correct: "Athens",
  difficulty: "easy",
  category: "geography"
},
{
  question: "Which continent is Mexico in?",
  answers: ["North America", "South America", "Europe", "Asia"],
  correct: "North America",
  difficulty: "easy",
  category: "geography"
},
{
  question: "Which country is famous for tulips and windmills?",
  answers: ["Netherlands", "Denmark", "Switzerland", "Austria"],
  correct: "Netherlands",
  difficulty: "easy",
  category: "geography"
},
{
  question: "What is the capital of Sweden?",
  answers: ["Stockholm", "Gothenburg", "Malmo", "Uppsala"],
  correct: "Stockholm",
  difficulty: "easy",
  category: "geography"
},
{
  question: "Which continent is Antarctica?",
  answers: ["Antarctica", "Asia", "Europe", "Africa"],
  correct: "Antarctica",
  difficulty: "easy",
  category: "geography"
},
{
  question: "What is the capital of Australia?",
  answers: ["Canberra", "Sydney", "Melbourne", "Perth"],
  correct: "Canberra",
  difficulty: "medium",
  category: "geography"
},
{
  question: "Which river flows through London?",
  answers: ["Thames", "Seine", "Danube", "Rhine"],
  correct: "Thames",
  difficulty: "medium",
  category: "geography"
},
{
  question: "Which country has the city of Marrakech?",
  answers: ["Morocco", "Egypt", "Tunisia", "Jordan"],
  correct: "Morocco",
  difficulty: "medium",
  category: "geography"
},
{
  question: "What is the capital of Argentina?",
  answers: ["Buenos Aires", "Santiago", "Lima", "Montevideo"],
  correct: "Buenos Aires",
  difficulty: "medium",
  category: "geography"
},
{
  question: "Which mountain range separates Europe and Asia?",
  answers: ["Ural Mountains", "Alps", "Himalayas", "Andes"],
  correct: "Ural Mountains",
  difficulty: "medium",
  category: "geography"
},
{
  question: "Which sea lies between Europe and Africa?",
  answers: ["Mediterranean Sea", "Black Sea", "Baltic Sea", "Red Sea"],
  correct: "Mediterranean Sea",
  difficulty: "medium",
  category: "geography"
},
{
  question: "What is the capital of Thailand?",
  answers: ["Bangkok", "Phuket", "Chiang Mai", "Pattaya"],
  correct: "Bangkok",
  difficulty: "medium",
  category: "geography"
},
{
  question: "Which country is Reykjavik the capital of?",
  answers: ["Iceland", "Norway", "Finland", "Greenland"],
  correct: "Iceland",
  difficulty: "medium",
  category: "geography"
},
{
  question: "Which desert is the largest hot desert in the world?",
  answers: ["Sahara", "Gobi", "Kalahari", "Mojave"],
  correct: "Sahara",
  difficulty: "medium",
  category: "geography"
},
{
  question: "What is the capital of Norway?",
  answers: ["Oslo", "Bergen", "Trondheim", "Stavanger"],
  correct: "Oslo",
  difficulty: "medium",
  category: "geography"
},
{
  question: "Which country has the city of Istanbul?",
  answers: ["Turkey", "Greece", "Bulgaria", "Romania"],
  correct: "Turkey",
  difficulty: "medium",
  category: "geography"
},
{
  question: "Which river is the longest in the world?",
  answers: ["Nile", "Amazon", "Yangtze", "Mississippi"],
  correct: "Nile",
  difficulty: "medium",
  category: "geography"
},
{
  question: "What is the capital of South Korea?",
  answers: ["Seoul", "Busan", "Incheon", "Daegu"],
  correct: "Seoul",
  difficulty: "medium",
  category: "geography"
},
{
  question: "Which country borders both France and Spain?",
  answers: ["Andorra", "Italy", "Portugal", "Belgium"],
  correct: "Andorra",
  difficulty: "medium",
  category: "geography"
},
{
  question: "Which continent is New Zealand part of?",
  answers: ["Oceania", "Asia", "Europe", "Africa"],
  correct: "Oceania",
  difficulty: "medium",
  category: "geography"
},
{
  question: "What is the capital of Egypt?",
  answers: ["Cairo", "Alexandria", "Giza", "Luxor"],
  correct: "Cairo",
  difficulty: "medium",
  category: "geography"
},
{
  question: "Which country has the largest population?",
  answers: ["China", "India", "USA", "Indonesia"],
  correct: "China",
  difficulty: "medium",
  category: "geography"
},
{
  question: "Which mountain is the highest in the world?",
  answers: ["Mount Everest", "K2", "Kilimanjaro", "Mont Blanc"],
  correct: "Mount Everest",
  difficulty: "medium",
  category: "geography"
},
{
  question: "What is the capital of Chile?",
  answers: ["Santiago", "Valparaiso", "Lima", "Quito"],
  correct: "Santiago",
  difficulty: "medium",
  category: "geography"
},
{
  question: "Which sea is east of Italy?",
  answers: ["Adriatic Sea", "Baltic Sea", "Black Sea", "North Sea"],
  correct: "Adriatic Sea",
  difficulty: "medium",
  category: "geography"
},
{
  question: "Which country has the city of Dubai?",
  answers: ["United Arab Emirates", "Saudi Arabia", "Qatar", "Oman"],
  correct: "United Arab Emirates",
  difficulty: "medium",
  category: "geography"
},
{
  question: "Which continent is Peru in?",
  answers: ["South America", "North America", "Africa", "Asia"],
  correct: "South America",
  difficulty: "medium",
  category: "geography"
},
{
  question: "What is the capital of Finland?",
  answers: ["Helsinki", "Turku", "Tampere", "Oulu"],
  correct: "Helsinki",
  difficulty: "medium",
  category: "geography"
},
{
  question: "Which river flows through Paris?",
  answers: ["Seine", "Rhine", "Loire", "Danube"],
  correct: "Seine",
  difficulty: "medium",
  category: "geography"
},
{
  question: "Which country is known as the Land of the Rising Sun?",
  answers: ["Japan", "China", "Thailand", "Vietnam"],
  correct: "Japan",
  difficulty: "medium",
  category: "geography"
},
{
  question: "What is the capital of Colombia?",
  answers: ["Bogota", "Medellin", "Cali", "Cartagena"],
  correct: "Bogota",
  difficulty: "medium",
  category: "geography"
},
{
  question: "Which ocean lies west of California?",
  answers: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
  correct: "Pacific Ocean",
  difficulty: "medium",
  category: "geography"
},
{
  question: "Which country has the city of Venice?",
  answers: ["Italy", "Spain", "France", "Greece"],
  correct: "Italy",
  difficulty: "medium",
  category: "geography"
},
{
  question: "What is the capital of New Zealand?",
  answers: ["Wellington", "Auckland", "Christchurch", "Hamilton"],
  correct: "Wellington",
  difficulty: "medium",
  category: "geography"
},
{
  question: "Which African country has Nairobi as its capital?",
  answers: ["Kenya", "Tanzania", "Uganda", "Ethiopia"],
  correct: "Kenya",
  difficulty: "medium",
  category: "geography"
},
{
  question: "What is the capital of Mongolia?",
  answers: ["Ulaanbaatar", "Astana", "Tashkent", "Bishkek"],
  correct: "Ulaanbaatar",
  difficulty: "hard",
  category: "geography"
},
{
  question: "Which river flows through Vienna?",
  answers: ["Danube", "Rhine", "Elbe", "Po"],
  correct: "Danube",
  difficulty: "hard",
  category: "geography"
},
{
  question: "Which country has the city of Dubrovnik?",
  answers: ["Croatia", "Slovenia", "Serbia", "Montenegro"],
  correct: "Croatia",
  difficulty: "hard",
  category: "geography"
},
{
  question: "What is the capital of Bolivia?",
  answers: ["Sucre", "La Paz", "Santa Cruz", "Cochabamba"],
  correct: "Sucre",
  difficulty: "hard",
  category: "geography"
},
{
  question: "Which mountain range runs along the west coast of South America?",
  answers: ["Andes", "Rockies", "Alps", "Himalayas"],
  correct: "Andes",
  difficulty: "hard",
  category: "geography"
},
{
  question: "Which sea borders Jordan?",
  answers: ["Dead Sea", "Red Sea", "Black Sea", "Caspian Sea"],
  correct: "Dead Sea",
  difficulty: "hard",
  category: "geography"
},
{
  question: "What is the capital of Slovakia?",
  answers: ["Bratislava", "Kosice", "Presov", "Nitra"],
  correct: "Bratislava",
  difficulty: "hard",
  category: "geography"
},
{
  question: "Which country has the city of Lahore?",
  answers: ["Pakistan", "India", "Bangladesh", "Iran"],
  correct: "Pakistan",
  difficulty: "hard",
  category: "geography"
},
{
  question: "Which desert covers much of Botswana?",
  answers: ["Kalahari", "Sahara", "Namib", "Gobi"],
  correct: "Kalahari",
  difficulty: "hard",
  category: "geography"
},
{
  question: "What is the capital of Latvia?",
  answers: ["Riga", "Vilnius", "Tallinn", "Kaunas"],
  correct: "Riga",
  difficulty: "hard",
  category: "geography"
},
{
  question: "Which river flows through Budapest?",
  answers: ["Danube", "Vistula", "Seine", "Dnieper"],
  correct: "Danube",
  difficulty: "hard",
  category: "geography"
},
{
  question: "Which country has the city of Valparaiso?",
  answers: ["Chile", "Peru", "Argentina", "Colombia"],
  correct: "Chile",
  difficulty: "hard",
  category: "geography"
},
{
  question: "What is the capital of Ethiopia?",
  answers: ["Addis Ababa", "Nairobi", "Khartoum", "Kampala"],
  correct: "Addis Ababa",
  difficulty: "hard",
  category: "geography"
},
{
  question: "Which mountain is the highest in Africa?",
  answers: ["Mount Kilimanjaro", "Mount Kenya", "Atlas Mountains", "Mount Elgon"],
  correct: "Mount Kilimanjaro",
  difficulty: "hard",
  category: "geography"
},
{
  question: "Which sea lies between Saudi Arabia and Africa?",
  answers: ["Red Sea", "Arabian Sea", "Black Sea", "Mediterranean Sea"],
  correct: "Red Sea",
  difficulty: "hard",
  category: "geography"
},
{
  question: "What is the capital of Slovenia?",
  answers: ["Ljubljana", "Maribor", "Koper", "Celje"],
  correct: "Ljubljana",
  difficulty: "hard",
  category: "geography"
},
{
  question: "Which country has the island of Zanzibar?",
  answers: ["Tanzania", "Kenya", "Mozambique", "Madagascar"],
  correct: "Tanzania",
  difficulty: "hard",
  category: "geography"
},
{
  question: "Which river is the main river in Poland?",
  answers: ["Vistula", "Oder", "Danube", "Rhine"],
  correct: "Vistula",
  difficulty: "hard",
  category: "geography"
},
{
  question: "What is the capital of Kazakhstan?",
  answers: ["Astana", "Almaty", "Shymkent", "Karaganda"],
  correct: "Astana",
  difficulty: "hard",
  category: "geography"
},
{
  question: "Which country has the city of Timbuktu?",
  answers: ["Mali", "Niger", "Chad", "Sudan"],
  correct: "Mali",
  difficulty: "hard",
  category: "geography"
},
{
  question: "What is the capital of Bhutan?",
  answers: ["Thimphu", "Kathmandu", "Dhaka", "Colombo"],
  correct: "Thimphu",
  difficulty: "expert",
  category: "geography"
},
{
  question: "Which strait separates Alaska from Russia?",
  answers: ["Bering Strait", "Strait of Gibraltar", "Bosporus", "Strait of Hormuz"],
  correct: "Bering Strait",
  difficulty: "expert",
  category: "geography"
},
{
  question: "Which country has the capital city of Windhoek?",
  answers: ["Namibia", "Botswana", "Zimbabwe", "Zambia"],
  correct: "Namibia",
  difficulty: "expert",
  category: "geography"
},
{
  question: "What is the smallest independent country in the world?",
  answers: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
  correct: "Vatican City",
  difficulty: "expert",
  category: "geography"
},
{
  question: "Which river flows through Baghdad?",
  answers: ["Tigris", "Euphrates", "Jordan", "Indus"],
  correct: "Tigris",
  difficulty: "expert",
  category: "geography"
},
{
  question: "Which mountain range forms a natural border between France and Spain?",
  answers: ["Pyrenees", "Alps", "Apennines", "Carpathians"],
  correct: "Pyrenees",
  difficulty: "expert",
  category: "geography"
},
{
  question: "What is the capital of Papua New Guinea?",
  answers: ["Port Moresby", "Suva", "Honiara", "Apia"],
  correct: "Port Moresby",
  difficulty: "expert",
  category: "geography"
},
{
  question: "Which African country is completely surrounded by South Africa?",
  answers: ["Lesotho", "Eswatini", "Namibia", "Botswana"],
  correct: "Lesotho",
  difficulty: "expert",
  category: "geography"
},
{
  question: "Which sea is shrinking due to water diversion projects?",
  answers: ["Aral Sea", "Dead Sea", "Black Sea", "Caspian Sea"],
  correct: "Aral Sea",
  difficulty: "expert",
  category: "geography"
},
{
  question: "What is the capital of Kyrgyzstan?",
  answers: ["Bishkek", "Tashkent", "Dushanbe", "Ashgabat"],
  correct: "Bishkek",
  difficulty: "expert",
  category: "geography"
},
{
  question: "Which European river flows into the Black Sea after passing through multiple capitals?",
  answers: ["Danube", "Rhine", "Elbe", "Po"],
  correct: "Danube",
  difficulty: "expert",
  category: "geography"
},
{
  question: "Which country has the region called Transylvania?",
  answers: ["Romania", "Hungary", "Bulgaria", "Serbia"],
  correct: "Romania",
  difficulty: "expert",
  category: "geography"
},
{
  question: "What is the capital of Suriname?",
  answers: ["Paramaribo", "Georgetown", "Cayenne", "Belmopan"],
  correct: "Paramaribo",
  difficulty: "expert",
  category: "geography"
},
{
  question: "Which island is divided between Haiti and the Dominican Republic?",
  answers: ["Hispaniola", "Cuba", "Jamaica", "Puerto Rico"],
  correct: "Hispaniola",
  difficulty: "expert",
  category: "geography"
},
{
  question: "Which gulf lies between Iran and Saudi Arabia?",
  answers: ["Persian Gulf", "Gulf of Oman", "Gulf of Aden", "Gulf of Suez"],
  correct: "Persian Gulf",
  difficulty: "expert",
  category: "geography"
},
{
  question: "What is the capital of Tajikistan?",
  answers: ["Dushanbe", "Bishkek", "Tashkent", "Almaty"],
  correct: "Dushanbe",
  difficulty: "expert",
  category: "geography"
},
{
  question: "Which desert lies along the coast of Namibia?",
  answers: ["Namib Desert", "Kalahari Desert", "Sahara Desert", "Danakil Desert"],
  correct: "Namib Desert",
  difficulty: "expert",
  category: "geography"
},
{
  question: "Which country controls the Falkland Islands?",
  answers: ["United Kingdom", "Argentina", "Chile", "Brazil"],
  correct: "United Kingdom",
  difficulty: "expert",
  category: "geography"
},
{
  question: "What is the capital of Eritrea?",
  answers: ["Asmara", "Addis Ababa", "Khartoum", "Djibouti"],
  correct: "Asmara",
  difficulty: "expert",
  category: "geography"
},
{
  question: "Which sea connects to the Mediterranean through the Bosporus?",
  answers: ["Black Sea", "Caspian Sea", "Adriatic Sea", "Baltic Sea"],
  correct: "Black Sea",
  difficulty: "expert",
  category: "geography"
}

]