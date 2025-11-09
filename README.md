# ⚔️ Quick 5e Combat Manager

A streamlined, checkbox-based combat manager for D&D 5th Edition with full damage type support. Runs in a Docker container on port 9500 for easy deployment.

## 🚀 Quick Start with Docker

### Prerequisites
- Docker installed
- Docker Compose installed (optional but recommended)

### Option 1: Using Docker Compose (Recommended)

```bash
# Clone the repository
git clone <repository-url>
cd Quick-5e-Combat-Manager

# Build and start the container
docker-compose up -d

# Access the app
# Open http://localhost:9500 in your browser
```

### Option 2: Using Docker directly

```bash
# Build the image
docker build -t combat-manager .

# Run the container
docker run -d -p 9500:9500 --name quick-5e-combat-manager combat-manager

# Access the app
# Open http://localhost:9500 in your browser
```

### Stopping the Container

```bash
# Using Docker Compose
docker-compose down

# Using Docker directly
docker stop quick-5e-combat-manager
docker rm quick-5e-combat-manager
```

### Changing the Port

Edit `docker-compose.yml` and change the port mapping:

```yaml
ports:
  - "YOUR_PORT:9500"  # e.g., "8080:9500" to use port 8080
```

Or with Docker directly:

```bash
docker run -d -p YOUR_PORT:9500 --name quick-5e-combat-manager combat-manager
```

---

## 🎯 Key Features

### ✅ Multiple Damage Types per Attack
- **Add multiple damage components** to each attack (e.g., "2d6 slashing + 1d6 fire")
- **13 D&D 5e damage types supported:**
  - **Physical:** Slashing, Piercing, Bludgeoning
  - **Elemental:** Fire, Cold, Lightning, Thunder, Acid
  - **Energy:** Radiant, Necrotic, Force, Poison
  - **Mental:** Psychic
- **Individual bonuses** for each damage component
- **Damage breakdown** in combat log showing each type separately
- **Color-coded damage type badges** for easy identification

### ✅ Checkbox-Based Batch Attacks
- **Select multiple attacks at once** using checkboxes
- **Roll all selected attacks** with a single button click
- Visual highlighting shows which attacks are selected
- Works for both character attacks and minion groups

### 💾 Complete State Persistence
Everything saves automatically to your browser's localStorage:
- Character name and all attacks
- Minion groups and their attacks
- All damage components with types and bonuses
- Checkbox selections (your selected attacks persist)
- Advantage/disadvantage settings for each attack
- Complete combat log history
- Last roll configuration for quick repeats

**No more losing your work!** Refresh the page, close the browser, come back later - everything is exactly as you left it.

### 📜 Enhanced Combat Log with Damage Breakdown
- **Timestamps** on every roll
- **Scrollable history** - scroll back through all your rolls
- **Damage breakdown by type** - see exactly how much of each damage type
- **Total damage calculation** across all types
- **Export functionality** - download your entire combat log as a text file
- **Visual indicators**:
  - 🎯 Critical hits (natural 20s) with gold highlighting
  - 💥 Critical failures (natural 1s) with red highlighting
  - Color-coded damage type badges
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
- **Docker-based deployment** - consistent environment, easy to run anywhere

---

## 🎮 How to Use

### Getting Started
1. Start the Docker container (see Quick Start above)
2. Open http://localhost:9500 in your browser
3. Enter your character name
4. Click "➕ Add Attack" to create attacks

### Setting Up an Attack

1. **Name your attack** (e.g., "Flaming Longsword")
2. **Set attack bonus** (your to-hit modifier)
3. **Add damage components:**
   - Click "➕ Add Damage" to add a component
   - Set dice notation (e.g., "2d6", "1d8")
   - Set bonus (e.g., +3 for STR modifier)
   - Choose damage type from dropdown
   - Add more components for mixed damage
4. **Set Save DC** if applicable
5. **Choose advantage/normal/disadvantage**

**Example Multi-Type Attack:**
```
Attack Name: Holy Avenger
Attack Bonus: +9
Damage Components:
  - 2d6, +5 bonus, Slashing
  - 2d8, +0 bonus, Radiant
Save DC: 15, WIS
```

### Rolling Attacks

**Method 1: Batch Rolling (Recommended)**
1. Check the boxes next to the attacks you want to roll
2. Click the large **"🎲 Roll Selected"** button
3. All selected attacks roll at once
4. Combat log shows damage breakdown by type

