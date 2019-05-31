# Paper 1 Wikibook solutions (2019)

This page contains solutions for the wikibook on the 2019 A Level practical exam, available at https://en.wikibooks.org/wiki/A-level_Computing/AQA/Paper_1/Skeleton_program/2019.

## Section C prediction answers

### A function that returns multiple variables.

Java doesn’t allow you to return multiple variables, so this will not come up in the exam. AQA made this mistake last year!

### A built-in function used in the function TakeItemFromOtherCharacter.

- get
- size
- ArrayList (is technically a constructor, so be careful with this one!)
- add
- contains
- indexOf

### A class that has exactly 4 attributes.

- Character

### A constructor.

- Main

### A user defined function.

- getInstruction
- extractCommand
- go
- displayDoorStatus
- displayContentsOfContainerItem
- examine
- getPositionOfCommand
- getResultForCommand
- say
- extractResultForCommand
- changeLocationReference
- openClose
- getIndexOfItem
- changeLocationOfItem
- changeStatusOfItem
- getRandomNumber
- rollDie
- isNumeric
- changeStatusOfDoor
- useItem
- readItem
- getItem
- checkIfDiceGamePossible
- takeItemFromOtherCharacter
- takeRandomItemFromPlayer
- playDiceGame
- moveItem
- displayInventory
- displayGettableItemsInLocation
- displayOpenCloseMessage
- playGame
- loadGame

### A user defined function other than 'Main' that takes no arguments.

- getInstruction

### State the name of a constant, and explain why constants might be used.

- INVENTORY
- MINIMUM_ID_FOR_ITEM
- ID_DIFFERENCE_FOR_OBJECT_IN_TWO_LOCATIONS

Reasons why constants may be used:

- It makes code more readable and understandable, as you can assign a name to a value that never changes.
- A change for the value stored in the constant only has to be changed where it is declared, meaning a single change is needed to a value that may be used multiple times throughout code.
- It allows literal values to have some meaning, as they could be ambiguous (e.g. 7 could mean the total number of days in a week, or the number of seconds to spend on a task).

### Explain the role of the variable Moved in the function Go
Moved is used to see if a player has already moved to that location, and states if a player is able to move in that direction.

### Describe the role of the variable 'TempCharacter' in the function 'LoadGame'
Used to build a character object, which is then added to the ArrayList<Character>.
	
### Explain the purpose of the following line in GetInstruction: `instruction = Console.readLine().toLowerCase();`
The line of code will read the input from the user in the console. Once they hit enter, the string that has been entered will become lowercase, which makes it easier to compare with other instructions, as you only have to deal with one case of letters.

## Section D predictions

### Key:
**Bold** - Likely to come up in my opinion.  
Normal - Could potentially come up.  
*Italic* - Unlikely to come up.  

| Question | Marks | What could come up                                                                                                                                                                                                                                                                           |
|:--------:|:-----:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 10       | 5     | Allow file name with/without extension.<br>**Are you sure you want to quit?**<br>**Add 'examine room' option to view details of room again.**<br>**Count the number of moves a player makes.**<br>If you are in the cellar you must be carrying a torch to see items.<br>*Create a 'command history list'.* |
| 11       | 8     | Limit Inventory Size by Item Count.<br>**Limit Inventory Size by Item Weight.**                                                                                                                                                                                                                 |
| 12       | 13    | Automatically unlock and open doors.<br>*Save a high score.*<br>**Add 'Fill (item)' Command.**<br>**Container items can be used, Items can be added and removed from containers.**                                                                                                                    |
| 13       | 9     | **Create 'teleport (location)' command.**<br>**Create a new 'drop (item)' command.**<br>**Add Eat Command.**<br>*Add Drink Command.*<br>If the user loses the dice game they can choose what item to give up rather than a random item.                                                                  |


## Section D solutions



### Q1 - Automatically unlock and open doors.

It requires the use of other functions within the code (changeStatusOfItem and openClose). Not overly difficult, but takes some time to get your head around. Also need to be careful with where to call the new function from, as it has to be done when picking up an item and playing the dice game, as they're both ways of obtaining a gold or silver key. Would be an ending question.

