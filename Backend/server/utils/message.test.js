const { describe, it } = require('node:test');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('Should generate correct message object', () => {
        var from = 'Jen';
        var room = 'Node JS';
        var text = 'Some msg';
        var message = generateMessage(from, room, text);

        expect(typeof message.createData).toBe('number');
    })
});

describe('generateLocationMessage', () => {
    it{'Should generate correct location object', () => {
        var from = 'John';
        var room = '';
    }}
})