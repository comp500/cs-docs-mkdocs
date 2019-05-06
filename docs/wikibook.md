# Paper 1 Wikibook solutions (2019)

## Section C prediction answers

## Section D solutions

### Q1 - Automatically unlock and open doors.

It requires the use of other functions within the code (changeStatusOfItem and openClose). Not overly difficult, but takes some time to get your head around. Also need to be careful with where to call the new function from, as it has to be done when picking up an item and playing the dice game, as they're both ways of obtaining a gold or silver key. Would be an ending question.

```java
void autoUnlockOpenDoor(ArrayList<Item> items, ArrayList<Place> places, int currentLocation) {
    //Variables
    int index = 0;

    //Check to see if there is a key
    for (Item i : items) {
        //If it is a gold key in their inventory, unlock and open gold door
        if (i.name.equals("gold key") && i.location == INVENTORY) {
            index = getIndexOfItem("gold door", -1, items);
            changeStatusOfItem(items, index, "unlocked");
            openClose(true, items, places, "gold door", currentLocation);
            say("You have unlocked and opened the gold door");
            break;
        }
        //If it is a silver key in their inventory, unlock and open silver door
        if (i.name.equals("silver key") && i.location == INVENTORY) {
            index = getIndexOfItem("silver door", -1, items);
            changeStatusOfItem(items, index, "unlocked");
            openClose(true, items, places, "silver door", currentLocation);
            say("You have unlocked and opened the silver door");
            break;
        }
    }
}
```

```diff
void playGame(ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
  [']
  [']
  [']
         case "get":
            stopGame = getItem(items, instruction, characters.get(0).currentLocation);
+           autoUnlockOpenDoor(items, places, characters.get(0).currentLocation);
            break;
              [']
              [']
              [']
         case "playdice":
            playDiceGame(characters, items, instruction);
+           autoUnlockOpenDoor(items, places, characters.get(0).currentLocation);
            break;
         case "quit":
            say("You decide to give up, try again another time.");
            stopGame = true;
            break;
         default:
            Console.writeLine("Sorry, you don't know how to " + command + ".");
         }
      }
      Console.readLine();
   }    
```

### Q2 - Allow file name with/without extension.

Really easy to code. Just remove the automatic addition of the ".gme" extension when reading the input, and instead check the input to see if it has the extension or not, and if the latter, add it to the filename. Would be an initial question worth a couple marks.

```diff
public MainWiki2() {
      String filename;
      ArrayList<Item> items = new ArrayList<>();
      ArrayList<Character> characters = new ArrayList<>();
      ArrayList<Place> places = new ArrayList<>();
      Console.write("Enter filename> ");
      
-     filename = Console.readLine() + ".gme";
+     filename = Console.readLine();
+     if (!filename.contains(".gme")) {
+     	filename += ".gme";
+     }
      
      Console.writeLine();
      if (loadGame(filename, characters, items, places)) {
         playGame(characters, items, places);
      } else {
         Console.writeLine("Unable to load game.");
         Console.readLine();
      }         
}
```

### Q3 - Are you sure you want to quit?

Another easy thing to code. Might have gone a bit overboard with checking specifically for yes and no options, they might be nicer and only ask for a yes check. An early question worth a few marks.

```diff
void playGame(ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
  [']
  [']
  [']
         case "quit":
-           say("You decide to give up, try again another time.");
-           stopGame = true;
+           do {
+             Console.writeLine("Are you sure you want to quit (Y/N)?");
+             String reponse = Console.readLine().trim().toLowerCase();
+                                                                       
+             if (reponse.equals("y")) {
+               say("You decide to give up, try again another time.");
+                 stopGame = true;
+               break;
+             } else if (reponse.equals("n")) {
+            break;
+          }
+        } while (true);
            break;
         default:
            Console.writeLine("Sorry, you don't know how to " + command + ".");
         }
      }
      Console.readLine();
   }   
```

### Q4 - If just 'help' is typed, a list of existing commands appear.

I can't see this turning up in the exam, as there isn't a string array that contains an explanation for all the commands already. This is also fairly easy to do, but would take too long to code, especially since you'd spend most of the time typing out the help dialog rather than code to display it.

```diff
public class MainWiki4 {
   static final int INVENTORY = 1001;
   static final int MINIMUM_ID_FOR_ITEM = 2001;
   static final int ID_DIFFERENCE_FOR_OBJECT_IN_TWO_LOCATIONS = 10000;
   
+   static final ArrayList<String> HELP_COMMAND_STRINGS = new ArrayList<String>(Arrays.asList(
+    	"go: Moves the player from one location to another. The go command needs to be followed by one of the six valid directions: north, south, east, west, up, down. (e.g. go north)",
+    	"get: Allows the player to pick up an object that is in the same location as they are. The get command needs to be followed by the name of the object that the player wants to get. If the object can be got then it is added to the player’s inventory and is no longer in its original location. (e.g. get torch)",
+   	"use: Allows the player to use an object that is in their location or their inventory. The use command needs to be followed by the name of the object that the player wants to use. (e.g. use silver key)",
+    	"examine: Provides the player with a more detailed description of an object or character in the same location as they are or an object in their inventory. The examine command needs to be followed by the name of the object or character that the player wants to examine. (e.g. examine red die)",
+    	"say: The player will speak, saying the text that follows the say command. (e.g. say hello)",
+    	"quit: Ends the game, quitting the program.",
+    	"read: Will display the text of objects that can be read. (e.g. read book)",
+    	"move: Allows the player to move an object that is in the same location as they are. The move command needs to be followed by the name of the object that the player wants to move. If the object can be moved then the result of moving the object will be displayed on the screen. (e.g. move bed)",
+    	"open: Allows the player to open an openable item that is in the same location as they are. (e.g. open siler door)",
+    	"close: Allows the player to close an closable item that is in the same location as they are. (e.g. close siler door)",
+    	"playdice: The player will play a dice game with another character. If the player wins then a list of the items that the losing character is carrying is displayed and the user chooses an item to take; if the player loses, the other character takes a random item from the player’s inventory. "
+    	"The playdice command needs to be followed by the name of a character to play the dice game with. The character and the player need to be in the same location and both need to have a die. (e.g. playdice guard)"));

    		[']
    		[']
    		[']
```

