import { PropsWithChildren } from 'react';

import WebApplication from '../containers/WebApplication';
import Workspace from '../containers/Workspace';
import NavigationMenu from '../../../../../design/src/components/navigation/NavigationMenu';
import { Orientation } from '../types/layout/positioning';
import { Amount } from '../types/layout/proportions';

const Layout = ({ children }: PropsWithChildren<{}>): React.ReactElement => {
  return (
    <WebApplication
      fullPage={true}
      orientation={Orientation.Horizontal}
      padding={Amount.More}
    >
      <NavigationMenu items={[{ label: 'Forms', to: '/forms' }]} />
      <Workspace title="Layout Components">{children}</Workspace>
    </WebApplication>
  );
};

export default Layout;
