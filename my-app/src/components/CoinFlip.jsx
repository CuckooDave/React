export function CoinFlip() {
    const number = Math.random();

    return <div>Coin shows {number > 0.5 ? "HEADS" : "TAILS"}</div>
}
/*    if (number > 0.5) {
        return <div>Coin show HEADS</div>;
        }
        return <div>Coin shows TAILS</div>;
*/