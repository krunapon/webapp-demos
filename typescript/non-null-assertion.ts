function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
}
liveDangerously(2);
liveDangerously(null); 