import { useState } from 'react'
import './App.css'


function App() {
  const deck = [
    {front: "Salaam", back: "hello"},
    {front: "Mahaadsaniid", back: "thank you"},
    {front: "bisaat", back: "cat"},
  ];

  // keeping track of the card side 
  
  // what card we're on
  const [index, setIndex] = useState(0); 

  // what side is shown?
  const [showFront, setShowfront] = useState(true); 

//making sure theres no errors 
const hasCards = deck.length > 0;
const current = hasCards ? deck[index] : null;

// this flips the current card
function handleFlip(){
  setShowfront(prev => !prev) // if true false if false true 
}

// picks a random different card 
function handleNext(){
  if(deck.length <= 1){
  setShowfront(true); // show the front side so we're not breaking mental models
  }

let next = index;
// pick different card until we get a different index in (0,deck.len)
while(next===index){
  next = Math.floor(Math.random()*deck.length);
}
//update current card
setIndex(next);

//start new card on the front
setShowfront(true);
}
  
// this shows what appears on the screen
return (
  <div className='app'>
    <h1 className='title'> Somali Basics</h1>
    <h3 className='description'>Hello learn the basics of somali with these flashcards</h3>
    <p>Total cards: {deck.length}</p>

      
      {/** card display area */}
      <div className = {`card ${showFront ? "" : "flipped"}`}
        onClick = {handleFlip} 
        role = "button"
        tabIndex={0}
        onKeyDown={(e) => {
           if (e.key === "Enter" || e.key === " ") handleFlip();
        }}
        aria-label="Flashcard. Click or press Enter/Space to flip."
        >
          <div className='card-inner'>
            <div className='card-face card-front'>
            {hasCards ? current.front : "No cards yet"}
            </div>
              <div className='card-face card-back'>
              {hasCards ? current.back : "No cards yet"}
            </div>
          </div>
        </div>

      
      {/*writing the next button*/}
      <div className = "controls">
      
      <button className='next-bttn' onClick={handleNext} disabled={!hasCards}>
        Next(random)
        </button>
      </div>
      

      </div>


    
  )
  }

export default App