??? example "Example Solution"

	```java
	void autoUnlockOpenDoor(ArrayList<Item> items, ArrayList<Place> places, int currentLocation) {
		// Variables
		int index = 0;

		// Check to see if there is a key
		for (Item i : items) {
			// If it is a gold key in their inventory, unlock and open gold door
			if (i.name.equals("gold key") && i.location == INVENTORY) {
				index = getIndexOfItem("gold door", -1, items);
				changeStatusOfItem(items, index, "unlocked");
				openClose(true, items, places, "gold door", currentLocation);
				say("You have unlocked and opened the gold door");
				break;
			}
			// If it is a silver key in their inventory, unlock and open silver door
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
		// ...
			case "get":
				stopGame = getItem(items, instruction, characters.get(0).currentLocation);
	+			if (instruction.equals("gold key") || instruction.equals("silver key")) {
	+				autoUnlockOpenDoor(items, places, characters.get(0).currentLocation);
	+			}
				break;
				// ...
			case "playdice":
				playDiceGame(characters, items, instruction);
	+			autoUnlockOpenDoor(items, places, characters.get(0).currentLocation);
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

??? example "Example Solution"

	```diff
	public Main() {
		String filename;
		ArrayList<Item> items = new ArrayList<>();
		ArrayList<Character> characters = new ArrayList<>();
		ArrayList<Place> places = new ArrayList<>();
		Console.write("Enter filename> ");

	-	filename = Console.readLine() + ".gme";
	+	filename = Console.readLine();
	+	if (!filename.contains(".gme")) {
	+		filename += ".gme";
	+	}
		
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

??? example "Example Solution"

	```diff
	void playGame(ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
			// ...
			case "quit":
	-			say("You decide to give up, try again another time.");
	-			stopGame = true;
	+			do {
	+				Console.writeLine("Are you sure you want to quit (Y/N)?");
	+				String response = Console.readLine().trim().toLowerCase();
	+	
	+				if (response.equals("y")) {
	+					say("You decide to give up, try again another time.");
	+					stopGame = true;
	+					break;
	+				} else if (response.equals("n")) {
	+					break;
	+				}
	+			} while (true);
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

??? example "Example Solution"

	```diff
	void playGame(ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
		// ...
	+		case "help":
	+			Console.writeLine();
	+			Console.writeLine("go: Moves the player from one location to another. The go command needs to be followed by one of the six valid directions: north, south, east, west, up, down. (e.g. go north)");
	+			Console.writeLine("get: Allows the player to pick up an object that is in the same location as they are. The get command needs to be followed by the name of the object that the player wants to get. If the object can be got then it is added to the player’s inventory and is no longer in its original location. (e.g. get torch)");
	+			Console.writeLine("use: Allows the player to use an object that is in their location or their inventory. The use command needs to be followed by the name of the object that the player wants to use. (e.g. use silver key)");
	+			Console.writeLine("examine: Provides the player with a more detailed description of an object or character in the same location as they are or an object in their inventory. The examine command needs to be followed by the name of the object or character that the player wants to examine. (e.g. examine red die)");
	+			Console.writeLine("say: The player will speak, saying the text that follows the say command. (e.g. say hello)");
	+			Console.writeLine("quit: Ends the game, quitting the program.");
	+			Console.writeLine("read: Will display the text of objects that can be read. (e.g. read book)");
	+			Console.writeLine("move: Allows the player to move an object that is in the same location as they are. The move command needs to be followed by the name of the object that the player wants to move. If the object can be moved then the result of moving the object will be displayed on the screen. (e.g. move bed)");
	+			Console.writeLine("open: Allows the player to open an openable item that is in the same location as they are. (e.g. open silver door)");
	+			Console.writeLine("close: Allows the player to close an closable item that is in the same location as they are. (e.g. close silver door)");
	+			Console.writeLine("playdice: The player will play a dice game with another character. If the player wins then a list of the items that the losing character is carrying is displayed and the user chooses an item to take; if the player loses, the other character takes a random item from the player’s inventory.");
	+			Console.writeLine("The playdice command needs to be followed by the name of a character to play the dice game with. The character and the player need to be in the same location and both need to have a die. (e.g. playdice guard)");
	+			break;
			default:
				Console.writeLine("Sorry, you don't know how to " + command + ".");
			}
		}
		Console.readLine();
	}
	```

### Q5 - Create 'teleport (location)' command.

There are multiple ways this may go. They could be nice and just ask you to input room ID's, which is nice and easy, and would be worth a couple marks. I expect that they would give you the room ID's, and then have you ask the user where they would like to go and do it that way, which makes things slightly more tricky but still not bad. They will probably ask for a new function to be made as well. I'm guessing it would be a middle to end question worth a fair amount of marks. I have coded the "tricker" version.

??? example "Example Solution"

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
		Console.writeLine("Enter the number for the room you wish to teleport to: ");

		// If it is an invalid response, exit the function, otherwise teleport the player
		try {
			response = Integer.parseInt(Console.readLine().trim());
			if (response > 0 && response < 9) {
				characters.get(0).currentLocation = response;

				// Describe the room and its items
				Console.writeLine(places.get(characters.get(0).currentLocation - 1).description);
				displayGettableItemsInLocation(items, characters.get(0).currentLocation);
				say("You have teleported.");
			} else {
				say("Not a valid room to teleport to.");
				return;
			}           
		} catch (Exception e) {
			say("Not a valid room to teleport to.");
			return;
		}
	}
	```

	```diff
	void playGame(ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
			// ...
	+		case "teleport":
	+			teleportToRoom(characters, places, items);
	+			break;
			default:
				Console.writeLine("Sorry, you don't know how to " + command + ".");
			}
		}
		Console.readLine();
	}
	```

### Q6 - Create 'save (filename)' command.

It's a tedious rewrite of the loadGame function, but with some changes so you write to a file instead of reading from a file (as expected duh). If it was to come up it would be a ending question as it is a long one, but I have a feeling it won't be in the exam.

??? example "Example Solution"

	```java
	boolean saveGame(String filename, ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
		int count;
		try {
			FileOutputStream binaryWriter = new FileOutputStream(filename);
			DataOutputStream writer = new DataOutputStream(binaryWriter);
			writer.writeInt(characters.size());

			for (count = 0; count < characters.size(); count++) {
				writer.writeInt(characters.get(count).id);
				writer.writeUTF(characters.get(count).name);
				writer.writeUTF(characters.get(count).description);
				writer.writeInt(characters.get(count).currentLocation);
			}

			writer.writeInt(places.size());
			for (count = 0; count < places.size(); count++) {
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
			for (count = 0; count < items.size(); count++) {
				writer.writeInt(items.get(count).id);
				writer.writeUTF(items.get(count).description);
				writer.writeUTF(items.get(count).status);
				writer.writeInt(items.get(count).location);
				writer.writeUTF(items.get(count).name);
				writer.writeUTF(items.get(count).commands);
				writer.writeUTF(items.get(count).results);
			}
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	```

	```diff
	void playGame(ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
			// ...
	+		case "save":
	+			Console.writeLine("What would you like to name the file as? ");
	+			String filename = Console.readLine();
	+
	+			if (!filename.contains(".gme")) {
	+				filename += ".gme";
	+			}
	+
	+			// See if the game saved correctly or not
	+			if (saveGame(filename, characters, items, places)) {
	+				say("Game saved successfully!");
	+			} else {
	+				say("Couldn't save the current game.");
	+			}
	+
	+			break;
			default:
				Console.writeLine("Sorry, you don't know how to " + command + ".");
			}
		}
		Console.readLine();
	}
	```

