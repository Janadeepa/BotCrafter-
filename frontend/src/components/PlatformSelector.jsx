import React from 'react';
const PlatformSelector = ({ selected, onChange }) => (
  <select value={selected} onChange={e => onChange(e.target.value)}>
    <option value="discord">Discord</option>
    <option value="telegram">Telegram</option>
    <option value="slack">Slack</option>
  </select>
);
export default PlatformSelector;