function sendGA(c, a, l, v) {
  if (v) {
    //ga('send', 'event', { eventCategory: c, eventAction: a, eventLabel: l, eventValue:v });
    console.log('CATEGORY: '+c+', ACTION:'+a+', LABEL:'+l+', VALUE:'+v);
  } else if (l) {
    //ga('send', 'event', { eventCategory: c, eventAction: a, eventLabel: l });
    console.log('CATEGORY: '+c+', ACTION:'+a+', LABEL:'+l);
  } else {
    //ga('send', 'event', { eventCategory: c, eventAction: a });
    console.log('CATEGORY: '+c+', ACTION:'+a);
  }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
;// jshint -W098
var pornTitles = [
  "Trans Formers 2: Revenge of the Ballin'",
  "Das Booty",
  "Rogerin' Me",
  "Big Trouble in Little Vagina",
  "28 Cocks Later",
  "50 Fist Dates",
  "The Filth Element",
  "Let the White One In",
  "Fill Bill, vol 2",
  "Me, Myself in Irene",
  "Indiana Bones and the Temple of Poon",
  "I Broke My Back Mounting",
  "Rub, Lola! Rub!",
  "Even Reverse Cowgirls Get the Blues",
  "Raging Balls",
  "Dog Dick Afternoon",
  "Full Metal Dildo",
  "The Stepfather, Part II",
  "The African Drag Queen",
  "One Flew Into The Poopoo's Nest",
  "Dr. Strangelust, or: How I Learned To Stop Worrying And Love The Bum",
  "The Maltese Fistin",
  "The Pleasure of Sierra's Madre",
  "Midnight Ladyboy",
  "Rear Entry Widow",
  "A Streetwalker Named Desire&eacute;",
  "The Curious Case of Benjamin's Butthole",
  "Group Sex on the Bounty",
  "Guess Who Came On Dinner",
  "Breasts In Shows",
  "Six Days Seven Cocks",
  "Mr. Smith Goes Down on Washington",
  "Enslaving Private Ryan",
  "Rebel Without a Cooze",
  "The Lust of the Mohicans",
  "To Shave and Shave Not",
  "Hannah on Her Sisters",
  "All That Jizz",
  "Poonstruck",
  "GoodFellatas",
  "Veinspotting",
  "The Princess Ride",
  "No Cunt Free For Old Men",
  "Public Enemas",
  "On Her Majesty's Secret Cervix",
  "Gunfight at the KY Corral",
  "Pan's Labiarinth",
  "Pearl Necklace Harbor",
  "Bend Over, Like Beckham",
  "Scatatouille",
  "BALL-E",
  "Fuck Everlasting",
  "Wangs of New York",
  "The Tight Stuff",
  "Bang My Bum Slowly",
  "Strangers on a Tranny",
  "G*A*S*H",
  "Wet Hot American Hummer",
  "A Queer and Pleasant Stranger",
  "Glazing Arizona",
  "Motion Impossible",
  "Fannie Hall",
  "Fist Me Deadly",
  "Bright Lights, Big Titties",
  "The Color of a Money Shot",
  "Lawrence of a Labia",
  "Titty Titty Gang Bang",
  "Saturday Night Beaver",
  "Evil Head 2: Head By Dawn",
  "Pee Wee's Big Member",
  "The Fantastic Foursome",
  "Play With Misty For Me",
  "Dirty/Hairy",
  "The Squirt Locker",
  "Jiro Creams On Suki",
  "Poonrise Kingdom",
  "Django Chained",
  "Moneyballin",
  "Being Inside Elmo",
  "Attack The Cock",
  "How To Drain Your Dragon",
  "The Mud Wrestler",
  "Scott Pilgrim Vs Those Girls",
  "Fantastic Fucks, Mister",
  "Straight Into Conner",
  "Mad Maxxx: Furious Loads",
  "Stanford's Prisonsex Experiments",
  "Cum and Cummer",
  "Jiz and the Diaphragms",
  "Big Hero 16 Inch",
  "Tub Girl Time Machine",
  "Steve's Tugjobs",
  "Night At The Mapplethorpe Museum",
  "The Boy Shorts",
  "Fist Fist, Bang Bang",
  "In Sid Anus",
  "The Penis Movie",
  "CitizenWhore",
  "Atlas Chugged",
  "Alexander and the Terrible, Horrible, No Good, Very Bad Handjob",
  "Robocuck",
  "Much Ado About Cumming",
  "Monsters' Pink",
  "12 Years A Slut",
  "Despicable Pee",
  "G.I. Joe: Masturbation",
  "2 Fast 2 Furry Puss",
  "Watersportsworld",
  "XXX: State of the Union: XXX",
  "Jerk/Off",
  "Spurtigo",
  "The Munchurian Candidass",
  "Glen, Garry, Glenn, Ross, and Six Other Guys",
  "One Blew Over The Cuckold's Nest",
  "The Bicycle Queef",
  "Boyz N The Clitoral Hood",
  "Gosford Porking",
  "The Dark Bros In: Fuck Soup",
  "The Assventures of Fuckaroo Buttzai Across The Gape Dimension",
  "Boobs! A Madea Porno",
  "Suicide Squat",
  "While You Were Peeping",
  "There's Someone Inside Mary",
  "The Nutting Professor",
  "Space Jammin'",
  "Whiskey, Tango, Facefuck",
  "Nutbusters",
  "Assassin's Cream",
  "Fingering Dory",
  "Alvin and the Fuckmunks 2: The Fuckuel",
  "Blumpkinhead",
  "American History XXX",
  "The Italian Blowjob",
  "Hairy Twatter",
  "Blowing For Columbine",
  "Star Whores: The Foreskin Awakens",
  
  // These are all TV shows....
  "Welcome Back, Frotteur",
  "A Bit of Fry in Laurie",
  "Breaking Chad",
  "The Gang Bang Theory",
  "Boy Meat's World",
  "Nathan For Everyone",
  "Person of Incest",
  "Charles In Charles",
  "Better Ball Saul",
  "Haters Whack Off!",
  
  // Musicals...
  "Taint Must Be Shaven",
  "Anything Grows",
  "MILF Saigon",
  "Diddler on the Roof",
  "Man of La Muncha",
  "Arse Nick and Yo Face",
  "The Dong and I",
  "Guys and Guys",
  "Clamilton",
  "Bring in 'da Boys, Bring in 'da Spunk",
  "Scats"
];

// jshint -W098
var pornData = {
  20170101: [
    {title: "Person of Incest", take: 50694, change: "down" },
    {title: "Rub, Lola! Rub!", take: 46002, change: "down" },
    {title: "The Squirt Locker", take: 42951, change: "up" },
    {title: "The Filth Element", take: 39754, change: "same" },
    {title: "Being Inside Elmo", take: 38744, change: "down" },
    {title: "Welcome Back, Frotteur", take: 35641, change: "down" },
    {title: "Wangs of New York", take: 35269, change: "up" },
    {title: "Rebel Without a Cooze", take: 33028, change: "up" },
    {title: "Much Ado About Cumming", take: 32261, change: "same" },
    {title: "Dog Dick Afternoon", take: 30909, change: "down" },
    {title: "Fingering Dory", take: 28264, change: "same" },
    {title: "Das Booty", take: 26139, change: "down" },
    {title: "Boy Meat's World", take: 24468, change: "same" },
    {title: "Attack The Cock", take: 22203, change: "same" },
    {title: "The Mud Wrestler", take: 21890, change: "up" },
    {title: "Pearl Necklace Harbor", take: 20995, change: "up" },
    {title: "Let the White One In", take: 19943, change: "same" },
    {title: "Scatatouille", take: 18367, change: "down" },
    {title: "Bring in 'da Boys, Bring in 'da Spunk", take: 18163, change: "same" },
    {title: "The Princess Ride", take: 17177, change: "same" }
  ],
  20170102: [
    {title: "American History XXX", take: 46676, change: "new" },
    {title: "Motion Impossible", take: 44122, change: "new" },
    {title: "GoodFellatas", take: 42619, change: "new" },
    {title: "Rub, Lola! Rub!", take: 40503, change: "down" },
    {title: "Being Inside Elmo", take: 36550, change: "same" },
    {title: "Robocuck", take: 33612, change: "new" },
    {title: "Raging Balls", take: 33106, change: "new" },
    {title: "The Filth Element", take: 32268, change: "down" },
    {title: "Welcome Back, Frotteur", take: 31204, change: "down" },
    {title: "Lawrence of a Labia", take: 30012, change: "new" },
    {title: "Wangs of New York", take: 28271, change: "down" },
    {title: "Dirty/Hairy", take: 27948, change: "new" },
    {title: "Dog Dick Afternoon", take: 27041, change: "down" },
    {title: "Fingering Dory", take: 24688, change: "down" },
    {title: "Rebel Without a Cooze", take: 22641, change: "down" },
    {title: "Das Booty", take: 21856, change: "down" },
    {title: "The Squirt Locker", take: 21075, change: "down" },
    {title: "Play With Misty For Me", take: 19450, change: "new" },
    {title: "Much Ado About Cumming", take: 18469, change: "down" },
    {title: "Attack The Cock", take: 18151, change: "down" }
  ], 
  20170103: [
    {title: "Despicable Pee", take: 53402, change: "new" },
    {title: "GoodFellatas", take: 50975, change: "up" },
    {title: "Bring in 'da Boys, Bring in 'da Spunk", take: 48619, change: "new" },
    {title: "Robocuck", take: 44307, change: "up" },
    {title: "50 Fist Dates", take: 40144, change: "new" },
    {title: "One Blew Over The Cuckold's Nest", take: 38223, change: "new" },
    {title: "Breaking Chad", take: 37107, change: "new" },
    {title: "Being Inside Elmo", take: 35397, change: "down" },
    {title: "The Maltese Fistin", take: 32225, change: "new" },
    {title: "Rub, Lola! Rub!", take: 31401, change: "down" },
    {title: "Welcome Back, Frotteur", take: 29716, change: "down" },
    {title: "Lawrence of a Labia", take: 28230, change: "down" },
    {title: "Motion Impossible", take: 27444, change: "down" },
    {title: "Dirty/Hairy", take: 24956, change: "down" },
    {title: "Wangs of New York", take: 23245, change: "down" },
    {title: "The Filth Element", take: 21166, change: "down" },
    {title: "Dog Dick Afternoon", take: 19145, change: "down" },
    {title: "Raging Balls", take: 16946, change: "down" },
    {title: "The Tight Stuff", take: 15429, change: "new" },
    {title: "Whiskey, Tango, Facefuck", take: 14160, change: "new" }
  ], 
  20170104: [
    {title: "Poonrise Kingdom", take: 49538, change: "new" },
    {title: "50 Fist Dates", take: 44387, change: "up" },
    {title: "Fist Fist, Bang Bang", take: 42432, change: "new" },
    {title: "Boyz N The Clitoral Hood", take: 39495, change: "new" },
    {title: "Robocuck", take: 39080, change: "down" },
    {title: "Being Inside Elmo", take: 35795, change: "up" },
    {title: "Breaking Chad", take: 34250, change: "same" },
    {title: "Scatatouille", take: 30507, change: "new" },
    {title: "One Blew Over The Cuckold's Nest", take: 29474, change: "down" },
    {title: "Rub, Lola! Rub!", take: 29057, change: "same" },
    {title: "Bring in 'da Boys, Bring in 'da Spunk", take: 27690, change: "down" },
    {title: "American History XXX", take: 25992, change: "new" },
    {title: "Welcome Back, Frotteur", take: 24202, change: "down" },
    {title: "GoodFellatas", take: 22473, change: "down" },
    {title: "Alvin and the Fuckmunks 2: The Fuckuel", take: 19873, change: "new" },
    {title: "Haters Whack Off!", take: 18495, change: "new" },
    {title: "Dirty/Hairy", take: 16631, change: "down" },
    {title: "Lawrence of a Labia", take: 14910, change: "down" },
    {title: "Wangs of New York", take: 14100, change: "down" },
    {title: "The Filth Element", take: 12681, change: "down" }
  ], 
  20170105: [
    {title: "Bright Lights, Big Titties", take: 49024, change: "new" },
    {title: "28 Cocks Later", take: 44500, change: "new" },
    {title: "Gunfight at the KY Corral", take: 40247, change: "new" },
    {title: "Arse Nick and Yo Face", take: 37427, change: "new" },
    {title: "Fist Fist, Bang Bang", take: 33372, change: "down" },
    {title: "The Penis Movie", take: 31864, change: "new" },
    {title: "Robocuck", take: 28234, change: "down" },
    {title: "No Cunt Free For Old Men", take: 25531, change: "new" },
    {title: "Boyz N The Clitoral Hood", take: 23651, change: "down" },
    {title: "Being Inside Elmo", take: 21320, change: "down" },
    {title: "Breaking Chad", take: 19243, change: "down" },
    {title: "Alexander and the Terrible, Horrible, No Good, Very Bad Handjob", take: 18432, change: "new" },
    {title: "50 Fist Dates", take: 18244, change: "down" },
    {title: "Das Booty", take: 16881, change: "new" },
    {title: "The Lust of the Mohicans", take: 16232, change: "new" },
    {title: "Poonrise Kingdom", take: 15015, change: "down" },
    {title: "Evil Head 2: Head By Dawn", take: 14447, change: "new" },
    {title: "Breasts In Shows", take: 13054, change: "new" },
    {title: "Space Jammin'", take: 12435, change: "new" },
    {title: "Rub, Lola! Rub!", take: 11075, change: "down" }
  ], 
  20170106: [
    {title: "Gunfight at the KY Corral", take: 52703, change: "up" },
    {title: "Arse Nick and Yo Face", take: 51269, change: "up" },
    {title: "28 Cocks Later", take: 47174, change: "down" },
    {title: "The Penis Movie", take: 42564, change: "up" },
    {title: "Robocuck", take: 37854, change: "up" },
    {title: "No Cunt Free For Old Men", take: 33747, change: "up" },
    {title: "Strangers on a Tranny", take: 31381, change: "new" },
    {title: "Boyz N The Clitoral Hood", take: 30904, change: "up" },
    {title: "The Filth Element", take: 29644, change: "new" },
    {title: "Tub Girl Time Machine", take: 28893, change: "new" },
    {title: "Being Inside Elmo", take: 27194, change: "down" },
    {title: "Saturday Night Beaver", take: 24490, change: "new" },
    {title: "Spurtigo", take: 22032, change: "new" },
    {title: "Fist Fist, Bang Bang", take: 21303, change: "down" },
    {title: "Moneyballin", take: 20917, change: "new" },
    {title: "Breaking Chad", take: 19530, change: "down" },
    {title: "Poonrise Kingdom", take: 18778, change: "down" },
    {title: "50 Fist Dates", take: 17747, change: "down" },
    {title: "Haters Whack Off!", take: 17430, change: "new" },
    {title: "Space Jammin'", take: 17129, change: "down" }
  ], 
  20170107: [
    {title: "Six Days Seven Cocks", take: 50902, change: "new" },
    {title: "Dirty/Hairy", take: 48342, change: "new" },
    {title: "Rebel Without a Cooze", take: 44021, change: "new" },
    {title: "There's Someone Inside Mary", take: 41144, change: "new" },
    {title: "Gunfight at the KY Corral", take: 39556, change: "down" },
    {title: "Wangs of New York", take: 36290, change: "new" },
    {title: "Arse Nick and Yo Face", take: 34159, change: "down" },
    {title: "Bang My Bum Slowly", take: 30386, change: "new" },
    {title: "Fist Me Deadly", take: 27640, change: "new" },
    {title: "Glazing Arizona", take: 26026, change: "new" },
    {title: "Stanford's Prisonsex Experiments", take: 25285, change: "new" },
    {title: "28 Cocks Later", take: 24393, change: "down" },
    {title: "Rear Entry Widow", take: 23182, change: "new" },
    {title: "Midnight Ladyboy", take: 22123, change: "new" },
    {title: "Nathan For Everyone", take: 20159, change: "new" },
    {title: "Assassin's Cream", take: 18114, change: "new" },
    {title: "Charles In Charles", take: 16091, change: "new" },
    {title: "The Pleasure of Sierra's Madre", take: 14557, change: "new" },
    {title: "In Sid Anus", take: 13484, change: "new" },
    {title: "The Color of a Money Shot", take: 12630, change: "new" }
  ], 
  20170108: [
    {title: "There's Someone Inside Mary", take: 54391, change: "up" },
    {title: "Gunfight at the KY Corral", take: 49377, change: "up" },
    {title: "Arse Nick and Yo Face", take: 43827, change: "up" },
    {title: "Wangs of New York", take: 43267, change: "up" },
    {title: "Rebel Without a Cooze", take: 41558, change: "down" },
    {title: "Bang My Bum Slowly", take: 38398, change: "up" },
    {title: "Dirty/Hairy", take: 36798, change: "down" },
    {title: "Big Hero 16 Inch", take: 33276, change: "new" },
    {title: "Glazing Arizona", take: 30998, change: "up" },
    {title: "Stanford's Prisonsex Experiments", take: 27798, change: "up" },
    {title: "One Blew Over The Cuckold's Nest", take: 26438, change: "new" },
    {title: "Clamilton", take: 23587, change: "new" },
    {title: "Let the White One In", take: 21460, change: "new" },
    {title: "28 Cocks Later", take: 20274, change: "down" },
    {title: "Rear Entry Widow", take: 19378, change: "down" },
    {title: "Dr. Strangelust, or: How I Learned To Stop Worrying And Love The Bum", take: 18403, change: "new" },
    {title: "Fist Me Deadly", take: 16869, change: "down" },
    {title: "Straight Into Conner", take: 15540, change: "new" },
    {title: "Assassin's Cream", take: 14928, change: "down" },
    {title: "Charles In Charles", take: 13216, change: "down" }
  ], 
  20170109: [
    {title: "Wangs of New York", take: 49352, change: "up" },
    {title: "Arse Nick and Yo Face", take: 47113, change: "up" },
    {title: "Gunfight at the KY Corral", take: 42460, change: "down" },
    {title: "Public Enemas", take: 41554, change: "new" },
    {title: "Fist Fist, Bang Bang", take: 39701, change: "new" },
    {title: "Rebel Without a Cooze", take: 39128, change: "down" },
    {title: "Dirty/Hairy", take: 35438, change: "same" },
    {title: "Midnight Ladyboy", take: 32961, change: "new" },
    {title: "Pee Wee's Big Member", take: 32413, change: "new" },
    {title: "Bang My Bum Slowly", take: 29643, change: "down" },
    {title: "Hairy Twatter", take: 26325, change: "new" },
    {title: "Glazing Arizona", take: 23676, change: "down" },
    {title: "Pan's Labiarinth", take: 21094, change: "new" },
    {title: "The Tight Stuff", take: 18731, change: "new" },
    {title: "I Broke My Back Mounting", take: 17443, change: "new" },
    {title: "Haters Whack Off!", take: 16223, change: "new" },
    {title: "Big Hero 16 Inch", take: 15038, change: "down" },
    {title: "A Queer and Pleasant Stranger", take: 14268, change: "new" },
    {title: "A Bit of Fry in Laurie", take: 13511, change: "new" },
    {title: "Nathan For Everyone", take: 12752, change: "new" }
  ], 
  20170110: [
    {title: "The Pleasure of Sierra's Madre", take: 51681, change: "new" },
    {title: "Spurtigo", take: 48304, change: "new" },
    {title: "Welcome Back, Frotteur", take: 44265, change: "new" },
    {title: "Steve's Tugjobs", take: 42549, change: "new" },
    {title: "The Curious Case of Benjamin's Butthole", take: 38899, change: "new" },
    {title: "Alvin and the Fuckmunks 2: The Fuckuel", take: 35067, change: "new" },
    {title: "Gunfight at the KY Corral", take: 30865, change: "down" },
    {title: "Scatatouille", take: 29070, change: "new" },
    {title: "Arse Nick and Yo Face", take: 27773, change: "down" },
    {title: "Rebel Without a Cooze", take: 26827, change: "down" },
    {title: "Titty Titty Gang Bang", take: 24826, change: "new" },
    {title: "In Sid Anus", take: 23385, change: "new" },
    {title: "Wangs of New York", take: 21957, change: "down" },
    {title: "Cum and Cummer", take: 20281, change: "new" },
    {title: "Enslaving Private Ryan", take: 19383, change: "new" },
    {title: "Public Enemas", take: 18359, change: "down" },
    {title: "Fist Fist, Bang Bang", take: 17075, change: "down" },
    {title: "How To Drain Your Dragon", take: 16754, change: "new" },
    {title: "The Boy Shorts", take: 15881, change: "new" },
    {title: "Atlas Chugged", take: 15179, change: "new" }
  ], 
  20170111: [
    {title: "The Curious Case of Benjamin's Butthole", take: 51436, change: "up" },
    {title: "Steve's Tugjobs", take: 50402, change: "up" },
    {title: "Welcome Back, Frotteur", take: 49282, change: "same" },
    {title: "Rebel Without a Cooze", take: 48208, change: "up" },
    {title: "Titty Titty Gang Bang", take: 46202, change: "up" },
    {title: "Alvin and the Fuckmunks 2: The Fuckuel", take: 45680, change: "same" },
    {title: "Night At The Mapplethorpe Museum", take: 44313, change: "new" },
    {title: "Spurtigo", take: 42500, change: "down" },
    {title: "28 Cocks Later", take: 41966, change: "new" },
    {title: "In Sid Anus", take: 38665, change: "up" },
    {title: "Scatatouille", take: 34063, change: "down" },
    {title: "Gunfight at the KY Corral", take: 30474, change: "down" },
    {title: "Cum and Cummer", take: 28479, change: "up" },
    {title: "Wangs of New York", take: 27287, change: "down" },
    {title: "Being Inside Elmo", take: 25576, change: "new" },
    {title: "Enslaving Private Ryan", take: 22806, change: "down" },
    {title: "Fist Fist, Bang Bang", take: 21381, change: "same" },
    {title: "Boobs! A Madea Porno", take: 19239, change: "new" },
    {title: "Public Enemas", take: 18740, change: "down" },
    {title: "The Boy Shorts", take: 18082, change: "down" }
  ], 
  20170112: [
    {title: "Welcome Back, Frotteur", take: 51752, change: "up" },
    {title: "Tub Girl Time Machine", take: 46763, change: "new" },
    {title: "Steve's Tugjobs", take: 44277, change: "down" },
    {title: "Rebel Without a Cooze", take: 42089, change: "same" },
    {title: "The Curious Case of Benjamin's Butthole", take: 40261, change: "down" },
    {title: "Titty Titty Gang Bang", take: 38142, change: "down" },
    {title: "Alvin and the Fuckmunks 2: The Fuckuel", take: 36565, change: "down" },
    {title: "Spurtigo", take: 33798, change: "same" },
    {title: "I Broke My Back Mounting", take: 32182, change: "new" },
    {title: "Midnight Ladyboy", take: 29997, change: "new" },
    {title: "The African Drag Queen", take: 26637, change: "new" },
    {title: "Let the White One In", take: 24600, change: "new" },
    {title: "In Sid Anus", take: 22770, change: "down" },
    {title: "Guess Who Came On Dinner", take: 21700, change: "new" },
    {title: "The Princess Ride", take: 20064, change: "new" },
    {title: "Night At The Mapplethorpe Museum", take: 18037, change: "down" },
    {title: "XXX: State of the Union: XXX", take: 16942, change: "new" },
    {title: "Gunfight at the KY Corral", take: 16448, change: "down" },
    {title: "Cum and Cummer", take: 14643, change: "down" },
    {title: "Scatatouille", take: 13057, change: "down" }
  ], 
  20170113: [
    {title: "A Streetwalker Named Desireé", take: 52259, change: "new" },
    {title: "Atlas Chugged", take: 46248, change: "new" },
    {title: "Tub Girl Time Machine", take: 41718, change: "down" },
    {title: "Welcome Back, Frotteur", take: 39604, change: "down" },
    {title: "Fantastic Fucks, Mister", take: 39190, change: "new" },
    {title: "Wangs of New York", take: 35306, change: "new" },
    {title: "Man of La Muncha", take: 32233, change: "new" },
    {title: "Scott Pilgrim Vs Those Girls", take: 30844, change: "new" },
    {title: "Bend Over, Like Beckham", take: 27630, change: "new" },
    {title: "Evil Head 2: Head By Dawn", take: 25694, change: "new" },
    {title: "G.I. Joe: Masturbation", take: 24207, change: "new" },
    {title: "The Italian Blowjob", take: 23525, change: "new" },
    {title: "Steve's Tugjobs", take: 21475, change: "down" },
    {title: "Stanford's Prisonsex Experiments", take: 20583, change: "new" },
    {title: "Suicide Squat", take: 19211, change: "new" },
    {title: "Anything Grows", take: 17367, change: "new" },
    {title: "Dr. Strangelust, or: How I Learned To Stop Worrying And Love The Bum", take: 16309, change: "new" },
    {title: "CitizenWhore", take: 14581, change: "new" },
    {title: "Mr. Smith Goes Down on Washington", take: 14333, change: "new" },
    {title: "The Pleasure of Sierra's Madre", take: 13651, change: "new" }
  ], 
  20170114: [
    {title: "Atlas Chugged", take: 51764, change: "up" },
    {title: "Spurtigo", take: 48977, change: "new" },
    {title: "Bring in 'da Boys, Bring in 'da Spunk", take: 44707, change: "new" },
    {title: "28 Cocks Later", take: 40480, change: "new" },
    {title: "Tub Girl Time Machine", take: 36032, change: "down" },
    {title: "Fantastic Fucks, Mister", take: 32646, change: "down" },
    {title: "Wangs of New York", take: 30465, change: "down" },
    {title: "A Streetwalker Named Desireé", take: 27667, change: "down" },
    {title: "Blumpkinhead", take: 25245, change: "new" },
    {title: "Hairy Twatter", take: 24008, change: "new" },
    {title: "Guys and Guys", take: 21812, change: "new" },
    {title: "Boy Meat's World", take: 20715, change: "new" },
    {title: "The Mud Wrestler", take: 18871, change: "new" },
    {title: "The Bicycle Queef", take: 18313, change: "new" },
    {title: "G.I. Joe: Masturbation", take: 16186, change: "down" },
    {title: "Scott Pilgrim Vs Those Girls", take: 15923, change: "down" },
    {title: "In Sid Anus", take: 15229, change: "new" },
    {title: "Bend Over, Like Beckham", take: 14363, change: "down" },
    {title: "Steve's Tugjobs", take: 12784, change: "down" },
    {title: "Man of La Muncha", take: 11660, change: "down" }
  ], 
  20170115: [
    {title: "The Assventures of Fuckaroo Buttzai Across The Gape Dimension", take: 51633, change: "new" },
    {title: "Better Ball Saul", take: 48619, change: "new" },
    {title: "Person of Incest", take: 47508, change: "new" },
    {title: "12 Years A Slut", take: 42716, change: "new" },
    {title: "XXX: State of the Union: XXX", take: 40853, change: "new" },
    {title: "Atlas Chugged", take: 36443, change: "down" },
    {title: "Poonstruck", take: 35785, change: "new" },
    {title: "Spurtigo", take: 33926, change: "down" },
    {title: "Six Days Seven Cocks", take: 30609, change: "new" },
    {title: "Gunfight at the KY Corral", take: 30024, change: "new" },
    {title: "Bring in 'da Boys, Bring in 'da Spunk", take: 29022, change: "down" },
    {title: "Moneyballin", take: 27274, change: "new" },
    {title: "The Princess Ride", take: 24490, change: "new" },
    {title: "Monsters' Pink", take: 22053, change: "new" },
    {title: "Glazing Arizona", take: 20879, change: "new" },
    {title: "Mr. Smith Goes Down on Washington", take: 19942, change: "new" },
    {title: "Tub Girl Time Machine", take: 17606, change: "down" },
    {title: "Breasts In Shows", take: 17367, change: "new" },
    {title: "28 Cocks Later", take: 15913, change: "down" },
    {title: "Whiskey, Tango, Facefuck", take: 15589, change: "new" }
  ], 
  20170116: [
    {title: "XXX: State of the Union: XXX", take: 53357, change: "up" },
    {title: "Person of Incest", take: 49593, change: "up" },
    {title: "Taint Must Be Shaven", take: 45985, change: "new" },
    {title: "Despicable Pee", take: 40906, change: "new" },
    {title: "Guys and Guys", take: 37855, change: "new" },
    {title: "12 Years A Slut", take: 36611, change: "down" },
    {title: "Six Days Seven Cocks", take: 32635, change: "up" },
    {title: "Gunfight at the KY Corral", take: 30565, change: "up" },
    {title: "Atlas Chugged", take: 27386, change: "down" },
    {title: "Better Ball Saul", take: 25240, change: "down" },
    {title: "Moneyballin", take: 23409, change: "up" },
    {title: "Spurtigo", take: 21988, change: "down" },
    {title: "Play With Misty For Me", take: 20432, change: "new" },
    {title: "Poonstruck", take: 18646, change: "down" },
    {title: "Monsters' Pink", take: 17092, change: "down" },
    {title: "Glazing Arizona", take: 15755, change: "down" },
    {title: "Breasts In Shows", take: 14701, change: "up" },
    {title: "The Princess Ride", take: 14032, change: "down" },
    {title: "Whiskey, Tango, Facefuck", take: 12768, change: "up" },
    {title: "The Assventures of Fuckaroo Buttzai Across The Gape Dimension", take: 12138, change: "down" }
  ], 
  20170117: [
    {title: "Despicable Pee", take: 53702, change: "up" },
    {title: "Rub, Lola! Rub!", take: 49788, change: "new" },
    {title: "Trans Formers 2: Revenge of the Ballin'", take: 49163, change: "new" },
    {title: "Scatatouille", take: 44146, change: "new" },
    {title: "Taint Must Be Shaven", take: 41253, change: "down" },
    {title: "Scott Pilgrim Vs Those Girls", take: 36508, change: "new" },
    {title: "Titty Titty Gang Bang", take: 32610, change: "new" },
    {title: "12 Years A Slut", take: 29692, change: "down" },
    {title: "Six Days Seven Cocks", take: 28329, change: "down" },
    {title: "Boyz N The Clitoral Hood", take: 27957, change: "new" },
    {title: "Gunfight at the KY Corral", take: 27273, change: "down" },
    {title: "Person of Incest", take: 24910, change: "down" },
    {title: "Better Ball Saul", take: 23511, change: "down" },
    {title: "Atlas Chugged", take: 21535, change: "down" },
    {title: "Public Enemas", take: 20941, change: "new" },
    {title: "Nutbusters", take: 19625, change: "new" },
    {title: "Moneyballin", take: 17504, change: "down" },
    {title: "Play With Misty For Me", take: 15601, change: "down" },
    {title: "Poonstruck", take: 15325, change: "down" },
    {title: "Spurtigo", take: 14577, change: "down" }
  ], 
  20170118: [
    {title: "Scatatouille", take: 52900, change: "up" },
    {title: "Scott Pilgrim Vs Those Girls", take: 50605, change: "up" },
    {title: "Taint Must Be Shaven", take: 47440, change: "up" },
    {title: "Trans Formers 2: Revenge of the Ballin'", take: 44963, change: "down" },
    {title: "Rub, Lola! Rub!", take: 44258, change: "down" },
    {title: "Anything Grows", take: 41420, change: "new" },
    {title: "Pan's Labiarinth", take: 38235, change: "new" },
    {title: "Titty Titty Gang Bang", take: 36152, change: "down" },
    {title: "Rear Entry Widow", take: 34920, change: "new" },
    {title: "Boobs! A Madea Porno", take: 33814, change: "new" },
    {title: "12 Years A Slut", take: 33467, change: "down" },
    {title: "Boyz N The Clitoral Hood", take: 31324, change: "down" },
    {title: "Person of Incest", take: 29403, change: "down" },
    {title: "Gunfight at the KY Corral", take: 28772, change: "down" },
    {title: "Glen, Garry, Glenn, Ross, and Six Other Guys", take: 26102, change: "new" },
    {title: "Big Hero 16 Inch", take: 23107, change: "new" },
    {title: "Jerk/Off", take: 20747, change: "new" },
    {title: "Atlas Chugged", take: 20055, change: "down" },
    {title: "Six Days Seven Cocks", take: 18477, change: "down" },
    {title: "Better Ball Saul", take: 17640, change: "down" }
  ], 
  20170119: [
    {title: "Trans Formers 2: Revenge of the Ballin'", take: 48059, change: "up" },
    {title: "Bring in 'da Boys, Bring in 'da Spunk", take: 44651, change: "new" },
    {title: "Guess Who Came On Dinner", take: 41020, change: "new" },
    {title: "Blumpkinhead", take: 38383, change: "new" },
    {title: "Taint Must Be Shaven", take: 35503, change: "down" },
    {title: "Rub, Lola! Rub!", take: 33127, change: "down" },
    {title: "I Broke My Back Mounting", take: 29775, change: "new" },
    {title: "American History XXX", take: 26675, change: "new" },
    {title: "Arse Nick and Yo Face", take: 25465, change: "new" },
    {title: "Anything Grows", take: 22455, change: "down" },
    {title: "Scats", take: 20833, change: "new" },
    {title: "Indiana Bones and the Temple of Poon", take: 19480, change: "new" },
    {title: "Titty Titty Gang Bang", take: 18992, change: "down" },
    {title: "Poonstruck", take: 16765, change: "new" },
    {title: "Rear Entry Widow", take: 15884, change: "down" },
    {title: "Scott Pilgrim Vs Those Girls", take: 14691, change: "down" },
    {title: "Django Chained", take: 14278, change: "new" },
    {title: "The Dark Bros In: Fuck Soup", take: 12749, change: "new" },
    {title: "Saturday Night Beaver", take: 11877, change: "new" },
    {title: "Boobs! A Madea Porno", take: 10707, change: "down" }
  ], 
  20170120: [
    {title: "28 Cocks Later", take: 52231, change: "new" },
    {title: "Trans Formers 2: Revenge of the Ballin'", take: 48044, change: "down" },
    {title: "Fill Bill, vol 2", take: 47407, change: "new" },
    {title: "A Queer and Pleasant Stranger", take: 44404, change: "new" },
    {title: "Bring in 'da Boys, Bring in 'da Spunk", take: 42633, change: "down" },
    {title: "While You Were Peeping", take: 37969, change: "new" },
    {title: "Haters Whack Off!", take: 37087, change: "new" },
    {title: "Moneyballin", take: 35046, change: "new" },
    {title: "The Lust of the Mohicans", take: 32886, change: "new" },
    {title: "Attack The Cock", take: 32096, change: "new" },
    {title: "Gunfight at the KY Corral", take: 29605, change: "new" },
    {title: "Guess Who Came On Dinner", take: 28889, change: "down" },
    {title: "Blumpkinhead", take: 28323, change: "down" },
    {title: "Nutbusters", take: 25425, change: "new" },
    {title: "Breaking Chad", take: 25163, change: "new" },
    {title: "Rub, Lola! Rub!", take: 22479, change: "down" },
    {title: "Gosford Porking", take: 21250, change: "new" },
    {title: "I Broke My Back Mounting", take: 19969, change: "down" },
    {title: "The Squirt Locker", take: 19112, change: "new" },
    {title: "Taint Must Be Shaven", take: 16991, change: "down" }
  ], 
  20170121: [
    {title: "The Maltese Fistin", take: 55844, change: "new" },
    {title: "The Boy Shorts", take: 53837, change: "new" },
    {title: "28 Cocks Later", take: 53271, change: "down" },
    {title: "Watersportsworld", take: 51166, change: "new" },
    {title: "Being Inside Elmo", take: 50471, change: "new" },
    {title: "Boobs! A Madea Porno", take: 47410, change: "new" },
    {title: "Fingering Dory", take: 42596, change: "new" },
    {title: "Fill Bill, vol 2", take: 38570, change: "down" },
    {title: "The Mud Wrestler", take: 35661, change: "new" },
    {title: "On Her Majesty's Secret Cervix", take: 33470, change: "new" },
    {title: "A Queer and Pleasant Stranger", take: 29860, change: "down" },
    {title: "Play With Misty For Me", take: 28725, change: "new" },
    {title: "Dirty/Hairy", take: 26426, change: "new" },
    {title: "While You Were Peeping", take: 25593, change: "down" },
    {title: "Haters Whack Off!", take: 23954, change: "down" },
    {title: "Bring in 'da Boys, Bring in 'da Spunk", take: 22603, change: "down" },
    {title: "Trans Formers 2: Revenge of the Ballin'", take: 20138, change: "down" },
    {title: "Django Chained", take: 19171, change: "new" },
    {title: "Fantastic Fucks, Mister", take: 17842, change: "new" },
    {title: "Nathan For Everyone", take: 17408, change: "new" }
  ], 
  20170122: [
    {title: "Stanford's Prisonsex Experiments", take: 52280, change: "new" },
    {title: "One Flew Into The Poopoo's Nest", take: 46510, change: "new" },
    {title: "Moneyballin", take: 43376, change: "new" },
    {title: "Veinspotting", take: 40335, change: "new" },
    {title: "The Maltese Fistin", take: 37477, change: "down" },
    {title: "Boobs! A Madea Porno", take: 35503, change: "same" },
    {title: "The Boy Shorts", take: 32868, change: "down" },
    {title: "Full Metal Dildo", take: 30021, change: "new" },
    {title: "Fingering Dory", take: 29347, change: "down" },
    {title: "The Mud Wrestler", take: 26562, change: "down" },
    {title: "Fill Bill, vol 2", take: 25283, change: "down" },
    {title: "On Her Majesty's Secret Cervix", take: 23824, change: "down" },
    {title: "Six Days Seven Cocks", take: 21465, change: "new" },
    {title: "A Queer and Pleasant Stranger", take: 20071, change: "down" },
    {title: "Indiana Bones and the Temple of Poon", take: 19094, change: "new" },
    {title: "While You Were Peeping", take: 16812, change: "down" },
    {title: "Play With Misty For Me", take: 16399, change: "down" },
    {title: "Dirty/Hairy", take: 15115, change: "down" },
    {title: "28 Cocks Later", take: 14828, change: "down" },
    {title: "Haters Whack Off!", take: 13360, change: "down" }
  ], 
  20170123: [
    {title: "One Flew Into The Poopoo's Nest", take: 49961, change: "up" },
    {title: "Das Booty", take: 48163, change: "new" },
    {title: "Full Metal Dildo", take: 46568, change: "up" },
    {title: "The Boy Shorts", take: 41956, change: "up" },
    {title: "Straight Into Conner", take: 38487, change: "new" },
    {title: "The Maltese Fistin", take: 34256, change: "down" },
    {title: "Fill Bill, vol 2", take: 32874, change: "up" },
    {title: "Veinspotting", take: 30477, change: "down" },
    {title: "Moneyballin", take: 28758, change: "down" },
    {title: "On Her Majesty's Secret Cervix", take: 27973, change: "up" },
    {title: "The Mud Wrestler", take: 25170, change: "down" },
    {title: "CitizenWhore", take: 24843, change: "new" },
    {title: "Boobs! A Madea Porno", take: 23986, change: "down" },
    {title: "Suicide Squat", take: 22648, change: "new" },
    {title: "Bang My Bum Slowly", take: 21756, change: "new" },
    {title: "Indiana Bones and the Temple of Poon", take: 20778, change: "down" },
    {title: "While You Were Peeping", take: 19175, change: "down" },
    {title: "Cum and Cummer", take: 18395, change: "new" },
    {title: "Dirty/Hairy", take: 16838, change: "down" },
    {title: "28 Cocks Later", take: 15318, change: "down" }
  ], 
  20170124: [
    {title: "The Boy Shorts", take: 54668, change: "up" },
    {title: "Hairy Twatter", take: 49592, change: "new" },
    {title: "Full Metal Dildo", take: 46180, change: "same" },
    {title: "Group Sex on the Bounty", take: 43508, change: "new" },
    {title: "Das Booty", take: 39040, change: "down" },
    {title: "Nathan For Everyone", take: 36554, change: "new" },
    {title: "Poonstruck", take: 32354, change: "new" },
    {title: "Veinspotting", take: 29995, change: "same" },
    {title: "One Flew Into The Poopoo's Nest", take: 28979, change: "down" },
    {title: "Fill Bill, vol 2", take: 28246, change: "down" },
    {title: "The Fantastic Foursome", take: 26410, change: "new" },
    {title: "Scats", take: 25784, change: "new" },
    {title: "Bright Lights, Big Titties", take: 25170, change: "new" },
    {title: "The Mud Wrestler", take: 22357, change: "down" },
    {title: "The Maltese Fistin", take: 21090, change: "down" },
    {title: "On Her Majesty's Secret Cervix", take: 20285, change: "down" },
    {title: "Straight Into Conner", take: 19958, change: "down" },
    {title: "Guys and Guys", take: 17601, change: "new" },
    {title: "Moneyballin", take: 16498, change: "down" },
    {title: "Suicide Squat", take: 15378, change: "down" }
  ], 
  20170125: [
    {title: "Fist Fist, Bang Bang", take: 53190, change: "new" },
    {title: "Fist Me Deadly", take: 48807, change: "new" },
    {title: "The Munchurian Candidass", take: 45699, change: "new" },
    {title: "Full Metal Dildo", take: 44056, change: "down" },
    {title: "Hairy Twatter", take: 43416, change: "down" },
    {title: "Robocuck", take: 39323, change: "new" },
    {title: "Jerk/Off", take: 37698, change: "new" },
    {title: "A Bit of Fry in Laurie", take: 36861, change: "new" },
    {title: "Welcome Back, Frotteur", take: 33537, change: "new" },
    {title: "The Boy Shorts", take: 32892, change: "down" },
    {title: "Dog Dick Afternoon", take: 30263, change: "new" },
    {title: "Rear Entry Widow", take: 28326, change: "new" },
    {title: "Pearl Necklace Harbor", take: 25336, change: "new" },
    {title: "Alvin and the Fuckmunks 2: The Fuckuel", take: 24323, change: "new" },
    {title: "Das Booty", take: 21434, change: "down" },
    {title: "Night At The Mapplethorpe Museum", take: 20620, change: "new" },
    {title: "Anything Grows", take: 18535, change: "new" },
    {title: "A Queer and Pleasant Stranger", take: 16571, change: "new" },
    {title: "Guess Who Came On Dinner", take: 14813, change: "new" },
    {title: "Group Sex on the Bounty", take: 14231, change: "down" }
  ], 
  20170126: [
    {title: "GoodFellatas", take: 47022, change: "new" },
    {title: "Monsters' Pink", take: 42874, change: "new" },
    {title: "Scatatouille", take: 41091, change: "new" },
    {title: "Assassin's Cream", take: 37825, change: "new" },
    {title: "Boobs! A Madea Porno", take: 35150, change: "new" },
    {title: "CitizenWhore", take: 31353, change: "new" },
    {title: "While You Were Peeping", take: 28751, change: "new" },
    {title: "Fist Me Deadly", take: 25934, change: "down" },
    {title: "Fist Fist, Bang Bang", take: 24360, change: "down" },
    {title: "Wet Hot American Hummer", take: 23241, change: "new" },
    {title: "The Squirt Locker", take: 21586, change: "new" },
    {title: "Full Metal Dildo", take: 19090, change: "down" },
    {title: "Django Chained", take: 17537, change: "new" },
    {title: "The Munchurian Candidass", take: 16687, change: "down" },
    {title: "Poonrise Kingdom", take: 14923, change: "new" },
    {title: "Hairy Twatter", take: 14617, change: "down" },
    {title: "Midnight Ladyboy", take: 13153, change: "new" },
    {title: "Fantastic Fucks, Mister", take: 12724, change: "new" },
    {title: "Jerk/Off", take: 11741, change: "down" },
    {title: "Better Ball Saul", take: 11120, change: "new" }
  ], 
  20170127: [
    {title: "GoodFellatas", take: 57612, change: "same" },
    {title: "Assassin's Cream", take: 56380, change: "up" },
    {title: "Scatatouille", take: 51178, change: "same" },
    {title: "Boobs! A Madea Porno", take: 46334, change: "up" },
    {title: "Poonstruck", take: 43327, change: "new" },
    {title: "Pan's Labiarinth", take: 40927, change: "new" },
    {title: "G.I. Joe: Masturbation", take: 39964, change: "new" },
    {title: "Big Hero 16 Inch", take: 35762, change: "new" },
    {title: "The Filth Element", take: 32786, change: "new" },
    {title: "Monsters' Pink", take: 29733, change: "down" },
    {title: "CitizenWhore", take: 28369, change: "down" },
    {title: "Person of Incest", take: 26344, change: "new" },
    {title: "While You Were Peeping", take: 24684, change: "down" },
    {title: "Fist Fist, Bang Bang", take: 22953, change: "down" },
    {title: "Full Metal Dildo", take: 22157, change: "down" },
    {title: "Fist Me Deadly", take: 21427, change: "down" },
    {title: "Bright Lights, Big Titties", take: 19061, change: "new" },
    {title: "Wet Hot American Hummer", take: 17882, change: "down" },
    {title: "Wangs of New York", take: 17115, change: "new" },
    {title: "The Squirt Locker", take: 15485, change: "down" }
  ], 
  20170128: [
    {title: "The Lust of the Mohicans", take: 49047, change: "new" },
    {title: "Das Booty", take: 44882, change: "new" },
    {title: "Diddler on the Roof", take: 43711, change: "new" },
    {title: "GoodFellatas", take: 41279, change: "down" },
    {title: "Assassin's Cream", take: 36412, change: "down" },
    {title: "Man of La Muncha", take: 32199, change: "new" },
    {title: "Breasts In Shows", take: 29605, change: "new" },
    {title: "The Fantastic Foursome", take: 28931, change: "new" },
    {title: "I Broke My Back Mounting", take: 26254, change: "new" },
    {title: "BALL-E", take: 25122, change: "new" },
    {title: "Boobs! A Madea Porno", take: 22508, change: "down" },
    {title: "Space Jammin'", take: 20870, change: "new" },
    {title: "The Princess Ride", take: 19285, change: "new" },
    {title: "Alvin and the Fuckmunks 2: The Fuckuel", take: 18219, change: "new" },
    {title: "Pan's Labiarinth", take: 16851, change: "down" },
    {title: "Dirty/Hairy", take: 15903, change: "new" },
    {title: "Scatatouille", take: 15210, change: "down" },
    {title: "Stanford's Prisonsex Experiments", take: 14474, change: "new" },
    {title: "G.I. Joe: Masturbation", take: 12789, change: "down" },
    {title: "A Queer and Pleasant Stranger", take: 12014, change: "new" }
  ], 
  20170129: [
    {title: "Jiz and the Diaphragms", take: 47229, change: "new" },
    {title: "Assassin's Cream", take: 46389, change: "up" },
    {title: "GoodFellatas", take: 40822, change: "up" },
    {title: "Man of La Muncha", take: 39791, change: "up" },
    {title: "Fill Bill, vol 2", take: 35627, change: "new" },
    {title: "I Broke My Back Mounting", take: 33300, change: "up" },
    {title: "BALL-E", take: 31564, change: "up" },
    {title: "Boobs! A Madea Porno", take: 30285, change: "up" },
    {title: "Trans Formers 2: Revenge of the Ballin'", take: 26715, change: "new" },
    {title: "The Fantastic Foursome", take: 23951, change: "down" },
    {title: "12 Years A Slut", take: 22606, change: "new" },
    {title: "Hannah on Her Sisters", take: 20740, change: "new" },
    {title: "Diddler on the Roof", take: 18467, change: "down" },
    {title: "Pan's Labiarinth", take: 16679, change: "up" },
    {title: "The Princess Ride", take: 16254, change: "down" },
    {title: "Das Booty", take: 15845, change: "down" },
    {title: "Breasts In Shows", take: 14724, change: "down" },
    {title: "Alvin and the Fuckmunks 2: The Fuckuel", take: 14422, change: "down" },
    {title: "Scatatouille", take: 12707, change: "down" },
    {title: "Space Jammin'", take: 11945, change: "down" }
  ], 
  20170130: [
    {title: "GoodFellatas", take: 53616, change: "up" },
    {title: "MILF Saigon", take: 48103, change: "new" },
    {title: "Assassin's Cream", take: 43663, change: "down" },
    {title: "50 Fist Dates", take: 40500, change: "new" },
    {title: "Man of La Muncha", take: 36344, change: "down" },
    {title: "Gunfight at the KY Corral", take: 34882, change: "new" },
    {title: "Bright Lights, Big Titties", take: 31278, change: "new" },
    {title: "Boobs! A Madea Porno", take: 30362, change: "same" },
    {title: "Trans Formers 2: Revenge of the Ballin'", take: 28626, change: "same" },
    {title: "Bring in 'da Boys, Bring in 'da Spunk", take: 25670, change: "new" },
    {title: "I Broke My Back Mounting", take: 24299, change: "down" },
    {title: "All That Jizz", take: 23024, change: "new" },
    {title: "Fill Bill, vol 2", take: 22649, change: "down" },
    {title: "The African Drag Queen", take: 20625, change: "new" },
    {title: "Hannah on Her Sisters", take: 19201, change: "down" },
    {title: "Diddler on the Roof", take: 17849, change: "down" },
    {title: "The Munchurian Candidass", take: 15920, change: "new" },
    {title: "BALL-E", take: 15152, change: "down" },
    {title: "The Fantastic Foursome", take: 14261, change: "down" },
    {title: "Das Booty", take: 13163, change: "down" }
  ], 
  20170131: [
    {title: "Suicide Squat", take: 48979, change: "new" },
    {title: "MILF Saigon", take: 46184, change: "same" },
    {title: "2 Fast 2 Furry Puss", take: 44385, change: "new" },
    {title: "Group Sex on the Bounty", take: 43007, change: "new" },
    {title: "Bend Over, Like Beckham", take: 39990, change: "new" },
    {title: "Glen, Garry, Glenn, Ross, and Six Other Guys", take: 37971, change: "new" },
    {title: "Assassin's Cream", take: 37031, change: "down" },
    {title: "Rear Entry Widow", take: 35607, change: "new" },
    {title: "There's Someone Inside Mary", take: 33812, change: "new" },
    {title: "50 Fist Dates", take: 31220, change: "down" },
    {title: "GoodFellatas", take: 28731, change: "down" },
    {title: "Gunfight at the KY Corral", take: 27970, change: "down" },
    {title: "XXX: State of the Union: XXX", take: 25894, change: "new" },
    {title: "Bright Lights, Big Titties", take: 25302, change: "down" },
    {title: "While You Were Peeping", take: 23964, change: "new" },
    {title: "Boobs! A Madea Porno", take: 22549, change: "down" },
    {title: "The Maltese Fistin", take: 22330, change: "new" },
    {title: "Person of Incest", take: 21465, change: "new" },
    {title: "Atlas Chugged", take: 21210, change: "new" },
    {title: "Dr. Strangelust, or: How I Learned To Stop Worrying And Love The Bum", take: 19324, change: "new" }
  ]
};
// jshint -W117
//@prepros-prepend partials/_functions.js
//@prepros-prepend partials/_titles.js 
//@prepros-prepend data/_january.js 

$('header .logo').click(function() {
  $('header').toggleClass('expanded');
});

$('header .logo').hover(function() {
  $('header .fist').addClass('shaking');
}, function() {
  $('header .fist').removeClass('shaking');
});


$('.top-porn').on('click', 'td.title', function() {
  var title = $(this).text();
  var rank = $(this).siblings('.rank').text();
  var intentText = encodeURI("Number "+rank+" Porn for "+currentDay.short+": "+title);
  var intentURL = "https://twitter.com/intent/tweet?url=http%3A%2F%2Fjerking.online&via=AhoyLemon&text="+intentText;
  window.open(intentURL, "popupWindow", "width=550,height=340");
});

//

function todaysPorn(date) {
  $('#TitleCount').text(pornTitles.length);
  console.log(pornTitles);
  var todaysData = pornData[date];
  console.log('there are '+todaysData.length+' titles');
  $('#PornTitles').empty();
  $.each(todaysData, function(key, value) {
    $('#PornTitles').append('<tr><td class="rank">'+(key+1)+'</td><td class="title">'+todaysData[key].title+'</td><td class="gross"><span class="s">$</span>'+numberWithCommas(todaysData[key].take)+'</td><td class="change '+todaysData[key].change+'"> </td></tr>');
  });
  $('#TheDay').text(currentDay.verbose);
}

var currentDay = {
  raw: moment().subtract(1, 'days'),
  verbose: "",
  short: "",
  utc: 0
};

function formatDay(d) {
  currentDay.raw = moment(d);
  currentDay.verbose = moment(d).format('dddd, MMMM Do YYYY');
  currentDay.short = moment(d).format('MMM D');
  currentDay.utc = parseInt(moment(d).format('YYYYMMDD'));
}

var yesterday = moment().subtract(1, 'days').format('dddd, MMMM Do YYYY');
var tweetDay = moment().subtract(1, 'days').format('MMM D');
var utiDay = moment().subtract(1, 'days').format('YYYYMMDD');
formatDay(currentDay.raw);


$(document).ready(function() {
  todaysPorn(utiDay);
  checkArrows();
});

function checkArrows() {
  var n = parseInt(moment(currentDay.raw).subtract(1,'days').format('YYYYMMDD'));
  if (pornData[n]) {
    $('.prev-day').show();
  } else {
    $('.prev-day').hide();
  }
  
  if (parseInt(currentDay.raw.format('YYYYMMDD')) < parseInt(moment().subtract(1,'days').format('YYYYMMDD'))) {
    $('.next-day').show();
  } else {
    $('.next-day').hide();
  }
}

$('.prev-day').click(function() {
  formatDay(moment(currentDay.raw).subtract(1, 'days'));
  todaysPorn(currentDay.utc);
  checkArrows();
});


$('.next-day').click(function() {
  formatDay(moment(currentDay.raw).add(1, 'days'));
  todaysPorn(currentDay.utc);
  checkArrows();
});


$('button[data-opens]').click(function() {
  var d = $(this).attr('data-opens');
  $('[data-drawer="'+d+'"]').addClass('visible');
  $('[data-open="'+d+'"]').addClass('invisible');
  $('[data-closes="'+d+'"]').removeClass('invisible');
  if (d == "casting") {
    $('.maker-steps').addClass('visible');
  }
});

$('button[data-closes]').click(function() {
  var d = $(this).attr('data-closes');
  $('[data-drawer="'+d+'"]').removeClass('visible');
  $('[data-closes="'+d+'"]').addClass('invisible');
  $('[data-opens="'+d+'"]').removeClass('invisible');
  if (d == "casting") {
    $('.maker-steps').removeClass('visible');
  }
});
//# sourceMappingURL=pr0n.js.map