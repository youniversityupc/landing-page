import type { ReactElement } from 'react';

export interface SectionProps {
  id: string,
  className?: string,
}

export type SectionComponent = (props: SectionProps) => ReactElement;

export interface SectionDefinition {
  id: string,
  className?: string,
  component: SectionComponent,
}
