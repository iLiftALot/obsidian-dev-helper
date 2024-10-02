Object.defineProperty(String.prototype, 'capitalize', {
    value: function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false,
});

// function to capitalize the first letter of a string
export function capitalize(str) {
    return capitalize(str);
}
