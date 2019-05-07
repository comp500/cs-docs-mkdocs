# Paper 1 Wikibook solutions (2019)

## Section C prediction answers

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
	+			autoUnlockOpenDoor(items, places, characters.get(0).currentLocation);
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
			characters.get(0).currentLocation = response;
			say("You have been teleported.");

			// Describe the room and its items
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
	void examine(ArrayList<Item> items, ArrayList<Character> characters, String itemToExamine, int currentLocation, ArrayList<Place> places) {
		int count = 0;
		if (itemToExamine.equals("inventory")) {
			displayInventory(items);
	+	} else if (itemToExamine.equals("room")) {
	+		Console.writeLine(places.get(characters.get(0).currentLocation - 1).description);
	+		displayGettableItemsInLocation(items, characters.get(0).currentLocation);
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

Seems an easy task, but if you cannot get a timestamp from when you started the game, and cannot work out the calculations for hours, minutes and seconds, you would be screwed. *Considering that the AQA spec doesn't cover how to handle time within programming languages, and time functions are not easily interchangable between languages, the chances of this coming up are highly slim.*

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
