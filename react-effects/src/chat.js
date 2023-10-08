export function createConnection() {
    // A real implementation would use the WebSocket API
    return {
        connect() {
            console.log('Connecting to chat...');
        },
        disconnect() {
            console.log('Disconnecting from chat...');
        }   
    };
}