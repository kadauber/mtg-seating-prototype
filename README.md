# MTG Seating Prototype

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Raison d'etre

While running the front of house for the MIT Musical Theater Guild's 2017 production of Avenue Q, it was a pain to manually assign seats to people with reservations. We constantly forgot which seats were broken, had a difficult time keeping track of parties who needed handicapped seating, and even accidentally assigned the same seat to multiple people.

Later on during the production, I started messing around with an Angular 4 tutorial and realized that it could be pretty fun and useful to make a small web app to assist with seat assignment. This prototype is the result of about a week's work on the side, along with classes, our new production (Spamalot), and other extracurriculars. Parts of it are much cleaner than others (for instance, my-new-component is completely unused) because I simply wanted to get a prototype down fast.

## Next iteration

The current state of this app comprises the bulk of the next iteration. However, major goals for future versions are to:

* Provide venue management, so as an admin I can 
  * update broken and handicapped seats
  * add seats to a venue
  * CRUD entire venues (stretch goal)
* Provide production/show management, so that as an admin I can CRUD productions and shows for a production
* Integrate with the current reservations system, meaning pull reservations information from the SQL database
  * at least automate reservation information input after reservations are closed
  * preferably live update the reservation information as reservations come in
  * ideally completely replace the current reservations system (stretch goal)
* Add a "front of house" mode, so that as front of house I can
  * calculate ticket prices
  * track which seats have been sold and which are still available
  * record how much money we should have made (all transactions are cash)
* Add a "theatergoer" mode, so that as an audience member I can 
  * see my reservation and the seats I have been assigned
  * update or cancel my reservation
* Add a "cast and crew" mode, so that as a cast or crew member I can mark my friends' and family's reservations as complimentary "comp" tickets

These are pretty big goals, but hopefully some of them will come about in the beta version, coming soon to my github. 