```diff
void playGame(ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
  [']
  [']
  [']
+        case "help":
+           Console.writeLine();
+           for (String cmd : HELP_COMMAND_STRINGS) {
+          	  Console.writeLine(cmd);
+           }
+           break;
         default:
            Console.writeLine("Sorry, you don't know how to " + command + ".");
      }
   }
   Console.readLine();
}
```

### Q5 - Create 'teleport (location)' command.

There are multiple ways this may go. They could be nice and just ask you to input room ID's, which is nice and easy, and would be worth a couple marks. I expect that they would give you the room ID's, and then have you ask the user where they would like to go and do it that way, which makes things slightly more tricky but still not bad. They will probably ask for a new function to be made as well. I'm guessing it would be a middle to end question worth a fair amount of marks. I have coded the "tricker" version.

```java
void teleportToRoom(ArrayList<Character> characters, ArrayList<Place> places, ArrayList<Item> items) {
   int response;

   Console.writeLine();
   Console.writeLine("1 = Blue room");
   Console.writeLine("2 = Store cupboard");
   Console.writeLine("3 = Bare bed room");
   Console.writeLine("4 = Empty corridor");
   Console.writeLine("5 = Guardroom");
   Console.writeLine("6 = Flag Jail cell");
   Console.writeLine("7 = Skeleton Jail cell");
   Console.writeLine("8 = Cellar");
   Console.writeLine("Here are a list of rooms. Enter the number relating to the room you wish to teleport to: ");

   //If an invalid response, exit the function, otherwise teleport the player
   try {
      response = Integer.parseInt(Console.readLine().trim());
      characters.get(0).currentLocation = response;
      say("You have been teleported.");
      
      //Describe the room and its items
      Console.writeLine(places.get(characters.get(0).currentLocation - 1).description);
      displayGettableItemsInLocation(items, characters.get(0).currentLocation);
   } catch (Exception e) {
      say("Not a valid room to teleport to.");
      return;
   }
}
```

```diff
void playGame(ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
  [']
  [']
  [']
+        case "teleport":
+           teleportToRoom(characters, places, items);
+           break;
            [']
            [']
            [']
         default:
            Console.writeLine("Sorry, you don't know how to " + command + ".");
      }
   }
   Console.readLine();
}
```

### Q6 - Create 'save (filename)' command.

It's a tedious rewrite of the loadGame function, but with some changes so you write to a file instead of reading from a file (as expected duh). If it was to come up it would be a ending question as it is a long one, but I have a feeling it won't be in the exam.

```java
boolean saveGame(String filename, ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
   int count;
   try {
      FileOutputStream binaryWriter = new FileOutputStream(filename);
      DataOutputStream writer = new DataOutputStream(binaryWriter);
      writer.writeInt(characters.size());
      
      for (count = 0; count < characters.size() ; count++) {
      	writer.writeInt(characters.get(count).id);
      	writer.writeUTF(characters.get(count).name);
      	writer.writeUTF(characters.get(count).description);
      	writer.writeInt(characters.get(count).currentLocation);      
      }
         
      writer.writeInt(places.size());
      for (count = 0; count < places.size() ; count++) {
      	writer.writeInt(places.get(count).id);
      	writer.writeUTF(places.get(count).description);
      	writer.writeInt(places.get(count).north);
      	writer.writeInt(places.get(count).east);
      	writer.writeInt(places.get(count).south);
      	writer.writeInt(places.get(count).west);
      	writer.writeInt(places.get(count).up);
      	writer.writeInt(places.get(count).down);
      }
         
      writer.writeInt(items.size());
      for (count = 0; count < items.size() ; count++) {
      	writer.writeInt(items.get(count).id);
      	writer.writeUTF(items.get(count).description);
      	writer.writeUTF(items.get(count).status);
      	writer.writeInt(items.get(count).location);
      	writer.writeUTF(items.get(count).name);
      	writer.writeUTF(items.get(count).commands);
      	writer.writeUTF(items.get(count).results);
      }
      return  true;         
   } catch (Exception e) {
      return  false;
   }
}
```

```diff
void playGame(ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
  [']
  [']
  [']
+        case "save":
+           Console.writeLine("What would you like to name the file as? ");
+           String filename = Console.readLine();
+           
+           if (!filename.contains(".gme")) {
+              filename += ".gme";
+           }
+           
+           //See if game saved correctly or not
+           if (saveGame(filename, characters, items, places)) {
+             say("Game saved successfully!");
+           } else {
+             say("Couldn't save the current game.");
+           }
            
            break;
         //QUESTION END
         default:
            Console.writeLine("Sorry, you don't know how to " + command + ".");
      }
   }
   Console.readLine();
}
```
