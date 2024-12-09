import {defineFunction} from '@aws-amplify/backend';

export const testFunc = defineFunction({
    name: 'testFunc',
    entry: './handler.ts'
});
