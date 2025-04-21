import React, { useState } from 'react';
import BotEditor from './components/BotEditor';
import PlatformSelector from './components/PlatformSelector';
import ExportButton from './components/ExportButton';

const App = () => {
  const [platform, setPlatform] = useState('discord');
  const [flow, setFlow] = useState({ events: [], actions: [] }); // dummy

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">BotCrafter</h1>
      <PlatformSelector selected={platform} onChange={setPlatform} />
      <BotEditor />
      <ExportButton flow={flow} platform={platform} />
    </div>
  );
};

export default App;