import { type Metadata } from 'next';

import ControlCentre from 'src/fragments/ControlCentre';
import { PROJECTS } from 'src/utils/projects';

export default function ProjectPage({ params }: ProjectPageProps) {
  const { project } = params;
  const { Canvas, variants } = PROJECTS[project];
  return <ControlCentre Canvas={Canvas} variants={variants} />;
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const { project } = params;
  return {
    title: PROJECTS[project].name,
  };
}

interface ProjectPageProps {
  params: {
    project: keyof typeof PROJECTS;
  };
}