**Method 2: Individual Rolling**
1. Click **"🎲 Roll This Attack"** on any individual attack
2. That single attack will be rolled

**Method 3: Quick Repeat**
1. After rolling any batch of attacks, click **"🔄 Repeat Last"**
2. The same attacks will be rolled again with new random results

### Understanding Damage Results

When you roll, the combat log shows:

```
[12:34:56] Paladin - Divine Smite
Attack Roll: [18] + 7 = 25
💥 Damage Breakdown:
  SLASHING [5, 3] +4  →  12
  RADIANT [6, 8]      →  14
  TOTAL DAMAGE: 26
```

Each damage type is shown separately with:
- Color-coded badge for the damage type
- Individual dice rolls
- Bonus (if any)
- Total for that damage type
- Grand total across all types

On a **critical hit**, all damage is automatically doubled!

---

## 📋 D&D 5e Damage Types Reference

| Category | Types | Common Uses |
|----------|-------|-------------|
| **Physical** | Slashing, Piercing, Bludgeoning | Weapon attacks |
| **Elemental** | Fire, Cold, Lightning, Thunder, Acid | Spells, breath weapons |
| **Energy** | Radiant, Necrotic, Force, Poison | Divine/necromancy spells |
| **Mental** | Psychic | Mind-affecting abilities |

### Damage Type Examples

- **Slashing:** Swords, axes, claws
- **Piercing:** Arrows, spears, bites
- **Bludgeoning:** Hammers, clubs, falls
- **Fire:** Firebolt, red dragon breath
- **Cold:** Cone of Cold, frost breath
- **Lightning:** Lightning Bolt, blue dragon
- **Thunder:** Thunderwave, sonic attacks
- **Acid:** Acid Splash, black dragon
- **Radiant:** Sacred Flame, celestial weapons
- **Necrotic:** Chill Touch, vampire bite
- **Force:** Magic Missile, Eldritch Blast
- **Poison:** Poison Spray, poisoned weapons
- **Psychic:** Mind Blast, psychic scream

---

## 💡 Example Use Cases

### Fighter with Magic Weapon
```
Flaming Longsword
  Attack Bonus: +7
  Damage:
    - 1d8 + 4 Slashing (longsword + STR)
    - 1d6 + 0 Fire (magic property)
```

### Paladin Divine Smite
```
Greatsword + Divine Smite
  Attack Bonus: +9
  Damage:
    - 2d6 + 5 Slashing (greatsword + STR)
    - 4d8 + 0 Radiant (2nd level smite vs undead)
```

### Frost Brand Weapon
```
Frost Brand Longsword
  Attack Bonus: +8
  Damage:
    - 1d8 + 4 Slashing
    - 1d6 + 0 Cold
  When wielded by giants, add:
    - 1d6 + 0 Cold (extra vs fire creatures)
```

### Rogue Sneak Attack with Poison
```
Poisoned Dagger
  Attack Bonus: +7
  Damage:
    - 1d4 + 4 Piercing (dagger + DEX)
    - 4d6 + 0 Piercing (sneak attack)
    - 2d6 + 0 Poison (poison coating)
  Save: DC 14 CON (half poison damage)
```

### Monster with Multiple Damage Types
```
Minion Group: Fire Elementals
  Slam Attack
    Attack Bonus: +6
    Damage:
      - 1d8 + 3 Bludgeoning
      - 2d6 + 0 Fire
```

---

## 🎲 Example Workflow

**Initial Setup (once):**
1. Start Docker container
2. Open http://localhost:9500
3. Create character "Eldrin the Paladin"
4. Add attack: "Holy Longsword"
   - Attack +9
   - 1d8+5 Slashing
   - 2d8+0 Radiant
5. Check the "Holy Longsword" checkbox

**During Combat:**
1. Click "🎲 Roll Selected"
   ```
   Attack: 23
   Damage:
     SLASHING: 12
     RADIANT: 11
   TOTAL: 23
   ```
2. Next turn: Click "🔄 Repeat Last"
   ```
   Attack: 17 (new roll)
   Damage:
     SLASHING: 9
     RADIANT: 15
   TOTAL: 24
   ```
3. Critical hit!
   ```
   Attack: 28 🎯 CRITICAL HIT!
   Damage:
     SLASHING: 24 (doubled!)
     RADIANT: 22 (doubled!)
   TOTAL: 46 (Doubled for crit!)
   ```

**After Session:**
1. Click "💾 Export Log" to download session record
2. Close browser
3. Tomorrow: Everything is still there!

