/*
Trivia Quiz

Copyright (c) 2026 Dominique Striekwold

Licensed under the MIT License.
See the LICENSE file in the repository for details.

Built as part of a web development learning journey.
*/

const historyQuestions = [
    
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
}

]