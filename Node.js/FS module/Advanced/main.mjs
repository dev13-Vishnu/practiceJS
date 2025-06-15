import { log } from "./logger.mjs";

log('🚀 App started...');
log('📂 Reading user data...');
log('✅ Operation compleated successfullt');

setTimeout(()=> {
    log('⏲️ Delayed operation executed.');
},2000);