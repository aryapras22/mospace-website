"use client";

import { useState } from "react";

type ZoneId =
  | "zone-import"
  | "zone-edit"
  | "zone-visitors"
  | "zone-simulate"
  | "zone-analyze";

interface ZoneSpec {
  id: ZoneId;
  num: string;
  label: string;
  heading: string;
  paragraphs: string[];
  rect: { x: number; y: number; width: number; height: number };
  badge: { x: number; y: number; width: number };
}

const ZONES: ZoneSpec[] = [
  {
    id: "zone-import",
    num: "01",
    label: "Import",
    heading: "Import",
    paragraphs: [
      "Import your venue legend and layout from two PDF files, one page per layout, so Mospace reads your booths, walls, doors, and facilities.",
      "Your floor plan is a 2D layout of your venue that shows the space, booths, and facilities. Your legend is a reference that explains the symbols and colors used in your floor plan.",
    ],
    rect: { x: 54, y: 52, width: 126, height: 104 },
    badge: { x: 62, y: 60, width: 94 },
  },
  {
    id: "zone-edit",
    num: "02",
    label: "Edit",
    heading: "Edit",
    paragraphs: [
      "Adjust walls, rooms, booths singly or in rows, doors, seating, and blocked areas directly on the floor plan.",
      "Organize booth groups, mark open or closed booth sides, and set booth popularity before running a simulation.",
    ],
    rect: { x: 188, y: 52, width: 320, height: 76 },
    badge: { x: 196, y: 58, width: 80 },
  },
  {
    id: "zone-visitors",
    num: "03",
    label: "Visitors",
    heading: "Visitors",
    paragraphs: [
      "Set visitors and opening hours to match your bazaar. Configure visitors per day, opening hours, bazaar type, and visitor type mix for each simulation run.",
    ],
    rect: { x: 60, y: 296, width: 146, height: 112 },
    badge: { x: 68, y: 304, width: 110 },
  },
  {
    id: "zone-simulate",
    num: "04",
    label: "Simulate",
    heading: "Simulate",
    paragraphs: [
      "Run a 3D crowd simulation across the full opening day to see how people move between doors, aisles, seating, and booths.",
      "Colours show how packed each part of the floor gets as people walk in.",
    ],
    rect: { x: 242, y: 154, width: 196, height: 140 },
    badge: { x: 250, y: 162, width: 110 },
  },
  {
    id: "zone-analyze",
    num: "05",
    label: "Analyze",
    heading: "Analyze",
    paragraphs: [
      "Review Congestion Spots. A spot so crowded that people get stuck. Inspect daily flow and crowd charts for Crowd Level through the day, Flow Rate through the day, and the busiest time.",
      "Compare both layouts on stuck spots, crowd level and time stuck to pick the Best layout.",
    ],
    rect: { x: 446, y: 154, width: 180, height: 188 },
    badge: { x: 454, y: 310, width: 102 },
  },
];

const NORTH_BOOTHS = [
  { id: "A1", x: 196 },
  { id: "A2", x: 258 },
  { id: "A3", x: 320 },
  { id: "A4", x: 382 },
  { id: "A5", x: 444 },
];

const ISLAND_BOOTHS = [
  { id: "B1", x: 76, y: 174 },
  { id: "B2", x: 130, y: 174 },
  { id: "B3", x: 184, y: 174 },
  { id: "B4", x: 76, y: 216 },
  { id: "B5", x: 130, y: 216 },
  { id: "B6", x: 184, y: 216 },
];

const EAST_BOOTHS = [
  { id: "C1", x: 456 },
  { id: "C2", x: 512 },
  { id: "C3", x: 568 },
];

const GRID_X = [88, 132, 176, 220, 264, 308, 352, 396, 440, 484, 528, 572, 616];
const GRID_Y = [88, 132, 176, 220, 264, 308, 352, 396];