### Q7 - Add instruction to add a new character to game.

Relatively easy, though I don't know what this would be used for, as the game doesn't seem to allow for multiple players easily, and implementing that would seem as too big of a task to complete. Since it could require a new function to be made, I would say this could be worth 5-7 marks.

??? example "Example Solution"
	
	```java
	Character createCharacter() {
		//Ask them to input a name, description, and location of character
		Character newChar = new Character();
		
		Console.write("Input the name of the character: ");
		newChar.name = Console.readLine();
		Console.write("Input a description of the character: ");
		newChar.description = Console.readLine();
		Console.write("Input the location of the character (specific ID): ");
		newChar.currentLocation = Integer.parseInt(Console.readLine());
		
		return newChar;
	}
	```

	```diff
	void playGame(ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
			// ...
	+		case "newcharacter":
	+			characters.add(createCharacter());
	+			say("New character has been added.");
	+			break;
			default:
				Console.writeLine("Sorry, you don't know how to " + command + ".");
			}
		}
		Console.readLine();
	}
	```

### Q8 - Add 'examine room' option to view details of room again.

Pretty easy to do, you just have to copy two lines of code from playGame() into an else if that checks to see if the input after "examine" is "room". You do have to change the function to have it parse an ArrayList<Place>, but once you know that it's all easy to do. I'd say this is 4-6 marks.

??? example "Example Solution"

	```diff
	-	void examine(ArrayList<Item> items, ArrayList<Character> characters, String itemToExamine, int currentLocation) {
	+	void examine(ArrayList<Item> items, ArrayList<Character> characters, String itemToExamine, int currentLocation, ArrayList<Place> places) {
			int count = 0;
			if (itemToExamine.equals("inventory")) {
				displayInventory(items);
	+		} else if (itemToExamine.equals("room")) {
	+			Console.writeLine(places.get(characters.get(0).currentLocation - 1).description);
	+			displayGettableItemsInLocation(items, characters.get(0).currentLocation);
			} else {
				// ...
			}
		}
	```

	```diff
	void playGame(ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
			// ...
			case "examine":
	-			examine(items, characters, instruction, characters.get(0).currentLocation);
	+			examine(items, characters, instruction, characters.get(0).currentLocation, places);
				break;
			// ...
			}
		}
		Console.readLine();
	}
	```

### Q9 - Create new items for the game via an 'additem (name)'

A very similar process to the new character code. This time, however, it takes the name of the item as an input for the command e.g. additem book. Could require the use of a new function. Worth around 5-7 marks I'd guess.

??? example "Example Solution"

	```java
	Item addNewItem(String name) {
		Item newItem = new Item();

		newItem.name = name;
		Console.write("Input an ID for the item: ");
		newItem.id = Integer.parseInt(Console.readLine());
		Console.write("Input a description of the item: ");
		newItem.description = Console.readLine();
		Console.write("Input status for the item: ");
		newItem.status = Console.readLine();
		Console.write("Input the location of the item: ");
		newItem.location = Integer.parseInt(Console.readLine());
		Console.write("Input the commands of the item: ");
		newItem.commands = Console.readLine();
		Console.write("Input the results of the item: ");
		newItem.results = Console.readLine();

		return newItem;
	}
	```
	
	```diff
	void playGame(ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
			// ...
	+		case "additem":
	+			items.add(addNewItem(instruction));
	+			break;
			// ...
			}
		}
		Console.readLine();
	}
	```
### Q10 - Create a new 'drop (item)' command.

Quite easy, but it can become difficult if you don't remember that there is a case for an item not existing and an item that isn't in your inventory. It also requires the use of changeLocationOfItem() to drop the item where the player is currently standing. I'd say this would be an ending question, worth around 10 marks or so.

??? example "Example Solution"

	```java
	void drop(String itemToDrop, ArrayList<Item> items, int currentLocation) {
		//Get the index of the item.
		int indexOfItem = getIndexOfItem(itemToDrop, -1, items);

		if (indexOfItem == -1)
		{
			//Item doesn't exist
			Console.writeLine("You can't find " + itemToDrop + ".");
		}
		else if (items.get(indexOfItem).location == INVENTORY)
		{
			//Item has been dropped
			Console.writeLine("You dropped " + itemToDrop);
			changeLocationOfItem(items, indexOfItem, currentLocation);
		}
		else if (items.get(indexOfItem).location != INVENTORY)
		{
			//Item isn't in the inventory
			Console.writeLine("You cannot find that in your inventory.");
		}
	}
	```
	
	```diff
	void playGame(ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
			// ...
	+		case "drop":
	+			drop(instruction, items, characters.get(0).currentLocation);
	+			break;
			// ...
			}
		}
		Console.readLine();
	}
	```
	
### Q11 - Count the number of moves a player makes / Save a high score.

Complicated to code, as it may require multiple functions, which is what I have done. I've probably gone way too overboard with what is being asked, but you never know what they might throw at you. By coding something more difficult, it should make a question that may involve a part of this easier. If this were to show up in the same format, you're looking at around 15 marks or so, because this is hefty.

