import React from 'react';
import { Mosaic, MosaicWindow } from 'react-mosaic-component';
import 'react-mosaic-component/react-mosaic-component.css';
import './styles.css';

import { Sidebar, Editor, Terminal } from './components';

const App: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-2">
        VSCode Clone
      </header>
      <div className="flex-grow">
        <Mosaic<string>
          renderTile={(id, path) => (
            <MosaicWindow<string> path={path} title={id}>
              {id === 'sidebar' && <Sidebar />}
              {id === 'editor' && <Editor />}
              {id === 'terminal' && <Terminal />}
            </MosaicWindow>
          )}
          initialValue={{
            direction: 'row',
            first: 'sidebar',
            second: {
              direction: 'column',
              first: 'editor',
              second: 'terminal',
              splitPercentage: 70,
            },
            splitPercentage: 20,
          }}
        />
      </div>
    </div>
  );
};

export default App;