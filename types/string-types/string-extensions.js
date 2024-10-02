Object.defineProperty(String.prototype, 'capitalize', {
    value: function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false,
});

export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}