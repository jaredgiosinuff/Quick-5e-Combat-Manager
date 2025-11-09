# ⚔️ Quick 5e Combat Manager

A streamlined, checkbox-based combat manager for D&D 5th Edition that emphasizes quick batch rolling and persistent state management.

## 🎯 Key Features

### ✅ Checkbox-Based Batch Attacks
- **Select multiple attacks at once** using checkboxes
- **Roll all selected attacks** with a single button click
- Visual highlighting shows which attacks are selected
- Works for both character attacks and minion groups

### 💾 Complete State Persistence
Everything saves automatically to your browser's localStorage:
- Character name and all attacks
- Minion groups and their attacks
- Checkbox selections (your selected attacks persist)
- Advantage/disadvantage settings for each attack
- Complete combat log history
- Last roll configuration for quick repeats

**No more losing your work!** Refresh the page, close the browser, come back later - everything is exactly as you left it.

### 📜 Enhanced Combat Log
- **Timestamps** on every roll
- **Scrollable history** - scroll back through all your rolls
- **Export functionality** - download your entire combat log as a text file
- **Visual indicators**:
  - 🎯 Critical hits (natural 20s) with gold highlighting
  - 💥 Critical failures (natural 1s) with red highlighting
  - Color-coded attack results
- Shows all dice rolls, modifiers, and totals
- Displays saving throw DCs and types

### 🔄 Quick Repeat Functionality
- **"Repeat Last Roll" button** - instantly re-roll your last batch of attacks
- Remembers exactly which attacks you rolled last time
- Perfect for repeating the same turn's worth of attacks

### 🎲 Bulk Selection Controls
- **Select All** - check all character attacks or all minion attacks at once
- **Deselect All** - clear all selections instantly
- Separate controls for character attacks and minions

### ⚡ Additional Features
- **Advantage/Disadvantage** - rolls 2d20 and takes higher/lower automatically
- **Minion Groups** - organize enemies into groups with their own attacks
- **Quick Dice Roller** - roll any die (d4, d6, d8, d10, d12, d20, d100) with one click
- **Save DC Tracking** - specify saving throws for each attack
- **Responsive Design** - works on desktop, tablet, and mobile
- **Offline-First** - no internet required, runs entirely in your browser

## 🚀 How to Use

### Getting Started
1. Open `index.html` in any modern web browser
2. Enter your character name
3. Click "➕ Add Attack" to create attacks
4. Fill in attack details (name, bonus, damage, etc.)

### Rolling Attacks

**Method 1: Batch Rolling (Recommended)**
1. Check the boxes next to the attacks you want to roll
2. Click the large **"🎲 Roll Selected"** button
3. All selected attacks roll at once and appear in the combat log

**Method 2: Individual Rolling**
1. Click **"🎲 Roll This Attack"** on any individual attack
2. That single attack will be rolled

**Method 3: Quick Repeat**
1. After rolling any batch of attacks, click **"🔄 Repeat Last"**
2. The same attacks will be rolled again with new random results

### Managing Attacks

**Character Attacks:**
- Name, attack bonus, damage (dice notation like "2d6+3")
- Save DC and ability type (STR, DEX, CON, INT, WIS, CHA)
- Advantage/Normal/Disadvantage selector
- Checkbox to include in batch rolls

**Minion Groups:**
- Create groups of enemies (e.g., "Goblin Squad", "Orc Warriors")
- Each group can have multiple attacks
- Each attack has its own checkbox for batch rolling
- Select all minions at once with bulk controls

### Combat Log
- Newest rolls appear at the top
- Scroll down to see older rolls
- Click **"💾 Export Log"** to download a text file of the entire log
- Click **"🗑️ Clear Log"** to start fresh (attacks and selections are preserved)

## 🎮 Usage Tips

1. **Set up your attacks once** - They're saved automatically, so you won't need to recreate them
2. **Use checkboxes for typical turns** - Select your normal attack routine, and it stays selected
3. **"Repeat Last" for same actions** - Great for when you're attacking the same way multiple turns in a row
4. **Minion groups for managing multiple enemies** - Keep goblin attacks separate from orc attacks
5. **Export logs for session records** - Download your combat log after each session

## 💡 Example Workflow

**Initial Setup (once):**
1. Add your character "Aragorn"
2. Create attack: "Longsword" - +7, 1d8+4 damage
3. Create attack: "Longbow" - +6, 1d8+2 damage
4. Select "Longsword" checkbox

**During Combat (repeated):**
1. Click "🎲 Roll Selected" - rolls your longsword attack
2. Check both "Longsword" and extra attacks if needed
3. Click "🎲 Roll Selected" - rolls all selected attacks at once
4. Next turn: Click "🔄 Repeat Last" - same attacks roll again

**Everything persists!** Close browser, reopen later - your character and selections are still there.

## 🔧 Technical Details

- **Pure Vanilla JavaScript** - No frameworks, no dependencies
- **Single HTML file** - Everything in one file for maximum portability
- **localStorage** - Client-side persistence using browser storage
- **Responsive CSS Grid** - Adapts to any screen size
- **Offline-capable** - Works without internet connection

## 📱 Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

Requires JavaScript enabled and localStorage support (available in all modern browsers).

## 📄 File Structure

```
Quick-5e-Combat-Manager/
├── index.html          # Complete application (HTML + CSS + JS)
└── README.md          # This file
```

## 🎲 Dice Notation Guide

The damage field accepts standard D&D dice notation:
- `1d8` - Roll 1 eight-sided die
- `2d6` - Roll 2 six-sided dice
- `1d8+3` - Roll 1 eight-sided die and add 3
- `2d6-1` - Roll 2 six-sided dice and subtract 1

## 🐛 Troubleshooting

**Q: My data disappeared!**
A: Data is stored in your browser's localStorage. If you:
- Cleared browser data/cache
- Used incognito/private mode
- Switched browsers
- Switched devices

...your data won't carry over. Export your combat logs regularly!

**Q: Can I use this on multiple devices?**
A: Data is stored locally per-browser. For multi-device use, you'd need to manually recreate your setup on each device.

**Q: Can I share my character setup?**
A: Currently no import/export for character data (only combat logs). You can manually recreate setups or copy the localStorage data if you're technical.

## 🎯 Future Enhancement Ideas

- Import/export character data
- Initiative tracking
- HP/damage tracking
- Condition tracking
- Multiple character profiles
- Cloud sync between devices
- Monster manual integration

## 📜 License

Free to use, modify, and distribute. Created for the D&D community.

---

**Made for DMs and players who want quick, reliable combat rolling without the hassle! 🎲**
