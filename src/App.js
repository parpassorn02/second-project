import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import { Menu } from './Menu';
import './App.css';
import niceislandImage from './img/nice island.jpg';
import KohTaoImage from './img/Koh Tao.jpg';

const destinations = [
  {
    name: "Koh Tao",
    description: [
      "In the beginning, there was Koh Samui, then Koh Phangan, but nowadays Koh Tao is on the same level. With around 21 square kilometers, Koh Tao is a true “mini island”. Its big brother Koh Samui is a short distance away. With its beautiful white beaches and blue sea, Koh Tao is a true Paradise in Thailand. The island has around 1,400 inhabitants who all live off tourism and, in particular, scuba diving. This is the biggest reason to go to Koh Tao. You will find beautiful scuba diving destinations.",
    ],
    image: KohTaoImage,
    link: "/islands/kohtao",
    tags: [
      "island",
    ],
    informations: [
      {
        name: "5 Fun Things to Do in Koh Tao",
        list: [
          "Explore Beaches With a Kayak.One of the nicest ways to spend your day is in a kayak. You can easily visit the most beautiful beaches and the isolated snorkeling sites in a kayak. You will find many tour operators at Sairee Beach where you can rent a kayak for half a day or a whole day.You can also rent a half-day kayak to kayak to Koh Nang Yuan and explore the island. It is one of the best things to do on Koh Tao.",
          "Rock Climbing. If you are looking for a little more adventure on Koh Tao, we recommend climbing the rocks. This small island has many large boulders that can be climbed perfectly. One of the popular companies to offer rock Climbing in Koh Tao is Goodtime Adventures. They offer courses to everyone, from beginners to experienced climbers. They have more than 70 climbing routes in 3 areas, along with a number of fun spots.",
          "Day Trip to Koh Nangyuan.Koh Nangyuan is not really part of Koh Tao, but a small neighboring island. The island itself actually consists of three smaller islands connected by a natural sandbar.A day trip to this island is the most popular activity on Koh Tao and if you are active on social media you will undoubtedly recognize the pictures. Koh Nangyuan is famous for the turquoise water, the beautiful white sandy beaches, and the snorkeling at the colorful coral. When you are on the island, you can climb to the viewpoint for a perfect picture.",
          "Experience a Sunset. Sairee Beach is the best place to watch the sun go down. Grab a beer, plop down on the beach and watch the sun turn the sky into an orange-pink color. A great place to watch the sun go down is at the Lotus Bar. This is the familiar place with the vertical palm tree where everyone seems to be taking a photo. This is a must-do on Koh Tao.",
          "Climb to One of the Viewpoint.John Suwan Viewpoint.In the south of Koh Tao, you will find the John Suwan Viewpoint. With good weather, you will have a view to the north, with a view of Chalok Baan Khao Bay, Haad Tien Beach and the hilly interior of the island. It is named after the two friends who discovered the view while looking for a place to build a house.",
        ]
      },
      {
        name: "Scuba Diving in Koh Tao",
        list: [
          "On Koh Tao you can scuba dive very well; it is what this island is known for. It is perfect for beginners because of the crystal clear and shallow water. In addition, the conditions here are so optimal that you can scuba dive all year long on Koh Tao. The best scuba diving spots are around 20 kilometers from the island. You will encounter everything under water; from tropical fish to colorful coral and from stingrays to barracudas. On the island, you will find more than 40 scuba diving schools where you can complete all PADI courses or simply book some separate scuba diving lessons.",
        ]
      },
      {
        name: "Snorkeling and Free Diving in Koh Tao",
        list: [
          "If you are not into scuba diving, you can, of course, also go snorkeling. You can book different snorkeling trips to places in the Koh Tao area. You will have to pay around 100 to 200 Baht (US$3.20 to $6.40). Booking a tour is usually not necessary. With your rented snorkel set you can just walk into the water, swim a bit, and put your head under water, easy",
        ]
      },
      {
        name: "Freediving",
        list: [
          "Freediving is on the rise on Koh Tao. Please note that free diving is quite risky. So try taking a lesson or go with someone experienced before you try something yourself. You can look for a lesson at Apnea Total. An introductory lesson of one day will cost you around 3,000 Baht (US$96).",
        ]
      },
      {
        name: "How to Get to Koh Tao",
        list: [
          "The boat is the only way to get to Koh Tao. Most boats sail the route between the mainland (Chumphon) and Koh Tao, Koh Phangan, and Koh Samui.",
        ]
      },
      {
        name: "From Koh Phangan to Koh Tao",
        list: [
          "Boats from / to Koh Phangan go 3 times a day at 6:00 a.m., 9:30 a.m., and 3:00 p.m. It costs between 500 and 600 Baht (US$16 to $19.20). You will usually be picked up from your accommodation.",
        ]
      },
      {
        name: "From Koh Samui to Koh Tao",
        list: [
          "Boats from / to Koh Samui go twice a day. It will cost you around 600 Baht (US$19.20) and they will leave at 9:30 a.m. and 3:00 p.m. The boat usually sails (if not always) via Koh Phangan. So make sure you step out on the right island",
        ]
      },
    ]
  },

  {
    name: "Pig Mountain",
    description: [
      "In the beginning, there was Koh Samui, then Koh Phangan, but nowadays Koh Tao is on the same level. With around 21 square kilometers, Koh Tao is a true “mini island”. Its big brother Koh Samui is a short distance away. With its beautiful white beaches and blue sea, Koh Tao is a true Paradise in Thailand. The island has around 1,400 inhabitants who all live off tourism and, in particular, scuba diving. This is the biggest reason to go to Koh Tao. You will find beautiful scuba diving destinations.",
    ],
    image: KohTaoImage,
    link: "/mountain/pigmountain",
    tags: [
      "mountain",
    ],
    informations: [
      {
        name: "5 Fun Things to Do in Koh Tao",
        list: [
          "Explore Beaches With a Kayak.One of the nicest ways to spend your day is in a kayak. You can easily visit the most beautiful beaches and the isolated snorkeling sites in a kayak. You will find many tour operators at Sairee Beach where you can rent a kayak for half a day or a whole day.You can also rent a half-day kayak to kayak to Koh Nang Yuan and explore the island. It is one of the best things to do on Koh Tao.",
          "Rock Climbing. If you are looking for a little more adventure on Koh Tao, we recommend climbing the rocks. This small island has many large boulders that can be climbed perfectly. One of the popular companies to offer rock Climbing in Koh Tao is Goodtime Adventures. They offer courses to everyone, from beginners to experienced climbers. They have more than 70 climbing routes in 3 areas, along with a number of fun spots.",
          "Day Trip to Koh Nangyuan.Koh Nangyuan is not really part of Koh Tao, but a small neighboring island. The island itself actually consists of three smaller islands connected by a natural sandbar.A day trip to this island is the most popular activity on Koh Tao and if you are active on social media you will undoubtedly recognize the pictures. Koh Nangyuan is famous for the turquoise water, the beautiful white sandy beaches, and the snorkeling at the colorful coral. When you are on the island, you can climb to the viewpoint for a perfect picture.",
          "Experience a Sunset. Sairee Beach is the best place to watch the sun go down. Grab a beer, plop down on the beach and watch the sun turn the sky into an orange-pink color. A great place to watch the sun go down is at the Lotus Bar. This is the familiar place with the vertical palm tree where everyone seems to be taking a photo. This is a must-do on Koh Tao.",
          "Climb to One of the Viewpoint.John Suwan Viewpoint.In the south of Koh Tao, you will find the John Suwan Viewpoint. With good weather, you will have a view to the north, with a view of Chalok Baan Khao Bay, Haad Tien Beach and the hilly interior of the island. It is named after the two friends who discovered the view while looking for a place to build a house.",
        ]
      },
      {
        name: "Scuba Diving in Koh Tao",
        list: [
          "On Koh Tao you can scuba dive very well; it is what this island is known for. It is perfect for beginners because of the crystal clear and shallow water. In addition, the conditions here are so optimal that you can scuba dive all year long on Koh Tao. The best scuba diving spots are around 20 kilometers from the island. You will encounter everything under water; from tropical fish to colorful coral and from stingrays to barracudas. On the island, you will find more than 40 scuba diving schools where you can complete all PADI courses or simply book some separate scuba diving lessons.",
        ]
      },
      {
        name: "Snorkeling and Free Diving in Koh Tao",
        list: [
          "If you are not into scuba diving, you can, of course, also go snorkeling. You can book different snorkeling trips to places in the Koh Tao area. You will have to pay around 100 to 200 Baht (US$3.20 to $6.40). Booking a tour is usually not necessary. With your rented snorkel set you can just walk into the water, swim a bit, and put your head under water, easy",
        ]
      },
      {
        name: "Freediving",
        list: [
          "Freediving is on the rise on Koh Tao. Please note that free diving is quite risky. So try taking a lesson or go with someone experienced before you try something yourself. You can look for a lesson at Apnea Total. An introductory lesson of one day will cost you around 3,000 Baht (US$96).",
        ]
      },
      {
        name: "How to Get to Koh Tao",
        list: [
          "The boat is the only way to get to Koh Tao. Most boats sail the route between the mainland (Chumphon) and Koh Tao, Koh Phangan, and Koh Samui.",
        ]
      },
      {
        name: "From Koh Phangan to Koh Tao",
        list: [
          "Boats from / to Koh Phangan go 3 times a day at 6:00 a.m., 9:30 a.m., and 3:00 p.m. It costs between 500 and 600 Baht (US$16 to $19.20). You will usually be picked up from your accommodation.",
        ]
      },
      {
        name: "From Koh Samui to Koh Tao",
        list: [
          "Boats from / to Koh Samui go twice a day. It will cost you around 600 Baht (US$19.20) and they will leave at 9:30 a.m. and 3:00 p.m. The boat usually sails (if not always) via Koh Phangan. So make sure you step out on the right island",
        ]
      },
    ]
  }
];

