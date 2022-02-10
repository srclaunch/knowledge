// import { ContainerProps } from '../types/layout/container';
import Layout from './Layout';
import { PropsWithChildren } from 'react';
// export type ComponentPreviewProps = ContainerProps<HTMLDivElement, {}>;

const ComponentPreview = ({
  children,
}: PropsWithChildren<{}>): React.ReactElement => {
  return <Layout>{children}</Layout>;
};

export default ComponentPreview;