---

## 🐛 Troubleshooting

### Container Issues

**Container won't start:**
```bash
# Check if port 9500 is already in use
docker ps
netstat -an | grep 9500

# Use a different port
docker run -d -p 8080:9500 --name combat-manager combat-manager
```

**Can't access the app:**
```bash
# Check container status
docker ps

# Check container logs
docker logs quick-5e-combat-manager

# Restart container
docker restart quick-5e-combat-manager
```

### Application Issues

**Q: My data disappeared!**
A: Data is stored in your browser's localStorage. If you:
- Cleared browser data/cache
- Used incognito/private mode
- Switched browsers
- Switched devices

...your data won't carry over. Export your combat logs regularly!

**Q: Damage not calculating correctly?**
A:
- Make sure dice notation is correct (e.g., "2d6" not "2 d6")
- Bonuses are separate from dice (use the bonus field)
- Critical hits automatically double ALL damage

**Q: Can I use this on multiple devices?**
A: Data is stored locally per-browser. Each device/browser will have its own data. The Docker container can be accessed from any device on your network at `http://YOUR_SERVER_IP:9500`

---

## 🔧 Development

### Running Locally (Without Docker)

```bash
# Install dependencies
npm install

# Start server
npm start

# Access at http://localhost:9500
```

### File Structure

```
Quick-5e-Combat-Manager/
├── Dockerfile              # Container configuration
├── docker-compose.yml      # Docker Compose setup
├── package.json            # Node.js dependencies
├── server.js               # Express web server
├── public/
│   └── index.html         # Complete web application
└── README.md              # This file
```

---

## 🌐 Network Access

To access from other devices on your network:

1. **Find your server's IP address:**
   ```bash
   # Linux/Mac
   ifconfig | grep "inet "

   # Windows
   ipconfig
   ```

2. **Access from other devices:**
   ```
   http://YOUR_SERVER_IP:9500
   ```

3. **Example:**
   - Server IP: 192.168.1.100
   - Access at: http://192.168.1.100:9500

**Note:** Data is stored in each browser separately. Each player would maintain their own character data.

---

## 🎯 Tips & Best Practices

1. **Organize by damage source**
   - Weapon damage → One component
   - Magic bonus → Separate component
   - Special effects → Additional components

2. **Use descriptive attack names**
   - "Longsword +1 (Fire)" not just "Attack 1"
   - Helps when reviewing combat log

3. **Create minion groups strategically**
   - Group by enemy type
   - "Goblin Squad" with multiple identical attacks
   - Easy to roll all goblins at once

4. **Export logs after important sessions**
   - Keep records of epic battles
   - Review damage output patterns
   - Track campaign progression

5. **Test attacks before combat**
   - Set up attacks during downtime
   - Verify damage calculations
   - Adjust bonuses as you level

6. **Use advantage/disadvantage**
   - Set per-attack for consistency
   - Automatically rolls 2d20
   - Visual indicator in combat log

---

## 📊 Advanced Features

### Critical Hits
- Automatically detected on natural 20
- **All damage types doubled**
- Visual gold highlighting
- Special notation in export

### Multi-Attack Sequences
1. Create separate attacks for each strike
2. Check all boxes
3. Click "Roll Selected"
4. All attacks resolve at once

### Mixed Damage Resistances
When enemies resist certain types:
- Combat log shows each type separately
- Easy to apply resistance mentally
- Example: Resistant to fire? Halve the FIRE damage only

---

## 🚀 Production Deployment

### Using Docker Compose (Recommended)

```yaml
version: '3.8'
services:
  combat-manager:
    build: .
    container_name: quick-5e-combat-manager
    ports:
      - "9500:9500"
    restart: unless-stopped
    environment:
      - NODE_ENV=production
```

### Running as a Service

```bash
# Start on boot
docker-compose up -d

# The container will automatically restart if it crashes
# and will start on system boot
```

### Resource Usage
- **Memory:** ~50MB
- **CPU:** Minimal (static site)
- **Disk:** ~100MB (includes Node.js)
- **Network:** LAN access, no internet required

---

## 📜 License

MIT License - Free to use, modify, and distribute. Created for the D&D community.

---

## 🎲 Credits

Built for DMs and players who want:
- ⚡ Quick combat resolution
- 📊 Detailed damage tracking by type
- 💾 Persistent state across sessions
- 🐳 Easy Docker deployment
- 📱 Mobile-friendly interface

**Happy Rolling! ⚔️🎲**
