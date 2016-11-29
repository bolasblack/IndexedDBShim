import setGlobalVars from './setGlobalVars.js';
import CFG from './CFG.js';

CFG.win = typeof window !== 'undefined' ? window : self; // For Web Workers

export default (IDB, passInOpt = {}) => {
    if (typeof passInOpt.window !== 'undefined') {
        CFG.win = passInOpt.window;
    }
    setGlobalVars(IDB);
};
