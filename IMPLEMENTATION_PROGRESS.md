# Implementation Progress

## 2025-11-16: Minion System Improvements

### Changes Implemented

1. **Terminology Update**
   - Changed default minion name from "Minion Group" to "Minion"
   - Updated comment from "minion group" to "minion" in code
   - Reflects that minions are individual entities, not groups

2. **Drag-and-Drop for Minions**
   - Added CSS styling for drag-and-drop states (`.dragging`, `.drag-over`)
   - Implemented `attachMinionDragHandlers()` function
   - Minions can now be reordered by dragging and dropping
   - Visual feedback during drag operation (opacity and border indicators)
   - Automatically saves state after reordering

3. **Drag-and-Drop for Attacks**
   - Added drag-and-drop support for minion attacks via `attachAttackDragHandlers()`
   - Added drag-and-drop support for character attacks via `attachCharacterAttackDragHandlers()`
   - Attacks can be reordered within their respective minion
   - Character attacks can be reordered independently
   - Visual feedback during drag operation
   - Automatically saves state after reordering

4. **Responsive Layout Fix**
   - Removed media query rule that forced Dice/Damage/Type fields to stack vertically at 768px width
   - Fields now maintain horizontal layout regardless of screen width
   - Grid layout (55px 50px 90px auto) remains consistent across all screen sizes

### Files Modified

- `public/index.html`:
  - Lines 2828: Changed default minion name
  - Lines 3293: Updated comment
  - Lines 343-365: Added CSS for attack drag-and-drop
  - Lines 556-572: Added CSS for minion drag-and-drop
  - Lines 775-795: Removed problematic media query rule for damage-component
  - Lines 2838: Added call to `attachCharacterAttackDragHandlers()` in `renderCharacterAttacks()`
  - Lines 3182: Added call to `attachMinionDragHandlers()` in `renderMinions()`
  - Lines 3185-3367: Added new drag-and-drop functions

### Technical Details

The drag-and-drop implementation uses native HTML5 Drag and Drop API:
- `dragstart`: Captures the dragged item's ID and adds visual feedback
- `dragover`: Allows drop and highlights potential drop targets
- `dragleave`: Removes highlight when dragging away
- `drop`: Performs the reordering by splicing arrays and re-rendering
- `dragend`: Cleans up visual states

All changes automatically persist to localStorage via the existing `saveState()` function.

### Bug Fix: Drag Interference with Input Fields

5. **Input Field Interaction Fix**
   - Fixed issue where dragging interfered with text selection in input fields
   - Added checks to prevent drag operation when mouse is over interactive elements
   - Dragging is now disabled when interacting with: input, textarea, select, button, label elements
   - Users can now freely select and edit text in minion names and attack properties without triggering drag
