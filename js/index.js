import Worker from 'worker-loader!./worker.js';

const worker = new Worker();

worker.postMessage({msg: "hello worker"});

