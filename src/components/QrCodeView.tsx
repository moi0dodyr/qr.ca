import React, { useEffect, useRef } from 'react';
import QRCodeStyling, {
  type DotType,
  type CornerSquareType,
  type CornerDotType,
} from 'qr-code-styling';
import type { ShapeType } from './ShapeTiles';

interface QrCodeViewProps {
  value: string;
  shape: ShapeType;
  color?: string;
  bgColor?: string;
  logoUrl?: string;
  size?: number;
  onInstanceReady?: (instance: QRCodeStyling) => void;
}

export const QrCodeView: React.FC<QrCodeViewProps> = ({
  value,
  shape,
  color = '#2c2e30',
  bgColor = '#ffffff',
  logoUrl,
  size = 200,
  onInstanceReady,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const qrCodeRef = useRef<QRCodeStyling | null>(null);

  // Map our shape types to qr-code-styling options
  const getStylingOptions = (shapeType: ShapeType) => {
    let dotType: DotType = 'square';
    let cornerSquareType: CornerSquareType = 'square';
    let cornerDotType: CornerDotType = 'square';

    switch (shapeType) {
      case 'square':
        dotType = 'square';
        cornerSquareType = 'square';
        cornerDotType = 'square';
        break;
      case 'rounded':
        dotType = 'rounded';
        cornerSquareType = 'extra-rounded';
        cornerDotType = 'dot';
        break;
      case 'extra-rounded':
        dotType = 'extra-rounded';
        cornerSquareType = 'extra-rounded';
        cornerDotType = 'dot';
        break;
      case 'dots':
        dotType = 'dots';
        cornerSquareType = 'dot';
        cornerDotType = 'dot';
        break;
      case 'diamond':
        dotType = 'classy';
        cornerSquareType = 'square';
        cornerDotType = 'dot';
        break;
      case 'horizontal-bars':
        dotType = 'rounded';
        cornerSquareType = 'extra-rounded';
        cornerDotType = 'square';
        break;
      case 'vertical-bars':
        dotType = 'classy-rounded';
        cornerSquareType = 'extra-rounded';
        cornerDotType = 'dot';
        break;
      case 'classy':
        dotType = 'classy';
        cornerSquareType = 'extra-rounded';
        cornerDotType = 'dot';
        break;
      case 'classy-rounded':
        dotType = 'classy-rounded';
        cornerSquareType = 'extra-rounded';
        cornerDotType = 'dot';
        break;
    }

    return { dotType, cornerSquareType, cornerDotType };
  };

  useEffect(() => {
    const { dotType, cornerSquareType, cornerDotType } = getStylingOptions(shape);

    const qrCode = new QRCodeStyling({
      width: size,
      height: size,
      type: 'svg',
      data: value || 'https://qr.ca',
      image: logoUrl,
      dotsOptions: {
        color: color,
        type: dotType,
      },
      backgroundOptions: {
        color: bgColor,
      },
      cornersSquareOptions: {
        color: color,
        type: cornerSquareType,
      },
      cornersDotOptions: {
        color: color,
        type: cornerDotType,
      },
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: 4,
        imageSize: 0.35,
      },
    });

    qrCodeRef.current = qrCode;
    if (onInstanceReady) {
      onInstanceReady(qrCode);
    }

    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      qrCode.append(containerRef.current);
    }
  }, []);

  // Update when properties change
  useEffect(() => {
    if (!qrCodeRef.current) return;
    const { dotType, cornerSquareType, cornerDotType } = getStylingOptions(shape);

    qrCodeRef.current.update({
      data: value || 'https://qr.ca',
      image: logoUrl,
      dotsOptions: {
        color: color,
        type: dotType,
      },
      backgroundOptions: {
        color: bgColor,
      },
      cornersSquareOptions: {
        color: color,
        type: cornerSquareType,
      },
      cornersDotOptions: {
        color: color,
        type: cornerDotType,
      },
    });
  }, [value, shape, color, bgColor, logoUrl]);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center size-[200px] select-none"
    />
  );
};
