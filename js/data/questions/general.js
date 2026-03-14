/*
Trivia Quiz

Copyright (c) 2026 Dominique Striekwold

Licensed under the MIT License.
See the LICENSE file in the repository for details.

Built as part of a web development learning journey.
*/

const generalQuestions = [
    
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