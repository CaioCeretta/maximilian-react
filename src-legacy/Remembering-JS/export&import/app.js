import person from './person';
import prs from './person';
//This doesn't matter, whether we choose one way to call the import, or the other, you are importing what was default exported

import { baseData, clean } from './utility';
// In the named export we have to use the exact name of the find in the file with the export keyword
// but we can also use the alias with the 'as' keyword
// If we have multiple named exports in a file we can use like the below example* 
import * as bundled from './utility';
//In that case we have bundled.baseData and bundled.clean