??? example "Example Solution"

	```java
	int getHighScore() {
		int score;

		try {
			File file = new File("highscore.gme");

			if (file.exists()) {
				//Get the high score from the file.
				FileInputStream binaryReader = new FileInputStream("highscore.gme");
				DataInputStream reader = new DataInputStream (binaryReader);
				
				score = reader.readInt();
				reader.close();
				return score;
			} else {
				//No high score found, so just return 0. We will use 0 as a way to say no high score has been set.
				Console.writeLine("Couldn't find a high score, creating high score file.");
				file.createNewFile();
				return 0;
			}			
		} catch (Exception e) {
			//No high score found, so just return 0. We will use 0 as a way to say no high score has been set.
			return 0;
		}
	}

	boolean saveHighScore(int score) {
		try {
			//False in FileOutputStream has it not append to the file, thus overwriting the high score.
			FileOutputStream binaryWriter = new FileOutputStream("highscore.gme", false);
			DataOutputStream writer = new DataOutputStream(binaryWriter);
			writer.writeInt(score);
			writer.close();
			Console.writeLine("New high score saved!");
			return true;
		} catch (Exception e) {
			//Couldn't save for some reason, so just catch the exception and carry on.
			Console.writeLine("Couldn't save high score.");
			return false;
		}
	}
	```
	
	```diff
	-void playGame(ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
	+void playGame(ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places, int highScore) {
		//QUESTION ADDITION
	+	int moves = 0;
		boolean stopGame = false, moved = true;
		String instruction, command;
		int resultOfOpenClose;
		while (!stopGame) {
	+		moves++;
			
			if (moved) {
				Console.writeLine();
				Console.writeLine();
				Console.writeLine(places.get(characters.get(0).currentLocation - 1).description);
				displayGettableItemsInLocation(items, characters.get(0).currentLocation);
				moved = false;
			}
			instruction = getInstruction();
			String[] returnStrings = extractCommand(instruction);
			command = returnStrings[0];
			instruction = returnStrings[1];
			switch (command)
			{
			case "get":
				stopGame = getItem(items, instruction, characters.get(0).currentLocation);
	+			//Check to see if stopGame is true AND the number of moves are smaller than current high score or the high score is 0
	+			if (stopGame) {
	+				Console.writeLine("Game completed in " + moves + " moves.");
	+				if (moves < highScore || highScore == 0) saveHighScore(moves);
	+			}
				break;
			// ...
			}
		}
		Console.readLine();
	}
	```
	
### Q12 - Prevent guard from taking the dice if you lose.

Very easy to do, all it requires is adding another check to an if statement to see if the item is a die or not. An initial question worth a couple of marks.

??? example "Example Solution"

	```diff
	void takeRandomItemFromPlayer(ArrayList<Item> items, int otherCharacterID) {
		ArrayList<Integer> listofIndicesOfItemsInInventory = new ArrayList<>();
		int count = 0;
		while (count < items.size()) {
	-		if (items.get(count).location == INVENTORY) {
	+		if (items.get(count).location == INVENTORY && !items.get(count).name.contains("die")) {
				listofIndicesOfItemsInInventory.add(count);
			}
			count++;
		}
		int rno = getRandomNumber(0, listofIndicesOfItemsInInventory.size() - 1);
		Console.writeLine("They have taken your " + items.get(listofIndicesOfItemsInInventory.get(rno)).name + ".");
		changeLocationOfItem(items, listofIndicesOfItemsInInventory.get(rno), otherCharacterID);
	}
	```

### Q13 - Create 'time' command.

Seems an easy task, but if you cannot get a timestamp from when you started the game, and cannot work out the calculations for hours, minutes and seconds, you would be screwed. *Considering that the AQA spec doesn't cover how to handle time within programming languages, and time functions are not easily interchangeable between languages, the chances of this coming up are highly slim.*

??? example "Example Solution"

	```diff
	void playGame(ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
	+	//Get the start time just using Epoch seconds, as it allows for easier time calculations.
	+	long timeStart = Instant.now().getEpochSecond();
		boolean stopGame = false, moved = true;
		String instruction, command;
		int resultOfOpenClose;
		while (!stopGame) {
			// ...
	+		case "time":
	+			long totalElapsed = Instant.now().getEpochSecond() - timeStart;
	+			int hrs, mins, secs;
	+			
	+			hrs = (int) (totalElapsed / 3600);
	+			mins = (int) (totalElapsed / 60);
	+			secs = (int) (totalElapsed % 60);
	+		
	+			//String format has the time show with leading zeros for a nicer look.
	+			say(String.format("Time elapsed: %02d:%02d:%02d", hrs, mins, secs));
	+			break;
			// ...
		}
		Console.readLine();
	}

	```

### Q14 - Limit Inventory Size by Item Count.

Simple enough to code, but the function needs to be added in a couple of places to ensure that it works throughout the game, so be careful. Would be worth 6-7 marks I reckon considering it requires to get called in two separate functions.

Limit for items have been set to 5 or lower in this example.

??? example "Example Solution"

	```java
	int getInventorySpace(ArrayList<Item> items) {
		int count = 0;

		for (Item item : items) {
			if (item.location == INVENTORY) count++;
		}

		return count;
	}
	```
	
	```diff
	boolean getItem(ArrayList<Item> items, String itemToGet, int currentLocation) {
		boolean stopGame = false, canGet = false;
		String resultForCommand, subCommand = "", subCommandParameter = "";
		int indexOfItem, position;
		indexOfItem = getIndexOfItem(itemToGet, -1, items);
		if (indexOfItem == -1) {
			Console.writeLine("You can't find " + itemToGet + ".");
		}
		// ...
	+	} else if (getInventorySpace(items) >= 5) {
	+		Console.writeLine("You do not have enough space to carry " + itemToGet + ". Drop an item to create space.");
		} else {
			canGet = true;            
		}
		// ...
		return stopGame;
	}
	```
	
	```diff
	void takeItemFromOtherCharacter(ArrayList<Item> items, int otherCharacterID) {
	+	if (getInventorySpace(items) >= 5) {
	+		Console.writeLine("You do not have enough space to carry a new item. Drop an item to create space.");
	+		return;
	+	}
		// ...
	}
	```

