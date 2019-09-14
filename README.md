# unit-four-game
This is attempt number 5. I hope I get to start completely over again!

This is a JS based RPG game that runs in a web browser.

**I'm not an experienced coder. I brute forced this project, based on a series of specific requirements, with non-descript ways to reach the ends. 

A majority of the game runs on visibility changes initiated by clicks.

The character selection screen pushes information about the player's selected character to empty arrays and those arrays are used to display information about the character later in the game, or update their statuses, like hit points, etc.

When the player selects an enemy on the map, that enemy character's information is pushed to an empty array, and if the player confirms a battle, that inforamtion is used to facilitate a simple battle scenario where the player has one attack option, and the enemy automatically counters. 

If the player wins, the battle menus collapse and the player returns to the map, and the defeated enemy is removed. 

If the player loses, the browser window is reset.

There should be frames in between all of these events, like stories, status updates, and other types screens, which would be easy to setup, but I being overly ambitious, or ignorant of how long it would take to implement my ideas, I just didn't/don't have time to get those things in.