import {workerData,parentPort} from 'worker_threads';

const result = workerData * 2;

parentPort.postMessage(result);