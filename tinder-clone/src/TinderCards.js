import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
// import axios from  "./axios";
import db from "./firebase";

export default function TinderCards() {
    // const [people, setPeople] = useState([
    //   {
    //     name: "Elon Musk",
    //     url: "https://www.usnews.com/dims4/USNEWS/f45ea7c/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fd1%2Fd8%2F8501ba714a21aed9a7327e02ade1%2F180515-10thingselonmusk-editorial.jpg"
    //   },
    //   {
    //     name: "Jeff Bezos",
    //     url: "https://imageio.forbes.com/specials-images/imageserve/60d46873321b437f2cf2f788/Amazon-Unveils-Its-First-Smartphone/1960x0.jpg?fit=bounds&format=jpg&width=960"
    //   }
    // ]);
  const [people, setPeople] = useState([]);

  //   useEffect(() => {
  //      async function fetchData() {
  //        const req = await axios.get('/tinder/cards');

  //        setPeople(req.data);
  //      }

  //      fetchData();
  //   } , [])

  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
    //   setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen!!");
  };

  useEffect(() => {
    const unsubsribe = db.collection("people").onSnapshot((snapshot) =>
      setPeople(snapshot.docs.map((doc) => doc.data()))
    );

    return() =>{
        unsubsribe();
    }
  }, [people]);

  return (
    <div className="tinderCards">
      <div className="tinderCards-cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