### Q15 - Limit Inventory Size by Item Weight.

Very similar to the question above, but now you are looking for strings within a string. Would be worth a similar mark as above, around 6-7.

Limit for weight has been set to a maximum of 7 in this example.

??? example "Example Solution"

	
	```java
	int getInventoryWeight(ArrayList<Item> items) {
		int weight = 0;

		for (Item item : items) {
			if (item.location == INVENTORY) {
				if (item.status.contains("tiny")) weight += 1;
				if (item.status.contains("small")) weight += 2;
				if (item.status.contains("medium")) weight += 3;
			}
		}

		return weight;
	}
	```
	
	```diff
	boolean getItem(ArrayList<Item> items, String itemToGet, int currentLocation) {
		boolean stopGame = false, canGet = false;
		String resultForCommand, subCommand = "", subCommandParameter = "";
		int indexOfItem, position;
		indexOfItem = getIndexOfItem(itemToGet, -1, items);
		if (indexOfItem == -1) {
			Console.writeLine("You can't find " + itemToGet + ".");
		}
		// ...
	+	} else if (getInventoryWeight(items) > 7) {
	+		Console.writeLine("Your inventory is too heavy to carry " + itemToGet + ". Drop an item to create space.");
		} else {
			canGet = true;            
		}
		// ...
		return stopGame;
	}
	```
	
	```diff
	void takeItemFromOtherCharacter(ArrayList<Item> items, int otherCharacterID) {
	+	if (getInventoryWeight(items) > 7) {
	+		Console.writeLine("Your inventory is too heavy to carry a new item. Drop an item to create space.");
	+		return;
	+	}
		// ...
	}
	```

### Q16 - Hit a character with a weapon.

A massive question that requires creating a couple of functions and changing some existing ones, along with adding a new data type to the Character object. I can't see this being in the exam due to it being a long and difficult task to carry out. If it was to show up, you're looking at around 15+ marks, but as I said, I don't think they'd ever ask something like this, or especially to the degree that I have coded it. They could possibly ask for a much simpler one of just attacking a character no matter what, but that seems silly. 

??? example "Example Solution"

	```java
	void attackCharacter(ArrayList<Item> items, ArrayList<Character> characters, String otherCharacterName) {
		int indexOfOtherCharacter = 0;
		boolean attackPossible = checkIfAttackPossible(items, characters, otherCharacterName);

		//Get the index of the other character
		for (int i = 0; i < characters.size(); i++) {
			if (characters.get(0).currentLocation == characters.get(i).currentLocation && characters.get(i).name.equals(otherCharacterName)) {
				indexOfOtherCharacter = i;
			}
		}

		//Carry out attack if possible
		if (attackPossible) {
			String status = "unconscious";
			changeStatusOfCharacter(characters, indexOfOtherCharacter, status);
			say("They have been knocked out!");

			for (Item item : items) {
				if (item.location == characters.get(indexOfOtherCharacter).id) {
					//Drop all items the other character had
					changeLocationOfItem(items, getIndexOfItem(item.name, item.id, items), characters.get(indexOfOtherCharacter).currentLocation);
				}
			}

			displayGettableItemsInLocation(items, characters.get(0).currentLocation);
		}
	}

	boolean checkIfAttackPossible(ArrayList<Item> items, ArrayList<Character> characters, String otherCharacterName) {
		int count;
		boolean playerHasWeapon = false;
		boolean playersInSameRoom = false;
		boolean isOtherCharacterDefenseless = true;

		//See if the player has a weapon.
		for (Item item : items) {
			if (item.location == INVENTORY && item.status.contains("weapon")) {
				playerHasWeapon = true;
			}
		}

		//Check if the other character is in the same room, has no state (unconscious) and if they have a weapon
		count = 1;
		do {
			if (characters.get(0).currentLocation == characters.get(count).currentLocation && characters.get(count).name.equals(otherCharacterName) && characters.get(count).status == null) {
				playersInSameRoom = true;
				for (Item item : items) {
					if (item.location == characters.get(count).id && item.status.contains("weapon")) {
						isOtherCharacterDefenseless = false;
					}
				}
			}
			count++;
		} while (count < characters.size() && !playersInSameRoom) ;

		//Messages to display
		if (!playersInSameRoom) {
			Console.writeLine("There is nobody to attack in the current room.");
			return false;
		} else if (!playerHasWeapon) {
			Console.writeLine("You do not have a weapon to attack the character with.");
			return false;
		} else if (!isOtherCharacterDefenseless) {
			Console.writeLine("It seems as though you would lose the fight as the the character has a weapon...");
			return false;
		} else {
			return true;
		}
	}

	//A copy of changeStatusOfItem, but it deals with a Character object instead.
	void changeStatusOfCharacter(ArrayList<Character> characters, int indexOfCharacter, String newStatus) {
		Character thisCharacter = characters.get(indexOfCharacter);
		thisCharacter.status = newStatus;
		characters.set(indexOfCharacter, thisCharacter);
	}
	```
	
	```diff
	class Character {
	-	String name, description;
	+	String name, description, status;
		int id, currentLocation;
	}
	```
	
	```diff
	void examine(ArrayList<Item> items, ArrayList<Character> characters, String itemToExamine, int currentLocation) {
		// ...
			while (count < characters.size()) {
				if (characters.get(count).name.equals(itemToExamine) && characters.get(count).currentLocation == currentLocation) {
					Console.writeLine(characters.get(count).description);
		+			if (characters.get(count).status.contains("unconscious")) Console.writeLine("The " + characters.get(count).name + " is unconscious.");
					return;
				}
				count++;
			}
			Console.writeLine("You cannot find " + itemToExamine + " to look at.");
		}
	}
	```
	
	```diff
	int[] checkIfDiceGamePossible(ArrayList<Item> items, ArrayList<Character> characters, int indexOfPlayerDie, int indexOfOtherCharacter, int indexOfOtherCharacterDie, String otherCharacterName) {
		while (count < characters.size() && !playersInSameRoom) {
		-	if (characters.get(0).currentLocation == characters.get(count).currentLocation && characters.get(count).name.equals(otherCharacterName) {
		+	if (characters.get(0).currentLocation == characters.get(count).currentLocation && characters.get(count).name.equals(otherCharacterName) && !characters.get(count).status.contains("unconscious")) {
				playersInSameRoom = true;
				for (Item thing : items) {
					if (thing.location == characters.get(count).id && thing.name.contains("die")) {
						otherCharacterHasDie = true;
						indexOfOtherCharacterDie = getIndexOfItem("", thing.id, items);
						indexOfOtherCharacter = count;
					}
				}
			}
			count++;
		}
		int diceGamePossible = 0;
		if (playerHasDie && playersInSameRoom && otherCharacterHasDie) {
			diceGamePossible = 1;
		}
		return new int[]{diceGamePossible, indexOfPlayerDie, indexOfOtherCharacter, indexOfOtherCharacterDie};
	}
	```
	
	```diff
	void playGame(ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
			// ...
	+		case "attack":
	+			attackCharacter(items, characters, instruction);
	+			break;
			// ...
			}
		}
		Console.readLine();
	}
	```
	