const tags = [
  "island",
  "mountain",
  "history",
  "besttimetovisit",
];

function DestinationsPage({ destinations }) {
  return (
    <section className="cards" >
      {
        destinations.map(destination =>
          <article className="card">
            <Link to={destination.link}>
              {
                destination.image ? <picture><img src={destination.image}></img></picture> : <span />
              }
              <div className="card-content">
                <h2>{destination.name}</h2>
                {destination.description.map(line =>
                  <p>{line}</p>
                )}

                <div className="card-footer">
                  {
                    destination.tags.map(tag =>
                      <span className="card-tag">{tag}</span>
                    )
                  }
                </div>
              </div>
            </Link>
          </article>
        )
      }
    </section >
  )
}

function DestinationDetailsPage(destination) {
  return (
    <div className="destinationdetailspage">
      <h2>{destination.name}</h2>
      <img src={destination.image}></img>
      {destination.description.map(line =>
        <p>{line}</p>
      )}
      {
        destination.informations && destination.informations.map(information =>
          <div>
            <h3>{information.name}</h3>
            <ul>
              {information.list.map(item =>
                <li>{item}</li>
              )}
            </ul>
          </div>
        )
      }
      {/* {
        island.informations && (
          <div>
            <h3>Instructions</h3>
            <ol>
              {recipe.instructions.map(instruction =>
                <li>{instruction}</li>
              )}
            </ol>
          </div>)
      } */}
    </div>
  )
}

function App() {
  return (
    <Router>
      <div>
        <Menu></Menu>
        <img className="cover" src={niceislandImage}></img>
        <div className="content">
          <div className="center-content">
            <Switch>
              <Route exact path="/">
                <DestinationsPage destinations={destinations} />
              </Route>
              {destinations.map(destination =>
                <Route path={destination.link}>
                  <DestinationDetailsPage {...destination}></DestinationDetailsPage>
                </Route>
              )}
              {tags.map(tag =>
                <Route path={"/" + tag}>
                  <DestinationsPage destinations={destinations.filter(r => r.tags.includes(tag))} />
                </Route>
              )}
            </Switch>
          </div>
        </div>
      </div>
    </Router >
  );
}



export default App;
