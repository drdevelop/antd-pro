import React from 'react';
import EventEmitter from '../Watcher/EventEmitter';

interface Context {
  event?: EventEmitter;
}

const ConfigContext = React.createContext<Context>({});

export default ConfigContext;
