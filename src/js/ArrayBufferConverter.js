export default class ArrayBufferConverter {
    constructor() {
        this.data = new Array();
    }
    load(buffer) {
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < bufferView.length; i++) {
            this.data.push(String.fromCharCode(bufferView[i]));
        }
    }

    toString() {
        return this.data.join("");
    }
}