### Q17 - Add Eat Command.

Reasonable task, and considering there's a flag in the status to say whether an item is edible or not, it seems as though they will most likely ask a question similar to this in the exam. You also have an apple in your inventory in both gme files, meaning it would be an easy test to carry out. Would be worth 7-10 marks in my opinion.

??? example "Example Solution"

	```java
	void eat(ArrayList<Item> items, String itemToEat) {
		boolean edible;
		int indexOfItem = getIndexOfItem(itemToEat, -1, items);
		
		//If index is -1, item doesn't exist
		if (indexOfItem == -1) {
			Console.writeLine("You can't find the " + itemToEat + " to eat.");
			return;
		}
		
		if (items.get(indexOfItem).status.contains("edible")) {
			edible = true;
		} else {
			edible = false;
		}
		
		if (items.get(indexOfItem).location == INVENTORY && edible) {
			changeLocationOfItem(items, indexOfItem, 0);
			say("You have eaten your " + itemToEat + ".");
		} else if (items.get(indexOfItem).location == INVENTORY && !edible) {
			say("You can't eat the " + itemToEat + ".");
		} else {
			say("You don't have that item in your inventory!");
		}
	}
	```
	
	```diff
	void playGame(ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
			// ...
	+		case "eat":
	+			eat(items, instruction);
	+			break;
			// ...
			}
		}
		Console.readLine();
	}
	```
	
### Q18 - Add 'Fill (item)' Command.

Requires quite a bit of code to do, but when reading it over, it is easy to see what is going on. Would be an ending question worth 10-12 marks, considering it has a pretty lengthy function to be able to fill a container.

??? example "Example Solution"
	
	```java
	void fill(ArrayList<Item> items, ArrayList<Character> characters, ArrayList<Place> places, String itemToFill) {
		boolean playerHasContainer = false;
		boolean playerIsInSameRoom = false;
		int indexOfBarrel = getIndexOfItem("barrel", -1, items);
		int indexOfVessel = 0;

		for (Item item : items) {
			if (item.location == INVENTORY && item.name.contains(itemToFill) && item.status.contains("container")) {
				playerHasContainer = true;
				indexOfVessel = getIndexOfItem(item.name, item.id, items);
			}
		}
		
		//See if player is in the same place as the barrel
		if (characters.get(0).currentLocation == items.get(indexOfBarrel).location) {
			playerIsInSameRoom = true;
		}
		
		if (playerHasContainer && playerIsInSameRoom) {
			if (items.get(indexOfVessel).name.contains("of water")) {
				say(itemToFill + " is already full.");
				return;
			} else {
				say(itemToFill + " has been filled with water.");
				items.get(indexOfVessel).name += " of water";
			}
		} else {
			if (!playerHasContainer) say("You do not have a container that can be filled in your inventory");
			else if (!playerIsInSameRoom) say("You are not in the same room as a barrel.");
		}
		
	}
	```
	
	```diff
	void playGame(ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
			// ...
	+		case "fill":
	+			fill(items, characters, places, instruction);
	+			break;
			// ...
			}
		}
		Console.readLine();
	}
	```

### Q19 - Add Drink Command.

Can require two functions to code - one to check if there's a barrel in the room (which is only in location 8), and another to actually drink from the barrel. I'd say it would be one of the last questions worth around 10ish marks.

??? example "Example Solution"

	```java
	boolean checkIfDrinkable(ArrayList<Item> items, ArrayList<Character> characters) {
		for (Item item : items) {
			//Since the barrel is only in location 8, just check for that.
			if (item.location == INVENTORY && item.status.contains("container") && characters.get(0).currentLocation == 8) {
				return true;
			}
		}
		return false;
	}
	
	void drink(ArrayList<Item> items, ArrayList<Character> characters, String itemToDrinkFrom) {
		if (checkIfDrinkable(items, characters)) {
			say("You have taken a drink from the barrel.");
		} else {
			say("You cannot drink from " + itemToDrinkFrom);
		}
	}
	```
	
	```diff
	void playGame(ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
			// ...
	+		case "drink":
	+			drink(items, characters, instruction);
	+			break;
			// ...
			}
		}
		Console.readLine();
	}
	```
	
