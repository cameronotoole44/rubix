export type Face = 'right' | 'left' | 'top' | 'bottom' | 'front' | 'back';

export type FaceColors = Partial<Record<Face, string>>;

export type CubeletState = {
  id: string;
  position: [number, number, number]; // grid position
  faceColors: FaceColors;             // viasable faces will have color
};
