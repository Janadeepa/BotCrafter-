import React from 'react';
import axios from 'axios';

const ExportButton = ({ flow, platform }) => {
  const handleExport = async () => {
    const response = await axios.post('http://localhost:3001/api/generate', { flow, platform }, { responseType: 'blob' });
    const blob = new Blob([response.data]);
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${platform}-bot.zip`;
    link.click();
  };
  return <button onClick={handleExport}>Export Bot</button>;
};

export default ExportButton;