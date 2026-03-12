import { useState, useEffect, useMemo } from 'react';
import { HomeMediator } from './mediator/HomeMediator.jsx';
import { Light } from './devices/light.jsx';
import { LightOnCommand } from './commands/lightCommands.jsx';
import { CommandManager } from './commands/commandManager.jsx';

function App() {
  const mediator = useMemo(() => new HomeMediator(), []);
  const manager = useMemo(() => new CommandManager(), []);
  const light = useMemo(() => new Light('LivingRoomLight', mediator), [mediator]);

  const [logs, setLogs] = useState([]);

  useEffect(() => {
    mediator.registerDevice('LivingRoomLight', light);

    const originalLog = console.log;
    console.log = (msg) => {
      setLogs(prev => [...prev, String(msg)]);
      originalLog(msg);
    };
  }, [mediator, light]);

  const handleTurnOn = () => {
    const cmd = new LightOnCommand(light);
    manager.execute(cmd);
  };

  const handleUndo = () => {
    manager.undo();
  };

  const handleAlarm = () => {
    mediator.notify({ name: 'Security' }, 'alarm');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Smart Home Control (Lab 9.2)</h1>
      
      <div style={{ background: '#f0f0f0', padding: '15px', borderRadius: '8px' }}>
        <button onClick={handleTurnOn} style={btnStyle}>Turn Light ON</button>
        <button onClick={handleUndo} style={{...btnStyle, backgroundColor: '#ffcc00'}}>Undo (Отмена)</button>
        <button onClick={handleAlarm} style={{...btnStyle, backgroundColor: 'red', color: 'white'}}>🚨 TRIGGER ALARM</button>
      </div>

      <h2>System Logs:</h2>
      <div style={{ 
        background: '#000', 
        color: '#0f0', 
        padding: '10px', 
        height: '200px', 
        overflowY: 'auto',
        borderRadius: '5px' 
      }}>
        {logs.map((log, i) => <div key={i}>{log}</div>)}
      </div>
    </div>
  );
}

const btnStyle = {
  padding: '10px 20px',
  marginRight: '10px',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '4px'
};

export default App;