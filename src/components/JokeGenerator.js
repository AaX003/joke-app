import "../css/JokeGenerator.css";
import { useState } from "react";

function JokeGenerator() {

  const [jokes, setJokes] = useState([]);

   const jokeList = [
  { msg: "Why don’t scientists trust atoms? Because they make up everything!", category: "Geeky" },
  { msg: "Why did the math book look sad? It had too many problems.", category: "Geeky" },
  { msg: "Parallel lines have so much in common… it’s a shame they’ll never meet.", category: "Pun" },
  { msg: "Why don’t skeletons fight each other? They don’t have the guts.", category: "Pun" },
  { msg: "What do you call fake spaghetti? An impasta.", category: "Pun" },
  { msg: "Why did the scarecrow win an award? Because he was outstanding in his field.", category: "Pun" },
  { msg: "Knock knock. Who’s there? Boo. Boo who? Don’t cry, it’s just a joke!", category: "Knock-Knock" },
  { msg: "I told my computer I needed a break… now it won’t stop sending me Kit-Kats.", category: "Geeky" },

  { msg: "Why did the golfer bring two pairs of pants? In case he got a hole in one.", category: "Dad-Joke" },
  { msg: "What do you give turtles on their birthday? A shell-lebration.", category: "Pun" },
  { msg: "Why don’t eggs tell jokes? They’d crack each other up.", category: "Dad-Joke" },
  { msg: "I used to hate facial hair, but then it grew on me.", category: "Pun" },
  { msg: "How does a penguin build its house? Igloos it together.", category: "Pun" },
  { msg: "Why was the computer cold? It left its Windows open.", category: "Geeky" },
  { msg: "How do you organize a space party? You planet.", category: "Geeky" },
  { msg: "Why don’t seagulls fly over the bay? Because then they’d be bagels.", category: "Pun" },
  { msg: "I only know 25 letters of the alphabet. I don’t know Y.", category: "Pun" },
  { msg: "Why did the bicycle fall over? It was two-tired.", category: "Pun" },

  { msg: "Knock knock. Who’s there? Cow says. Cow says who? No silly, cow says mooo!", category: "Knock-Knock" },
  { msg: "Knock knock. Who’s there? Lettuce. Lettuce who? Lettuce in, it’s freezing!", category: "Knock-Knock" },
  { msg: "Knock knock. Who’s there? Tank. Tank who? You’re welcome!", category: "Knock-Knock" },
  { msg: "Knock knock. Who’s there? Nobel. Nobel who? No bell, that’s why I knocked!", category: "Knock-Knock" },

  { msg: "What did one wall say to the other wall? I’ll meet you at the corner.", category: "Dad-Joke" },
  { msg: "Why don’t oysters donate to charity? Because they’re shellfish.", category: "Pun" },
  { msg: "Why can’t you trust stairs? They’re always up to something.", category: "Pun" },
  { msg: "What do you call cheese that isn’t yours? Nacho cheese.", category: "Pun" },
  { msg: "Why did the coffee file a police report? It got mugged.", category: "Pun" },
  { msg: "How does the ocean say hi? It waves.", category: "Dad-Joke" },
  { msg: "Why don’t crabs ever give to charity? Because they’re a little shellfish.", category: "Pun" },
  { msg: "How do you catch a squirrel? Climb a tree and act like a nut.", category: "Dad-Joke" },

  { msg: "Why was the stadium so hot? Because all the fans left.", category: "Dad-Joke" },
  { msg: "How do you make holy water? You boil the hell out of it.", category: "Pun" },
  { msg: "I used to be a banker, but I lost interest.", category: "Pun" },
  { msg: "Why did the computer show up at work late? It had a hard drive.", category: "Geeky" },
  { msg: "How do you comfort a JavaScript bug? You console it.", category: "Geeky" },
  { msg: "Why was the math teacher suspicious of prime numbers? They looked a little odd.", category: "Geeky" },
  { msg: "Why did the chicken join a band? Because it had the drumsticks.", category: "Dad-Joke" },
  { msg: "What do you call a belt made out of watches? A waist of time.", category: "Pun" },
  { msg: "How does the moon cut his hair? Eclipse it.", category: "Pun" },

  { msg: "Why can’t your nose be 12 inches long? Because then it would be a foot.", category: "Pun" },
  { msg: "Why did the tomato blush? Because it saw the salad dressing.", category: "Dad-Joke" },
  { msg: "How do cows stay up to date with current events? They read the moos-paper.", category: "Pun" },
  { msg: "Why was six afraid of seven? Because seven eight nine.", category: "Pun" },
  { msg: "What did the grape do when it got stepped on? Nothing but let out a little wine.", category: "Dad-Joke" },
  { msg: "Why can’t you give Elsa a balloon? Because she’ll let it go.", category: "Pun" },
  { msg: "How many tickles does it take to make an octopus laugh? Ten tickles.", category: "Pun" },
  { msg: "Why did the man put his money in the freezer? He wanted cold hard cash.", category: "Dad-Joke" },
  { msg: "Why do ducks make great detectives? They always quack the case.", category: "Pun" },
  { msg: "Why did the banana go to the doctor? Because it wasn’t peeling well.", category: "Dad-Joke" },
  { msg: "Why did the physics teacher break up with the biology teacher? There was no chemistry.", category: "Geeky" },
  { msg: "Why can’t you trust an atom? They literally make up everything.", category: "Geeky" },
  { msg: "Why do bees have sticky hair? Because they use honeycombs.", category: "Dad-Joke" },
  { msg: "What’s orange and sounds like a parrot? A carrot.", category: "Pun" },

  { msg: "Why did the cookie go to the hospital? Because it felt crummy.", category: "Dad-Joke" },
  { msg: "Why did the golfer bring an extra shirt? In case he got a hole in one.", category: "Dad-Joke" },
  { msg: "What’s a skeleton’s least favorite room in the house? The living room.", category: "Pun" },
  { msg: "Why do vampires always seem sick? Because they’re coffin.", category: "Pun" },
  { msg: "Why did the computer crash? It had a bad byte.", category: "Geeky" },
  { msg: "Why don’t programmers like nature? Too many bugs.", category: "Geeky" },
  { msg: "What do you call two birds in love? Tweethearts.", category: "Pun" },

  { msg: "Why don’t calendars ever get tired? They’re always full of dates.", category: "Pun" },
  { msg: "Why did the smartphone need glasses? It lost its contacts.", category: "Geeky" },
  { msg: "Why did the fisherman put peanut butter into the sea? To go with the jellyfish.", category: "Pun" },
  { msg: "Why do cows wear bells? Because their horns don’t work.", category: "Dad-Joke" },
  { msg: "What do you call an alligator in a vest? An investigator.", category: "Pun" },
  { msg: "Why did the bicycle collapse? It was two tired.", category: "Pun" },

  { msg: "Why did the coffee taste like mud? Because it was ground just this morning.", category: "Dad-Joke" },
  { msg: "What do you call a bear with no teeth? A gummy bear.", category: "Dad-Joke" },
  { msg: "Why did the stadium get hot after the game? All the fans left.", category: "Dad-Joke" },
  { msg: "What do you get if you cross a snowman and a vampire? Frostbite.", category: "Pun" },
  { msg: "Why don’t melons get married? Because they cantaloupe.", category: "Pun" },

  { msg: "How do you find Will Smith in the snow? You look for fresh prints.", category: "Pun" },
  { msg: "Why don’t some couples go to the gym? Because some relationships don’t work out.", category: "Dad-Joke" },
  { msg: "Why did the mushroom go to the party alone? Because he’s a fungi.", category: "Pun" },
  { msg: "Why do cows have hooves instead of feet? Because they lactose.", category: "Pun" },
  { msg: "What kind of key opens a banana? A monkey.", category: "Pun" },

  { msg: "Why did the barber win the race? He knew all the shortcuts.", category: "Dad-Joke" },
  { msg: "Why did the chicken go to the seance? To talk to the other side.", category: "Pun" },
  { msg: "Why can’t you hear a psychiatrist using the bathroom? Because the P is silent.", category: "Pun" },
  { msg: "What do you call an elephant that doesn’t matter? An irrelephant.", category: "Pun" },
  { msg: "What do you call a fish with no eyes? Fsh.", category: "Pun" },

  { msg: "Why don’t mountains get cold in the winter? They wear snow caps.", category: "Dad-Joke" },
  { msg: "Why was the broom late? It swept in.", category: "Dad-Joke" },
  { msg: "Why was the belt arrested? For holding up a pair of pants.", category: "Pun" },
  { msg: "How do you make a tissue dance? You put a little boogie in it.", category: "Dad-Joke" },
  { msg: "Why did the clock go to the principal’s office? For tocking too much.", category: "Pun" },
  { msg: "Why did the robot go on vacation? It needed to recharge.", category: "Geeky" },
  { msg: "Why don’t you ever see elephants hiding in trees? Because they’re so good at it.", category: "Dad-Joke" },
  { msg: "Why did the cat sit on the computer? To keep an eye on the mouse.", category: "Geeky" },

  { msg: "Why was the computer so wise? It had a lot of bytes of experience.", category: "Geeky" },
  { msg: "Why was the math teacher at the beach? She was working on her tan-gent.", category: "Geeky" },
  { msg: "Why don’t skeletons ever use cell phones? They don’t have the guts to text.", category: "Pun" },
  { msg: "What did one elevator say to the other elevator? I think I’m coming down with something.", category: "Dad-Joke" },
  { msg: "Why did the ghost go into the bar? For the boos.", category: "Pun" },

  { msg: "Why can’t your hand be 12 inches long? Because then it would be a foot.", category: "Pun" },
  { msg: "Why did the iPhone wear glasses? Because it lost its contacts.", category: "Geeky" },
  { msg: "What do you call a dinosaur with an extensive vocabulary? A thesaurus.", category: "Geeky" },
  { msg: "Why do bicycles fall over? Because they’re two-tired.", category: "Pun" },
  { msg: "Why did the kid bring a ladder to school? Because he wanted to go to high school.", category: "Dad-Joke" },
  { msg: "Why did the banker switch careers? He lost interest.", category: "Pun" }
];


    const HandleGenerate = () => {
      const randomJoke = jokeList[Math.floor(Math.random() * jokeList.length)];
      setJokes([randomJoke])
    }

   
  return (
    <div className="container">
      <header id="heading" className="main-heading">
        <h1 className="title">
          Joke Generator
        </h1>
      </header>
      
      <main id="secondary-container" className="joke-display-container">
         {jokes.length === 0 ? (
                <p className="empty-msg">
                    You currently do not have any jokes!
                    Use the button below to generate some now!
                </p>
            ) : (
                <div className="joke-wrapper">
                    {jokes.map((joke, index) => (
                        <div key={index} className="joke-card">
                          <p className="joke-msg">{joke.msg}</p>
                          <p className="joke-cate">{joke.category}</p>
                        </div>
                    ))}
                </div>
                
            )}
      </main>
      <main id="teritary-container" className="joke-container">
        <button className="generate-btn" onClick={HandleGenerate}>
          Get a Random Joke
        </button>
      </main>
    </div>
  );
}

export default JokeGenerator;
