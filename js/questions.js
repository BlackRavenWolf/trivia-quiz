/*
Trivia Quiz

Copyright (c) 2026 Dominique Striekwold

Licensed under the MIT License.
See the LICENSE file in the repository for details.

Built as part of a web development learning journey.
*/

const questions = [

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
},
{
  question: "Who was the first President of the United States?",
  answers: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
  correct: "George Washington",
  difficulty: "easy",
  category: "history"
},
{
  question: "In which country did the pyramids of Giza originate?",
  answers: ["Egypt", "Mexico", "Peru", "India"],
  correct: "Egypt",
  difficulty: "easy",
  category: "history"
},
{
  question: "Who was known as the Maid of Orleans?",
  answers: ["Joan of Arc", "Marie Curie", "Queen Elizabeth I", "Catherine the Great"],
  correct: "Joan of Arc",
  difficulty: "easy",
  category: "history"
},
{
  question: "Which war was fought between the North and South regions in the United States?",
  answers: ["American Civil War", "World War I", "Vietnam War", "Korean War"],
  correct: "American Civil War",
  difficulty: "easy",
  category: "history"
},
{
  question: "Who discovered America in 1492?",
  answers: ["Christopher Columbus", "Ferdinand Magellan", "Marco Polo", "James Cook"],
  correct: "Christopher Columbus",
  difficulty: "easy",
  category: "history"
},
{
  question: "Which ancient civilization built the Colosseum?",
  answers: ["Romans", "Greeks", "Egyptians", "Mayans"],
  correct: "Romans",
  difficulty: "easy",
  category: "history"
},
{
  question: "Who was the famous leader of Nazi Germany during World War II?",
  answers: ["Adolf Hitler", "Joseph Stalin", "Winston Churchill", "Franklin D. Roosevelt"],
  correct: "Adolf Hitler",
  difficulty: "easy",
  category: "history"
},
{
  question: "Which ship sank in 1912 after hitting an iceberg?",
  answers: ["Titanic", "Lusitania", "Britannic", "Queen Mary"],
  correct: "Titanic",
  difficulty: "easy",
  category: "history"
},
{
  question: "Who was the first man to walk on the Moon?",
  answers: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
  correct: "Neil Armstrong",
  difficulty: "easy",
  category: "history"
},
{
  question: "Which wall divided Berlin during the Cold War?",
  answers: ["Berlin Wall", "Great Wall", "Hadrian's Wall", "Western Wall"],
  correct: "Berlin Wall",
  difficulty: "easy",
  category: "history"
},
{
  question: "Which country was ruled by pharaohs in ancient times?",
  answers: ["Egypt", "China", "India", "Persia"],
  correct: "Egypt",
  difficulty: "easy",
  category: "history"
},
{
  question: "Who was the first emperor of Rome?",
  answers: ["Augustus", "Julius Caesar", "Nero", "Caligula"],
  correct: "Augustus",
  difficulty: "easy",
  category: "history"
},
{
  question: "Which war ended in 1945?",
  answers: ["World War II", "World War I", "Vietnam War", "Gulf War"],
  correct: "World War II",
  difficulty: "easy",
  category: "history"
},
{
  question: "Who was the famous civil rights leader who gave the 'I Have a Dream' speech?",
  answers: ["Martin Luther King Jr.", "Malcolm X", "Nelson Mandela", "Barack Obama"],
  correct: "Martin Luther King Jr.",
  difficulty: "easy",
  category: "history"
},
{
  question: "Which empire was ruled by Genghis Khan?",
  answers: ["Mongol Empire", "Roman Empire", "Ottoman Empire", "British Empire"],
  correct: "Mongol Empire",
  difficulty: "easy",
  category: "history"
},
{
  question: "Which ancient civilization built Machu Picchu?",
  answers: ["Inca", "Aztec", "Maya", "Olmec"],
  correct: "Inca",
  difficulty: "easy",
  category: "history"
},
{
  question: "Which explorer first circumnavigated the globe?",
  answers: ["Ferdinand Magellan", "Christopher Columbus", "James Cook", "Vasco da Gama"],
  correct: "Ferdinand Magellan",
  difficulty: "easy",
  category: "history"
},
{
  question: "Who was the famous queen of ancient Egypt?",
  answers: ["Cleopatra", "Nefertiti", "Hatshepsut", "Isis"],
  correct: "Cleopatra",
  difficulty: "easy",
  category: "history"
},
{
  question: "Which revolution began in France in 1789?",
  answers: ["French Revolution", "Industrial Revolution", "American Revolution", "Russian Revolution"],
  correct: "French Revolution",
  difficulty: "easy",
  category: "history"
},
{
  question: "Which country dropped atomic bombs on Japan in World War II?",
  answers: ["United States", "Germany", "Soviet Union", "United Kingdom"],
  correct: "United States",
  difficulty: "easy",
  category: "history"
},
{
  question: "Who was the British prime minister during most of World War II?",
  answers: ["Winston Churchill", "Margaret Thatcher", "Tony Blair", "Neville Chamberlain"],
  correct: "Winston Churchill",
  difficulty: "easy",
  category: "history"
},
{
  question: "Which ancient civilization invented democracy?",
  answers: ["Greeks", "Romans", "Egyptians", "Persians"],
  correct: "Greeks",
  difficulty: "easy",
  category: "history"
},
{
  question: "Which country was the Roman Empire centered in?",
  answers: ["Italy", "France", "Spain", "Greece"],
  correct: "Italy",
  difficulty: "easy",
  category: "history"
},
{
  question: "Who was known as the Iron Lady?",
  answers: ["Margaret Thatcher", "Queen Elizabeth II", "Angela Merkel", "Golda Meir"],
  correct: "Margaret Thatcher",
  difficulty: "easy",
  category: "history"
},
{
  question: "Which war was fought between Britain and its American colonies?",
  answers: ["American Revolutionary War", "Civil War", "World War I", "War of 1812"],
  correct: "American Revolutionary War",
  difficulty: "easy",
  category: "history"
},
{
  question: "Which famous document begins with 'We the People'?",
  answers: ["US Constitution", "Magna Carta", "Bill of Rights", "Declaration of Independence"],
  correct: "US Constitution",
  difficulty: "easy",
  category: "history"
},
{
  question: "Who was the first female Prime Minister of the UK?",
  answers: ["Margaret Thatcher", "Theresa May", "Indira Gandhi", "Angela Merkel"],
  correct: "Margaret Thatcher",
  difficulty: "easy",
  category: "history"
},
{
  question: "Which empire built extensive roads across Europe?",
  answers: ["Roman Empire", "Ottoman Empire", "Mongol Empire", "Persian Empire"],
  correct: "Roman Empire",
  difficulty: "easy",
  category: "history"
},
{
  question: "Which war was known as the Great War before WWII?",
  answers: ["World War I", "Crimean War", "Napoleonic Wars", "Franco-Prussian War"],
  correct: "World War I",
  difficulty: "easy",
  category: "history"
},
{
  question: "Who was the South African leader who ended apartheid?",
  answers: ["Nelson Mandela", "Desmond Tutu", "Thabo Mbeki", "Jacob Zuma"],
  correct: "Nelson Mandela",
  difficulty: "easy",
  category: "history"
},
{
  question: "In which year did World War I begin?",
  answers: ["1914", "1918", "1939", "1905"],
  correct: "1914",
  difficulty: "medium",
  category: "history"
},
{
  question: "Who was the first Emperor of China?",
  answers: ["Qin Shi Huang", "Sun Yat-sen", "Kublai Khan", "Mao Zedong"],
  correct: "Qin Shi Huang",
  difficulty: "medium",
  category: "history"
},
{
  question: "Which country was ruled by Tsars until 1917?",
  answers: ["Russia", "Germany", "Austria", "Poland"],
  correct: "Russia",
  difficulty: "medium",
  category: "history"
},
{
  question: "Who led the Soviet Union during World War II?",
  answers: ["Joseph Stalin", "Vladimir Lenin", "Leon Trotsky", "Nikita Khrushchev"],
  correct: "Joseph Stalin",
  difficulty: "medium",
  category: "history"
},
{
  question: "Which war was fought between North and South Korea in the 1950s?",
  answers: ["Korean War", "Vietnam War", "Cold War", "Gulf War"],
  correct: "Korean War",
  difficulty: "medium",
  category: "history"
},
{
  question: "Which famous battle took place in 1815?",
  answers: ["Battle of Waterloo", "Battle of Hastings", "Battle of Gettysburg", "Battle of Trafalgar"],
  correct: "Battle of Waterloo",
  difficulty: "medium",
  category: "history"
},
{
  question: "Who was the first President of the Soviet Union?",
  answers: ["Mikhail Gorbachev", "Joseph Stalin", "Vladimir Putin", "Leonid Brezhnev"],
  correct: "Mikhail Gorbachev",
  difficulty: "medium",
  category: "history"
},
{
  question: "Which empire was centered in modern-day Turkey?",
  answers: ["Ottoman Empire", "Roman Empire", "Persian Empire", "Mongol Empire"],
  correct: "Ottoman Empire",
  difficulty: "medium",
  category: "history"
},
{
  question: "Which document ended World War I?",
  answers: ["Treaty of Versailles", "Magna Carta", "Yalta Agreement", "Treaty of Paris"],
  correct: "Treaty of Versailles",
  difficulty: "medium",
  category: "history"
},
{
  question: "Who was the leader of the French army during the Napoleonic Wars?",
  answers: ["Napoleon Bonaparte", "Louis XVI", "Charles de Gaulle", "Maximilien Robespierre"],
  correct: "Napoleon Bonaparte",
  difficulty: "medium",
  category: "history"
},
{
  question: "Which ancient wonder was located in Babylon?",
  answers: ["Hanging Gardens", "Colossus of Rhodes", "Lighthouse of Alexandria", "Temple of Artemis"],
  correct: "Hanging Gardens",
  difficulty: "medium",
  category: "history"
},
{
  question: "Which war was fought between the USA and Vietnam?",
  answers: ["Vietnam War", "Korean War", "World War II", "Spanish-American War"],
  correct: "Vietnam War",
  difficulty: "medium",
  category: "history"
},
{
  question: "Who was assassinated in 1963 in Dallas?",
  answers: ["John F. Kennedy", "Martin Luther King Jr.", "Robert Kennedy", "Malcolm X"],
  correct: "John F. Kennedy",
  difficulty: "medium",
  category: "history"
},
{
  question: "Which empire built the city of Constantinople?",
  answers: ["Byzantine Empire", "Ottoman Empire", "Roman Empire", "Persian Empire"],
  correct: "Byzantine Empire",
  difficulty: "medium",
  category: "history"
},
{
  question: "Which revolution began in Russia in 1917?",
  answers: ["Russian Revolution", "French Revolution", "Industrial Revolution", "American Revolution"],
  correct: "Russian Revolution",
  difficulty: "medium",
  category: "history"
},
{
  question: "Who was the famous nurse during the Crimean War?",
  answers: ["Florence Nightingale", "Marie Curie", "Clara Barton", "Edith Cavell"],
  correct: "Florence Nightingale",
  difficulty: "medium",
  category: "history"
},
{
  question: "Which civilization built the pyramids at Teotihuacan?",
  answers: ["Aztecs", "Inca", "Maya", "Olmec"],
  correct: "Aztecs",
  difficulty: "medium",
  category: "history"
},
{
  question: "Which wall was built to keep out northern invaders in ancient China?",
  answers: ["Great Wall", "Berlin Wall", "Hadrian's Wall", "Western Wall"],
  correct: "Great Wall",
  difficulty: "medium",
  category: "history"
},
{
  question: "Who was the last Tsar of Russia?",
  answers: ["Nicholas II", "Alexander III", "Peter the Great", "Ivan the Terrible"],
  correct: "Nicholas II",
  difficulty: "medium",
  category: "history"
},
{
  question: "Which empire ruled much of South America before Spanish conquest?",
  answers: ["Inca Empire", "Aztec Empire", "Maya Empire", "Olmec Empire"],
  correct: "Inca Empire",
  difficulty: "medium",
  category: "history"
},
{
  question: "Which country was led by Mao Zedong?",
  answers: ["China", "Vietnam", "North Korea", "Japan"],
  correct: "China",
  difficulty: "medium",
  category: "history"
},
{
  question: "Which famous ship was used by Charles Darwin?",
  answers: ["HMS Beagle", "Mayflower", "Santa Maria", "Endeavour"],
  correct: "HMS Beagle",
  difficulty: "medium",
  category: "history"
},
{
  question: "Which treaty divided Germany after World War II?",
  answers: ["Potsdam Agreement", "Versailles Treaty", "Paris Peace Treaty", "Munich Agreement"],
  correct: "Potsdam Agreement",
  difficulty: "medium",
  category: "history"
},
{
  question: "Who was the Roman general assassinated in 44 BC?",
  answers: ["Julius Caesar", "Augustus", "Mark Antony", "Brutus"],
  correct: "Julius Caesar",
  difficulty: "medium",
  category: "history"
},
{
  question: "Which country colonized Brazil?",
  answers: ["Portugal", "Spain", "France", "Netherlands"],
  correct: "Portugal",
  difficulty: "medium",
  category: "history"
},
{
  question: "Which dynasty built much of the Great Wall of China?",
  answers: ["Ming Dynasty", "Qing Dynasty", "Han Dynasty", "Tang Dynasty"],
  correct: "Ming Dynasty",
  difficulty: "medium",
  category: "history"
},
{
  question: "Who was the British monarch during the American Revolution?",
  answers: ["King George III", "Queen Victoria", "King Henry VIII", "King Edward VII"],
  correct: "King George III",
  difficulty: "medium",
  category: "history"
},
{
  question: "Which war ended with the fall of Saigon in 1975?",
  answers: ["Vietnam War", "Korean War", "Cold War", "Gulf War"],
  correct: "Vietnam War",
  difficulty: "medium",
  category: "history"
},
{
  question: "Which explorer reached India by sea in 1498?",
  answers: ["Vasco da Gama", "Columbus", "Magellan", "Cook"],
  correct: "Vasco da Gama",
  difficulty: "medium",
  category: "history"
},
{
  question: "Which empire was ruled by Suleiman the Magnificent?",
  answers: ["Ottoman Empire", "Persian Empire", "Roman Empire", "Mongol Empire"],
  correct: "Ottoman Empire",
  difficulty: "medium",
  category: "history"
},
{
  question: "In which year did the French Revolution begin?",
  answers: ["1789", "1776", "1804", "1799"],
  correct: "1789",
  difficulty: "hard",
  category: "history"
},
{
  question: "Who was the first female Prime Minister of India?",
  answers: ["Indira Gandhi", "Sonia Gandhi", "Benazir Bhutto", "Pratibha Patil"],
  correct: "Indira Gandhi",
  difficulty: "hard",
  category: "history"
},
{
  question: "Which battle marked the end of Napoleon's rule?",
  answers: ["Battle of Waterloo", "Battle of Austerlitz", "Battle of Leipzig", "Battle of Trafalgar"],
  correct: "Battle of Waterloo",
  difficulty: "hard",
  category: "history"
},
{
  question: "Which civilization built the city of Carthage?",
  answers: ["Phoenicians", "Romans", "Greeks", "Persians"],
  correct: "Phoenicians",
  difficulty: "hard",
  category: "history"
},
{
  question: "Who was the first emperor of the Byzantine Empire?",
  answers: ["Constantine I", "Justinian I", "Theodosius I", "Heraclius"],
  correct: "Constantine I",
  difficulty: "hard",
  category: "history"
},
{
  question: "Which treaty ended the Thirty Years' War in 1648?",
  answers: ["Peace of Westphalia", "Treaty of Utrecht", "Treaty of Tordesillas", "Treaty of Versailles"],
  correct: "Peace of Westphalia",
  difficulty: "hard",
  category: "history"
},
{
  question: "Which English king had six wives?",
  answers: ["Henry VIII", "Edward VI", "James I", "Charles I"],
  correct: "Henry VIII",
  difficulty: "hard",
  category: "history"
},
{
  question: "Which empire was ruled by Cyrus the Great?",
  answers: ["Persian Empire", "Roman Empire", "Ottoman Empire", "Mongol Empire"],
  correct: "Persian Empire",
  difficulty: "hard",
  category: "history"
},
{
  question: "Which war was fought between Athens and Sparta?",
  answers: ["Peloponnesian War", "Punic War", "Persian War", "Trojan War"],
  correct: "Peloponnesian War",
  difficulty: "hard",
  category: "history"
},
{
  question: "Who was the first European to reach India by sea?",
  answers: ["Vasco da Gama", "Columbus", "Magellan", "Marco Polo"],
  correct: "Vasco da Gama",
  difficulty: "hard",
  category: "history"
},
{
  question: "Which revolution led to the rise of Fidel Castro?",
  answers: ["Cuban Revolution", "Mexican Revolution", "Russian Revolution", "Chinese Revolution"],
  correct: "Cuban Revolution",
  difficulty: "hard",
  category: "history"
},
{
  question: "Which ancient civilization developed cuneiform writing?",
  answers: ["Sumerians", "Egyptians", "Greeks", "Romans"],
  correct: "Sumerians",
  difficulty: "hard",
  category: "history"
},
{
  question: "Who was the first ruler of the Mughal Empire?",
  answers: ["Babur", "Akbar", "Shah Jahan", "Aurangzeb"],
  correct: "Babur",
  difficulty: "hard",
  category: "history"
},
{
  question: "Which war was triggered by the assassination of Archduke Franz Ferdinand?",
  answers: ["World War I", "World War II", "Crimean War", "Franco-Prussian War"],
  correct: "World War I",
  difficulty: "hard",
  category: "history"
},
{
  question: "Which Chinese dynasty was in power during the construction of the Forbidden City?",
  answers: ["Ming Dynasty", "Qing Dynasty", "Han Dynasty", "Tang Dynasty"],
  correct: "Ming Dynasty",
  difficulty: "hard",
  category: "history"
},
{
  question: "Which Roman emperor made Christianity legal in the empire?",
  answers: ["Constantine I", "Nero", "Augustus", "Trajan"],
  correct: "Constantine I",
  difficulty: "hard",
  category: "history"
},
{
  question: "Which battle in 1066 changed English history?",
  answers: ["Battle of Hastings", "Battle of Agincourt", "Battle of Bosworth", "Battle of Bannockburn"],
  correct: "Battle of Hastings",
  difficulty: "hard",
  category: "history"
},
{
  question: "Who was the leader of the Haitian Revolution?",
  answers: ["Toussaint Louverture", "Simón Bolívar", "Pancho Villa", "Che Guevara"],
  correct: "Toussaint Louverture",
  difficulty: "hard",
  category: "history"
},
{
  question: "Which empire controlled much of Eastern Europe before World War I?",
  answers: ["Austro-Hungarian Empire", "Ottoman Empire", "Russian Empire", "German Empire"],
  correct: "Austro-Hungarian Empire",
  difficulty: "hard",
  category: "history"
},
{
  question: "Which pharaoh is associated with the discovery of a nearly intact tomb in 1922?",
  answers: ["Tutankhamun", "Ramses II", "Akhenaten", "Khufu"],
  correct: "Tutankhamun",
  difficulty: "hard",
  category: "history"
},
{
  question: "Which treaty in 1494 divided the New World between Spain and Portugal?",
  answers: ["Treaty of Tordesillas", "Treaty of Utrecht", "Treaty of Paris", "Treaty of Versailles"],
  correct: "Treaty of Tordesillas",
  difficulty: "expert",
  category: "history"
},
{
  question: "Who was the founder of the Maurya Empire in India?",
  answers: ["Chandragupta Maurya", "Ashoka", "Akbar", "Harsha"],
  correct: "Chandragupta Maurya",
  difficulty: "expert",
  category: "history"
},
{
  question: "Which Byzantine emperor codified Roman law into what became known as the Justinian Code?",
  answers: ["Justinian I", "Constantine XI", "Theodosius II", "Heraclius"],
  correct: "Justinian I",
  difficulty: "expert",
  category: "history"
},
{
  question: "Which war in England was fought between the houses of York and Lancaster?",
  answers: ["Wars of the Roses", "Hundred Years' War", "English Civil War", "Glorious Revolution"],
  correct: "Wars of the Roses",
  difficulty: "expert",
  category: "history"
},
{
  question: "Who was the last ruler of the Aztec Empire?",
  answers: ["Montezuma II", "Atahualpa", "Hernán Cortés", "Itzcoatl"],
  correct: "Montezuma II",
  difficulty: "expert",
  category: "history"
},
{
  question: "Which European conflict lasted from 1337 to 1453?",
  answers: ["Hundred Years' War", "Thirty Years' War", "War of Spanish Succession", "Napoleonic Wars"],
  correct: "Hundred Years' War",
  difficulty: "expert",
  category: "history"
},
{
  question: "Who was the first emperor of the Holy Roman Empire?",
  answers: ["Charlemagne", "Otto I", "Frederick Barbarossa", "Henry IV"],
  correct: "Charlemagne",
  difficulty: "expert",
  category: "history"
},
{
  question: "Which empire was ruled by Mansa Musa, known for his wealth?",
  answers: ["Mali Empire", "Songhai Empire", "Ghana Empire", "Kanem Empire"],
  correct: "Mali Empire",
  difficulty: "expert",
  category: "history"
},
{
  question: "Which revolt in 1857 was a major uprising against British rule in India?",
  answers: ["Indian Rebellion", "Sepoy Mutiny", "Salt March", "Quit India Movement"],
  correct: "Sepoy Mutiny",
  difficulty: "expert",
  category: "history"
},
{
  question: "Which ancient Greek lawgiver is credited with laying the foundations of Athenian democracy?",
  answers: ["Solon", "Lycurgus", "Pericles", "Cleisthenes"],
  correct: "Solon",
  difficulty: "expert",
  category: "history"
},
{
  question: "Which dynasty ruled China immediately before the Ming Dynasty?",
  answers: ["Yuan Dynasty", "Song Dynasty", "Tang Dynasty", "Qing Dynasty"],
  correct: "Yuan Dynasty",
  difficulty: "expert",
  category: "history"
},
{
  question: "Which battle in 480 BC involved a small Greek force defending a pass against the Persians?",
  answers: ["Battle of Thermopylae", "Battle of Marathon", "Battle of Salamis", "Battle of Plataea"],
  correct: "Battle of Thermopylae",
  difficulty: "expert",
  category: "history"
},
{
  question: "Who was the leader of the Bolsheviks during the Russian Revolution?",
  answers: ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky", "Alexander Kerensky"],
  correct: "Vladimir Lenin",
  difficulty: "expert",
  category: "history"
},
{
  question: "Which treaty ended the War of Spanish Succession in 1713?",
  answers: ["Treaty of Utrecht", "Treaty of Aix-la-Chapelle", "Treaty of Paris", "Treaty of Ghent"],
  correct: "Treaty of Utrecht",
  difficulty: "expert",
  category: "history"
},
{
  question: "Which explorer led the first expedition to circumnavigate the globe?",
  answers: ["Ferdinand Magellan", "James Cook", "Francis Drake", "Vasco da Gama"],
  correct: "Ferdinand Magellan",
  difficulty: "expert",
  category: "history"
},
{
  question: "Which civilization is credited with creating the first known legal code under King Hammurabi?",
  answers: ["Babylonians", "Sumerians", "Assyrians", "Hittites"],
  correct: "Babylonians",
  difficulty: "expert",
  category: "history"
},
{
  question: "Which emperor moved the Roman capital to Byzantium, later Constantinople?",
  answers: ["Constantine I", "Diocletian", "Trajan", "Hadrian"],
  correct: "Constantine I",
  difficulty: "expert",
  category: "history"
},
{
  question: "Which medieval pandemic killed millions across Europe and Asia in the 14th century?",
  answers: ["Black Death", "Spanish Flu", "Justinian Plague", "Typhus Epidemic"],
  correct: "Black Death",
  difficulty: "expert",
  category: "history"
},
{
  question: "Which African kingdom was known for its stone city called Great Zimbabwe?",
  answers: ["Kingdom of Zimbabwe", "Kingdom of Aksum", "Kingdom of Kush", "Kingdom of Benin"],
  correct: "Kingdom of Zimbabwe",
  difficulty: "expert",
  category: "history"
},
{
  question: "Which Roman general defeated Hannibal in the Second Punic War?",
  answers: ["Scipio Africanus", "Julius Caesar", "Pompey", "Crassus"],
  correct: "Scipio Africanus",
  difficulty: "expert",
  category: "history"
},
{
  question: "What planet do humans live on?",
  answers: ["Earth", "Mars", "Venus", "Jupiter"],
  correct: "Earth",
  difficulty: "easy",
  category: "science"
},
{
  question: "What gas do humans need to breathe?",
  answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  correct: "Oxygen",
  difficulty: "easy",
  category: "science"
},
{
  question: "How many legs does an insect have?",
  answers: ["6", "4", "8", "10"],
  correct: "6",
  difficulty: "easy",
  category: "science"
},
{
  question: "What is H2O commonly known as?",
  answers: ["Water", "Salt", "Oxygen", "Hydrogen"],
  correct: "Water",
  difficulty: "easy",
  category: "science"
},
{
  question: "Which organ pumps blood through the body?",
  answers: ["Heart", "Brain", "Lungs", "Kidneys"],
  correct: "Heart",
  difficulty: "easy",
  category: "science"
},
{
  question: "What star is closest to Earth?",
  answers: ["Sun", "Polaris", "Sirius", "Alpha Centauri"],
  correct: "Sun",
  difficulty: "easy",
  category: "science"
},
{
  question: "Which planet is known as the Red Planet?",
  answers: ["Mars", "Venus", "Saturn", "Mercury"],
  correct: "Mars",
  difficulty: "easy",
  category: "science"
},
{
  question: "What do plants need to make food using photosynthesis?",
  answers: ["Sunlight", "Sand", "Salt", "Metal"],
  correct: "Sunlight",
  difficulty: "easy",
  category: "science"
},
{
  question: "What force keeps us on the ground?",
  answers: ["Gravity", "Magnetism", "Friction", "Electricity"],
  correct: "Gravity",
  difficulty: "easy",
  category: "science"
},
{
  question: "What is the boiling point of water at sea level?",
  answers: ["100°C", "50°C", "0°C", "150°C"],
  correct: "100°C",
  difficulty: "easy",
  category: "science"
},
{
  question: "Which part of the plant grows underground?",
  answers: ["Root", "Leaf", "Stem", "Flower"],
  correct: "Root",
  difficulty: "easy",
  category: "science"
},
{
  question: "What gas do plants absorb from the air?",
  answers: ["Carbon Dioxide", "Oxygen", "Helium", "Hydrogen"],
  correct: "Carbon Dioxide",
  difficulty: "easy",
  category: "science"
},
{
  question: "What is the center of an atom called?",
  answers: ["Nucleus", "Electron", "Proton", "Shell"],
  correct: "Nucleus",
  difficulty: "easy",
  category: "science"
},
{
  question: "What is the largest planet in our solar system?",
  answers: ["Jupiter", "Saturn", "Earth", "Neptune"],
  correct: "Jupiter",
  difficulty: "easy",
  category: "science"
},
{
  question: "Which sense organ allows us to see?",
  answers: ["Eyes", "Ears", "Nose", "Skin"],
  correct: "Eyes",
  difficulty: "easy",
  category: "science"
},
{
  question: "What type of energy comes from the Sun?",
  answers: ["Solar Energy", "Wind Energy", "Nuclear Energy", "Hydro Energy"],
  correct: "Solar Energy",
  difficulty: "easy",
  category: "science"
},
{
  question: "What metal is liquid at room temperature?",
  answers: ["Mercury", "Iron", "Gold", "Silver"],
  correct: "Mercury",
  difficulty: "easy",
  category: "science"
},
{
  question: "What gas makes up most of Earth's atmosphere?",
  answers: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Helium"],
  correct: "Nitrogen",
  difficulty: "easy",
  category: "science"
},
{
  question: "Which planet has rings around it?",
  answers: ["Saturn", "Mars", "Venus", "Mercury"],
  correct: "Saturn",
  difficulty: "easy",
  category: "science"
},
{
  question: "What is the human body's largest organ?",
  answers: ["Skin", "Heart", "Brain", "Liver"],
  correct: "Skin",
  difficulty: "easy",
  category: "science"
},
{
  question: "What do we call animals that eat only plants?",
  answers: ["Herbivores", "Carnivores", "Omnivores", "Predators"],
  correct: "Herbivores",
  difficulty: "easy",
  category: "science"
},
{
  question: "What part of the body helps you think?",
  answers: ["Brain", "Heart", "Lungs", "Stomach"],
  correct: "Brain",
  difficulty: "easy",
  category: "science"
},
{
  question: "Which planet is closest to the Sun?",
  answers: ["Mercury", "Venus", "Earth", "Mars"],
  correct: "Mercury",
  difficulty: "easy",
  category: "science"
},
{
  question: "What do we call frozen water?",
  answers: ["Ice", "Steam", "Snow", "Rain"],
  correct: "Ice",
  difficulty: "easy",
  category: "science"
},
{
  question: "What is the process by which water turns into vapor?",
  answers: ["Evaporation", "Condensation", "Freezing", "Melting"],
  correct: "Evaporation",
  difficulty: "easy",
  category: "science"
},
{
  question: "Which gas do humans breathe out?",
  answers: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  correct: "Carbon Dioxide",
  difficulty: "easy",
  category: "science"
},
{
  question: "What simple machine is used to lift heavy objects?",
  answers: ["Lever", "Wheel", "Pulley", "Gear"],
  correct: "Lever",
  difficulty: "easy",
  category: "science"
},
{
  question: "Which planet is known for its Great Red Spot?",
  answers: ["Jupiter", "Mars", "Saturn", "Neptune"],
  correct: "Jupiter",
  difficulty: "easy",
  category: "science"
},
{
  question: "What is the natural satellite of Earth called?",
  answers: ["Moon", "Sun", "Mars", "Venus"],
  correct: "Moon",
  difficulty: "easy",
  category: "science"
},
{
  question: "What do bees collect from flowers?",
  answers: ["Nectar", "Water", "Sand", "Leaves"],
  correct: "Nectar",
  difficulty: "easy",
  category: "science"
},
{
  question: "What is the chemical symbol for gold?",
  answers: ["Au", "Ag", "Gd", "Go"],
  correct: "Au",
  difficulty: "medium",
  category: "science"
},
{
  question: "Which planet is known as the Morning Star?",
  answers: ["Venus", "Mars", "Mercury", "Jupiter"],
  correct: "Venus",
  difficulty: "medium",
  category: "science"
},
{
  question: "What part of the cell contains genetic material?",
  answers: ["Nucleus", "Membrane", "Cytoplasm", "Mitochondria"],
  correct: "Nucleus",
  difficulty: "medium",
  category: "science"
},
{
  question: "Which gas is most responsible for global warming?",
  answers: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  correct: "Carbon Dioxide",
  difficulty: "medium",
  category: "science"
},
{
  question: "What type of energy is stored in food?",
  answers: ["Chemical Energy", "Solar Energy", "Thermal Energy", "Nuclear Energy"],
  correct: "Chemical Energy",
  difficulty: "medium",
  category: "science"
},
{
  question: "Which organ filters blood in the human body?",
  answers: ["Kidneys", "Heart", "Lungs", "Pancreas"],
  correct: "Kidneys",
  difficulty: "medium",
  category: "science"
},
{
  question: "What is the freezing point of water in Celsius?",
  answers: ["0°C", "10°C", "-10°C", "32°C"],
  correct: "0°C",
  difficulty: "medium",
  category: "science"
},
{
  question: "Which planet is tilted on its side?",
  answers: ["Uranus", "Neptune", "Saturn", "Mars"],
  correct: "Uranus",
  difficulty: "medium",
  category: "science"
},
{
  question: "What is the main gas found in the air we breathe?",
  answers: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
  correct: "Nitrogen",
  difficulty: "medium",
  category: "science"
},
{
  question: "What force slows down moving objects?",
  answers: ["Friction", "Gravity", "Magnetism", "Inertia"],
  correct: "Friction",
  difficulty: "medium",
  category: "science"
},
{
  question: "Which vitamin is produced when skin is exposed to sunlight?",
  answers: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin B12"],
  correct: "Vitamin D",
  difficulty: "medium",
  category: "science"
},
{
  question: "What is the hardest natural substance on Earth?",
  answers: ["Diamond", "Gold", "Iron", "Quartz"],
  correct: "Diamond",
  difficulty: "medium",
  category: "science"
},
{
  question: "Which blood cells help fight infection?",
  answers: ["White Blood Cells", "Red Blood Cells", "Platelets", "Plasma"],
  correct: "White Blood Cells",
  difficulty: "medium",
  category: "science"
},
{
  question: "What is the name of our galaxy?",
  answers: ["Milky Way", "Andromeda", "Orion", "Sombrero"],
  correct: "Milky Way",
  difficulty: "medium",
  category: "science"
},
{
  question: "What instrument is used to measure temperature?",
  answers: ["Thermometer", "Barometer", "Altimeter", "Hygrometer"],
  correct: "Thermometer",
  difficulty: "medium",
  category: "science"
},
{
  question: "Which planet has the most moons?",
  answers: ["Saturn", "Jupiter", "Mars", "Neptune"],
  correct: "Saturn",
  difficulty: "medium",
  category: "science"
},
{
  question: "What is the process of plants losing water vapor called?",
  answers: ["Transpiration", "Photosynthesis", "Respiration", "Condensation"],
  correct: "Transpiration",
  difficulty: "medium",
  category: "science"
},
{
  question: "Which element has the chemical symbol O?",
  answers: ["Oxygen", "Osmium", "Gold", "Iron"],
  correct: "Oxygen",
  difficulty: "medium",
  category: "science"
},
{
  question: "What is the study of earthquakes called?",
  answers: ["Seismology", "Geology", "Meteorology", "Astronomy"],
  correct: "Seismology",
  difficulty: "medium",
  category: "science"
},
{
  question: "Which organ is responsible for breathing?",
  answers: ["Lungs", "Heart", "Brain", "Liver"],
  correct: "Lungs",
  difficulty: "medium",
  category: "science"
},
{
  question: "What is the speed of light approximately?",
  answers: ["300,000 km/s", "150,000 km/s", "30,000 km/s", "3,000 km/s"],
  correct: "300,000 km/s",
  difficulty: "medium",
  category: "science"
},
{
  question: "Which scientist proposed the theory of relativity?",
  answers: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
  correct: "Albert Einstein",
  difficulty: "medium",
  category: "science"
},
{
  question: "What type of rock is formed from cooled lava?",
  answers: ["Igneous", "Sedimentary", "Metamorphic", "Mineral"],
  correct: "Igneous",
  difficulty: "medium",
  category: "science"
},
{
  question: "Which gas protects Earth from harmful UV radiation?",
  answers: ["Ozone", "Nitrogen", "Carbon Dioxide", "Helium"],
  correct: "Ozone",
  difficulty: "medium",
  category: "science"
},
{
  question: "What is the unit of electrical resistance?",
  answers: ["Ohm", "Volt", "Watt", "Ampere"],
  correct: "Ohm",
  difficulty: "medium",
  category: "science"
},
{
  question: "Which animal group includes frogs and salamanders?",
  answers: ["Amphibians", "Reptiles", "Mammals", "Birds"],
  correct: "Amphibians",
  difficulty: "medium",
  category: "science"
},
{
  question: "What is the name of the boundary around a cell?",
  answers: ["Cell Membrane", "Nucleus", "Cytoplasm", "Wall"],
  correct: "Cell Membrane",
  difficulty: "medium",
  category: "science"
},
{
  question: "Which type of energy comes from moving water?",
  answers: ["Hydroelectric", "Solar", "Wind", "Thermal"],
  correct: "Hydroelectric",
  difficulty: "medium",
  category: "science"
},
{
  question: "Which planet has the strongest gravity?",
  answers: ["Jupiter", "Earth", "Saturn", "Neptune"],
  correct: "Jupiter",
  difficulty: "medium",
  category: "science"
},
{
  question: "What is the process of turning solid directly into gas called?",
  answers: ["Sublimation", "Evaporation", "Condensation", "Freezing"],
  correct: "Sublimation",
  difficulty: "medium",
  category: "science"
},
{
  question: "What particle has a negative electric charge?",
  answers: ["Electron", "Proton", "Neutron", "Photon"],
  correct: "Electron",
  difficulty: "hard",
  category: "science"
},
{
  question: "Which law states that energy cannot be created or destroyed?",
  answers: ["Law of Conservation of Energy", "Newton's First Law", "Ohm's Law", "Boyle's Law"],
  correct: "Law of Conservation of Energy",
  difficulty: "hard",
  category: "science"
},
{
  question: "What is the chemical formula for methane?",
  answers: ["CH4", "CO2", "H2O", "C2H6"],
  correct: "CH4",
  difficulty: "hard",
  category: "science"
},
{
  question: "Which planet is known for its Great Dark Spot?",
  answers: ["Neptune", "Jupiter", "Saturn", "Mars"],
  correct: "Neptune",
  difficulty: "hard",
  category: "science"
},
{
  question: "What type of bond involves the sharing of electron pairs?",
  answers: ["Covalent Bond", "Ionic Bond", "Metallic Bond", "Hydrogen Bond"],
  correct: "Covalent Bond",
  difficulty: "hard",
  category: "science"
},
{
  question: "Which organelle is known as the powerhouse of the cell?",
  answers: ["Mitochondria", "Nucleus", "Ribosome", "Golgi Apparatus"],
  correct: "Mitochondria",
  difficulty: "hard",
  category: "science"
},
{
  question: "What is the unit of frequency?",
  answers: ["Hertz", "Watt", "Newton", "Pascal"],
  correct: "Hertz",
  difficulty: "hard",
  category: "science"
},
{
  question: "Which scientist developed the laws of motion?",
  answers: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
  correct: "Isaac Newton",
  difficulty: "hard",
  category: "science"
},
{
  question: "What type of wave requires a medium to travel?",
  answers: ["Sound Wave", "Light Wave", "Radio Wave", "X-ray"],
  correct: "Sound Wave",
  difficulty: "hard",
  category: "science"
},
{
  question: "What is the main component of natural gas?",
  answers: ["Methane", "Propane", "Butane", "Ethane"],
  correct: "Methane",
  difficulty: "hard",
  category: "science"
},
{
  question: "Which blood vessel carries blood away from the heart?",
  answers: ["Artery", "Vein", "Capillary", "Valve"],
  correct: "Artery",
  difficulty: "hard",
  category: "science"
},
{
  question: "What is the SI unit of force?",
  answers: ["Newton", "Joule", "Volt", "Ampere"],
  correct: "Newton",
  difficulty: "hard",
  category: "science"
},
{
  question: "Which element has atomic number 1?",
  answers: ["Hydrogen", "Helium", "Lithium", "Oxygen"],
  correct: "Hydrogen",
  difficulty: "hard",
  category: "science"
},
{
  question: "What type of energy is stored in stretched objects?",
  answers: ["Elastic Potential Energy", "Kinetic Energy", "Thermal Energy", "Nuclear Energy"],
  correct: "Elastic Potential Energy",
  difficulty: "hard",
  category: "science"
},
{
  question: "Which layer of Earth is liquid?",
  answers: ["Outer Core", "Inner Core", "Mantle", "Crust"],
  correct: "Outer Core",
  difficulty: "hard",
  category: "science"
},
{
  question: "What is the process by which cells divide into two identical cells?",
  answers: ["Mitosis", "Meiosis", "Fusion", "Fission"],
  correct: "Mitosis",
  difficulty: "hard",
  category: "science"
},
{
  question: "Which planet has the longest day in our solar system?",
  answers: ["Venus", "Mercury", "Mars", "Earth"],
  correct: "Venus",
  difficulty: "hard",
  category: "science"
},
{
  question: "What is the study of weather called?",
  answers: ["Meteorology", "Climatology", "Geology", "Astronomy"],
  correct: "Meteorology",
  difficulty: "hard",
  category: "science"
},
{
  question: "Which gas is used in balloons to make them float?",
  answers: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
  correct: "Helium",
  difficulty: "hard",
  category: "science"
},
{
  question: "What is the bending of light called?",
  answers: ["Refraction", "Reflection", "Diffraction", "Absorption"],
  correct: "Refraction",
  difficulty: "hard",
  category: "science"
},
{
  question: "What is the approximate value of Planck’s constant?",
  answers: ["6.63 × 10⁻³⁴ Js", "3.00 × 10⁸ m/s", "9.81 m/s²", "1.60 × 10⁻¹⁹ C"],
  correct: "6.63 × 10⁻³⁴ Js",
  difficulty: "expert",
  category: "science"
},
{
  question: "Which particle mediates the electromagnetic force?",
  answers: ["Photon", "Electron", "Proton", "Neutrino"],
  correct: "Photon",
  difficulty: "expert",
  category: "science"
},
{
  question: "What is the name of the boundary around a black hole beyond which nothing escapes?",
  answers: ["Event Horizon", "Singularity", "Accretion Disk", "Photon Sphere"],
  correct: "Event Horizon",
  difficulty: "expert",
  category: "science"
},
{
  question: "Which law relates pressure and volume of a gas at constant temperature?",
  answers: ["Boyle’s Law", "Charles’s Law", "Avogadro’s Law", "Ohm’s Law"],
  correct: "Boyle’s Law",
  difficulty: "expert",
  category: "science"
},
{
  question: "Which enzyme breaks down hydrogen peroxide in cells?",
  answers: ["Catalase", "Amylase", "Lipase", "Pepsin"],
  correct: "Catalase",
  difficulty: "expert",
  category: "science"
},
{
  question: "What is the most abundant element in the universe?",
  answers: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
  correct: "Hydrogen",
  difficulty: "expert",
  category: "science"
},
{
  question: "What type of galaxy is the Milky Way?",
  answers: ["Spiral Galaxy", "Elliptical Galaxy", "Irregular Galaxy", "Ring Galaxy"],
  correct: "Spiral Galaxy",
  difficulty: "expert",
  category: "science"
},
{
  question: "Which scientist proposed the uncertainty principle?",
  answers: ["Werner Heisenberg", "Niels Bohr", "Max Planck", "Erwin Schrödinger"],
  correct: "Werner Heisenberg",
  difficulty: "expert",
  category: "science"
},
{
  question: "What is the pH value of a neutral solution?",
  answers: ["7", "0", "14", "10"],
  correct: "7",
  difficulty: "expert",
  category: "science"
},
{
  question: "Which part of the brain controls balance and coordination?",
  answers: ["Cerebellum", "Cerebrum", "Medulla", "Hypothalamus"],
  correct: "Cerebellum",
  difficulty: "expert",
  category: "science"
},
{
  question: "Which fundamental force holds atomic nuclei together?",
  answers: ["Strong Nuclear Force", "Gravity", "Electromagnetic Force", "Weak Force"],
  correct: "Strong Nuclear Force",
  difficulty: "expert",
  category: "science"
},
{
  question: "What is the SI unit of electric current?",
  answers: ["Ampere", "Volt", "Ohm", "Watt"],
  correct: "Ampere",
  difficulty: "expert",
  category: "science"
},
{
  question: "Which planet has the fastest orbital speed around the Sun?",
  answers: ["Mercury", "Earth", "Mars", "Venus"],
  correct: "Mercury",
  difficulty: "expert",
  category: "science"
},
{
  question: "What is the name of the process where a nucleus splits into smaller nuclei?",
  answers: ["Nuclear Fission", "Nuclear Fusion", "Radioactive Decay", "Ionization"],
  correct: "Nuclear Fission",
  difficulty: "expert",
  category: "science"
},
{
  question: "Which blood protein carries oxygen?",
  answers: ["Hemoglobin", "Insulin", "Collagen", "Keratin"],
  correct: "Hemoglobin",
  difficulty: "expert",
  category: "science"
},
{
  question: "What is the study of fungi called?",
  answers: ["Mycology", "Botany", "Zoology", "Ecology"],
  correct: "Mycology",
  difficulty: "expert",
  category: "science"
},
{
  question: "Which law explains why rockets work?",
  answers: ["Newton’s Third Law", "Newton’s First Law", "Law of Gravity", "Bernoulli’s Principle"],
  correct: "Newton’s Third Law",
  difficulty: "expert",
  category: "science"
},
{
  question: "What is the closest galaxy to the Milky Way?",
  answers: ["Andromeda Galaxy", "Triangulum Galaxy", "Sombrero Galaxy", "Whirlpool Galaxy"],
  correct: "Andromeda Galaxy",
  difficulty: "expert",
  category: "science"
},
{
  question: "Which organ produces insulin?",
  answers: ["Pancreas", "Liver", "Kidneys", "Stomach"],
  correct: "Pancreas",
  difficulty: "expert",
  category: "science"
},
{
  question: "What is the term for animals that maintain constant body temperature?",
  answers: ["Endothermic", "Ectothermic", "Herbivorous", "Nocturnal"],
  correct: "Endothermic",
  difficulty: "expert",
  category: "science"
},
{
  question: "Which animal is known as man's best friend?",
  answers: ["Dog", "Cat", "Horse", "Rabbit"],
  correct: "Dog",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which animal says 'meow'?",
  answers: ["Cat", "Dog", "Cow", "Sheep"],
  correct: "Cat",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which animal is the largest land mammal?",
  answers: ["Elephant", "Giraffe", "Rhino", "Hippo"],
  correct: "Elephant",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which bird is known for its colorful feathers and ability to mimic sounds?",
  answers: ["Parrot", "Eagle", "Penguin", "Owl"],
  correct: "Parrot",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which animal lives in water and has fins and gills?",
  answers: ["Fish", "Frog", "Duck", "Crab"],
  correct: "Fish",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which animal has black and white stripes?",
  answers: ["Zebra", "Tiger", "Horse", "Panda"],
  correct: "Zebra",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which animal is known as the king of the jungle?",
  answers: ["Lion", "Tiger", "Leopard", "Cheetah"],
  correct: "Lion",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which animal gives us milk on farms?",
  answers: ["Cow", "Goat", "Sheep", "Pig"],
  correct: "Cow",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which animal is famous for building dams?",
  answers: ["Beaver", "Otter", "Seal", "Walrus"],
  correct: "Beaver",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which animal is very tall and has a long neck?",
  answers: ["Giraffe", "Camel", "Horse", "Llama"],
  correct: "Giraffe",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which animal hops and has a pouch?",
  answers: ["Kangaroo", "Rabbit", "Frog", "Koala"],
  correct: "Kangaroo",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which animal lives in the Arctic and has white fur?",
  answers: ["Polar Bear", "Brown Bear", "Wolf", "Fox"],
  correct: "Polar Bear",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which farm animal says 'oink'?",
  answers: ["Pig", "Cow", "Sheep", "Chicken"],
  correct: "Pig",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which bird cannot fly and lives in Antarctica?",
  answers: ["Penguin", "Ostrich", "Kiwi", "Seagull"],
  correct: "Penguin",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which animal is known for spinning webs?",
  answers: ["Spider", "Ant", "Bee", "Beetle"],
  correct: "Spider",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which sea animal has eight arms?",
  answers: ["Octopus", "Squid", "Starfish", "Crab"],
  correct: "Octopus",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which animal howls at the moon?",
  answers: ["Wolf", "Dog", "Fox", "Coyote"],
  correct: "Wolf",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which animal is famous for its black and white bamboo diet?",
  answers: ["Panda", "Koala", "Sloth", "Lemur"],
  correct: "Panda",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which bird is often associated with delivering babies in stories?",
  answers: ["Stork", "Swan", "Crow", "Eagle"],
  correct: "Stork",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which animal is the fastest land animal?",
  answers: ["Cheetah", "Lion", "Horse", "Antelope"],
  correct: "Cheetah",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which animal has a shell and moves very slowly?",
  answers: ["Turtle", "Snail", "Crab", "Lobster"],
  correct: "Turtle",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which animal is known for carrying heavy loads in deserts?",
  answers: ["Camel", "Horse", "Donkey", "Llama"],
  correct: "Camel",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which insect makes honey?",
  answers: ["Bee", "Ant", "Fly", "Wasp"],
  correct: "Bee",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which animal swings from trees and eats bananas?",
  answers: ["Monkey", "Sloth", "Koala", "Lemur"],
  correct: "Monkey",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which animal has antlers?",
  answers: ["Deer", "Horse", "Cow", "Goat"],
  correct: "Deer",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which bird is known for hooting at night?",
  answers: ["Owl", "Eagle", "Crow", "Parrot"],
  correct: "Owl",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which animal is pink and lives on farms?",
  answers: ["Pig", "Flamingo", "Rabbit", "Goat"],
  correct: "Pig",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which sea animal is known for its hard shell and sideways walk?",
  answers: ["Crab", "Lobster", "Shrimp", "Clam"],
  correct: "Crab",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which animal is known for playing dead when threatened?",
  answers: ["Opossum", "Raccoon", "Badger", "Skunk"],
  correct: "Opossum",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which animal is famous for its long sticky tongue used to catch insects?",
  answers: ["Frog", "Snake", "Lizard", "Chameleon"],
  correct: "Frog",
  difficulty: "easy",
  category: "animals"
},
{
  question: "Which animal is known for changing its color to blend into its surroundings?",
  answers: ["Chameleon", "Iguana", "Gecko", "Frog"],
  correct: "Chameleon",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which marine mammal is the largest animal to ever live?",
  answers: ["Blue Whale", "Sperm Whale", "Orca", "Humpback Whale"],
  correct: "Blue Whale",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which animal is known for its black mask-like face and ringed tail?",
  answers: ["Raccoon", "Badger", "Skunk", "Weasel"],
  correct: "Raccoon",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which animal is the largest species of cat?",
  answers: ["Tiger", "Lion", "Leopard", "Jaguar"],
  correct: "Tiger",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which bird is the fastest in the world?",
  answers: ["Peregrine Falcon", "Eagle", "Ostrich", "Hawk"],
  correct: "Peregrine Falcon",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which animal is known for building intricate underground tunnels?",
  answers: ["Mole", "Rabbit", "Fox", "Hedgehog"],
  correct: "Mole",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which reptile is known for its powerful bite and lives in rivers?",
  answers: ["Crocodile", "Lizard", "Snake", "Turtle"],
  correct: "Crocodile",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which animal is known for having a hump on its back?",
  answers: ["Camel", "Bison", "Yak", "Llama"],
  correct: "Camel",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which animal is the largest species of bear?",
  answers: ["Polar Bear", "Grizzly Bear", "Black Bear", "Panda"],
  correct: "Polar Bear",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which animal is known for gliding between trees using a membrane?",
  answers: ["Flying Squirrel", "Bat", "Lemur", "Sugar Glider"],
  correct: "Flying Squirrel",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which animal is famous for storing food in its cheek pouches?",
  answers: ["Hamster", "Squirrel", "Chipmunk", "Mouse"],
  correct: "Hamster",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which bird has the largest wingspan?",
  answers: ["Albatross", "Condor", "Eagle", "Pelican"],
  correct: "Albatross",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which animal is known for its thick armor-like skin and horn?",
  answers: ["Rhinoceros", "Hippo", "Elephant", "Buffalo"],
  correct: "Rhinoceros",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which animal is known for its ability to echolocate?",
  answers: ["Bat", "Owl", "Fox", "Seal"],
  correct: "Bat",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which sea creature has a hard outer shell and two large claws?",
  answers: ["Lobster", "Crab", "Shrimp", "Clam"],
  correct: "Lobster",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which animal migrates long distances across Africa in large herds?",
  answers: ["Wildebeest", "Zebra", "Antelope", "Buffalo"],
  correct: "Wildebeest",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which bird is known for its bright pink feathers and long legs?",
  answers: ["Flamingo", "Heron", "Swan", "Pelican"],
  correct: "Flamingo",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which animal is known for having quills for defense?",
  answers: ["Porcupine", "Hedgehog", "Armadillo", "Badger"],
  correct: "Porcupine",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which marine animal is known for its intelligence and playful behavior?",
  answers: ["Dolphin", "Seal", "Shark", "Octopus"],
  correct: "Dolphin",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which animal is the largest living reptile?",
  answers: ["Saltwater Crocodile", "Komodo Dragon", "Alligator", "Anaconda"],
  correct: "Saltwater Crocodile",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which animal is known for sleeping upside down?",
  answers: ["Bat", "Sloth", "Monkey", "Koala"],
  correct: "Bat",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which bird is native to New Zealand and cannot fly?",
  answers: ["Kiwi", "Penguin", "Emu", "Cassowary"],
  correct: "Kiwi",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which animal has a pouch and is native to Australia?",
  answers: ["Koala", "Panda", "Lemur", "Sloth"],
  correct: "Koala",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which animal is known for its long trunk?",
  answers: ["Elephant", "Tapir", "Anteater", "Rhino"],
  correct: "Elephant",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which animal is famous for its long neck and spots?",
  answers: ["Giraffe", "Leopard", "Hyena", "Gazelle"],
  correct: "Giraffe",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which insect is known for forming highly organized colonies?",
  answers: ["Ant", "Bee", "Termite", "Wasp"],
  correct: "Ant",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which animal is known for rolling into a ball when threatened?",
  answers: ["Armadillo", "Hedgehog", "Porcupine", "Pangolin"],
  correct: "Armadillo",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which animal is known for its loud laugh-like call?",
  answers: ["Hyena", "Jackal", "Fox", "Wolf"],
  correct: "Hyena",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which large cat is known for its spots and ability to climb trees?",
  answers: ["Leopard", "Lion", "Tiger", "Cheetah"],
  correct: "Leopard",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which animal is known for its ability to regrow lost limbs?",
  answers: ["Starfish", "Octopus", "Crab", "Lobster"],
  correct: "Starfish",
  difficulty: "medium",
  category: "animals"
},
{
  question: "Which animal is the only mammal capable of true flight?",
  answers: ["Bat", "Flying Squirrel", "Colugo", "Sugar Glider"],
  correct: "Bat",
  difficulty: "hard",
  category: "animals"
},
{
  question: "Which animal has the longest gestation period?",
  answers: ["Elephant", "Whale", "Giraffe", "Rhinoceros"],
  correct: "Elephant",
  difficulty: "hard",
  category: "animals"
},
{
  question: "Which bird is known for its elaborate courtship dance and colorful feathers in New Guinea?",
  answers: ["Bird of Paradise", "Peacock", "Toucan", "Macaw"],
  correct: "Bird of Paradise",
  difficulty: "hard",
  category: "animals"
},
{
  question: "Which marine animal has three hearts?",
  answers: ["Octopus", "Squid", "Cuttlefish", "Jellyfish"],
  correct: "Octopus",
  difficulty: "hard",
  category: "animals"
},
{
  question: "Which animal is known as the fastest bird on land?",
  answers: ["Ostrich", "Emu", "Cassowary", "Rhea"],
  correct: "Ostrich",
  difficulty: "hard",
  category: "animals"
},
{
  question: "Which animal is known for its ability to survive being frozen and later revived?",
  answers: ["Wood Frog", "Polar Bear", "Arctic Fox", "Seal"],
  correct: "Wood Frog",
  difficulty: "hard",
  category: "animals"
},
{
  question: "Which animal is the largest species of penguin?",
  answers: ["Emperor Penguin", "King Penguin", "Gentoo Penguin", "Adelie Penguin"],
  correct: "Emperor Penguin",
  difficulty: "hard",
  category: "animals"
},
{
  question: "Which animal is known for having the most powerful bite force of any living animal?",
  answers: ["Saltwater Crocodile", "Great White Shark", "Hippo", "Lion"],
  correct: "Saltwater Crocodile",
  difficulty: "hard",
  category: "animals"
},
{
  question: "Which mammal lays eggs?",
  answers: ["Platypus", "Kangaroo", "Koala", "Wombat"],
  correct: "Platypus",
  difficulty: "hard",
  category: "animals"
},
{
  question: "Which animal has the largest brain relative to body size?",
  answers: ["Dolphin", "Human", "Elephant", "Chimpanzee"],
  correct: "Dolphin",
  difficulty: "hard",
  category: "animals"
},
{
  question: "Which reptile is known for running on water?",
  answers: ["Basilisk Lizard", "Iguana", "Komodo Dragon", "Chameleon"],
  correct: "Basilisk Lizard",
  difficulty: "hard",
  category: "animals"
},
{
  question: "Which animal is the largest rodent in the world?",
  answers: ["Capybara", "Beaver", "Porcupine", "Marmot"],
  correct: "Capybara",
  difficulty: "hard",
  category: "animals"
},
{
  question: "Which whale species is known for its long tusk?",
  answers: ["Narwhal", "Beluga", "Blue Whale", "Sperm Whale"],
  correct: "Narwhal",
  difficulty: "hard",
  category: "animals"
},
{
  question: "Which animal has the longest lifespan among insects?",
  answers: ["Termite Queen", "Ant", "Beetle", "Dragonfly"],
  correct: "Termite Queen",
  difficulty: "hard",
  category: "animals"
},
{
  question: "Which animal is known for playing a key role in coral reef cleaning by eating parasites off fish?",
  answers: ["Cleaner Wrasse", "Clownfish", "Lionfish", "Moray Eel"],
  correct: "Cleaner Wrasse",
  difficulty: "hard",
  category: "animals"
},
{
  question: "Which animal can rotate its head almost 270 degrees?",
  answers: ["Owl", "Eagle", "Falcon", "Vulture"],
  correct: "Owl",
  difficulty: "hard",
  category: "animals"
},
{
  question: "Which animal has the largest eyes of any land mammal?",
  answers: ["Horse", "Cow", "Deer", "Moose"],
  correct: "Horse",
  difficulty: "hard",
  category: "animals"
},
{
  question: "Which animal is known for entering a state of estivation during extreme heat?",
  answers: ["Lungfish", "Frog", "Snake", "Turtle"],
  correct: "Lungfish",
  difficulty: "hard",
  category: "animals"
},
{
  question: "Which bird is known for migrating the longest distance annually?",
  answers: ["Arctic Tern", "Albatross", "Swallow", "Goose"],
  correct: "Arctic Tern",
  difficulty: "hard",
  category: "animals"
},
{
  question: "Which animal is known for producing the loudest sound in the animal kingdom?",
  answers: ["Sperm Whale", "Blue Whale", "Lion", "Howler Monkey"],
  correct: "Sperm Whale",
  difficulty: "hard",
  category: "animals"
},
{
  question: "Which animal has the highest recorded top speed of any living organism?",
  answers: ["Peregrine Falcon", "Cheetah", "Sailfish", "Golden Eagle"],
  correct: "Peregrine Falcon",
  difficulty: "expert",
  category: "animals"
},
{
  question: "Which mammal is known for having the densest fur in the animal kingdom?",
  answers: ["Sea Otter", "Polar Bear", "Arctic Fox", "Beaver"],
  correct: "Sea Otter",
  difficulty: "expert",
  category: "animals"
},
{
  question: "Which shark species is considered the largest fish in the world?",
  answers: ["Whale Shark", "Great White Shark", "Basking Shark", "Tiger Shark"],
  correct: "Whale Shark",
  difficulty: "expert",
  category: "animals"
},
{
  question: "Which bird has the largest wingspan of any living bird?",
  answers: ["Wandering Albatross", "Andean Condor", "Golden Eagle", "Pelican"],
  correct: "Wandering Albatross",
  difficulty: "expert",
  category: "animals"
},
{
  question: "Which animal group do jellyfish belong to?",
  answers: ["Cnidarians", "Mollusks", "Echinoderms", "Arthropods"],
  correct: "Cnidarians",
  difficulty: "expert",
  category: "animals"
},
{
  question: "Which animal is capable of parthenogenesis, reproducing without fertilization?",
  answers: ["Komodo Dragon", "Crocodile", "Iguana", "Turtle"],
  correct: "Komodo Dragon",
  difficulty: "expert",
  category: "animals"
},
{
  question: "Which primate is known for having a blue and red colored face?",
  answers: ["Mandrill", "Baboon", "Chimpanzee", "Gorilla"],
  correct: "Mandrill",
  difficulty: "expert",
  category: "animals"
},
{
  question: "Which marine animal is known for its ability to regenerate its entire body from a fragment?",
  answers: ["Planarian", "Starfish", "Octopus", "Jellyfish"],
  correct: "Planarian",
  difficulty: "expert",
  category: "animals"
},
{
  question: "Which animal has the longest migration route of any mammal?",
  answers: ["Gray Whale", "Caribou", "Elephant", "Wildebeest"],
  correct: "Gray Whale",
  difficulty: "expert",
  category: "animals"
},
{
  question: "Which reptile has temperature-dependent sex determination?",
  answers: ["Sea Turtle", "Snake", "Lizard", "Gecko"],
  correct: "Sea Turtle",
  difficulty: "expert",
  category: "animals"
},
{
  question: "Which bird is known for using tools in the wild?",
  answers: ["New Caledonian Crow", "Raven", "Magpie", "Jay"],
  correct: "New Caledonian Crow",
  difficulty: "expert",
  category: "animals"
},
{
  question: "Which animal has the most complex eyes in the animal kingdom?",
  answers: ["Mantis Shrimp", "Octopus", "Dragonfly", "Squid"],
  correct: "Mantis Shrimp",
  difficulty: "expert",
  category: "animals"
},
{
  question: "Which insect is known for its synchronized flashing behavior?",
  answers: ["Firefly", "Moth", "Butterfly", "Wasp"],
  correct: "Firefly",
  difficulty: "expert",
  category: "animals"
},
{
  question: "Which mammal can slow its heartbeat to just a few beats per minute while diving?",
  answers: ["Weddell Seal", "Dolphin", "Walrus", "Sea Lion"],
  correct: "Weddell Seal",
  difficulty: "expert",
  category: "animals"
},
{
  question: "Which animal is known for the longest recorded venomous sting?",
  answers: ["Box Jellyfish", "Scorpion", "Cone Snail", "Blue-ringed Octopus"],
  correct: "Box Jellyfish",
  difficulty: "expert",
  category: "animals"
},
{
  question: "Which animal is the only known venomous primate?",
  answers: ["Slow Loris", "Tarsier", "Lemur", "Capuchin"],
  correct: "Slow Loris",
  difficulty: "expert",
  category: "animals"
},
{
  question: "Which fish is capable of producing electricity strong enough to stun prey?",
  answers: ["Electric Eel", "Pufferfish", "Catfish", "Stingray"],
  correct: "Electric Eel",
  difficulty: "expert",
  category: "animals"
},
{
  question: "Which bird is known for incubating its eggs using geothermal heat?",
  answers: ["Megapode", "Penguin", "Emu", "Cassowary"],
  correct: "Megapode",
  difficulty: "expert",
  category: "animals"
},
{
  question: "Which animal is known to have the highest tolerance to radiation?",
  answers: ["Tardigrade", "Cockroach", "Ant", "Beetle"],
  correct: "Tardigrade",
  difficulty: "expert",
  category: "animals"
},
{
  question: "Which species of ant is known for forming massive supercolonies spanning continents?",
  answers: ["Argentine Ant", "Fire Ant", "Leafcutter Ant", "Carpenter Ant"],
  correct: "Argentine Ant",
  difficulty: "expert",
  category: "animals"
},
{
  question: "Which fruit is yellow and curved?",
  answers: ["Banana", "Apple", "Orange", "Pear"],
  correct: "Banana",
  difficulty: "easy",
  category: "food"
},
{
  question: "What drink is made from coffee beans?",
  answers: ["Coffee", "Tea", "Milk", "Juice"],
  correct: "Coffee",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which food is made from milk?",
  answers: ["Cheese", "Bread", "Rice", "Pasta"],
  correct: "Cheese",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which fruit is red and often used in pies?",
  answers: ["Apple", "Banana", "Kiwi", "Mango"],
  correct: "Apple",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which vegetable is orange and crunchy?",
  answers: ["Carrot", "Potato", "Onion", "Cucumber"],
  correct: "Carrot",
  difficulty: "easy",
  category: "food"
},
{
  question: "What is the main ingredient in bread?",
  answers: ["Flour", "Sugar", "Salt", "Butter"],
  correct: "Flour",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which drink comes from cows?",
  answers: ["Milk", "Juice", "Soda", "Tea"],
  correct: "Milk",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which fruit is green on the outside and red inside?",
  answers: ["Watermelon", "Grape", "Lime", "Avocado"],
  correct: "Watermelon",
  difficulty: "easy",
  category: "food"
},
{
  question: "What sweet food is made by bees?",
  answers: ["Honey", "Jam", "Sugar", "Chocolate"],
  correct: "Honey",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which food is made from potatoes?",
  answers: ["French Fries", "Pasta", "Rice", "Bread"],
  correct: "French Fries",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which fruit is small, purple, and grows in bunches?",
  answers: ["Grapes", "Plums", "Cherries", "Blueberries"],
  correct: "Grapes",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which dessert is usually cold and made from cream?",
  answers: ["Ice Cream", "Cake", "Pie", "Cookie"],
  correct: "Ice Cream",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which food is long and made from wheat, often served with sauce?",
  answers: ["Pasta", "Rice", "Bread", "Beans"],
  correct: "Pasta",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which fruit is known for being sour and yellow?",
  answers: ["Lemon", "Banana", "Mango", "Peach"],
  correct: "Lemon",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which food is commonly used to make sandwiches?",
  answers: ["Bread", "Rice", "Corn", "Beans"],
  correct: "Bread",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which vegetable makes you cry when you cut it?",
  answers: ["Onion", "Garlic", "Pepper", "Cabbage"],
  correct: "Onion",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which drink is usually fizzy and sweet?",
  answers: ["Soda", "Milk", "Water", "Tea"],
  correct: "Soda",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which fruit has a hard shell and white flesh inside?",
  answers: ["Coconut", "Apple", "Orange", "Pear"],
  correct: "Coconut",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which food is made from chocolate and often eaten as a treat?",
  answers: ["Chocolate Bar", "Bread", "Salad", "Soup"],
  correct: "Chocolate Bar",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which vegetable is green and looks like a tree?",
  answers: ["Broccoli", "Spinach", "Lettuce", "Peas"],
  correct: "Broccoli",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which fruit is orange and used to make juice?",
  answers: ["Orange", "Apple", "Grape", "Kiwi"],
  correct: "Orange",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which food is round and topped with cheese and tomato sauce?",
  answers: ["Pizza", "Burger", "Pancake", "Pie"],
  correct: "Pizza",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which food is sweet and often put on toast?",
  answers: ["Jam", "Butter", "Cheese", "Ham"],
  correct: "Jam",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which fruit is fuzzy on the outside and green inside?",
  answers: ["Kiwi", "Peach", "Plum", "Apricot"],
  correct: "Kiwi",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which vegetable is long, green, and crunchy?",
  answers: ["Cucumber", "Zucchini", "Celery", "Bean"],
  correct: "Cucumber",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which hot drink is made from tea leaves?",
  answers: ["Tea", "Coffee", "Hot Chocolate", "Milk"],
  correct: "Tea",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which fruit is known for its many small seeds on the outside?",
  answers: ["Strawberry", "Raspberry", "Blueberry", "Blackberry"],
  correct: "Strawberry",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which food is made by frying eggs and bacon together?",
  answers: ["Breakfast", "Lunch", "Dinner", "Dessert"],
  correct: "Breakfast",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which food is soft, white, and often served with sushi?",
  answers: ["Rice", "Bread", "Pasta", "Cheese"],
  correct: "Rice",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which fruit is tropical and has spiky skin?",
  answers: ["Pineapple", "Mango", "Papaya", "Coconut"],
  correct: "Pineapple",
  difficulty: "easy",
  category: "food"
},
{
  question: "Which country is famous for sushi?",
  answers: ["Japan", "China", "Thailand", "Korea"],
  correct: "Japan",
  difficulty: "medium",
  category: "food"
},
{
  question: "What type of pasta is shaped like small rice grains?",
  answers: ["Orzo", "Penne", "Fusilli", "Tagliatelle"],
  correct: "Orzo",
  difficulty: "medium",
  category: "food"
},
{
  question: "Which fruit is traditionally used to make guacamole?",
  answers: ["Avocado", "Tomato", "Lime", "Pepper"],
  correct: "Avocado",
  difficulty: "medium",
  category: "food"
},
{
  question: "What is the main ingredient in hummus?",
  answers: ["Chickpeas", "Lentils", "Beans", "Peas"],
  correct: "Chickpeas",
  difficulty: "medium",
  category: "food"
},
{
  question: "Which country is known for the dish paella?",
  answers: ["Spain", "Italy", "France", "Portugal"],
  correct: "Spain",
  difficulty: "medium",
  category: "food"
},
{
  question: "Which cheese is traditionally used on pizza?",
  answers: ["Mozzarella", "Cheddar", "Gouda", "Brie"],
  correct: "Mozzarella",
  difficulty: "medium",
  category: "food"
},
{
  question: "What is tofu made from?",
  answers: ["Soybeans", "Rice", "Milk", "Corn"],
  correct: "Soybeans",
  difficulty: "medium",
  category: "food"
},
{
  question: "Which nut is used to make marzipan?",
  answers: ["Almond", "Peanut", "Hazelnut", "Walnut"],
  correct: "Almond",
  difficulty: "medium",
  category: "food"
},
{
  question: "Which herb is commonly used in pesto sauce?",
  answers: ["Basil", "Parsley", "Thyme", "Rosemary"],
  correct: "Basil",
  difficulty: "medium",
  category: "food"
},
{
  question: "Which country is famous for bratwurst?",
  answers: ["Germany", "Austria", "Poland", "Hungary"],
  correct: "Germany",
  difficulty: "medium",
  category: "food"
},
{
  question: "What type of pastry is croissant?",
  answers: ["Flaky", "Shortcrust", "Choux", "Filo"],
  correct: "Flaky",
  difficulty: "medium",
  category: "food"
},
{
  question: "Which grain is used to make risotto?",
  answers: ["Arborio Rice", "Basmati Rice", "Quinoa", "Barley"],
  correct: "Arborio Rice",
  difficulty: "medium",
  category: "food"
},
{
  question: "Which country is known for maple syrup?",
  answers: ["Canada", "USA", "Sweden", "Finland"],
  correct: "Canada",
  difficulty: "medium",
  category: "food"
},
{
  question: "What is the main ingredient in falafel?",
  answers: ["Chickpeas", "Potatoes", "Rice", "Beans"],
  correct: "Chickpeas",
  difficulty: "medium",
  category: "food"
},
{
  question: "Which fruit is used to make cider?",
  answers: ["Apple", "Pear", "Grape", "Peach"],
  correct: "Apple",
  difficulty: "medium",
  category: "food"
},
{
  question: "Which meat is traditionally used in a hot dog?",
  answers: ["Pork", "Beef", "Chicken", "Turkey"],
  correct: "Pork",
  difficulty: "medium",
  category: "food"
},
{
  question: "Which vegetable is used to make sauerkraut?",
  answers: ["Cabbage", "Carrot", "Turnip", "Potato"],
  correct: "Cabbage",
  difficulty: "medium",
  category: "food"
},
{
  question: "Which country is known for kimchi?",
  answers: ["South Korea", "Japan", "China", "Vietnam"],
  correct: "South Korea",
  difficulty: "medium",
  category: "food"
},
{
  question: "What is the main ingredient in traditional miso soup?",
  answers: ["Soybean Paste", "Rice", "Fish", "Seaweed"],
  correct: "Soybean Paste",
  difficulty: "medium",
  category: "food"
},
{
  question: "Which spice is known as the most expensive by weight?",
  answers: ["Saffron", "Vanilla", "Cinnamon", "Cardamom"],
  correct: "Saffron",
  difficulty: "medium",
  category: "food"
},
{
  question: "Which country is known for the dish goulash?",
  answers: ["Hungary", "Austria", "Czech Republic", "Germany"],
  correct: "Hungary",
  difficulty: "medium",
  category: "food"
},
{
  question: "What type of food is tempura?",
  answers: ["Deep Fried", "Grilled", "Steamed", "Boiled"],
  correct: "Deep Fried",
  difficulty: "medium",
  category: "food"
},
{
  question: "Which fruit is dried to make raisins?",
  answers: ["Grapes", "Dates", "Plums", "Apricots"],
  correct: "Grapes",
  difficulty: "medium",
  category: "food"
},
{
  question: "Which country is famous for tacos?",
  answers: ["Mexico", "Spain", "Brazil", "Argentina"],
  correct: "Mexico",
  difficulty: "medium",
  category: "food"
},
{
  question: "Which dairy product is made by fermenting milk?",
  answers: ["Yogurt", "Butter", "Cream", "Ice Cream"],
  correct: "Yogurt",
  difficulty: "medium",
  category: "food"
},
{
  question: "Which grain is used to make polenta?",
  answers: ["Corn", "Wheat", "Rice", "Barley"],
  correct: "Corn",
  difficulty: "medium",
  category: "food"
},
{
  question: "Which fruit is the main ingredient in traditional apple pie?",
  answers: ["Apple", "Pear", "Plum", "Peach"],
  correct: "Apple",
  difficulty: "medium",
  category: "food"
},
{
  question: "Which country is known for the dish pho?",
  answers: ["Vietnam", "Thailand", "China", "Laos"],
  correct: "Vietnam",
  difficulty: "medium",
  category: "food"
},
{
  question: "Which sauce is traditionally made from tomatoes, vinegar, and spices?",
  answers: ["Ketchup", "Mustard", "Mayonnaise", "Soy Sauce"],
  correct: "Ketchup",
  difficulty: "medium",
  category: "food"
},
{
  question: "Which nut is used to make peanut butter?",
  answers: ["Peanut", "Almond", "Cashew", "Hazelnut"],
  correct: "Peanut",
  difficulty: "medium",
  category: "food"
},
{
  question: "Which Italian cheese is traditionally made from water buffalo milk?",
  answers: ["Mozzarella di Bufala", "Parmesan", "Ricotta", "Gorgonzola"],
  correct: "Mozzarella di Bufala",
  difficulty: "hard",
  category: "food"
},
{
  question: "What is the main ingredient in traditional Japanese natto?",
  answers: ["Fermented Soybeans", "Rice", "Seaweed", "Fish"],
  correct: "Fermented Soybeans",
  difficulty: "hard",
  category: "food"
},
{
  question: "Which French dish is made from duck liver?",
  answers: ["Foie Gras", "Confit", "Ratatouille", "Bouillabaisse"],
  correct: "Foie Gras",
  difficulty: "hard",
  category: "food"
},
{
  question: "Which type of rice is commonly used in Spanish paella?",
  answers: ["Bomba Rice", "Basmati Rice", "Jasmine Rice", "Arborio Rice"],
  correct: "Bomba Rice",
  difficulty: "hard",
  category: "food"
},
{
  question: "What is the name of the Japanese noodle soup flavored with fermented soybean paste?",
  answers: ["Miso Ramen", "Udon", "Soba", "Tempura"],
  correct: "Miso Ramen",
  difficulty: "hard",
  category: "food"
},
{
  question: "Which spice blend is commonly used in North African cuisine?",
  answers: ["Ras el Hanout", "Garam Masala", "Herbes de Provence", "Za'atar"],
  correct: "Ras el Hanout",
  difficulty: "hard",
  category: "food"
},
{
  question: "Which Italian dessert is layered with coffee-soaked biscuits and mascarpone cream?",
  answers: ["Tiramisu", "Panna Cotta", "Gelato", "Cannoli"],
  correct: "Tiramisu",
  difficulty: "hard",
  category: "food"
},
{
  question: "What is the French culinary term for cooking food in a vacuum-sealed bag at low temperature?",
  answers: ["Sous Vide", "Flambe", "Poaching", "Braising"],
  correct: "Sous Vide",
  difficulty: "hard",
  category: "food"
},
{
  question: "Which grain is used to make couscous?",
  answers: ["Semolina", "Barley", "Millet", "Quinoa"],
  correct: "Semolina",
  difficulty: "hard",
  category: "food"
},
{
  question: "Which Mexican sauce is traditionally made with chocolate and chili peppers?",
  answers: ["Mole", "Salsa Verde", "Guacamole", "Pico de Gallo"],
  correct: "Mole",
  difficulty: "hard",
  category: "food"
},
{
  question: "Which fish is commonly used in traditional British fish and chips?",
  answers: ["Cod", "Salmon", "Tuna", "Mackerel"],
  correct: "Cod",
  difficulty: "hard",
  category: "food"
},
{
  question: "Which Asian fruit is known for its strong smell and spiky shell?",
  answers: ["Durian", "Lychee", "Rambutan", "Jackfruit"],
  correct: "Durian",
  difficulty: "hard",
  category: "food"
},
{
  question: "Which Italian cured meat is air-dried and often served thinly sliced?",
  answers: ["Prosciutto", "Salami", "Mortadella", "Pancetta"],
  correct: "Prosciutto",
  difficulty: "hard",
  category: "food"
},
{
  question: "What is the main ingredient in the Middle Eastern dish tabbouleh?",
  answers: ["Parsley", "Rice", "Chickpeas", "Eggplant"],
  correct: "Parsley",
  difficulty: "hard",
  category: "food"
},
{
  question: "Which cheese is known for its blue veins and strong flavor?",
  answers: ["Roquefort", "Brie", "Camembert", "Edam"],
  correct: "Roquefort",
  difficulty: "hard",
  category: "food"
},
{
  question: "Which cooking method involves browning food quickly in a small amount of fat?",
  answers: ["Sauteing", "Boiling", "Steaming", "Baking"],
  correct: "Sauteing",
  difficulty: "hard",
  category: "food"
},
{
  question: "Which grain-like seed is a staple in South American cuisine?",
  answers: ["Quinoa", "Buckwheat", "Barley", "Oats"],
  correct: "Quinoa",
  difficulty: "hard",
  category: "food"
},
{
  question: "Which Italian pasta name means 'little ears'?",
  answers: ["Orecchiette", "Farfalle", "Penne", "Rigatoni"],
  correct: "Orecchiette",
  difficulty: "hard",
  category: "food"
},
{
  question: "Which traditional dish from Switzerland consists mainly of melted cheese served with bread?",
  answers: ["Fondue", "Raclette", "Rosti", "Goulash"],
  correct: "Fondue",
  difficulty: "hard",
  category: "food"
},
{
  question: "Which herb is the primary flavoring in traditional pesto Genovese?",
  answers: ["Basil", "Mint", "Oregano", "Thyme"],
  correct: "Basil",
  difficulty: "hard",
  category: "food"
},
{
  question: "Which French mother sauce is made from a roux and milk?",
  answers: ["Béchamel", "Velouté", "Espagnole", "Hollandaise"],
  correct: "Béchamel",
  difficulty: "expert",
  category: "food"
},
{
  question: "Which Japanese delicacy can be poisonous if not prepared correctly?",
  answers: ["Fugu", "Sashimi", "Tempura", "Ramen"],
  correct: "Fugu",
  difficulty: "expert",
  category: "food"
},
{
  question: "Which Italian cheese is traditionally aged in caves and made from sheep's milk?",
  answers: ["Pecorino", "Mozzarella", "Mascarpone", "Ricotta"],
  correct: "Pecorino",
  difficulty: "expert",
  category: "food"
},
{
  question: "What is the Spanish term for small savory dishes served as appetizers?",
  answers: ["Tapas", "Paella", "Churros", "Gazpacho"],
  correct: "Tapas",
  difficulty: "expert",
  category: "food"
},
{
  question: "Which fermentation process produces lactic acid bacteria in foods like kimchi?",
  answers: ["Lactic Fermentation", "Alcoholic Fermentation", "Acetic Fermentation", "Malolactic Fermentation"],
  correct: "Lactic Fermentation",
  difficulty: "expert",
  category: "food"
},
{
  question: "Which Italian dessert is traditionally made with ricotta cheese and a crispy shell?",
  answers: ["Cannoli", "Tiramisu", "Panna Cotta", "Gelato"],
  correct: "Cannoli",
  difficulty: "expert",
  category: "food"
},
{
  question: "Which grain is used to brew traditional Japanese sake?",
  answers: ["Rice", "Barley", "Corn", "Wheat"],
  correct: "Rice",
  difficulty: "expert",
  category: "food"
},
{
  question: "Which spice comes from the dried stigma of a flower?",
  answers: ["Saffron", "Paprika", "Cumin", "Turmeric"],
  correct: "Saffron",
  difficulty: "expert",
  category: "food"
},
{
  question: "Which cooking technique involves submerging food in hot fat at low temperature?",
  answers: ["Confit", "Grilling", "Roasting", "Poaching"],
  correct: "Confit",
  difficulty: "expert",
  category: "food"
},
{
  question: "Which French dish consists of snails cooked with garlic butter?",
  answers: ["Escargots", "Bouillabaisse", "Cassoulet", "Coq au Vin"],
  correct: "Escargots",
  difficulty: "expert",
  category: "food"
},
{
  question: "Which Italian rice dish is slowly cooked while stirring and adding broth gradually?",
  answers: ["Risotto", "Polenta", "Arancini", "Frittata"],
  correct: "Risotto",
  difficulty: "expert",
  category: "food"
},
{
  question: "Which cheese is traditionally used in Greek salad?",
  answers: ["Feta", "Halloumi", "Ricotta", "Gouda"],
  correct: "Feta",
  difficulty: "expert",
  category: "food"
},
{
  question: "Which fruit is used to flavor the liqueur limoncello?",
  answers: ["Lemon", "Orange", "Lime", "Grapefruit"],
  correct: "Lemon",
  difficulty: "expert",
  category: "food"
},
{
  question: "Which Italian cured meat is made from pork belly?",
  answers: ["Pancetta", "Prosciutto", "Salami", "Bresaola"],
  correct: "Pancetta",
  difficulty: "expert",
  category: "food"
},
{
  question: "Which Asian noodle is made from buckwheat flour?",
  answers: ["Soba", "Udon", "Ramen", "Rice Noodles"],
  correct: "Soba",
  difficulty: "expert",
  category: "food"
},
{
  question: "Which French sauce is made from egg yolks, butter, and lemon juice?",
  answers: ["Hollandaise", "Béchamel", "Velouté", "Tomato Sauce"],
  correct: "Hollandaise",
  difficulty: "expert",
  category: "food"
},
{
  question: "Which Italian dish is made from raw beef or fish finely chopped or minced?",
  answers: ["Carpaccio", "Osso Buco", "Lasagna", "Gnocchi"],
  correct: "Carpaccio",
  difficulty: "expert",
  category: "food"
},
{
  question: "Which Middle Eastern paste is made from ground sesame seeds?",
  answers: ["Tahini", "Harissa", "Hummus", "Zhoug"],
  correct: "Tahini",
  difficulty: "expert",
  category: "food"
},
{
  question: "Which type of sugar is produced from sugarcane juice through minimal processing?",
  answers: ["Jaggery", "White Sugar", "Powdered Sugar", "Brown Sugar"],
  correct: "Jaggery",
  difficulty: "expert",
  category: "food"
},
{
  question: "Which cooking method involves sealing meat briefly at high heat before slow cooking?",
  answers: ["Searing", "Boiling", "Steaming", "Blanching"],
  correct: "Searing",
  difficulty: "expert",
  category: "food"
},
{
  question: "How many players are on a soccer team on the field?",
  answers: ["11", "9", "7", "5"],
  correct: "11",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport uses a bat and a ball?",
  answers: ["Baseball", "Soccer", "Tennis", "Swimming"],
  correct: "Baseball",
  difficulty: "easy",
  category: "sports"
},
{
  question: "In which sport do players shoot hoops?",
  answers: ["Basketball", "Volleyball", "Tennis", "Rugby"],
  correct: "Basketball",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport is played on ice with sticks and a puck?",
  answers: ["Ice Hockey", "Field Hockey", "Curling", "Skating"],
  correct: "Ice Hockey",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport involves running around a track?",
  answers: ["Athletics", "Swimming", "Cycling", "Rowing"],
  correct: "Athletics",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport uses a racket and a shuttlecock?",
  answers: ["Badminton", "Tennis", "Squash", "Table Tennis"],
  correct: "Badminton",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport is known as the 'king of sports' worldwide?",
  answers: ["Soccer", "Basketball", "Cricket", "Tennis"],
  correct: "Soccer",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport is played in a pool?",
  answers: ["Swimming", "Running", "Cycling", "Boxing"],
  correct: "Swimming",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport involves hitting a ball over a net with your hands?",
  answers: ["Volleyball", "Tennis", "Soccer", "Rugby"],
  correct: "Volleyball",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport uses gloves and punches?",
  answers: ["Boxing", "Wrestling", "Judo", "Karate"],
  correct: "Boxing",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport involves riding waves?",
  answers: ["Surfing", "Sailing", "Rowing", "Diving"],
  correct: "Surfing",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport uses a golf club?",
  answers: ["Golf", "Cricket", "Baseball", "Hockey"],
  correct: "Golf",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport is played on horseback with a mallet and ball?",
  answers: ["Polo", "Rugby", "Cricket", "Hockey"],
  correct: "Polo",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport involves throwing a heavy ball to knock down pins?",
  answers: ["Bowling", "Curling", "Shot Put", "Darts"],
  correct: "Bowling",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport involves kicking a ball into a goal?",
  answers: ["Soccer", "Basketball", "Tennis", "Baseball"],
  correct: "Soccer",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport involves skating on ice performing jumps and spins?",
  answers: ["Figure Skating", "Speed Skating", "Ice Hockey", "Skiing"],
  correct: "Figure Skating",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport involves climbing artificial walls?",
  answers: ["Rock Climbing", "Hiking", "Running", "Cycling"],
  correct: "Rock Climbing",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport involves riding a bicycle competitively?",
  answers: ["Cycling", "Running", "Swimming", "Rowing"],
  correct: "Cycling",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport involves jumping into water from a high platform?",
  answers: ["Diving", "Swimming", "Surfing", "Rowing"],
  correct: "Diving",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport involves catching waves on a board?",
  answers: ["Surfing", "Skateboarding", "Snowboarding", "Windsurfing"],
  correct: "Surfing",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport involves using a bow to shoot arrows at a target?",
  answers: ["Archery", "Darts", "Shooting", "Javelin"],
  correct: "Archery",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport is played on a diamond-shaped field?",
  answers: ["Baseball", "Soccer", "Cricket", "Rugby"],
  correct: "Baseball",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport involves lifting heavy weights?",
  answers: ["Weightlifting", "Wrestling", "Judo", "Boxing"],
  correct: "Weightlifting",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport involves sliding stones on ice toward a target?",
  answers: ["Curling", "Ice Hockey", "Skating", "Skiing"],
  correct: "Curling",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport involves racing cars on tracks?",
  answers: ["Auto Racing", "Cycling", "Running", "Rowing"],
  correct: "Auto Racing",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport involves tackling and carrying an oval ball?",
  answers: ["Rugby", "Soccer", "Basketball", "Volleyball"],
  correct: "Rugby",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport involves jumping over hurdles?",
  answers: ["Track and Field", "Swimming", "Cycling", "Rowing"],
  correct: "Track and Field",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport involves swinging on uneven bars?",
  answers: ["Gymnastics", "Diving", "Skating", "Dance"],
  correct: "Gymnastics",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport involves paddling a small boat?",
  answers: ["Kayaking", "Sailing", "Surfing", "Swimming"],
  correct: "Kayaking",
  difficulty: "easy",
  category: "sports"
},
{
  question: "Which sport involves skiing down snowy mountains?",
  answers: ["Skiing", "Snowboarding", "Skating", "Climbing"],
  correct: "Skiing",
  difficulty: "easy",
  category: "sports"
},
{
  question: "How long is a standard marathon?",
  answers: ["42.195 km", "40 km", "45 km", "50 km"],
  correct: "42.195 km",
  difficulty: "medium",
  category: "sports"
},
{
  question: "Which country invented basketball?",
  answers: ["USA", "Canada", "UK", "Germany"],
  correct: "USA",
  difficulty: "medium",
  category: "sports"
},
{
  question: "In tennis, what is the term for zero points?",
  answers: ["Love", "Nil", "Zero", "Blank"],
  correct: "Love",
  difficulty: "medium",
  category: "sports"
},
{
  question: "Which sport is associated with the Tour de France?",
  answers: ["Cycling", "Running", "Rowing", "Swimming"],
  correct: "Cycling",
  difficulty: "medium",
  category: "sports"
},
{
  question: "Which sport uses the term 'birdie'?",
  answers: ["Golf", "Tennis", "Cricket", "Baseball"],
  correct: "Golf",
  difficulty: "medium",
  category: "sports"
},
{
  question: "How many rings are there on the Olympic flag?",
  answers: ["5", "4", "6", "7"],
  correct: "5",
  difficulty: "medium",
  category: "sports"
},
{
  question: "Which sport uses a pommel horse?",
  answers: ["Gymnastics", "Equestrian", "Wrestling", "Fencing"],
  correct: "Gymnastics",
  difficulty: "medium",
  category: "sports"
},
{
  question: "Which sport is played at Wimbledon?",
  answers: ["Tennis", "Cricket", "Rugby", "Badminton"],
  correct: "Tennis",
  difficulty: "medium",
  category: "sports"
},
{
  question: "What is the maximum score with one dart in darts?",
  answers: ["60", "50", "40", "100"],
  correct: "60",
  difficulty: "medium",
  category: "sports"
},
{
  question: "Which sport involves a scrum?",
  answers: ["Rugby", "Soccer", "Basketball", "Hockey"],
  correct: "Rugby",
  difficulty: "medium",
  category: "sports"
},
{
  question: "Which sport uses the term 'home run'?",
  answers: ["Baseball", "Cricket", "Golf", "Tennis"],
  correct: "Baseball",
  difficulty: "medium",
  category: "sports"
},
{
  question: "How many players are on a basketball team on court?",
  answers: ["5", "6", "7", "4"],
  correct: "5",
  difficulty: "medium",
  category: "sports"
},
{
  question: "Which sport is known as the 'sweet science'?",
  answers: ["Boxing", "Wrestling", "Karate", "Judo"],
  correct: "Boxing",
  difficulty: "medium",
  category: "sports"
},
{
  question: "Which country hosted the 2016 Summer Olympics?",
  answers: ["Brazil", "China", "UK", "Russia"],
  correct: "Brazil",
  difficulty: "medium",
  category: "sports"
},
{
  question: "Which sport involves slalom and downhill events?",
  answers: ["Alpine Skiing", "Snowboarding", "Skating", "Curling"],
  correct: "Alpine Skiing",
  difficulty: "medium",
  category: "sports"
},
{
  question: "Which sport uses a shuttlecock?",
  answers: ["Badminton", "Tennis", "Squash", "Volleyball"],
  correct: "Badminton",
  difficulty: "medium",
  category: "sports"
},
{
  question: "Which sport features a decathlon event?",
  answers: ["Athletics", "Swimming", "Gymnastics", "Cycling"],
  correct: "Athletics",
  difficulty: "medium",
  category: "sports"
},
{
  question: "Which sport uses the Stanley Cup as a trophy?",
  answers: ["Ice Hockey", "Basketball", "Baseball", "Soccer"],
  correct: "Ice Hockey",
  difficulty: "medium",
  category: "sports"
},
{
  question: "In which sport would you perform a slam dunk?",
  answers: ["Basketball", "Volleyball", "Handball", "Tennis"],
  correct: "Basketball",
  difficulty: "medium",
  category: "sports"
},
{
  question: "Which sport involves wearing a gi and colored belts?",
  answers: ["Judo", "Boxing", "Wrestling", "Karate"],
  correct: "Judo",
  difficulty: "medium",
  category: "sports"
},
{
  question: "Which country is famous for sumo wrestling?",
  answers: ["Japan", "China", "Korea", "Mongolia"],
  correct: "Japan",
  difficulty: "medium",
  category: "sports"
},
{
  question: "Which sport uses the term 'checkmate' metaphorically in commentary?",
  answers: ["Chess", "Boxing", "Tennis", "Golf"],
  correct: "Chess",
  difficulty: "medium",
  category: "sports"
},
{
  question: "Which sport involves rowing boats competitively?",
  answers: ["Rowing", "Sailing", "Kayaking", "Canoeing"],
  correct: "Rowing",
  difficulty: "medium",
  category: "sports"
},
{
  question: "Which sport uses a foil, épée, or sabre?",
  answers: ["Fencing", "Archery", "Boxing", "Karate"],
  correct: "Fencing",
  difficulty: "medium",
  category: "sports"
},
{
  question: "Which sport involves a vault and balance beam?",
  answers: ["Gymnastics", "Diving", "Skating", "Dance"],
  correct: "Gymnastics",
  difficulty: "medium",
  category: "sports"
},
{
  question: "Which sport has positions like quarterback and linebacker?",
  answers: ["American Football", "Rugby", "Soccer", "Baseball"],
  correct: "American Football",
  difficulty: "medium",
  category: "sports"
},
{
  question: "Which sport involves shooting targets with skis on?",
  answers: ["Biathlon", "Ski Jumping", "Cross-Country", "Snowboarding"],
  correct: "Biathlon",
  difficulty: "medium",
  category: "sports"
},
{
  question: "Which sport uses the Ashes trophy?",
  answers: ["Cricket", "Rugby", "Tennis", "Soccer"],
  correct: "Cricket",
  difficulty: "medium",
  category: "sports"
},
{
  question: "Which sport involves a pommel horse routine?",
  answers: ["Gymnastics", "Equestrian", "Wrestling", "Fencing"],
  correct: "Gymnastics",
  difficulty: "medium",
  category: "sports"
},
{
  question: "Which sport features the Grand Slam tournaments?",
  answers: ["Tennis", "Golf", "Baseball", "Cricket"],
  correct: "Tennis",
  difficulty: "medium",
  category: "sports"
},
{
  question: "How many holes are played in a standard round of golf?",
  answers: ["18", "9", "12", "24"],
  correct: "18",
  difficulty: "hard",
  category: "sports"
},
{
  question: "Which country has won the most FIFA World Cups?",
  answers: ["Brazil", "Germany", "Italy", "Argentina"],
  correct: "Brazil",
  difficulty: "hard",
  category: "sports"
},
{
  question: "In Formula 1, what flag signals the end of a race?",
  answers: ["Checkered Flag", "Red Flag", "Yellow Flag", "Blue Flag"],
  correct: "Checkered Flag",
  difficulty: "hard",
  category: "sports"
},
{
  question: "What is the maximum number of clubs allowed in a golfer’s bag?",
  answers: ["14", "12", "16", "10"],
  correct: "14",
  difficulty: "hard",
  category: "sports"
},
{
  question: "Which tennis tournament is played on clay courts?",
  answers: ["French Open", "Wimbledon", "US Open", "Australian Open"],
  correct: "French Open",
  difficulty: "hard",
  category: "sports"
},
{
  question: "Which sport features the event called the 'Triple Axel'?",
  answers: ["Figure Skating", "Gymnastics", "Diving", "Snowboarding"],
  correct: "Figure Skating",
  difficulty: "hard",
  category: "sports"
},
{
  question: "How many points is a touchdown worth in American football?",
  answers: ["6", "3", "7", "5"],
  correct: "6",
  difficulty: "hard",
  category: "sports"
},
{
  question: "Which country invented rugby?",
  answers: ["England", "Australia", "New Zealand", "South Africa"],
  correct: "England",
  difficulty: "hard",
  category: "sports"
},
{
  question: "Which sport uses the term 'leg before wicket'?",
  answers: ["Cricket", "Baseball", "Rugby", "Tennis"],
  correct: "Cricket",
  difficulty: "hard",
  category: "sports"
},
{
  question: "Which Olympic sport includes the apparatus called rings?",
  answers: ["Gymnastics", "Weightlifting", "Boxing", "Wrestling"],
  correct: "Gymnastics",
  difficulty: "hard",
  category: "sports"
},
{
  question: "Which country hosted the first modern Olympic Games in 1896?",
  answers: ["Greece", "France", "UK", "Germany"],
  correct: "Greece",
  difficulty: "hard",
  category: "sports"
},
{
  question: "Which sport features the Ryder Cup?",
  answers: ["Golf", "Tennis", "Cricket", "Rugby"],
  correct: "Golf",
  difficulty: "hard",
  category: "sports"
},
{
  question: "In which sport would you perform a 'spike'?",
  answers: ["Volleyball", "Basketball", "Tennis", "Handball"],
  correct: "Volleyball",
  difficulty: "hard",
  category: "sports"
},
{
  question: "Which sport has positions such as striker, midfielder, and defender?",
  answers: ["Soccer", "Basketball", "Baseball", "Hockey"],
  correct: "Soccer",
  difficulty: "hard",
  category: "sports"
},
{
  question: "Which country is known for dominating Olympic table tennis?",
  answers: ["China", "Japan", "Germany", "Sweden"],
  correct: "China",
  difficulty: "hard",
  category: "sports"
},
{
  question: "What is the term for three strikes in a row in bowling?",
  answers: ["Turkey", "Spare", "Strike Out", "Triple"],
  correct: "Turkey",
  difficulty: "hard",
  category: "sports"
},
{
  question: "Which winter sport involves sliding head-first down an ice track?",
  answers: ["Skeleton", "Luge", "Bobsleigh", "Curling"],
  correct: "Skeleton",
  difficulty: "hard",
  category: "sports"
},
{
  question: "Which sport uses the Davis Cup trophy?",
  answers: ["Tennis", "Cricket", "Golf", "Rugby"],
  correct: "Tennis",
  difficulty: "hard",
  category: "sports"
},
{
  question: "Which sport involves competing in a velodrome?",
  answers: ["Track Cycling", "Rowing", "Skating", "Running"],
  correct: "Track Cycling",
  difficulty: "hard",
  category: "sports"
},
{
  question: "Which sport features the term 'par'?",
  answers: ["Golf", "Tennis", "Baseball", "Soccer"],
  correct: "Golf",
  difficulty: "hard",
  category: "sports"
},
{
  question: "Which country has won the most Olympic gold medals in ice hockey?",
  answers: ["Canada", "USA", "Russia", "Sweden"],
  correct: "Canada",
  difficulty: "expert",
  category: "sports"
},
{
  question: "In which year was the first FIFA World Cup held?",
  answers: ["1930", "1924", "1946", "1950"],
  correct: "1930",
  difficulty: "expert",
  category: "sports"
},
{
  question: "Which tennis player has won the most Grand Slam singles titles in the Open Era (men)?",
  answers: ["Novak Djokovic", "Roger Federer", "Rafael Nadal", "Pete Sampras"],
  correct: "Novak Djokovic",
  difficulty: "expert",
  category: "sports"
},
{
  question: "Which country has won the most Cricket World Cups?",
  answers: ["Australia", "India", "West Indies", "England"],
  correct: "Australia",
  difficulty: "expert",
  category: "sports"
},
{
  question: "What is the diameter of a basketball hoop in inches?",
  answers: ["18", "16", "20", "22"],
  correct: "18",
  difficulty: "expert",
  category: "sports"
},
{
  question: "Which athlete holds the world record for the men's 100 meters (as of early 2020s)?",
  answers: ["Usain Bolt", "Tyson Gay", "Yohan Blake", "Justin Gatlin"],
  correct: "Usain Bolt",
  difficulty: "expert",
  category: "sports"
},
{
  question: "Which sport features the Heisman Trophy?",
  answers: ["American Football", "Basketball", "Baseball", "Ice Hockey"],
  correct: "American Football",
  difficulty: "expert",
  category: "sports"
},
{
  question: "Which country has hosted the Winter Olympics the most times?",
  answers: ["USA", "Canada", "Norway", "Germany"],
  correct: "USA",
  difficulty: "expert",
  category: "sports"
},
{
  question: "Which Formula 1 driver has the most world championships?",
  answers: ["Lewis Hamilton", "Michael Schumacher", "Ayrton Senna", "Sebastian Vettel"],
  correct: "Lewis Hamilton",
  difficulty: "expert",
  category: "sports"
},
{
  question: "In snooker, how many points is the black ball worth?",
  answers: ["7", "5", "6", "8"],
  correct: "7",
  difficulty: "expert",
  category: "sports"
},
{
  question: "Which golf tournament is known as 'The Masters'?",
  answers: ["Augusta National Invitational", "US Open", "PGA Championship", "British Open"],
  correct: "Augusta National Invitational",
  difficulty: "expert",
  category: "sports"
},
{
  question: "Which country won the first Rugby World Cup in 1987?",
  answers: ["New Zealand", "Australia", "England", "France"],
  correct: "New Zealand",
  difficulty: "expert",
  category: "sports"
},
{
  question: "How long is an Olympic swimming pool?",
  answers: ["50 meters", "25 meters", "100 meters", "75 meters"],
  correct: "50 meters",
  difficulty: "expert",
  category: "sports"
},
{
  question: "Which sport awards the Claret Jug?",
  answers: ["Golf", "Cricket", "Rugby", "Tennis"],
  correct: "Golf",
  difficulty: "expert",
  category: "sports"
},
{
  question: "Which country has won the most medals in Olympic gymnastics historically?",
  answers: ["USA", "Russia", "China", "Romania"],
  correct: "USA",
  difficulty: "expert",
  category: "sports"
},
{
  question: "Which baseball player is famous for hitting 714 career home runs?",
  answers: ["Babe Ruth", "Hank Aaron", "Barry Bonds", "Willie Mays"],
  correct: "Babe Ruth",
  difficulty: "expert",
  category: "sports"
},
{
  question: "Which sport includes the move called the Fosbury Flop?",
  answers: ["High Jump", "Pole Vault", "Long Jump", "Hurdles"],
  correct: "High Jump",
  difficulty: "expert",
  category: "sports"
},
{
  question: "Which country has won the most UEFA Champions League titles?",
  answers: ["Spain", "England", "Italy", "Germany"],
  correct: "Spain",
  difficulty: "expert",
  category: "sports"
},
{
  question: "Which cycling race is known as 'La Grande Boucle'?",
  answers: ["Tour de France", "Giro d'Italia", "Vuelta a España", "Paris-Roubaix"],
  correct: "Tour de France",
  difficulty: "expert",
  category: "sports"
},
{
  question: "Which sport features the America's Cup?",
  answers: ["Sailing", "Rowing", "Surfing", "Kayaking"],
  correct: "Sailing",
  difficulty: "expert",
  category: "sports"
},
{
  question: "Which movie features a giant iceberg hitting a ship?",
  answers: ["Titanic", "Avatar", "Jaws", "Frozen"],
  correct: "Titanic",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which animated movie features a snowman named Olaf?",
  answers: ["Frozen", "Moana", "Tangled", "Encanto"],
  correct: "Frozen",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which superhero is known as the Dark Knight?",
  answers: ["Batman", "Superman", "Iron Man", "Spider-Man"],
  correct: "Batman",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features dinosaurs brought back to life?",
  answers: ["Jurassic Park", "King Kong", "Godzilla", "Avatar"],
  correct: "Jurassic Park",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features a blue alien world called Pandora?",
  answers: ["Avatar", "Star Wars", "Dune", "Matrix"],
  correct: "Avatar",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which wizard movie series features Hogwarts?",
  answers: ["Harry Potter", "Lord of the Rings", "Narnia", "Percy Jackson"],
  correct: "Harry Potter",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features a talking lion named Simba?",
  answers: ["The Lion King", "Madagascar", "Zootopia", "Shrek"],
  correct: "The Lion King",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features a clownfish named Nemo?",
  answers: ["Finding Nemo", "Shark Tale", "Moana", "Up"],
  correct: "Finding Nemo",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features superheroes called the Avengers?",
  answers: ["The Avengers", "Justice League", "X-Men", "Guardians"],
  correct: "The Avengers",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features a green ogre named Shrek?",
  answers: ["Shrek", "Monsters Inc", "Toy Story", "Cars"],
  correct: "Shrek",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features toys that come to life?",
  answers: ["Toy Story", "Cars", "Up", "Wall-E"],
  correct: "Toy Story",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features a giant shark terrorizing a beach town?",
  answers: ["Jaws", "Deep Blue Sea", "Titanic", "Cast Away"],
  correct: "Jaws",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features robots that transform into vehicles?",
  answers: ["Transformers", "Terminator", "Matrix", "RoboCop"],
  correct: "Transformers",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features a boy who befriends an alien named E.T.?",
  answers: ["E.T.", "Alien", "Avatar", "Star Wars"],
  correct: "E.T.",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features a theme park full of cloned dinosaurs?",
  answers: ["Jurassic Park", "King Kong", "Godzilla", "Planet of the Apes"],
  correct: "Jurassic Park",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features racing cars and a character named Lightning McQueen?",
  answers: ["Cars", "Fast and Furious", "Rush", "Speed"],
  correct: "Cars",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features superheroes from Wakanda?",
  answers: ["Black Panther", "Thor", "Iron Man", "Doctor Strange"],
  correct: "Black Panther",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features a ring that must be destroyed?",
  answers: ["Lord of the Rings", "Harry Potter", "Narnia", "Hobbit"],
  correct: "Lord of the Rings",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features minions serving a villain named Gru?",
  answers: ["Despicable Me", "Megamind", "Shrek", "Madagascar"],
  correct: "Despicable Me",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features a robot cleaning Earth?",
  answers: ["Wall-E", "Robots", "Big Hero 6", "Terminator"],
  correct: "Wall-E",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features a family of superheroes called the Parr family?",
  answers: ["The Incredibles", "Fantastic Four", "Avengers", "Justice League"],
  correct: "The Incredibles",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features a jungle hero raised by apes?",
  answers: ["Tarzan", "George of the Jungle", "Jumanji", "King Kong"],
  correct: "Tarzan",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features a princess named Elsa?",
  answers: ["Frozen", "Moana", "Tangled", "Brave"],
  correct: "Frozen",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features a panda learning kung fu?",
  answers: ["Kung Fu Panda", "Mulan", "Shrek", "Zootopia"],
  correct: "Kung Fu Panda",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features pirates searching for treasure?",
  answers: ["Pirates of the Caribbean", "Treasure Planet", "Hook", "Jaws"],
  correct: "Pirates of the Caribbean",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features monsters scaring children for energy?",
  answers: ["Monsters Inc", "Shrek", "Toy Story", "Cars"],
  correct: "Monsters Inc",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features a superhero who swings using webs?",
  answers: ["Spider-Man", "Batman", "Superman", "Flash"],
  correct: "Spider-Man",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features blue creatures called Na’vi?",
  answers: ["Avatar", "Dune", "Star Wars", "Matrix"],
  correct: "Avatar",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features a magical nanny named Mary?",
  answers: ["Mary Poppins", "Cinderella", "Snow White", "Maleficent"],
  correct: "Mary Poppins",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Which movie features a time-traveling DeLorean car?",
  answers: ["Back to the Future", "Terminator", "Matrix", "Inception"],
  correct: "Back to the Future",
  difficulty: "easy",
  category: "movies"
},
{
  question: "Who directed the movie Titanic?",
  answers: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Ridley Scott"],
  correct: "James Cameron",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which actor played Jack in Titanic?",
  answers: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Tom Cruise"],
  correct: "Leonardo DiCaprio",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which movie features a dream-within-a-dream concept?",
  answers: ["Inception", "Matrix", "Interstellar", "Memento"],
  correct: "Inception",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which movie features a boxer named Rocky Balboa?",
  answers: ["Rocky", "Creed", "Raging Bull", "Million Dollar Baby"],
  correct: "Rocky",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which movie features dinosaurs escaping on an island called Isla Nublar?",
  answers: ["Jurassic Park", "King Kong", "Avatar", "Godzilla"],
  correct: "Jurassic Park",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which movie features a virtual world called the Matrix?",
  answers: ["The Matrix", "Inception", "Tron", "Blade Runner"],
  correct: "The Matrix",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which actor played Iron Man in the Marvel movies?",
  answers: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"],
  correct: "Robert Downey Jr.",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which movie features a ship called the Black Pearl?",
  answers: ["Pirates of the Caribbean", "Titanic", "Hook", "Jaws"],
  correct: "Pirates of the Caribbean",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which animated movie features a house lifted by balloons?",
  answers: ["Up", "Toy Story", "Wall-E", "Cars"],
  correct: "Up",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which movie features a theme park on Skull Island?",
  answers: ["King Kong", "Jurassic Park", "Godzilla", "Avatar"],
  correct: "King Kong",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which movie features a young wizard fighting Voldemort?",
  answers: ["Harry Potter", "Narnia", "Percy Jackson", "Hobbit"],
  correct: "Harry Potter",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which movie features a desert planet called Arrakis?",
  answers: ["Dune", "Star Wars", "Avatar", "Matrix"],
  correct: "Dune",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which actor played Wolverine in the X-Men films?",
  answers: ["Hugh Jackman", "Ryan Reynolds", "Chris Pratt", "Tom Hardy"],
  correct: "Hugh Jackman",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which movie features a clown villain named Pennywise?",
  answers: ["It", "Joker", "Saw", "Scream"],
  correct: "It",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which movie features a theme park with genetically engineered dinosaurs called Jurassic World?",
  answers: ["Jurassic World", "Avatar", "Godzilla", "Kong"],
  correct: "Jurassic World",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which movie features a sinking ship and a love story?",
  answers: ["Titanic", "Pearl Harbor", "Poseidon", "Jaws"],
  correct: "Titanic",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which actor played Captain Jack Sparrow?",
  answers: ["Johnny Depp", "Orlando Bloom", "Brad Pitt", "Tom Hanks"],
  correct: "Johnny Depp",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which movie features talking cars racing in the Piston Cup?",
  answers: ["Cars", "Fast and Furious", "Rush", "Drive"],
  correct: "Cars",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which movie features the quote 'I am your father'?",
  answers: ["Star Wars", "Star Trek", "Dune", "Matrix"],
  correct: "Star Wars",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which movie features superheroes defending Earth from Loki?",
  answers: ["The Avengers", "Justice League", "X-Men", "Guardians"],
  correct: "The Avengers",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which movie features a shark attack in Amity Island?",
  answers: ["Jaws", "Deep Blue Sea", "Open Water", "Titanic"],
  correct: "Jaws",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which movie features a toy cowboy named Woody?",
  answers: ["Toy Story", "Cars", "Up", "Wall-E"],
  correct: "Toy Story",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which movie features a man stranded on an island with a volleyball named Wilson?",
  answers: ["Cast Away", "Life of Pi", "Titanic", "Survivor"],
  correct: "Cast Away",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which movie features a superhero from Wakanda?",
  answers: ["Black Panther", "Thor", "Iron Man", "Doctor Strange"],
  correct: "Black Panther",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which movie features a robot boxing sport in the future?",
  answers: ["Real Steel", "Transformers", "RoboCop", "I Robot"],
  correct: "Real Steel",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which movie features dreams collapsing into reality?",
  answers: ["Inception", "Interstellar", "Matrix", "Tenet"],
  correct: "Inception",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which movie features blue aliens fighting humans on Pandora?",
  answers: ["Avatar", "Dune", "Star Wars", "Matrix"],
  correct: "Avatar",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which movie features a talking dragon named Mushu?",
  answers: ["Mulan", "Shrek", "Frozen", "Moana"],
  correct: "Mulan",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which movie features a hotel caretaker going insane in winter?",
  answers: ["The Shining", "Psycho", "Saw", "It"],
  correct: "The Shining",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Which movie features a lawyer defending a wrongly accused man on death row?",
  answers: ["The Green Mile", "Shawshank Redemption", "Se7en", "Prisoners"],
  correct: "The Green Mile",
  difficulty: "medium",
  category: "movies"
},
{
  question: "Who directed the movie Inception?",
  answers: ["Christopher Nolan", "James Cameron", "Denis Villeneuve", "Ridley Scott"],
  correct: "Christopher Nolan",
  difficulty: "hard",
  category: "movies"
},
{
  question: "Which movie won the Academy Award for Best Picture in 1994?",
  answers: ["Forrest Gump", "Pulp Fiction", "The Shawshank Redemption", "Braveheart"],
  correct: "Forrest Gump",
  difficulty: "hard",
  category: "movies"
},
{
  question: "Which actor played the Joker in The Dark Knight?",
  answers: ["Heath Ledger", "Joaquin Phoenix", "Jared Leto", "Jack Nicholson"],
  correct: "Heath Ledger",
  difficulty: "hard",
  category: "movies"
},
{
  question: "Which movie features the character Travis Bickle?",
  answers: ["Taxi Driver", "Goodfellas", "Scarface", "Heat"],
  correct: "Taxi Driver",
  difficulty: "hard",
  category: "movies"
},
{
  question: "Which director is known for the movie Pulp Fiction?",
  answers: ["Quentin Tarantino", "Martin Scorsese", "Steven Spielberg", "Guy Ritchie"],
  correct: "Quentin Tarantino",
  difficulty: "hard",
  category: "movies"
},
{
  question: "Which movie features the quote 'Here’s looking at you, kid'?",
  answers: ["Casablanca", "Citizen Kane", "Gone with the Wind", "The Godfather"],
  correct: "Casablanca",
  difficulty: "hard",
  category: "movies"
},
{
  question: "Which actor played Neo in The Matrix?",
  answers: ["Keanu Reeves", "Brad Pitt", "Tom Cruise", "Will Smith"],
  correct: "Keanu Reeves",
  difficulty: "hard",
  category: "movies"
},
{
  question: "Which movie is about a prison escape and friendship starring Tim Robbins and Morgan Freeman?",
  answers: ["The Shawshank Redemption", "The Green Mile", "Escape Plan", "Papillon"],
  correct: "The Shawshank Redemption",
  difficulty: "hard",
  category: "movies"
},
{
  question: "Which movie features a hotel caretaker named Jack Torrance?",
  answers: ["The Shining", "Psycho", "It", "Halloween"],
  correct: "The Shining",
  difficulty: "hard",
  category: "movies"
},
{
  question: "Which director made the movie Blade Runner?",
  answers: ["Ridley Scott", "James Cameron", "Stanley Kubrick", "George Lucas"],
  correct: "Ridley Scott",
  difficulty: "hard",
  category: "movies"
},
{
  question: "Which movie features a mafia family led by Vito Corleone?",
  answers: ["The Godfather", "Goodfellas", "Scarface", "Casino"],
  correct: "The Godfather",
  difficulty: "hard",
  category: "movies"
},
{
  question: "Which movie features a dystopian future where people fight to the death in televised games?",
  answers: ["The Hunger Games", "Battle Royale", "Divergent", "Maze Runner"],
  correct: "The Hunger Games",
  difficulty: "hard",
  category: "movies"
},
{
  question: "Which actor played Forrest Gump?",
  answers: ["Tom Hanks", "Kevin Costner", "Mel Gibson", "Robin Williams"],
  correct: "Tom Hanks",
  difficulty: "hard",
  category: "movies"
},
{
  question: "Which movie features the spaceship Nostromo?",
  answers: ["Alien", "Star Wars", "Dune", "Interstellar"],
  correct: "Alien",
  difficulty: "hard",
  category: "movies"
},
{
  question: "Which movie features the quote 'You can't handle the truth!'?",
  answers: ["A Few Good Men", "Top Gun", "Platoon", "Saving Private Ryan"],
  correct: "A Few Good Men",
  difficulty: "hard",
  category: "movies"
},
{
  question: "Which movie is about oil drilling in space to destroy an asteroid?",
  answers: ["Armageddon", "Deep Impact", "Gravity", "Apollo 13"],
  correct: "Armageddon",
  difficulty: "hard",
  category: "movies"
},
{
  question: "Which movie features a detective hunting replicants in a futuristic city?",
  answers: ["Blade Runner", "Matrix", "Minority Report", "Total Recall"],
  correct: "Blade Runner",
  difficulty: "hard",
  category: "movies"
},
{
  question: "Which movie features a box of chocolates quote?",
  answers: ["Forrest Gump", "Titanic", "Green Mile", "Cast Away"],
  correct: "Forrest Gump",
  difficulty: "hard",
  category: "movies"
},
{
  question: "Which movie features a sinking luxury liner?",
  answers: ["Titanic", "Poseidon", "Jaws", "Pearl Harbor"],
  correct: "Titanic",
  difficulty: "hard",
  category: "movies"
},
{
  question: "Which movie features a time loop repeating the same day?",
  answers: ["Groundhog Day", "Edge of Tomorrow", "Tenet", "Inception"],
  correct: "Groundhog Day",
  difficulty: "hard",
  category: "movies"
},
{
  question: "Which film was the first full-length animated feature film ever released?",
  answers: ["Snow White and the Seven Dwarfs", "Fantasia", "Pinocchio", "Bambi"],
  correct: "Snow White and the Seven Dwarfs",
  difficulty: "expert",
  category: "movies"
},
{
  question: "Which director is known for the movie 2001: A Space Odyssey?",
  answers: ["Stanley Kubrick", "Ridley Scott", "Christopher Nolan", "Steven Spielberg"],
  correct: "Stanley Kubrick",
  difficulty: "expert",
  category: "movies"
},
{
  question: "Which film won the first Academy Award for Best Picture in 1929?",
  answers: ["Wings", "Sunrise", "Metropolis", "The Jazz Singer"],
  correct: "Wings",
  difficulty: "expert",
  category: "movies"
},
{
  question: "Which actor portrayed Daniel Plainview in There Will Be Blood?",
  answers: ["Daniel Day-Lewis", "Joaquin Phoenix", "Philip Seymour Hoffman", "Tom Hardy"],
  correct: "Daniel Day-Lewis",
  difficulty: "expert",
  category: "movies"
},
{
  question: "Which movie features the character HAL 9000?",
  answers: ["2001: A Space Odyssey", "Blade Runner", "Alien", "Solaris"],
  correct: "2001: A Space Odyssey",
  difficulty: "expert",
  category: "movies"
},
{
  question: "Which Italian director made the film La Dolce Vita?",
  answers: ["Federico Fellini", "Vittorio De Sica", "Michelangelo Antonioni", "Bernardo Bertolucci"],
  correct: "Federico Fellini",
  difficulty: "expert",
  category: "movies"
},
{
  question: "Which film features the famous Odessa Steps sequence?",
  answers: ["Battleship Potemkin", "Metropolis", "Citizen Kane", "Nosferatu"],
  correct: "Battleship Potemkin",
  difficulty: "expert",
  category: "movies"
},
{
  question: "Which movie is considered the first 'talkie' with synchronized dialogue?",
  answers: ["The Jazz Singer", "Metropolis", "City Lights", "Modern Times"],
  correct: "The Jazz Singer",
  difficulty: "expert",
  category: "movies"
},
{
  question: "Which director made the psychological thriller Vertigo?",
  answers: ["Alfred Hitchcock", "Orson Welles", "Billy Wilder", "John Ford"],
  correct: "Alfred Hitchcock",
  difficulty: "expert",
  category: "movies"
},
{
  question: "Which film won Best Picture and Best Director for Bong Joon-ho?",
  answers: ["Parasite", "Oldboy", "Memories of Murder", "Snowpiercer"],
  correct: "Parasite",
  difficulty: "expert",
  category: "movies"
},
{
  question: "Which actor played Travis Bickle in Taxi Driver?",
  answers: ["Robert De Niro", "Al Pacino", "Jack Nicholson", "Dustin Hoffman"],
  correct: "Robert De Niro",
  difficulty: "expert",
  category: "movies"
},
{
  question: "Which film introduced the bullet-time effect popularized in action cinema?",
  answers: ["The Matrix", "Terminator 2", "Blade Runner", "Minority Report"],
  correct: "The Matrix",
  difficulty: "expert",
  category: "movies"
},
{
  question: "Which movie features the character Norman Bates?",
  answers: ["Psycho", "Halloween", "The Shining", "Silence of the Lambs"],
  correct: "Psycho",
  difficulty: "expert",
  category: "movies"
},
{
  question: "Which film features the quote 'Rosebud'?",
  answers: ["Citizen Kane", "Casablanca", "Gone with the Wind", "The Maltese Falcon"],
  correct: "Citizen Kane",
  difficulty: "expert",
  category: "movies"
},
{
  question: "Which director made the epic film Lawrence of Arabia?",
  answers: ["David Lean", "Stanley Kubrick", "Ridley Scott", "John Huston"],
  correct: "David Lean",
  difficulty: "expert",
  category: "movies"
},
{
  question: "Which film is widely regarded as the first blockbuster summer movie?",
  answers: ["Jaws", "Star Wars", "Superman", "Rocky"],
  correct: "Jaws",
  difficulty: "expert",
  category: "movies"
},
{
  question: "Which actor starred as Maximus in Gladiator?",
  answers: ["Russell Crowe", "Mel Gibson", "Gerard Butler", "Hugh Jackman"],
  correct: "Russell Crowe",
  difficulty: "expert",
  category: "movies"
},
{
  question: "Which film features a continuous hallway fight scene shot in one take style?",
  answers: ["Oldboy", "The Raid", "John Wick", "Kill Bill"],
  correct: "Oldboy",
  difficulty: "expert",
  category: "movies"
},
{
  question: "Which director made the movie Mulholland Drive?",
  answers: ["David Lynch", "Coen Brothers", "Paul Thomas Anderson", "Darren Aronofsky"],
  correct: "David Lynch",
  difficulty: "expert",
  category: "movies"
},
{
  question: "Which film won 11 Academy Awards tying the record with Titanic and Ben-Hur?",
  answers: ["The Lord of the Rings: The Return of the King", "Avatar", "Gladiator", "Braveheart"],
  correct: "The Lord of the Rings: The Return of the King",
  difficulty: "expert",
  category: "movies"
},
{
  question: "Which instrument has black and white keys?",
  answers: ["Piano", "Guitar", "Drums", "Violin"],
  correct: "Piano",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which instrument has six strings?",
  answers: ["Guitar", "Piano", "Flute", "Trumpet"],
  correct: "Guitar",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which pop star is known as the 'King of Pop'?",
  answers: ["Michael Jackson", "Elvis Presley", "Prince", "Justin Bieber"],
  correct: "Michael Jackson",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which singer is known for the song 'Shape of You'?",
  answers: ["Ed Sheeran", "Justin Timberlake", "Shawn Mendes", "Harry Styles"],
  correct: "Ed Sheeran",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which instrument is played by hitting it with sticks?",
  answers: ["Drums", "Violin", "Flute", "Piano"],
  correct: "Drums",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which female singer sang 'Bad Romance'?",
  answers: ["Lady Gaga", "Madonna", "Rihanna", "Beyoncé"],
  correct: "Lady Gaga",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which band sang 'Hey Jude'?",
  answers: ["The Beatles", "The Rolling Stones", "Queen", "ABBA"],
  correct: "The Beatles",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which instrument is blown to make sound?",
  answers: ["Flute", "Drums", "Guitar", "Piano"],
  correct: "Flute",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which singer is known for 'Thriller'?",
  answers: ["Michael Jackson", "Prince", "Elton John", "Usher"],
  correct: "Michael Jackson",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which music group sang 'Dancing Queen'?",
  answers: ["ABBA", "Bee Gees", "Queen", "Spice Girls"],
  correct: "ABBA",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which instrument is small and often used in classical orchestras?",
  answers: ["Violin", "Drums", "Guitar", "Trumpet"],
  correct: "Violin",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which singer is known for the song 'Rolling in the Deep'?",
  answers: ["Adele", "Taylor Swift", "Rihanna", "Katy Perry"],
  correct: "Adele",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which singer is known for wearing a white glove during performances?",
  answers: ["Michael Jackson", "Elvis Presley", "Prince", "Freddie Mercury"],
  correct: "Michael Jackson",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which instrument is often used in rock music and is electric?",
  answers: ["Electric Guitar", "Violin", "Piano", "Flute"],
  correct: "Electric Guitar",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which singer is known for the hit 'Firework'?",
  answers: ["Katy Perry", "Lady Gaga", "Ariana Grande", "Dua Lipa"],
  correct: "Katy Perry",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which band is famous for the song 'Bohemian Rhapsody'?",
  answers: ["Queen", "The Beatles", "U2", "Coldplay"],
  correct: "Queen",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which singer is known as the 'Queen of Pop'?",
  answers: ["Madonna", "Britney Spears", "Lady Gaga", "Rihanna"],
  correct: "Madonna",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which instrument is large and has pedals?",
  answers: ["Piano", "Guitar", "Drums", "Violin"],
  correct: "Piano",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which singer sang 'Shake It Off'?",
  answers: ["Taylor Swift", "Adele", "Rihanna", "Billie Eilish"],
  correct: "Taylor Swift",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which singer is known for the song 'Blinding Lights'?",
  answers: ["The Weeknd", "Drake", "Ed Sheeran", "Justin Bieber"],
  correct: "The Weeknd",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which band is famous for 'Yellow Submarine'?",
  answers: ["The Beatles", "Queen", "ABBA", "Coldplay"],
  correct: "The Beatles",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which instrument is often used in marching bands and is brass?",
  answers: ["Trumpet", "Flute", "Violin", "Guitar"],
  correct: "Trumpet",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which singer is known for the song 'Poker Face'?",
  answers: ["Lady Gaga", "Madonna", "Rihanna", "Adele"],
  correct: "Lady Gaga",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which singer is known for the song 'Umbrella'?",
  answers: ["Rihanna", "Beyoncé", "Katy Perry", "Ariana Grande"],
  correct: "Rihanna",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which singer is known for the song 'Happy'?",
  answers: ["Pharrell Williams", "Bruno Mars", "Justin Timberlake", "Usher"],
  correct: "Pharrell Williams",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which singer is known for 'Sorry'?",
  answers: ["Justin Bieber", "Shawn Mendes", "Drake", "Ed Sheeran"],
  correct: "Justin Bieber",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which singer is known for 'Hips Don't Lie'?",
  answers: ["Shakira", "Jennifer Lopez", "Beyoncé", "Rihanna"],
  correct: "Shakira",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which band sang 'Viva La Vida'?",
  answers: ["Coldplay", "U2", "Imagine Dragons", "Maroon 5"],
  correct: "Coldplay",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which instrument is played by blowing into a mouthpiece and sliding a tube?",
  answers: ["Trombone", "Trumpet", "Clarinet", "Flute"],
  correct: "Trombone",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which singer is known for the song 'Someone Like You'?",
  answers: ["Adele", "Taylor Swift", "Rihanna", "Dua Lipa"],
  correct: "Adele",
  difficulty: "easy",
  category: "music"
},
{
  question: "Which band released the album 'Dark Side of the Moon'?",
  answers: ["Pink Floyd", "Queen", "The Beatles", "Led Zeppelin"],
  correct: "Pink Floyd",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which singer is known as the 'Material Girl'?",
  answers: ["Madonna", "Lady Gaga", "Britney Spears", "Cher"],
  correct: "Madonna",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which genre is associated with artists like Tupac and Notorious B.I.G.?",
  answers: ["Hip Hop", "Rock", "Country", "Jazz"],
  correct: "Hip Hop",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which band is fronted by Bono?",
  answers: ["U2", "Coldplay", "Oasis", "Radiohead"],
  correct: "U2",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which singer released the album '25'?",
  answers: ["Adele", "Taylor Swift", "Rihanna", "Katy Perry"],
  correct: "Adele",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which instrument did Louis Armstrong famously play?",
  answers: ["Trumpet", "Saxophone", "Piano", "Clarinet"],
  correct: "Trumpet",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which band sang 'Smells Like Teen Spirit'?",
  answers: ["Nirvana", "Pearl Jam", "Green Day", "Red Hot Chili Peppers"],
  correct: "Nirvana",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which singer is known for the album 'Future Nostalgia'?",
  answers: ["Dua Lipa", "Ariana Grande", "Billie Eilish", "Lorde"],
  correct: "Dua Lipa",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which music genre originated in Jamaica?",
  answers: ["Reggae", "Jazz", "Blues", "Country"],
  correct: "Reggae",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which band released the song 'Wonderwall'?",
  answers: ["Oasis", "Blur", "Coldplay", "U2"],
  correct: "Oasis",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which singer is known for the album '1989'?",
  answers: ["Taylor Swift", "Adele", "Katy Perry", "Selena Gomez"],
  correct: "Taylor Swift",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which composer wrote 'The Four Seasons'?",
  answers: ["Vivaldi", "Mozart", "Beethoven", "Bach"],
  correct: "Vivaldi",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which band released the album 'Back in Black'?",
  answers: ["AC/DC", "Metallica", "Guns N' Roses", "Queen"],
  correct: "AC/DC",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which singer is known for the song 'Royals'?",
  answers: ["Lorde", "Billie Eilish", "Halsey", "Dua Lipa"],
  correct: "Lorde",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which instrument is Yo-Yo Ma famous for playing?",
  answers: ["Cello", "Violin", "Piano", "Flute"],
  correct: "Cello",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which singer released the hit 'Old Town Road'?",
  answers: ["Lil Nas X", "Drake", "Post Malone", "Travis Scott"],
  correct: "Lil Nas X",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which band is known for the song 'Hotel California'?",
  answers: ["Eagles", "Fleetwood Mac", "Journey", "Queen"],
  correct: "Eagles",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which music genre is characterized by improvisation and swing rhythm?",
  answers: ["Jazz", "Rock", "Pop", "Hip Hop"],
  correct: "Jazz",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which singer is known for the album 'When We All Fall Asleep, Where Do We Go?'?",
  answers: ["Billie Eilish", "Lorde", "Ariana Grande", "Halsey"],
  correct: "Billie Eilish",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which band released the song 'Enter Sandman'?",
  answers: ["Metallica", "Nirvana", "Pearl Jam", "Iron Maiden"],
  correct: "Metallica",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which singer is known for the song 'Grenade'?",
  answers: ["Bruno Mars", "The Weeknd", "Ed Sheeran", "Justin Timberlake"],
  correct: "Bruno Mars",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which composer became deaf later in life but continued composing?",
  answers: ["Beethoven", "Mozart", "Chopin", "Bach"],
  correct: "Beethoven",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which band is known for the album 'Rumours'?",
  answers: ["Fleetwood Mac", "Queen", "ABBA", "Pink Floyd"],
  correct: "Fleetwood Mac",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which singer released the song 'Take Me to Church'?",
  answers: ["Hozier", "Sam Smith", "Adele", "Lewis Capaldi"],
  correct: "Hozier",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which instrument is used in a DJ setup to control sound playback?",
  answers: ["Turntable", "Violin", "Trumpet", "Flute"],
  correct: "Turntable",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which band released the song 'Radioactive'?",
  answers: ["Imagine Dragons", "Coldplay", "Linkin Park", "Maroon 5"],
  correct: "Imagine Dragons",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which singer is known for the hit 'Levitating'?",
  answers: ["Dua Lipa", "Ariana Grande", "Rihanna", "Katy Perry"],
  correct: "Dua Lipa",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which band released the album 'Nevermind'?",
  answers: ["Nirvana", "Pearl Jam", "Green Day", "Red Hot Chili Peppers"],
  correct: "Nirvana",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which singer is known for the song 'Stay With Me'?",
  answers: ["Sam Smith", "Adele", "Lewis Capaldi", "Ed Sheeran"],
  correct: "Sam Smith",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which composer wrote the famous 'Moonlight Sonata'?",
  answers: ["Beethoven", "Mozart", "Chopin", "Bach"],
  correct: "Beethoven",
  difficulty: "medium",
  category: "music"
},
{
  question: "Which band released the album 'The Wall'?",
  answers: ["Pink Floyd", "Queen", "Led Zeppelin", "The Who"],
  correct: "Pink Floyd",
  difficulty: "hard",
  category: "music"
},
{
  question: "Which singer was the lead vocalist of Queen?",
  answers: ["Freddie Mercury", "Elton John", "David Bowie", "George Michael"],
  correct: "Freddie Mercury",
  difficulty: "hard",
  category: "music"
},
{
  question: "Which composer wrote the opera 'The Magic Flute'?",
  answers: ["Mozart", "Beethoven", "Verdi", "Wagner"],
  correct: "Mozart",
  difficulty: "hard",
  category: "music"
},
{
  question: "Which band released the album 'OK Computer'?",
  answers: ["Radiohead", "Coldplay", "Oasis", "Blur"],
  correct: "Radiohead",
  difficulty: "hard",
  category: "music"
},
{
  question: "Which singer is known for the album 'Purple Rain'?",
  answers: ["Prince", "Michael Jackson", "Stevie Wonder", "David Bowie"],
  correct: "Prince",
  difficulty: "hard",
  category: "music"
},
{
  question: "Which instrument has 88 keys on a standard model?",
  answers: ["Piano", "Organ", "Harpsichord", "Synthesizer"],
  correct: "Piano",
  difficulty: "hard",
  category: "music"
},
{
  question: "Which band released the song 'Stairway to Heaven'?",
  answers: ["Led Zeppelin", "Deep Purple", "Black Sabbath", "The Who"],
  correct: "Led Zeppelin",
  difficulty: "hard",
  category: "music"
},
{
  question: "Which composer wrote the ballet 'Swan Lake'?",
  answers: ["Tchaikovsky", "Stravinsky", "Prokofiev", "Rimsky-Korsakov"],
  correct: "Tchaikovsky",
  difficulty: "hard",
  category: "music"
},
{
  question: "Which singer is known for the album 'Born to Run'?",
  answers: ["Bruce Springsteen", "Bob Dylan", "Neil Young", "Tom Petty"],
  correct: "Bruce Springsteen",
  difficulty: "hard",
  category: "music"
},
{
  question: "Which band released the album 'Appetite for Destruction'?",
  answers: ["Guns N' Roses", "Metallica", "AC/DC", "Nirvana"],
  correct: "Guns N' Roses",
  difficulty: "hard",
  category: "music"
},
{
  question: "Which composer is known for the 'Ride of the Valkyries'?",
  answers: ["Wagner", "Verdi", "Mozart", "Beethoven"],
  correct: "Wagner",
  difficulty: "hard",
  category: "music"
},
{
  question: "Which singer released the album 'Back to Black'?",
  answers: ["Amy Winehouse", "Adele", "Duffy", "Lorde"],
  correct: "Amy Winehouse",
  difficulty: "hard",
  category: "music"
},
{
  question: "Which band released the song 'Sweet Child O' Mine'?",
  answers: ["Guns N' Roses", "Metallica", "Nirvana", "Bon Jovi"],
  correct: "Guns N' Roses",
  difficulty: "hard",
  category: "music"
},
{
  question: "Which composer wrote 'Boléro'?",
  answers: ["Ravel", "Debussy", "Saint-Saëns", "Bizet"],
  correct: "Ravel",
  difficulty: "hard",
  category: "music"
},
{
  question: "Which singer is known for the album 'The Eminem Show'?",
  answers: ["Eminem", "Dr. Dre", "Snoop Dogg", "50 Cent"],
  correct: "Eminem",
  difficulty: "hard",
  category: "music"
},
{
  question: "Which band released the album 'Master of Puppets'?",
  answers: ["Metallica", "Slayer", "Megadeth", "Anthrax"],
  correct: "Metallica",
  difficulty: "hard",
  category: "music"
},
{
  question: "Which composer wrote the 'New World Symphony'?",
  answers: ["Dvořák", "Brahms", "Mahler", "Liszt"],
  correct: "Dvořák",
  difficulty: "hard",
  category: "music"
},
{
  question: "Which singer is known for the album 'Thriller'?",
  answers: ["Michael Jackson", "Prince", "Stevie Wonder", "Lionel Richie"],
  correct: "Michael Jackson",
  difficulty: "hard",
  category: "music"
},
{
  question: "Which band released the song 'Paranoid'?",
  answers: ["Black Sabbath", "Deep Purple", "Iron Maiden", "Judas Priest"],
  correct: "Black Sabbath",
  difficulty: "hard",
  category: "music"
},
{
  question: "Which composer wrote 'The Four Seasons'?",
  answers: ["Vivaldi", "Mozart", "Bach", "Handel"],
  correct: "Vivaldi",
  difficulty: "hard",
  category: "music"
},
{
  question: "Which composer wrote the opera cycle 'The Ring of the Nibelung'?",
  answers: ["Richard Wagner", "Giuseppe Verdi", "Richard Strauss", "Gustav Mahler"],
  correct: "Richard Wagner",
  difficulty: "expert",
  category: "music"
},
{
  question: "Which jazz musician released the influential album 'Kind of Blue'?",
  answers: ["Miles Davis", "John Coltrane", "Louis Armstrong", "Herbie Hancock"],
  correct: "Miles Davis",
  difficulty: "expert",
  category: "music"
},
{
  question: "Which composer is known for the 'Goldberg Variations'?",
  answers: ["Johann Sebastian Bach", "Mozart", "Beethoven", "Handel"],
  correct: "Johann Sebastian Bach",
  difficulty: "expert",
  category: "music"
},
{
  question: "Which band released the progressive rock album 'Close to the Edge'?",
  answers: ["Yes", "Genesis", "King Crimson", "Rush"],
  correct: "Yes",
  difficulty: "expert",
  category: "music"
},
{
  question: "Which composer wrote the opera 'La Traviata'?",
  answers: ["Giuseppe Verdi", "Puccini", "Rossini", "Donizetti"],
  correct: "Giuseppe Verdi",
  difficulty: "expert",
  category: "music"
},
{
  question: "Which musician pioneered the use of prepared piano?",
  answers: ["John Cage", "Philip Glass", "Steve Reich", "Terry Riley"],
  correct: "John Cage",
  difficulty: "expert",
  category: "music"
},
{
  question: "Which band released the concept album 'Tommy'?",
  answers: ["The Who", "Pink Floyd", "Genesis", "Queen"],
  correct: "The Who",
  difficulty: "expert",
  category: "music"
},
{
  question: "Which composer wrote the symphonic poem 'Also sprach Zarathustra'?",
  answers: ["Richard Strauss", "Mahler", "Bruckner", "Liszt"],
  correct: "Richard Strauss",
  difficulty: "expert",
  category: "music"
},
{
  question: "Which artist released the influential hip hop album 'Illmatic'?",
  answers: ["Nas", "Jay-Z", "Notorious B.I.G.", "Wu-Tang Clan"],
  correct: "Nas",
  difficulty: "expert",
  category: "music"
},
{
  question: "Which composer wrote the ballet 'The Rite of Spring'?",
  answers: ["Igor Stravinsky", "Tchaikovsky", "Prokofiev", "Ravel"],
  correct: "Igor Stravinsky",
  difficulty: "expert",
  category: "music"
},
{
  question: "Which band released the album 'In the Court of the Crimson King'?",
  answers: ["King Crimson", "Yes", "Genesis", "Emerson Lake & Palmer"],
  correct: "King Crimson",
  difficulty: "expert",
  category: "music"
},
{
  question: "Which composer wrote the opera 'The Marriage of Figaro'?",
  answers: ["Mozart", "Verdi", "Rossini", "Wagner"],
  correct: "Mozart",
  difficulty: "expert",
  category: "music"
},
{
  question: "Which jazz saxophonist released the album 'A Love Supreme'?",
  answers: ["John Coltrane", "Miles Davis", "Charlie Parker", "Ornette Coleman"],
  correct: "John Coltrane",
  difficulty: "expert",
  category: "music"
},
{
  question: "Which composer is known for the minimalist work 'Music for 18 Musicians'?",
  answers: ["Steve Reich", "Philip Glass", "John Adams", "Terry Riley"],
  correct: "Steve Reich",
  difficulty: "expert",
  category: "music"
},
{
  question: "Which band released the album 'Selling England by the Pound'?",
  answers: ["Genesis", "Yes", "King Crimson", "Pink Floyd"],
  correct: "Genesis",
  difficulty: "expert",
  category: "music"
},
{
  question: "Which composer wrote the tone poem 'The Moldau'?",
  answers: ["Bedřich Smetana", "Dvořák", "Mahler", "Janáček"],
  correct: "Bedřich Smetana",
  difficulty: "expert",
  category: "music"
},
{
  question: "Which producer is known for pioneering the 'Wall of Sound' technique?",
  answers: ["Phil Spector", "George Martin", "Brian Eno", "Quincy Jones"],
  correct: "Phil Spector",
  difficulty: "expert",
  category: "music"
},
{
  question: "Which composer wrote the opera 'Madama Butterfly'?",
  answers: ["Giacomo Puccini", "Verdi", "Rossini", "Donizetti"],
  correct: "Giacomo Puccini",
  difficulty: "expert",
  category: "music"
},
{
  question: "Which band released the album 'Pet Sounds'?",
  answers: ["The Beach Boys", "The Beatles", "The Rolling Stones", "The Byrds"],
  correct: "The Beach Boys",
  difficulty: "expert",
  category: "music"
},
{
  question: "Which composer wrote the symphony 'From the New World'?",
  answers: ["Antonín Dvořák", "Mahler", "Brahms", "Tchaikovsky"],
  correct: "Antonín Dvořák",
  difficulty: "expert",
  category: "music"
},
{
  question: "What device do you use to make phone calls?",
  answers: ["Smartphone", "Television", "Printer", "Router"],
  correct: "Smartphone",
  difficulty: "easy",
  category: "technology"
},
{
  question: "What does a computer mouse control?",
  answers: ["Cursor", "Sound", "Internet", "Battery"],
  correct: "Cursor",
  difficulty: "easy",
  category: "technology"
},
{
  question: "Which device is used to print documents?",
  answers: ["Printer", "Scanner", "Monitor", "Speaker"],
  correct: "Printer",
  difficulty: "easy",
  category: "technology"
},
{
  question: "What part of a computer shows images and videos?",
  answers: ["Monitor", "Keyboard", "Mouse", "CPU"],
  correct: "Monitor",
  difficulty: "easy",
  category: "technology"
},
{
  question: "Which device is used to type text into a computer?",
  answers: ["Keyboard", "Mouse", "Speaker", "Camera"],
  correct: "Keyboard",
  difficulty: "easy",
  category: "technology"
},
{
  question: "What do we call the global network of computers?",
  answers: ["Internet", "Bluetooth", "Wi-Fi", "USB"],
  correct: "Internet",
  difficulty: "easy",
  category: "technology"
},
{
  question: "Which device is used to listen to music?",
  answers: ["Headphones", "Printer", "Router", "Scanner"],
  correct: "Headphones",
  difficulty: "easy",
  category: "technology"
},
{
  question: "What device connects your home network to the internet?",
  answers: ["Router", "Monitor", "Keyboard", "Mouse"],
  correct: "Router",
  difficulty: "easy",
  category: "technology"
},
{
  question: "Which company makes the iPhone?",
  answers: ["Apple", "Samsung", "Microsoft", "Google"],
  correct: "Apple",
  difficulty: "easy",
  category: "technology"
},
{
  question: "Which device is used to take digital photos?",
  answers: ["Camera", "Printer", "Speaker", "Router"],
  correct: "Camera",
  difficulty: "easy",
  category: "technology"
},
{
  question: "What is used to store files on a computer?",
  answers: ["Hard Drive", "Monitor", "Mouse", "Speaker"],
  correct: "Hard Drive",
  difficulty: "easy",
  category: "technology"
},
{
  question: "Which company develops the Windows operating system?",
  answers: ["Microsoft", "Apple", "Google", "IBM"],
  correct: "Microsoft",
  difficulty: "easy",
  category: "technology"
},
{
  question: "What does Wi-Fi allow you to do?",
  answers: ["Connect to the internet wirelessly", "Print documents", "Charge devices", "Store files"],
  correct: "Connect to the internet wirelessly",
  difficulty: "easy",
  category: "technology"
},
{
  question: "Which device is used to record videos?",
  answers: ["Camera", "Speaker", "Router", "Keyboard"],
  correct: "Camera",
  difficulty: "easy",
  category: "technology"
},
{
  question: "What device displays sound from a computer?",
  answers: ["Speakers", "Monitor", "Mouse", "Printer"],
  correct: "Speakers",
  difficulty: "easy",
  category: "technology"
},
{
  question: "Which company created Android?",
  answers: ["Google", "Apple", "Microsoft", "Nokia"],
  correct: "Google",
  difficulty: "easy",
  category: "technology"
},
{
  question: "Which device is portable and used for computing on the go?",
  answers: ["Laptop", "Desktop", "Printer", "Router"],
  correct: "Laptop",
  difficulty: "easy",
  category: "technology"
},
{
  question: "What is used to move the cursor on a laptop without a mouse?",
  answers: ["Touchpad", "Keyboard", "Monitor", "Speaker"],
  correct: "Touchpad",
  difficulty: "easy",
  category: "technology"
},
{
  question: "Which device scans paper documents into digital format?",
  answers: ["Scanner", "Printer", "Monitor", "Speaker"],
  correct: "Scanner",
  difficulty: "easy",
  category: "technology"
},
{
  question: "What is the main function of a battery?",
  answers: ["Provide power", "Store files", "Display images", "Connect to internet"],
  correct: "Provide power",
  difficulty: "easy",
  category: "technology"
},
{
  question: "Which device is used to play video games?",
  answers: ["Game Console", "Printer", "Router", "Scanner"],
  correct: "Game Console",
  difficulty: "easy",
  category: "technology"
},
{
  question: "What is used to charge electronic devices?",
  answers: ["Charger", "Speaker", "Mouse", "Keyboard"],
  correct: "Charger",
  difficulty: "easy",
  category: "technology"
},
{
  question: "Which device helps you see in dark environments digitally?",
  answers: ["Flashlight", "Printer", "Router", "Scanner"],
  correct: "Flashlight",
  difficulty: "easy",
  category: "technology"
},
{
  question: "What is used to browse websites?",
  answers: ["Web Browser", "Printer", "Speaker", "Monitor"],
  correct: "Web Browser",
  difficulty: "easy",
  category: "technology"
},
{
  question: "Which company makes the PlayStation?",
  answers: ["Sony", "Microsoft", "Nintendo", "Apple"],
  correct: "Sony",
  difficulty: "easy",
  category: "technology"
},
{
  question: "Which device connects to Bluetooth headphones?",
  answers: ["Smartphone", "Printer", "Router", "Scanner"],
  correct: "Smartphone",
  difficulty: "easy",
  category: "technology"
},
{
  question: "What is used to store photos online?",
  answers: ["Cloud Storage", "Keyboard", "Monitor", "Speaker"],
  correct: "Cloud Storage",
  difficulty: "easy",
  category: "technology"
},
{
  question: "Which company makes the Xbox?",
  answers: ["Microsoft", "Sony", "Nintendo", "Google"],
  correct: "Microsoft",
  difficulty: "easy",
  category: "technology"
},
{
  question: "Which device is used to read e-books?",
  answers: ["E-reader", "Printer", "Router", "Scanner"],
  correct: "E-reader",
  difficulty: "easy",
  category: "technology"
},
{
  question: "What is used to protect computers from viruses?",
  answers: ["Antivirus Software", "Printer", "Speaker", "Monitor"],
  correct: "Antivirus Software",
  difficulty: "easy",
  category: "technology"
},
{
  question: "What does CPU stand for?",
  answers: ["Central Processing Unit", "Computer Personal Unit", "Central Print Unit", "Control Power Unit"],
  correct: "Central Processing Unit",
  difficulty: "medium",
  category: "technology"
},
{
  question: "Which company created the Windows operating system?",
  answers: ["Microsoft", "Apple", "Google", "IBM"],
  correct: "Microsoft",
  difficulty: "medium",
  category: "technology"
},
{
  question: "What does URL stand for?",
  answers: ["Uniform Resource Locator", "Universal Resource Link", "United Router Line", "User Remote Login"],
  correct: "Uniform Resource Locator",
  difficulty: "medium",
  category: "technology"
},
{
  question: "Which device converts digital signals into analog signals for internet access?",
  answers: ["Modem", "Router", "Switch", "Hub"],
  correct: "Modem",
  difficulty: "medium",
  category: "technology"
},
{
  question: "What type of software is used to write documents?",
  answers: ["Word Processor", "Browser", "Antivirus", "Media Player"],
  correct: "Word Processor",
  difficulty: "medium",
  category: "technology"
},
{
  question: "Which company developed the Android operating system?",
  answers: ["Google", "Apple", "Microsoft", "Samsung"],
  correct: "Google",
  difficulty: "medium",
  category: "technology"
},
{
  question: "What does RAM stand for?",
  answers: ["Random Access Memory", "Read Access Memory", "Rapid Action Module", "Run Active Memory"],
  correct: "Random Access Memory",
  difficulty: "medium",
  category: "technology"
},
{
  question: "Which protocol is commonly used to browse websites?",
  answers: ["HTTP", "FTP", "SMTP", "SSH"],
  correct: "HTTP",
  difficulty: "medium",
  category: "technology"
},
{
  question: "What is the main function of a graphics card?",
  answers: ["Render images and video", "Store files", "Connect to internet", "Play sound"],
  correct: "Render images and video",
  difficulty: "medium",
  category: "technology"
},
{
  question: "Which programming language is commonly used for web styling?",
  answers: ["CSS", "Python", "C++", "Java"],
  correct: "CSS",
  difficulty: "medium",
  category: "technology"
},
{
  question: "What type of storage device has no moving parts?",
  answers: ["SSD", "HDD", "DVD", "Floppy Disk"],
  correct: "SSD",
  difficulty: "medium",
  category: "technology"
},
{
  question: "Which device distributes internet connection to multiple devices?",
  answers: ["Router", "Printer", "Scanner", "Monitor"],
  correct: "Router",
  difficulty: "medium",
  category: "technology"
},
{
  question: "What is phishing mainly used for?",
  answers: ["Stealing personal data", "Improving internet speed", "Fixing software bugs", "Charging devices"],
  correct: "Stealing personal data",
  difficulty: "medium",
  category: "technology"
},
{
  question: "Which company makes the Chrome web browser?",
  answers: ["Google", "Microsoft", "Apple", "Mozilla"],
  correct: "Google",
  difficulty: "medium",
  category: "technology"
},
{
  question: "What does USB stand for?",
  answers: ["Universal Serial Bus", "United System Base", "Universal Storage Block", "User Signal Board"],
  correct: "Universal Serial Bus",
  difficulty: "medium",
  category: "technology"
},
{
  question: "Which operating system is developed by Apple?",
  answers: ["macOS", "Windows", "Linux", "Android"],
  correct: "macOS",
  difficulty: "medium",
  category: "technology"
},
{
  question: "What is the main purpose of antivirus software?",
  answers: ["Protect against malware", "Increase storage", "Improve graphics", "Boost internet speed"],
  correct: "Protect against malware",
  difficulty: "medium",
  category: "technology"
},
{
  question: "Which device is used to input sound into a computer?",
  answers: ["Microphone", "Speaker", "Monitor", "Printer"],
  correct: "Microphone",
  difficulty: "medium",
  category: "technology"
},
{
  question: "What is cloud computing mainly used for?",
  answers: ["Storing and accessing data online", "Printing documents", "Charging batteries", "Playing games"],
  correct: "Storing and accessing data online",
  difficulty: "medium",
  category: "technology"
},
{
  question: "Which programming language runs in web browsers?",
  answers: ["JavaScript", "C#", "Python", "Java"],
  correct: "JavaScript",
  difficulty: "medium",
  category: "technology"
},
{
  question: "What does HTML stand for?",
  answers: ["HyperText Markup Language", "HighText Machine Language", "Hyper Transfer Markup Link", "Home Tool Markup Language"],
  correct: "HyperText Markup Language",
  difficulty: "medium",
  category: "technology"
},
{
  question: "Which company developed the Firefox browser?",
  answers: ["Mozilla", "Google", "Microsoft", "Apple"],
  correct: "Mozilla",
  difficulty: "medium",
  category: "technology"
},
{
  question: "What is the main function of a firewall?",
  answers: ["Block unauthorized access", "Store files", "Improve graphics", "Charge devices"],
  correct: "Block unauthorized access",
  difficulty: "medium",
  category: "technology"
},
{
  question: "Which file format is commonly used for images?",
  answers: ["JPEG", "MP3", "PDF", "DOCX"],
  correct: "JPEG",
  difficulty: "medium",
  category: "technology"
},
{
  question: "Which company makes the Windows Surface devices?",
  answers: ["Microsoft", "Apple", "Samsung", "Dell"],
  correct: "Microsoft",
  difficulty: "medium",
  category: "technology"
},
{
  question: "What does VPN stand for?",
  answers: ["Virtual Private Network", "Visual Program Node", "Verified Public Network", "Virtual Program Network"],
  correct: "Virtual Private Network",
  difficulty: "medium",
  category: "technology"
},
{
  question: "Which programming language is known for web page structure?",
  answers: ["HTML", "CSS", "Python", "SQL"],
  correct: "HTML",
  difficulty: "medium",
  category: "technology"
},
{
  question: "What is the main purpose of a database?",
  answers: ["Store organized data", "Play videos", "Send emails", "Charge devices"],
  correct: "Store organized data",
  difficulty: "medium",
  category: "technology"
},
{
  question: "Which device is used to store data externally?",
  answers: ["External Hard Drive", "Monitor", "Speaker", "Keyboard"],
  correct: "External Hard Drive",
  difficulty: "medium",
  category: "technology"
},
{
  question: "Which company created the Play Store?",
  answers: ["Google", "Apple", "Microsoft", "Amazon"],
  correct: "Google",
  difficulty: "medium",
  category: "technology"
},
{
  question: "Which company originally developed the UNIX operating system?",
  answers: ["AT&T", "IBM", "Microsoft", "Apple"],
  correct: "AT&T",
  difficulty: "hard",
  category: "technology"
},
{
  question: "What does GPU stand for?",
  answers: ["Graphics Processing Unit", "General Processing Unit", "Graphical Power Utility", "Global Program Unit"],
  correct: "Graphics Processing Unit",
  difficulty: "hard",
  category: "technology"
},
{
  question: "Which protocol is used to send emails?",
  answers: ["SMTP", "HTTP", "FTP", "SSH"],
  correct: "SMTP",
  difficulty: "hard",
  category: "technology"
},
{
  question: "Which programming language is primarily used for Android app development?",
  answers: ["Kotlin", "Swift", "Ruby", "Go"],
  correct: "Kotlin",
  difficulty: "hard",
  category: "technology"
},
{
  question: "Which company developed the first commercially successful personal computer (IBM PC)?",
  answers: ["IBM", "Apple", "Microsoft", "Compaq"],
  correct: "IBM",
  difficulty: "hard",
  category: "technology"
},
{
  question: "What type of memory is non-volatile?",
  answers: ["ROM", "RAM", "Cache", "Register"],
  correct: "ROM",
  difficulty: "hard",
  category: "technology"
},
{
  question: "Which port number is commonly used for HTTPS?",
  answers: ["443", "80", "21", "25"],
  correct: "443",
  difficulty: "hard",
  category: "technology"
},
{
  question: "Which programming paradigm is Java primarily associated with?",
  answers: ["Object-Oriented", "Functional", "Procedural", "Declarative"],
  correct: "Object-Oriented",
  difficulty: "hard",
  category: "technology"
},
{
  question: "Which database language is used to query relational databases?",
  answers: ["SQL", "HTML", "CSS", "XML"],
  correct: "SQL",
  difficulty: "hard",
  category: "technology"
},
{
  question: "Which network topology connects all devices to a central hub?",
  answers: ["Star", "Ring", "Bus", "Mesh"],
  correct: "Star",
  difficulty: "hard",
  category: "technology"
},
{
  question: "Which company created the Java programming language?",
  answers: ["Sun Microsystems", "Microsoft", "IBM", "Oracle"],
  correct: "Sun Microsystems",
  difficulty: "hard",
  category: "technology"
},
{
  question: "Which file system is commonly used by Windows?",
  answers: ["NTFS", "EXT4", "HFS+", "FATX"],
  correct: "NTFS",
  difficulty: "hard",
  category: "technology"
},
{
  question: "Which command is used to test network connectivity in most systems?",
  answers: ["ping", "connect", "trace", "route"],
  correct: "ping",
  difficulty: "hard",
  category: "technology"
},
{
  question: "Which company developed the Swift programming language?",
  answers: ["Apple", "Google", "Microsoft", "IBM"],
  correct: "Apple",
  difficulty: "hard",
  category: "technology"
},
{
  question: "What type of attack floods a server with traffic to make it unavailable?",
  answers: ["DDoS", "Phishing", "Spoofing", "Sniffing"],
  correct: "DDoS",
  difficulty: "hard",
  category: "technology"
},
{
  question: "Which protocol is used for secure remote login?",
  answers: ["SSH", "FTP", "HTTP", "POP3"],
  correct: "SSH",
  difficulty: "hard",
  category: "technology"
},
{
  question: "Which programming language is known for its use in data science and AI?",
  answers: ["Python", "C", "PHP", "Pascal"],
  correct: "Python",
  difficulty: "hard",
  category: "technology"
},
{
  question: "Which storage technology uses magnetic spinning disks?",
  answers: ["HDD", "SSD", "NVMe", "Flash"],
  correct: "HDD",
  difficulty: "hard",
  category: "technology"
},
{
  question: "Which company developed the Linux kernel?",
  answers: ["Community led by Linus Torvalds", "Microsoft", "IBM", "Apple"],
  correct: "Community led by Linus Torvalds",
  difficulty: "hard",
  category: "technology"
},
{
  question: "Which markup language is used to define structured data on the web?",
  answers: ["XML", "CSS", "SQL", "C++"],
  correct: "XML",
  difficulty: "hard",
  category: "technology"
},
{
  question: "Which law states that the number of transistors on a microchip doubles approximately every two years?",
  answers: ["Moore's Law", "Murphy's Law", "Metcalfe's Law", "Amdahl's Law"],
  correct: "Moore's Law",
  difficulty: "expert",
  category: "technology"
},
{
  question: "Which data structure operates on a Last In, First Out principle?",
  answers: ["Stack", "Queue", "Tree", "Graph"],
  correct: "Stack",
  difficulty: "expert",
  category: "technology"
},
{
  question: "Which protocol is used to assign IP addresses automatically?",
  answers: ["DHCP", "DNS", "FTP", "HTTP"],
  correct: "DHCP",
  difficulty: "expert",
  category: "technology"
},
{
  question: "Which company developed the first graphical web browser Mosaic?",
  answers: ["NCSA", "Microsoft", "Apple", "Netscape"],
  correct: "NCSA",
  difficulty: "expert",
  category: "technology"
},
{
  question: "Which scheduling algorithm gives each process a fixed time slice?",
  answers: ["Round Robin", "FIFO", "Shortest Job First", "Priority Scheduling"],
  correct: "Round Robin",
  difficulty: "expert",
  category: "technology"
},
{
  question: "Which network layer is responsible for routing packets?",
  answers: ["Network Layer", "Transport Layer", "Application Layer", "Data Link Layer"],
  correct: "Network Layer",
  difficulty: "expert",
  category: "technology"
},
{
  question: "Which programming language introduced the concept of pointers extensively?",
  answers: ["C", "Java", "Python", "Ruby"],
  correct: "C",
  difficulty: "expert",
  category: "technology"
},
{
  question: "Which protocol translates domain names into IP addresses?",
  answers: ["DNS", "DHCP", "SMTP", "SNMP"],
  correct: "DNS",
  difficulty: "expert",
  category: "technology"
},
{
  question: "Which database model organizes data in tables with rows and columns?",
  answers: ["Relational", "Hierarchical", "Network", "Object"],
  correct: "Relational",
  difficulty: "expert",
  category: "technology"
},
{
  question: "Which encryption standard replaced DES?",
  answers: ["AES", "RSA", "SHA", "MD5"],
  correct: "AES",
  difficulty: "expert",
  category: "technology"
},
{
  question: "Which company created the Git version control system?",
  answers: ["Linux Foundation", "Microsoft", "Google", "IBM"],
  correct: "Linux Foundation",
  difficulty: "expert",
  category: "technology"
},
{
  question: "Which concept allows multiple virtual machines to run on one physical machine?",
  answers: ["Virtualization", "Caching", "Threading", "Overclocking"],
  correct: "Virtualization",
  difficulty: "expert",
  category: "technology"
},
{
  question: "Which algorithm is commonly used for public key encryption?",
  answers: ["RSA", "AES", "DES", "SHA"],
  correct: "RSA",
  difficulty: "expert",
  category: "technology"
},
{
  question: "Which programming paradigm emphasizes functions without mutable state?",
  answers: ["Functional Programming", "Object-Oriented", "Procedural", "Imperative"],
  correct: "Functional Programming",
  difficulty: "expert",
  category: "technology"
},
{
  question: "Which unit measures CPU clock speed?",
  answers: ["Hertz", "Bytes", "Watts", "Pixels"],
  correct: "Hertz",
  difficulty: "expert",
  category: "technology"
},
{
  question: "Which storage interface is faster than SATA and commonly used for SSDs?",
  answers: ["NVMe", "IDE", "USB", "PCI"],
  correct: "NVMe",
  difficulty: "expert",
  category: "technology"
},
{
  question: "Which attack involves intercepting communication between two parties?",
  answers: ["Man-in-the-Middle", "DDoS", "Phishing", "Brute Force"],
  correct: "Man-in-the-Middle",
  difficulty: "expert",
  category: "technology"
},
{
  question: "Which HTTP status code means 'Not Found'?",
  answers: ["404", "200", "500", "301"],
  correct: "404",
  difficulty: "expert",
  category: "technology"
},
{
  question: "Which process manages memory allocation and process scheduling in an OS?",
  answers: ["Kernel", "Shell", "Driver", "Compiler"],
  correct: "Kernel",
  difficulty: "expert",
  category: "technology"
},
{
  question: "Which programming language was designed for statistical computing and graphics?",
  answers: ["R", "Go", "Swift", "Rust"],
  correct: "R",
  difficulty: "expert",
  category: "technology"
},
{
  question: "How many days are in a week?",
  answers: ["7", "5", "6", "8"],
  correct: "7",
  difficulty: "easy",
  category: "general"
},
{
  question: "What color is the sky on a clear day?",
  answers: ["Blue", "Green", "Red", "Yellow"],
  correct: "Blue",
  difficulty: "easy",
  category: "general"
},
{
  question: "How many legs does a spider have?",
  answers: ["8", "6", "4", "10"],
  correct: "8",
  difficulty: "easy",
  category: "general"
},
{
  question: "Which animal is known as man's best friend?",
  answers: ["Dog", "Cat", "Horse", "Cow"],
  correct: "Dog",
  difficulty: "easy",
  category: "general"
},
{
  question: "How many months are in a year?",
  answers: ["12", "10", "11", "13"],
  correct: "12",
  difficulty: "easy",
  category: "general"
},
{
  question: "What do bees make?",
  answers: ["Honey", "Milk", "Bread", "Cheese"],
  correct: "Honey",
  difficulty: "easy",
  category: "general"
},
{
  question: "What is the opposite of hot?",
  answers: ["Cold", "Warm", "Wet", "Dry"],
  correct: "Cold",
  difficulty: "easy",
  category: "general"
},
{
  question: "Which shape has three sides?",
  answers: ["Triangle", "Square", "Circle", "Rectangle"],
  correct: "Triangle",
  difficulty: "easy",
  category: "general"
},
{
  question: "What do you drink that comes from cows?",
  answers: ["Milk", "Juice", "Water", "Tea"],
  correct: "Milk",
  difficulty: "easy",
  category: "general"
},
{
  question: "Which season is usually the coldest?",
  answers: ["Winter", "Summer", "Spring", "Autumn"],
  correct: "Winter",
  difficulty: "easy",
  category: "general"
},
{
  question: "What do you use to cut paper?",
  answers: ["Scissors", "Fork", "Spoon", "Cup"],
  correct: "Scissors",
  difficulty: "easy",
  category: "general"
},
{
  question: "How many wheels does a bicycle have?",
  answers: ["2", "3", "4", "1"],
  correct: "2",
  difficulty: "easy",
  category: "general"
},
{
  question: "Which fruit is yellow and curved?",
  answers: ["Banana", "Apple", "Orange", "Pear"],
  correct: "Banana",
  difficulty: "easy",
  category: "general"
},
{
  question: "What do you wear on your feet?",
  answers: ["Shoes", "Gloves", "Hat", "Scarf"],
  correct: "Shoes",
  difficulty: "easy",
  category: "general"
},
{
  question: "Which animal says 'moo'?",
  answers: ["Cow", "Dog", "Cat", "Horse"],
  correct: "Cow",
  difficulty: "easy",
  category: "general"
},
{
  question: "What do you use to write on paper?",
  answers: ["Pen", "Plate", "Knife", "Cup"],
  correct: "Pen",
  difficulty: "easy",
  category: "general"
},
{
  question: "What color are most school buses?",
  answers: ["Yellow", "Blue", "Green", "Black"],
  correct: "Yellow",
  difficulty: "easy",
  category: "general"
},
{
  question: "Which animal can fly?",
  answers: ["Bird", "Dog", "Cow", "Horse"],
  correct: "Bird",
  difficulty: "easy",
  category: "general"
},
{
  question: "How many fingers are on one hand?",
  answers: ["5", "4", "6", "3"],
  correct: "5",
  difficulty: "easy",
  category: "general"
},
{
  question: "What do you use to brush your teeth?",
  answers: ["Toothbrush", "Comb", "Spoon", "Towel"],
  correct: "Toothbrush",
  difficulty: "easy",
  category: "general"
},
{
  question: "Which drink is made from tea leaves?",
  answers: ["Tea", "Coffee", "Milk", "Juice"],
  correct: "Tea",
  difficulty: "easy",
  category: "general"
},
{
  question: "What shines in the sky at night?",
  answers: ["Moon", "Sun", "Cloud", "Rainbow"],
  correct: "Moon",
  difficulty: "easy",
  category: "general"
},
{
  question: "Which room is used for cooking?",
  answers: ["Kitchen", "Bedroom", "Garage", "Bathroom"],
  correct: "Kitchen",
  difficulty: "easy",
  category: "general"
},
{
  question: "What do you sit on?",
  answers: ["Chair", "Plate", "Lamp", "Clock"],
  correct: "Chair",
  difficulty: "easy",
  category: "general"
},
{
  question: "Which animal has a long trunk?",
  answers: ["Elephant", "Dog", "Cat", "Tiger"],
  correct: "Elephant",
  difficulty: "easy",
  category: "general"
},
{
  question: "What do you use to tell time?",
  answers: ["Clock", "Book", "Cup", "Fork"],
  correct: "Clock",
  difficulty: "easy",
  category: "general"
},
{
  question: "What color is grass?",
  answers: ["Green", "Blue", "Red", "Purple"],
  correct: "Green",
  difficulty: "easy",
  category: "general"
},
{
  question: "What do you open doors with?",
  answers: ["Key", "Spoon", "Pen", "Plate"],
  correct: "Key",
  difficulty: "easy",
  category: "general"
},
{
  question: "Which animal says 'meow'?",
  answers: ["Cat", "Dog", "Cow", "Duck"],
  correct: "Cat",
  difficulty: "easy",
  category: "general"
},
{
  question: "What do you wear on your head?",
  answers: ["Hat", "Shoe", "Sock", "Glove"],
  correct: "Hat",
  difficulty: "easy",
  category: "general"
},
{
  question: "Which planet is known as the Red Planet?",
  answers: ["Mars", "Venus", "Jupiter", "Saturn"],
  correct: "Mars",
  difficulty: "medium",
  category: "general"
},
{
  question: "How many continents are there on Earth?",
  answers: ["7", "5", "6", "8"],
  correct: "7",
  difficulty: "medium",
  category: "general"
},
{
  question: "What gas do humans breathe in to survive?",
  answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  correct: "Oxygen",
  difficulty: "medium",
  category: "general"
},
{
  question: "Which ocean is the largest?",
  answers: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
  correct: "Pacific Ocean",
  difficulty: "medium",
  category: "general"
},
{
  question: "Which country is famous for the pyramids?",
  answers: ["Egypt", "Mexico", "India", "China"],
  correct: "Egypt",
  difficulty: "medium",
  category: "general"
},
{
  question: "What is the square root of 64?",
  answers: ["8", "6", "7", "9"],
  correct: "8",
  difficulty: "medium",
  category: "general"
},
{
  question: "Which animal is the largest land animal?",
  answers: ["Elephant", "Giraffe", "Rhino", "Hippo"],
  correct: "Elephant",
  difficulty: "medium",
  category: "general"
},
{
  question: "Which metal is liquid at room temperature?",
  answers: ["Mercury", "Gold", "Iron", "Copper"],
  correct: "Mercury",
  difficulty: "medium",
  category: "general"
},
{
  question: "Which instrument measures temperature?",
  answers: ["Thermometer", "Barometer", "Hygrometer", "Altimeter"],
  correct: "Thermometer",
  difficulty: "medium",
  category: "general"
},
{
  question: "Which language is most spoken worldwide by native speakers?",
  answers: ["Mandarin Chinese", "English", "Spanish", "Hindi"],
  correct: "Mandarin Chinese",
  difficulty: "medium",
  category: "general"
},
{
  question: "Which organ pumps blood through the body?",
  answers: ["Heart", "Lungs", "Brain", "Liver"],
  correct: "Heart",
  difficulty: "medium",
  category: "general"
},
{
  question: "How many sides does a hexagon have?",
  answers: ["6", "5", "7", "8"],
  correct: "6",
  difficulty: "medium",
  category: "general"
},
{
  question: "Which country invented pizza?",
  answers: ["Italy", "France", "USA", "Spain"],
  correct: "Italy",
  difficulty: "medium",
  category: "general"
},
{
  question: "Which planet has rings?",
  answers: ["Saturn", "Mars", "Venus", "Mercury"],
  correct: "Saturn",
  difficulty: "medium",
  category: "general"
},
{
  question: "What is H2O commonly known as?",
  answers: ["Water", "Salt", "Oxygen", "Hydrogen"],
  correct: "Water",
  difficulty: "medium",
  category: "general"
},
{
  question: "Which animal is known for changing its colors?",
  answers: ["Chameleon", "Snake", "Frog", "Lizard"],
  correct: "Chameleon",
  difficulty: "medium",
  category: "general"
},
{
  question: "Which city is famous for the Eiffel Tower?",
  answers: ["Paris", "Rome", "London", "Berlin"],
  correct: "Paris",
  difficulty: "medium",
  category: "general"
},
{
  question: "Which part of a plant conducts photosynthesis?",
  answers: ["Leaves", "Roots", "Stem", "Flower"],
  correct: "Leaves",
  difficulty: "medium",
  category: "general"
},
{
  question: "What is the fastest land animal?",
  answers: ["Cheetah", "Lion", "Horse", "Tiger"],
  correct: "Cheetah",
  difficulty: "medium",
  category: "general"
},
{
  question: "Which continent is the Sahara Desert located on?",
  answers: ["Africa", "Asia", "Australia", "South America"],
  correct: "Africa",
  difficulty: "medium",
  category: "general"
},
{
  question: "What is the capital of Japan?",
  answers: ["Tokyo", "Kyoto", "Osaka", "Nagoya"],
  correct: "Tokyo",
  difficulty: "medium",
  category: "general"
},
{
  question: "Which blood type is known as the universal donor?",
  answers: ["O negative", "A positive", "B negative", "AB positive"],
  correct: "O negative",
  difficulty: "medium",
  category: "general"
},
{
  question: "Which instrument measures air pressure?",
  answers: ["Barometer", "Thermometer", "Speedometer", "Voltmeter"],
  correct: "Barometer",
  difficulty: "medium",
  category: "general"
},
{
  question: "Which planet is closest to the Sun?",
  answers: ["Mercury", "Venus", "Earth", "Mars"],
  correct: "Mercury",
  difficulty: "medium",
  category: "general"
},
{
  question: "Which country is famous for kangaroos?",
  answers: ["Australia", "Canada", "Brazil", "India"],
  correct: "Australia",
  difficulty: "medium",
  category: "general"
},
{
  question: "Which scientist proposed the theory of relativity?",
  answers: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
  correct: "Albert Einstein",
  difficulty: "medium",
  category: "general"
},
{
  question: "Which ocean lies between Africa and Australia?",
  answers: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"],
  correct: "Indian Ocean",
  difficulty: "medium",
  category: "general"
},
{
  question: "Which natural satellite orbits Earth?",
  answers: ["Moon", "Mars", "Sun", "Venus"],
  correct: "Moon",
  difficulty: "medium",
  category: "general"
},
{
  question: "What is the boiling point of water at sea level?",
  answers: ["100°C", "90°C", "80°C", "120°C"],
  correct: "100°C",
  difficulty: "medium",
  category: "general"
},
{
  question: "Which animal is known as the king of the jungle?",
  answers: ["Lion", "Tiger", "Elephant", "Bear"],
  correct: "Lion",
  difficulty: "medium",
  category: "general"
},
{
  question: "What is the longest river in the world?",
  answers: ["Nile", "Amazon", "Yangtze", "Mississippi"],
  correct: "Nile",
  difficulty: "hard",
  category: "general"
},
{
  question: "Which element has the chemical symbol 'Fe'?",
  answers: ["Iron", "Gold", "Silver", "Lead"],
  correct: "Iron",
  difficulty: "hard",
  category: "general"
},
{
  question: "Who wrote the play 'Hamlet'?",
  answers: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Mark Twain"],
  correct: "William Shakespeare",
  difficulty: "hard",
  category: "general"
},
{
  question: "What is the capital of Canada?",
  answers: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
  correct: "Ottawa",
  difficulty: "hard",
  category: "general"
},
{
  question: "Which planet is known for having the Great Red Spot?",
  answers: ["Jupiter", "Saturn", "Mars", "Neptune"],
  correct: "Jupiter",
  difficulty: "hard",
  category: "general"
},
{
  question: "What is the hardest natural substance on Earth?",
  answers: ["Diamond", "Gold", "Iron", "Quartz"],
  correct: "Diamond",
  difficulty: "hard",
  category: "general"
},
{
  question: "Which country gifted the Statue of Liberty to the USA?",
  answers: ["France", "England", "Germany", "Italy"],
  correct: "France",
  difficulty: "hard",
  category: "general"
},
{
  question: "How many bones are in the adult human body?",
  answers: ["206", "201", "210", "198"],
  correct: "206",
  difficulty: "hard",
  category: "general"
},
{
  question: "Which scientist discovered penicillin?",
  answers: ["Alexander Fleming", "Marie Curie", "Isaac Newton", "Louis Pasteur"],
  correct: "Alexander Fleming",
  difficulty: "hard",
  category: "general"
},
{
  question: "Which desert is the largest hot desert in the world?",
  answers: ["Sahara", "Gobi", "Kalahari", "Arabian"],
  correct: "Sahara",
  difficulty: "hard",
  category: "general"
},
{
  question: "What is the smallest country in the world?",
  answers: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
  correct: "Vatican City",
  difficulty: "hard",
  category: "general"
},
{
  question: "Which language has the most native speakers in Europe?",
  answers: ["Russian", "German", "English", "French"],
  correct: "Russian",
  difficulty: "hard",
  category: "general"
},
{
  question: "What is the main gas found in the Earth's atmosphere?",
  answers: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
  correct: "Nitrogen",
  difficulty: "hard",
  category: "general"
},
{
  question: "Which famous ship sank in 1912 after hitting an iceberg?",
  answers: ["Titanic", "Lusitania", "Britannic", "Queen Mary"],
  correct: "Titanic",
  difficulty: "hard",
  category: "general"
},
{
  question: "Which country is both in Europe and Asia?",
  answers: ["Turkey", "Spain", "Norway", "Portugal"],
  correct: "Turkey",
  difficulty: "hard",
  category: "general"
},
{
  question: "What is the square root of 144?",
  answers: ["12", "11", "13", "14"],
  correct: "12",
  difficulty: "hard",
  category: "general"
},
{
  question: "Which organ is responsible for filtering blood in the human body?",
  answers: ["Kidneys", "Heart", "Lungs", "Liver"],
  correct: "Kidneys",
  difficulty: "hard",
  category: "general"
},
{
  question: "Which continent has the most countries?",
  answers: ["Africa", "Asia", "Europe", "South America"],
  correct: "Africa",
  difficulty: "hard",
  category: "general"
},
{
  question: "Which famous scientist developed the laws of motion?",
  answers: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
  correct: "Isaac Newton",
  difficulty: "hard",
  category: "general"
},
{
  question: "What is the currency used in Japan?",
  answers: ["Yen", "Won", "Dollar", "Euro"],
  correct: "Yen",
  difficulty: "hard",
  category: "general"
},
{
  question: "Which civilization built Machu Picchu?",
  answers: ["Inca", "Maya", "Aztec", "Olmec"],
  correct: "Inca",
  difficulty: "expert",
  category: "general"
},
{
  question: "What is the capital of Kazakhstan?",
  answers: ["Astana", "Almaty", "Tashkent", "Bishkek"],
  correct: "Astana",
  difficulty: "expert",
  category: "general"
},
{
  question: "Which scientist formulated the uncertainty principle?",
  answers: ["Werner Heisenberg", "Niels Bohr", "Max Planck", "Erwin Schrödinger"],
  correct: "Werner Heisenberg",
  difficulty: "expert",
  category: "general"
},
{
  question: "Which empire was ruled by Genghis Khan?",
  answers: ["Mongol Empire", "Ottoman Empire", "Roman Empire", "Persian Empire"],
  correct: "Mongol Empire",
  difficulty: "expert",
  category: "general"
},
{
  question: "Which mountain range separates Europe and Asia?",
  answers: ["Ural Mountains", "Alps", "Carpathians", "Caucasus"],
  correct: "Ural Mountains",
  difficulty: "expert",
  category: "general"
},
{
  question: "Which philosopher wrote 'The Republic'?",
  answers: ["Plato", "Aristotle", "Socrates", "Descartes"],
  correct: "Plato",
  difficulty: "expert",
  category: "general"
},
{
  question: "Which element has the atomic number 1?",
  answers: ["Hydrogen", "Helium", "Lithium", "Oxygen"],
  correct: "Hydrogen",
  difficulty: "expert",
  category: "general"
},
{
  question: "Which ocean current warms Western Europe?",
  answers: ["Gulf Stream", "Labrador Current", "Canary Current", "Benguela Current"],
  correct: "Gulf Stream",
  difficulty: "expert",
  category: "general"
},
{
  question: "Which ancient wonder was located in Babylon?",
  answers: ["Hanging Gardens", "Colossus of Rhodes", "Temple of Artemis", "Lighthouse of Alexandria"],
  correct: "Hanging Gardens",
  difficulty: "expert",
  category: "general"
},
{
  question: "Which country has the most time zones?",
  answers: ["France", "USA", "Russia", "China"],
  correct: "France",
  difficulty: "expert",
  category: "general"
},
{
  question: "Which physicist discovered electromagnetic induction?",
  answers: ["Michael Faraday", "James Maxwell", "Nikola Tesla", "Heinrich Hertz"],
  correct: "Michael Faraday",
  difficulty: "expert",
  category: "general"
},
{
  question: "Which language is the oldest still in use today?",
  answers: ["Chinese", "Greek", "Hebrew", "Latin"],
  correct: "Chinese",
  difficulty: "expert",
  category: "general"
},
{
  question: "Which war ended with the Treaty of Versailles?",
  answers: ["World War I", "World War II", "Franco-Prussian War", "Crimean War"],
  correct: "World War I",
  difficulty: "expert",
  category: "general"
},
{
  question: "Which desert is the largest in the world overall (not just hot deserts)?",
  answers: ["Antarctic Desert", "Sahara", "Gobi", "Arabian"],
  correct: "Antarctic Desert",
  difficulty: "expert",
  category: "general"
},
{
  question: "Which scientist developed the heliocentric model before Galileo?",
  answers: ["Copernicus", "Kepler", "Newton", "Tycho Brahe"],
  correct: "Copernicus",
  difficulty: "expert",
  category: "general"
},
{
  question: "Which city hosted the first modern Olympic Games?",
  answers: ["Athens", "Paris", "London", "Rome"],
  correct: "Athens",
  difficulty: "expert",
  category: "general"
},
{
  question: "Which metal is the best conductor of electricity?",
  answers: ["Silver", "Gold", "Copper", "Aluminum"],
  correct: "Silver",
  difficulty: "expert",
  category: "general"
},
{
  question: "Which country was formerly known as Persia?",
  answers: ["Iran", "Iraq", "Turkey", "Syria"],
  correct: "Iran",
  difficulty: "expert",
  category: "general"
},
{
  question: "Which branch of mathematics studies shapes and spaces?",
  answers: ["Geometry", "Algebra", "Calculus", "Statistics"],
  correct: "Geometry",
  difficulty: "expert",
  category: "general"
},
{
  question: "Which organelle is known as the powerhouse of the cell?",
  answers: ["Mitochondria", "Nucleus", "Ribosome", "Golgi Apparatus"],
  correct: "Mitochondria",
  difficulty: "expert",
  category: "general"
}

];