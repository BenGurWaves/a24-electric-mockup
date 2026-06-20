# A24 Electric Co. — Mockup Build

An unsolicited, Awwwards-caliber digital design mockup for **A24 Electric Co.**, constructed around their actual photo-estimate workflow. 

## Architectural Concept
- **The Metaphor**: *The Pacific Fog Breaker Panel*. Styled as a patinated copper and zinc industrial switchboard from 1985 humming in the Pacific Sunset District fog. Content glows with thermionic neon current, and the primary contact is a fuse chamber.
- **Spatial Grammar**: *The Vertical High-Voltage Busbar*. Split absolute dashboard container. Left side features a technical telemetry reading frame (established, availability, Yelp statistics), and the right side maps out interactive breaker components and the primary CTA.
- **Typography**: 
  - Display: `Syne`
  - Body: `Outfit`
  - Telemetry gauges: `Chivo Mono`
- **Color Palette**: Charcoal (`#181A1B`), Copper (`#D27D2D`), Brass (`#C5A059`), Ozone Cyan (`#4DEEEA`), Fog (`#E8E4DC`).

## Setup & Running Locally
1. Navigate to the project root directory:
   ```bash
   cd /Users/bengur/.gemini/antigravity/scratch/a24-electric-mockup
   ```
2. Install Vite:
   ```bash
   npm install
   ```
3. Boot the local host dev server:
   ```bash
   npm run dev
   ```
   *Vite will output a local network address (e.g. `http://localhost:5173`) to view and verify the build.*

## Features
- **Loader**: Direct voltage calibration counter (000V → 240V).
- **Multimeter Cursor**: Custom cursor acting as an electrical voltmeter probe, emitting copper spark particle explosions on hover and clicks.
- **Oscilloscope Gauge**: Live HTML5 canvas drawing electromagnetic hum waveforms that modulate frequency and amplitude based on how many breakers are engaged.
- **Circuit Busbar**: SVG cables trace breaker wiring, lighting up with glowing ozone-current dashes when breakers are toggled "ON".
- **Fuse Chamber Dropzone**: Drag-and-drop or select an image file to trigger a high-voltage screen arc-flash, closing the circuit and slide-revealing Eddie's callback hotline card.
