# Quick 5e Combat Manager

A simple, visual interface for managing D&D 5e combat with support for character and minion attacks.

## Features

- **Character Attack Management**: Add and manage multiple attacks for your main character
- **Minion Management**: Add multiple minions, each with their own attacks
- **Dice Rolling**: Full support for all D&D dice (d4, d6, d8, d10, d12, d20, d100)
- **Advantage/Disadvantage**: Roll attacks with advantage or disadvantage
- **DC Saves**: Specify save DCs and save types for attacks
- **Combat Log**: Track all rolls in a clean, easy-to-read combat log
- **Critical Hits**: Automatic detection and damage doubling for natural 20s
- **Quick Dice Roller**: Quickly roll any die without setting up an attack

## How to Use

1. **Open the interface**: Simply double-click `index.html` or open it in your web browser
2. **Set up your character**:
   - Enter your character name
   - Click "+ Add Attack" to create attacks
   - Fill in attack details (name, bonus, damage dice, save DC)
3. **Add minions**:
   - Click "+ Add Minion" in the minions section
   - Name your minion
   - Add attacks for each minion
4. **Roll attacks**:
   - Select advantage/normal/disadvantage
   - Click "Roll Attack"
   - Results appear in the Combat Log with full details

## Dice Notation

Use standard D&D dice notation for damage:
- `1d6` - Roll one 6-sided die
- `2d6+3` - Roll two 6-sided dice and add 3
- `1d8+5` - Roll one 8-sided die and add 5

## Features in Detail

### Attack Rolls
- Automatic critical hit detection (natural 20)
- Automatic critical miss detection (natural 1)
- Support for advantage/disadvantage
- Attack bonus modifier

### Damage Rolls
- Supports any dice notation
- Automatic damage doubling on critical hits
- Visual display of individual dice rolls

### Save DCs
- Specify save DC for each attack
- Choose from all ability scores (STR, DEX, CON, INT, WIS, CHA)

### Quick Dice Roller
Roll any die instantly without setting up an attack:
- d4, d6, d8, d10, d12, d20, d100

## Technical Details

- **Pure HTML/CSS/JavaScript**: No build process required
- **No external dependencies**: Works offline
- **Browser-based**: Works in any modern web browser
- **Responsive design**: Works on desktop and mobile

## Tips

- The combat log shows the most recent rolls at the top
- Click "Clear Log" to reset the combat log
- All attacks are saved in memory during your session
- Refresh the page to start fresh

Enjoy your combat sessions!
