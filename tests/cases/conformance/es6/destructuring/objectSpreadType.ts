// @declaration: true
function f<T,U>(t: T, u: U): { id: string, ...T, ...U } {
    var spreads: { id: string, ...T, ...U } = { id: '1', ...t, ...u };
    return spreads;
}
