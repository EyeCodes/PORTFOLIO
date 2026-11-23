import { Stage, Layer, Circle, Line } from 'react-konva';
import Konva from 'konva';
import { useRef, useEffect } from 'react';

export const BannerDesign: React.FC = () => {
  const circleRef = useRef<Konva.Circle[]>([]);
  const lineRef = useRef<Konva.Line[]>([]);

  const connection = [
    {from: 0, to: 1},
    {from: 1, to: 2},
    {from: 2, to: 3},
    {from: 3, to: 4},
    {from: 4, to: 5},
    {from: 5, to: 6},
    {from: 6, to: 0},
    {from: 7, to: 8},
    {from: 8, to: 9},
    {from: 9, to: 10},
    {from: 10, to: 11},
    {from: 11, to: 12},
    {from: 12, to: 13},
    {from: 13, to: 14},
    {from: 14, to: 15},
    {from: 15, to: 16},
    {from: 16, to: 17},
    {from: 17, to: 18},
    {from: 5, to: 7 },
    // {from: 12, to: 0},
  ]

  useEffect(() => {
    const circles = circleRef.current;
    const lines = lineRef.current;
    if (circles.length < 2) return;

    const anim = new Konva.Animation((frame) => {
      const time = frame.time / 2000;

      circles.forEach((circle, i) => {
        const centerX = 100 + (i * 30); 
        const centerY = 100 + (i * 30);
  
        circle.x(120 * Math.sin(time + i) + centerX);
        circle.y(120 * Math.cos(time + i) + centerY);
      });
      
      connection.forEach((conn, i)=>{
        const c1 = circles[conn.from];
        const c2 = circles[conn.to];
        const line = lines[i];

        if (c1 && c2 && line) {
          const dx = c2.x() - c1.x();
          const dy = c2.y() - c1.y();
          const angle = Math.atan2(dy, dx);
          const radius =10;

          line.points([
            c1.x() + radius * Math.cos(angle),
            c1.y() + radius * Math.sin(angle),
            c2.x() - radius * Math.cos(angle),
            c2.y() - radius * Math.sin(angle)
          ]);
        }
      })

    }, circles[0].getLayer());

    anim.start();

    return () => {
      anim.stop();
    };
  }); 


  return (
    <>
    <Stage width={window.innerWidth - 200} height={window.innerHeight} className='absolute z-1'>
      <Layer>

        {/* <Line ref={(el) => {if (el) lineRef.current[13] = el;}} stroke="#6c7e90" strokeWidth={1} /> */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((i) => (
        <Line key={i} ref={(el) => {if (el) lineRef.current[i] = el;}} stroke="#6c7e90" strokeWidth={1} />
          ))}
        {[0, 1, 2, 3, 4, 5].map((i) => (
        <Circle
          key={i}
          ref={(el) => { if (el) circleRef.current[i] = el; }}
          x={50 + (i * 30)} // Each circle moves 30px to the right of the previous one
          y={200}           // All at the same vertical height
          radius={10}
          stroke="#6c7e90"
          strokeWidth={2}
        />
      ))}

      {[7, 8, 9, 10, 11, 12].map((i) => (
        <Circle
          key={i}
          ref={(el) => { if (el) circleRef.current[i] = el; }}
          x={100 + (i * 30)} // Offset these differently
          y={300}            // Placed lower on the screen
          radius={10}
          stroke="#6c7e90"
          strokeWidth={2}
        />
      ))}
      {[13, 14, 15, 16, 17, 18].map((i) => (
        <Circle
          key={i}
          ref={(el) => { if (el) circleRef.current[i] = el; }}
          x={100 + (i * 30)} // Offset these differently
          y={300}            // Placed lower on the screen
          radius={10}
          stroke="#6c7e90"
          strokeWidth={2}
        />
      ))}
        {/* <Circle
          ref={(el) => {if (el) circleRef.current[13] = el;}}
          x={50}
          y={window.innerWidth}
          radius={10}
          stroke="#6c7e90"
          strokeWidth={2}
          cornerRadius={2}
        /> */}
      </Layer>
    </Stage>
    </>
  );
};
