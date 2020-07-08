import React, { useRef, useEffect, useCallback } from 'react';
import { noop } from '@/utils';

export interface RulerProps {
  type?: 'horizontal' | 'vertical';
  width?: number;
  height?: number;
  unit?: number;
  zoom?: number;
  direction?: string;
  style?: any;
  backgroundColor?: string;
  lineColor?: string;
  textColor?: string;
  textFormat?: (scale: number) => string;
}

export default function Ruler(props: RulerProps) {
  const {
    type = 'horizontal',
    zoom = 1,
    width = 0,
    height = 0,
    unit = 50,
    direction = 'end',
    style = { width: '100%', height: '100%' },
    backgroundColor = '#333333',
    textColor = '#ffffff',
    lineColor = '#777777',
    textFormat = noop,
  } = props;
  let canvasWidth = 0;
  let canvasHeight = 0;

  const ref = useRef<HTMLCanvasElement>(null);

  const draw = (context: CanvasRenderingContext2D, scrollPos: number = 0) => {
    const isHorizontal = type === 'horizontal';
    const isDirectionStart = direction === 'start';

    context.rect(0, 0, canvasWidth * 2, canvasHeight * 2);
    context.fillStyle = backgroundColor;
    context.fill();
    context.save();
    context.scale(2, 2);
    context.strokeStyle = lineColor;
    context.lineWidth = 1;
    context.font = '10px sans-serif';
    context.fillStyle = textColor;

    if (isDirectionStart) {
      context.textBaseline = 'top';
    }
    context.translate(0.5, 0);
    context.beginPath();

    const size = isHorizontal ? canvasWidth : canvasHeight;
    const zoomUnit = zoom * unit;
    const minRange = Math.floor((scrollPos * zoom) / zoomUnit);
    const maxRange = Math.ceil((scrollPos * zoom + size) / zoomUnit);
    const length = maxRange - minRange;

    for (let i = 0; i < length; ++i) {
      const startPos = ((i + minRange) * unit - scrollPos) * zoom;

      if (startPos >= -zoomUnit && startPos < size) {
        const [startX, startY] = isHorizontal
          ? [startPos + 3, isDirectionStart ? 17 : canvasHeight - 17]
          : [isDirectionStart ? 17 : canvasWidth - 17, startPos - 4];

        let text = `${(i + minRange) * unit}`;

        if (textFormat) {
          text = textFormat((i + minRange) * unit) || text;
        }
        if (isHorizontal) {
          context.fillText(text, startX, startY);
        } else {
          context.save();
          context.translate(startX, startY);
          context.rotate(-Math.PI / 2);
          context.fillText(text, 0, 0);
          context.restore();
        }
      }

      for (let j = 0; j < 10; ++j) {
        const pos = startPos + (j / 10) * zoomUnit;

        if (pos < 0 || pos >= size) {
          continue;
        }
        const lineSize =
          j === 0 ? (isHorizontal ? canvasHeight : canvasWidth) : j % 2 === 0 ? 10 : 7;

        const [x1, y1] = isHorizontal
          ? [pos, isDirectionStart ? 0 : canvasHeight - lineSize]
          : [isDirectionStart ? 0 : canvasWidth - lineSize, pos];
        const [x2, y2] = isHorizontal ? [x1, y1 + lineSize] : [x1 + lineSize, y1];
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
      }
    }
    context.stroke();
    context.restore();
  };

  const resize = useCallback((canvas: HTMLCanvasElement) => {
    canvasWidth = width || canvas.offsetWidth;
    canvasHeight = height || canvas.offsetHeight;
    canvas.width = canvasWidth * 2;
    canvas.height = canvasHeight * 2;
    draw(canvas.getContext('2d')!);
  }, []);

  useEffect(() => {
    ref.current && resize(ref.current);
  }, [ref, resize]);

  return <canvas ref={ref} style={style} />;
}
