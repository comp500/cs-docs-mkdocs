# Paper 1 Wikibook solutions (2019)

## Section C prediction answers

## Section D solutions

### Q1 - Automatically unlock and open doors

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
