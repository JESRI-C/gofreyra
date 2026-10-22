import { artikler } from "./viden";
import { artiklerBatch2 } from "./viden-batch2";
import { ordbog } from "./ordbog";
import { ordbogBatch2 } from "./ordbog-batch2";

// Fremtidige batches tilføjes kun her.
export const alleArtikler = [...artikler, ...artiklerBatch2];
export const alleTermer = [...ordbog, ...ordbogBatch2];