### Q20 - If you are in the cellar you must be carrying a torch to see items.

Easy question that just requires adding an if statement to the examine function. Would be worth 5 or 6 marks I'd say.

??? Example Solution

	```diff
	void examine(ArrayList<Item> items, ArrayList<Character> characters, String itemToExamine, int currentLocation) {
		int count = 0;
		
	+	if (characters.get(0).currentLocation == 8) {
	+		for (Item item : items) {
	+			if (item.name.contains("torch") && item.location != INVENTORY) {
	+				say("The cellar has no lighting. To see items, you need a torch.");
	+				return;
	+			}
	+		}
	+	}
	
		if (itemToExamine.equals("inventory")) {
			displayInventory(items);
		} else {
		// ...
		}
	}
	```
	
### Q21 - If dice game is lost, have last words.

Another easy question that has you lose your life and end the game if you lose the dice game against the guard. Would be worst 5 to 6 marks.

??? Example Solution

	```diff
	-	boolean playDiceGame(ArrayList<Character> characters, ArrayList<Item> items, String otherCharacterName) {
	+	boolean playDiceGame(ArrayList<Character> characters, ArrayList<Item> items, String otherCharacterName) {
		// ...
			if (!diceGamePossible) {
				Console.writeLine("You can't play a dice game.");
			} else {
			// ...
				if (playerScore > otherCharacterScore) {
					Console.writeLine("You win!");
					takeItemFromOtherCharacter(items, characters.get(indexOfOtherCharacter).id);
				} else if (playerScore < otherCharacterScore) {
					Console.writeLine("You lose!");
	+				say("Your loss cost your life, as the guard stabs you straight in the chest.");
	+				return true;
	-				takeRandomItemFromPlayer(items, characters.get(indexOfOtherCharacter).id);
				} else {
					Console.writeLine("Draw!");
				}
			}
	+	return false;
		}
	```
	
	```diff
	```diff
	void playGame(ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
			// ...
			case "playdice":
	-			playDiceGame(characters, items, instruction);
	+			stopGame = playDiceGame(characters, items, instruction);
				break;
			// ...
			}
		}
		Console.readLine();
	}
	```
	
### Q22 - Container items can be used, Items can be added and removed from containers.

Requires a fair amount of code, but considering containers have a flag to say what items they contain, I can see this coming up. Would be an ending question worth around 10-13 marks.

??? Example Solution

	```java
	void addItemToContainer(ArrayList<Item> items, Item container) {
		Console.write("Would you like to fill (f) or empty (e) the " + container.name + "? ");
		String response = Console.readLine().toLowerCase().trim();

		if (response.equals("f")) {
			Console.write("What item would you like to put inside of the " + container.name +"? ");
			String itemToMove = Console.readLine().toLowerCase();
			int indexOfItemToMove = getIndexOfItem(itemToMove, -1, items);

			if(items.get(indexOfItemToMove).location == INVENTORY && !itemToMove.equals(container.name))
			{
				changeLocationOfItem(items, indexOfItemToMove, container.id);
				say("The " + itemToMove + " has been placed in the " + container.name);
			}
			else if(itemToMove.equals(container.name))
			{
				say("You can't put an item inside itself");
			}
			else
			{
				say("You don't have that item");
			}
		} else if (response.equals("e")) {
			Console.write("What item would you like to remove from the " + container.name +"?");
			String itemToRemove = Console.readLine().toLowerCase();
			int indexOfItemToRemove = getIndexOfItem(itemToRemove, -1, items);

			if(items.get(indexOfItemToRemove).location == container.id)
			{
				changeLocationOfItem(items, indexOfItemToRemove, INVENTORY);
				say("The " + itemToRemove + " has been placed in your inventory");
			}
			else
			{
				say("That item is not in the container");
			}
		} else {
			say("You cannot do that.");
		}

	}
	```
	
	```diff
	void useItem(ArrayList<Item> items, String itemToUse, int currentLocation, ArrayList<Place> places) {
		boolean stopGame = false;
		int position, indexOfItem;
		String resultForCommand, subCommand = "", subCommandParameter = "";
		indexOfItem = getIndexOfItem(itemToUse, -1, items);
		if (indexOfItem != -1) {		
	+		if((items.get(indexOfItem).location == INVENTORY ||items.get(indexOfItem).location == currentLocation) && items.get(indexOfItem).status.contains("container"))
	+		{
	+			addItemToContainer(items, items.get(indexOfItem));
	+			return;
	+		}
		// ...
	}
	```
	
### Q23 - Create 'teleport item' command.

Very similar to teleporting a character, but requires some more code to find the specific item needed. I'd say it would be an ending question.

??? Example Solution

	```java
	void teleportItem(ArrayList<Place> places, ArrayList<Item> items, String itemToMove) {
		int response;
		int id = getIndexOfItem(itemToMove, -1, items);

		//Only allow items in players inventory to be teleported
		for (Item item : items) {
			if (item.name.equals(itemToMove) && item.location != INVENTORY) {
				say(itemToMove + " is not in your inventory.");
				return;
			}
		}		

		Console.writeLine();
		Console.writeLine("1 = Blue room");
		Console.writeLine("2 = Store cupboard");
		Console.writeLine("3 = Bare bed room");
		Console.writeLine("4 = Empty corridor");
		Console.writeLine("5 = Guardroom");
		Console.writeLine("6 = Flag Jail cell");
		Console.writeLine("7 = Skeleton Jail cell");
		Console.writeLine("8 = Cellar");
		Console.write("Here are a list of rooms. Enter the number relating to the room you wish to teleport the item to: ");

		//If an invalid response, exit the function, otherwise teleport the player
		try {
			response = Integer.parseInt(Console.readLine().trim());
			changeLocationOfItem(items, id, response);
			say(itemToMove + " has been teleported.");
		} catch (Exception e) {
			say("Cannot teleport item to that room.");
			return;
		}

	}
	```
	
	```diff
	void playGame(ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
			// ...
	+		case "teleport":
	+			teleportItem(places, items, instruction);
	+			break;
			// ...
			}
		}
		Console.readLine();
	}
	```

### Q24 - Create a 'command history list'.

Requires an ArrayList<String> which can be complicated if you don't know how to use it, but other than that it is a really easy bit of code. You'll be able to see how ArrayLists work from other parts of the code. Probably an initial question.

??? Example Solution

	```diff
	void playGame(ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
		boolean stopGame = false, moved = true;
		String instruction, command;
		int resultOfOpenClose;
	+	ArrayList<String> commands = new ArrayList<>();
		while (!stopGame) {
			// ...
			switch (command)
			{
			// ...
	+		case "history":
	+			Console.writeLine();
	+			for (String sz : commands) {
	+				Console.writeLine(sz);
	+			}
	+			Console.writeLine();
	+			break;
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
	
### Q25 - Search/display the current directory for available games (to make the beginning less confusing for first time user).

Whilst being relatively easy on paper, in reality it does need you to know how to use the File class built into Java, along with knowing how to access the current working directory. In the exam they might tell you a specific directory to put the save games into when doing this task. Would be a middle question in my opinion.

??? Example Solution

	```diff
	public MainWiki25() {
		String filename;
		ArrayList<Item> items = new ArrayList<>();
		ArrayList<Character> characters = new ArrayList<>();
		ArrayList<Place> places = new ArrayList<>();
		
	+	Console.writeLine("Games available:");
	+	File folder = new File("gameFolder");
	+	File[] listOfFiles = folder.listFiles();
		
	+	for (File file : listOfFiles) {
	+		if (file.getName().contains(".gme")) {
	+			Console.writeLine(file.getName().replace(".gme", ""));
	+		}
	+	}
		
	+	Console.writeLine();
		
		Console.write("Enter filename> ");
		filename = Console.readLine() + ".gme";
		Console.writeLine();
		if (loadGame(filename, characters, items, places)) {
			playGame(characters, items, places);
		} else {
			Console.writeLine("Unable to load game.");
			Console.readLine();
		}           
	}
	```
	
### Q26 - If user inputs invalid command 5 times the game tells the user and ends the game.

Another easy one, just add an int to track the number of times a bad command was entered, and end the game when it has happened 5 times. Would be the first question.

??? Example Solution

	```diff
	void playGame(ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
		boolean stopGame = false, moved = true;
	+	int badCommands = 0;
		String instruction, command;
		int resultOfOpenClose;
		while (!stopGame) {
			// ...
			switch (command)
			{
			// ...
			default:
	+			if (badCommands == 4) {
	+				Console.writeLine("You have had too many incorrect commands, and as such you have died. Try again another time.");
	+				stopGame = true;
	+				break;
	+			} else {
	+				badCommands++;
					Console.writeLine("Sorry, you don't know how to " + command + ".");
	+				break;
				}				
			}
		}
		Console.readLine();
	}
	```
	
### Q27 - If the user loses the dice game they can choose what item to give up rather than a random item.

Pretty difficult, as it requires knowledge of other functions within the code to be able to work. If this was to come up, it would be one of the last few questions. 

??? Example Solution

	```java
	void takeItemFromYou(ArrayList<Item> items, int otherCharacterID) {
		displayInventory(items);
		Console.write("What item do you want them to take? ");
		String chosenItem = Console.readLine();
		int itemIndex = getIndexOfItem(chosenItem, -1, items);

		while (items.get(itemIndex).location != INVENTORY) {
			Console.write("That item isn't in your inventory. What item do you want them to take? ");
			chosenItem = Console.readLine();
			itemIndex = getIndexOfItem(chosenItem, -1, items);
		}

		Console.writeLine("You have given it away.");
		changeLocationOfItem(items, itemIndex, otherCharacterID);
	}
	```
	
	```diff
	void playDiceGame(ArrayList<Character> characters, ArrayList<Item> items, String otherCharacterName) {
		//...
		if (!diceGamePossible) {
			Console.writeLine("You can't play a dice game.");
		} else {
			// ...
			if (playerScore > otherCharacterScore) {
				Console.writeLine("You win!");
				takeItemFromOtherCharacter(items, characters.get(indexOfOtherCharacter).id);
			} else if (playerScore < otherCharacterScore) {
				Console.writeLine("You lose!");
	-			takeRandomItemFromPlayer(items, characters.get(indexOfOtherCharacter).id);
	+			takeItemFromYou(items, characters.get(indexOfOtherCharacter).id);
			} else {
				Console.writeLine("Draw!");
			}
		}
	}
	```
	
### Q28 - Type 'debugchar' to display the details of all characters in the game.

Very easy, but I don't see this coming up as it doesn't add any purpose to the game other than for debugging, which the exam doesn't really tend to focus on. Would be the second question.

??? Example Solution

	```java
	void displayCharacters(ArrayList<Character> characters) {
		for (Character c : characters) {
			Console.writeLine("Character profile for " + c.name + ":");
			Console.writeLine("\tID: " + c.id);
			Console.writeLine("\tDescription: " + c.description);
			Console.writeLine("\tLocation: " + c.currentLocation);
			Console.writeLine();
		}
	}
	```
	
	```diff
	void playGame(ArrayList<Character> characters, ArrayList<Item> items, ArrayList<Place> places) {
			// ...
	+		case "debugchar":
	+			displayCharacters(characters);
	+			break;
			default:
				Console.writeLine("Sorry, you don't know how to " + command + ".");
			}
		}
		Console.readLine();
	}
	```