export default function FloorPlanMap() {
  const [activeZone, setActiveZone] = useState<ZoneId | null>(null);
  const [isFocusActive, setIsFocusActive] = useState(false);

  const handleHoverEnter = (id: ZoneId) => {
    setIsFocusActive(false);
    setActiveZone(id);
  };

  const handleHoverLeave = () => {
    if (!isFocusActive) {
      setActiveZone(null);
    }
  };

  const handleFocus = (id: ZoneId) => {
    setIsFocusActive(true);
    setActiveZone(id);
  };

  const handleBlur = () => {
    setIsFocusActive(false);
    setActiveZone(null);
  };

  return (
    <div className="floorplan-layout">
      <figure className="map-figure">
        <div className="map-stage">
          <svg
            className="floorplan-svg"
            viewBox="0 0 680 460"
            role="img"
            aria-label="Mospace bazaar floor plan diagram showing exterior walls, entrance and exit doors, three rows of booths, a seating block, a central aisle, crowd heat spots from calm green to peak congestion red, and five interactive numbered workflow zones: 01 Import, 02 Edit, 03 Visitors, 04 Simulate, and 05 Analyze."
          >
            <defs>
              <radialGradient id="heatLowGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--color-heat-low)" stopOpacity="0.42" />
                <stop offset="65%" stopColor="var(--color-heat-low)" stopOpacity="0.14" />
                <stop offset="100%" stopColor="var(--color-heat-low)" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="heatMidGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--color-heat-mid)" stopOpacity="0.42" />
                <stop offset="60%" stopColor="var(--color-heat-mid)" stopOpacity="0.14" />
                <stop offset="100%" stopColor="var(--color-heat-mid)" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="heatOrangeGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--color-heat-orange)" stopOpacity="0.52" />
                <stop offset="60%" stopColor="var(--color-heat-orange)" stopOpacity="0.18" />
                <stop offset="100%" stopColor="var(--color-heat-orange)" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="heatHighGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--color-heat-high)" stopOpacity="0.72" />
                <stop offset="45%" stopColor="var(--color-heat-high)" stopOpacity="0.34" />
                <stop offset="100%" stopColor="var(--color-heat-high)" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Venue interior floor */}
            <rect x="44" y="44" width="592" height="372" className="fp-aisle-bg" />

            {/* Blueprint reference grid */}
            <g aria-hidden="true">
              {GRID_X.map((x) => (
                <line key={`gx-${x}`} x1={x} y1="44" x2={x} y2="416" className="fp-grid-line" />
              ))}
              {GRID_Y.map((y) => (
                <line key={`gy-${y}`} x1="44" y1={y} x2="636" y2={y} className="fp-grid-line" />
              ))}
            </g>

            {/* Crowd heat spots across the four heat tokens */}
            <g aria-hidden="true">
              <circle cx="118" cy="126" r="46" fill="url(#heatLowGrad)" />
              <circle cx="352" cy="348" r="64" fill="url(#heatLowGrad)" />
              <circle cx="164" cy="330" r="48" fill="url(#heatMidGrad)" />
              <circle cx="304" cy="220" r="64" fill="url(#heatMidGrad)" />
              <circle cx="430" cy="242" r="56" fill="url(#heatOrangeGrad)" />
              <circle cx="524" cy="252" r="48" fill="url(#heatHighGrad)" />
              <circle cx="524" cy="252" r="18" className="fp-spot-ring" />
            </g>

            {/* Visitor circulation path along the main aisle */}
            <path
              d="M 140 398 L 140 300 Q 140 278 164 278 L 268 278 Q 294 278 308 250 L 324 224 Q 340 208 370 218 L 444 244 Q 486 254 532 256 L 598 296"
              className="fp-flow-path"
              aria-hidden="true"
            />

            {/* Seating block */}
            <g aria-hidden="true">
              <rect x="264" y="306" width="176" height="92" rx="4" className="fp-seating-area" />
              <rect x="280" y="320" width="60" height="14" rx="2" className="fp-table" />
              <rect x="364" y="320" width="60" height="14" rx="2" className="fp-table" />
              <rect x="280" y="348" width="60" height="14" rx="2" className="fp-table" />
              <rect x="364" y="348" width="60" height="14" rx="2" className="fp-table" />
              <text x="352" y="388" textAnchor="middle" className="fp-map-label">
                SEATING
              </text>
            </g>

            {/* Booth Row A (north wall) */}
            <g aria-hidden="true">
              {NORTH_BOOTHS.map((booth) => (
                <g key={booth.id}>
                  <rect x={booth.x} y="84" width="54" height="36" rx="3" className="fp-booth" />
                  <line
                    x1={booth.x + 8}
                    y1="120"
                    x2={booth.x + 46}
                    y2="120"
                    className="fp-booth-open"
                  />
                  <text
                    x={booth.x + 27}
                    y="106"
                    textAnchor="middle"
                    className="fp-booth-label"
                  >
                    {booth.id}
                  </text>
                </g>
              ))}
            </g>

            {/* Booth Row B (west island) */}
            <g aria-hidden="true">
              {ISLAND_BOOTHS.map((booth) => (
                <g key={booth.id}>
                  <rect
                    x={booth.x}
                    y={booth.y}
                    width="48"
                    height="36"
                    rx="3"
                    className="fp-booth"
                  />
                  <text
                    x={booth.x + 24}
                    y={booth.y + 22}
                    textAnchor="middle"
                    className="fp-booth-label"
                  >
                    {booth.id}
                  </text>
                </g>
              ))}
            </g>

            {/* Booth Row C (east row near bottleneck) */}
            <g aria-hidden="true">
              {EAST_BOOTHS.map((booth) => (
                <g key={booth.id}>
                  <rect x={booth.x} y="166" width="48" height="38" rx="3" className="fp-booth" />
                  <line
                    x1={booth.x + 8}
                    y1="204"
                    x2={booth.x + 40}
                    y2="204"
                    className="fp-booth-open"
                  />
                  <text
                    x={booth.x + 24}
                    y="189"
                    textAnchor="middle"
                    className="fp-booth-label"
                  >
                    {booth.id}
                  </text>
                </g>
              ))}
            </g>

            {/* Exterior walls with openings for two doors */}
            <g aria-hidden="true">
              <path
                d="M 104 416 L 44 416 L 44 44 L 636 44 L 636 268 M 636 328 L 636 416 L 176 416"
                className="fp-wall"
              />
              {/* Interior partitions */}
              <line x1="212" y1="336" x2="212" y2="416" className="fp-wall-inner" />
              <path d="M 532 44 L 532 124 L 636 124" className="fp-wall-inner" />

              {/* Door 1: South-west double entrance */}
              <line x1="104" y1="416" x2="104" y2="380" className="fp-door-leaf" />
              <path d="M 104 380 A 36 36 0 0 1 140 416" className="fp-door-arc" />
              <line x1="176" y1="416" x2="176" y2="380" className="fp-door-leaf" />
              <path d="M 176 380 A 36 36 0 0 0 140 416" className="fp-door-arc" />

              {/* Door 2: East exit */}
              <line x1="636" y1="268" x2="584" y2="268" className="fp-door-leaf" />
              <path d="M 584 268 A 52 52 0 0 0 636 320" className="fp-door-arc" />
            </g>

            {/* Architectural labels */}
            <g aria-hidden="true">
              <text x="340" y="145" textAnchor="middle" className="fp-map-label">
                MAIN AISLE
              </text>
              <text x="140" y="438" textAnchor="middle" className="fp-map-label">
                ENTRANCE
              </text>
              <text x="610" y="362" textAnchor="middle" className="fp-map-label">
                EXIT
              </text>
              <text x="584" y="88" textAnchor="middle" className="fp-map-label">
                UTILITY
              </text>
            </g>

            {/* Five numbered interactive zones anchored to their notes */}
            {ZONES.map((zone, index) => {
              const isActive = activeZone === zone.id;
              return (
                <a
                  key={zone.id}
                  href={`#${zone.id}`}
                  className={`fp-zone fp-zone--${index + 1}`}
                  data-active={isActive ? "true" : undefined}
                  data-instant={isActive && isFocusActive ? "true" : undefined}
                  aria-label={`Zone ${zone.num} ${zone.label}: jump to ${zone.heading} note`}
                  onMouseEnter={() => handleHoverEnter(zone.id)}
                  onMouseLeave={handleHoverLeave}
                  onFocus={() => handleFocus(zone.id)}
                  onBlur={handleBlur}
                >
                  <rect
                    x={zone.rect.x}
                    y={zone.rect.y}
                    width={zone.rect.width}
                    height={zone.rect.height}
                    rx="8"
                    className="fp-zone__outline"
                  />
                  <rect
                    x={zone.badge.x}
                    y={zone.badge.y}
                    width={zone.badge.width}
                    height="24"
                    rx="12"
                    className="fp-zone__badge"
                  />
                  <text x={zone.badge.x + 11} y={zone.badge.y + 16} className="fp-zone__num">
                    {zone.num}
                  </text>
                  <text x={zone.badge.x + 34} y={zone.badge.y + 16} className="fp-zone__name">
                    {zone.label}
                  </text>
                </a>
              );
            })}
          </svg>
        </div>

        <figcaption className="heat-legend">
          <div className="heat-legend__head">
            <span className="heat-legend__title">Crowd Level heat scale</span>
            <span className="heat-legend__caption">Calm to stuck</span>
          </div>
          <div className="heat-legend__bar" aria-hidden="true" />
          <ul className="heat-legend__keys" aria-label="Crowd level color key">
            <li className="heat-legend__item">
              <span className="heat-swatch heat-swatch--low" aria-hidden="true" />
              Low (Calm)
            </li>
            <li className="heat-legend__item">
              <span className="heat-swatch heat-swatch--mid" aria-hidden="true" />
              Medium (Busy)
            </li>
            <li className="heat-legend__item">
              <span className="heat-swatch heat-swatch--orange" aria-hidden="true" />
              High (Crowded)
            </li>
            <li className="heat-legend__item">
              <span className="heat-swatch heat-swatch--high" aria-hidden="true" />
              Peak (Stuck)
            </li>
          </ul>
          <p className="heat-legend__grade">
            Grade scale. A to B: calm. C to D: busy. E to F: people get stuck.
          </p>
        </figcaption>
      </figure>

      <ol className="map-notes" aria-label="Floor plan workflow zones">
        {ZONES.map((zone) => {
          const isActive = activeZone === zone.id;
          return (
            <li
              key={zone.id}
              id={zone.id}
              className="map-note"
              data-active={isActive ? "true" : undefined}
              data-instant={isActive && isFocusActive ? "true" : undefined}
              onMouseEnter={() => handleHoverEnter(zone.id)}
              onMouseLeave={handleHoverLeave}
            >
              <div className="map-note__head">
                <span className="map-note__num" aria-hidden="true">
                  {zone.num}
                </span>
                <a
                  href={`#${zone.id}`}
                  className="map-note__link"
                  onFocus={() => handleFocus(zone.id)}
                  onBlur={handleBlur}
                >
                  {zone.heading}
                </a>
              </div>
              {zone.paragraphs.map((text, idx) => (
                <p key={idx} className="map-note__body">
                  {text}
                </p>
              ))}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
