"use client";

import { Deck, DeckCards, DeckEmpty, DeckItem } from "@/components/deck";
import { useState } from "react";

const cards = [
  { id: 1, title: "1" },
  { id: 2, title: "2" },
  { id: 3, title: "3" },
  { id: 4, title: "4" },
  { id: 5, title: "5" },
];

const Example = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState<
    "left" | "right"
  >("left");

  const nextCardLeft = () => {
    if (currentIndex < cards.length) {
      setAnimationDirection("left");
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 0);
    }
  };

  const nextCardRight = () => {
    if (currentIndex < cards.length) {
      setAnimationDirection("right");
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 0);
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col">
      <header className="h-[60px] flex items-center justify-center bg-background border-b">
        <p className="text-sm text-muted-foreground">инд: {currentIndex}</p>
      </header>

      <Deck className="flex-1" style={{ padding: '20px 16px 35px 16px' }}>
        <DeckCards
          animateOnIndexChange={true}
          currentIndex={currentIndex}
          indexChangeDirection={animationDirection}
          onCurrentIndexChange={setCurrentIndex}
          onSwipe={(_index, _direction) => {
            // хендлер при свайпе
          }}
        >
          {cards.map((card) => (
            <DeckItem
              className="flex-col text-center text-black dark:text-white p-0"
              key={card.id}
            >
              <div className="flex-1" />
              <div className="w-full p-4">
                <h3 className="font-bold text-2xl mb-4">{card.title}</h3>
                <div className="flex gap-[10px] w-full">
                  <button
                    onClick={nextCardLeft}
                    disabled={currentIndex >= cards.length}
                    className="flex-1 flex flex-col justify-center items-center h-[60px] rounded-[100px]"
                    style={{ background: '#7B3030', padding: '0 20px', gap: '10px' }}
                  >
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.7235 12.9999L19.5477 8.1757C19.7767 7.94715 19.9055 7.637 19.9058 7.31349C19.9061 6.98999 19.7778 6.67962 19.5493 6.45066C19.3207 6.2217 19.0106 6.09292 18.6871 6.09263C18.3636 6.09234 18.0532 6.22058 17.8242 6.44914L13 11.2734L8.17579 6.44914C7.94683 6.22018 7.6363 6.09155 7.31251 6.09155C6.98872 6.09155 6.67818 6.22018 6.44923 6.44914C6.22027 6.67809 6.09164 6.98862 6.09164 7.31242C6.09164 7.63621 6.22027 7.94674 6.44923 8.1757L11.2734 12.9999L6.44923 17.8241C6.22027 18.0531 6.09164 18.3636 6.09164 18.6874C6.09164 19.0112 6.22027 19.3217 6.44923 19.5507C6.67818 19.7797 6.98872 19.9083 7.31251 19.9083C7.6363 19.9083 7.94683 19.7797 8.17579 19.5507L13 14.7265L17.8242 19.5507C18.0532 19.7797 18.3637 19.9083 18.6875 19.9083C19.0113 19.9083 19.3218 19.7797 19.5508 19.5507C19.7797 19.3217 19.9084 19.0112 19.9084 18.6874C19.9084 18.3636 19.7797 18.0531 19.5508 17.8241L14.7235 12.9999Z" fill="#FF7474"/>
                    </svg>
                  </button>
                  <button
                    onClick={nextCardRight}
                    disabled={currentIndex >= cards.length}
                    className="flex-1 flex flex-col justify-center items-center h-[60px] rounded-[100px]"
                    style={{ background: '#7462FF', padding: '0 20px', gap: '10px' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 4C13.8 4 12 6.667 12 8C12 6.667 10.2 4 7 4C3.8 4 3 6.667 3 8C3 15 12 20 12 20C12 20 21 15 21 8C21 6.667 20.2 4 17 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </DeckItem>
          ))}
        </DeckCards>
        <DeckEmpty />
      </Deck>

      <nav className="h-[40px] flex items-center justify-center bg-background border-t">
        <p className="text-xs text-muted-foreground">TabBar</p>
      </nav>
    </div>
  );
};

export default Example;
