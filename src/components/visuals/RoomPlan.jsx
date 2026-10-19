const rooms = [
  { x: 48, y: 48, w: 150, h: 110 },
  { x: 214, y: 48, w: 168, h: 150 },
  { x: 48, y: 174, w: 150, h: 150 },
  { x: 214, y: 214, w: 168, h: 110 },
];

export function RoomPlan() {
  return (
    <svg
      viewBox="0 0 440 420"
      className="absolute inset-0 h-[70%] w-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1">
        {rooms.map((room, index) => (
          <g key={room.x}>
            <rect x={room.x} y={room.y} width={room.w} height={room.h} />
            <text
              x={room.x + 14}
              y={room.y + 28}
              fill="currentColor"
              stroke="none"
              fontSize="13"
              fontFamily="inherit"
            >
              0{index + 1}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
