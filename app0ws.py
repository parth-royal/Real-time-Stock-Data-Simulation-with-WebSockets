import asyncio
import json
import numpy as np
import pandas as pd
import threading
import time
import websockets

# Generate random data for demonstration
np.random.seed(0)
dates = pd.date_range('2024-01-01', periods=100)
closing_prices = np.random.randint(100, 500, size=100)
open_prices = np.random.randint(100, 500, size=100)
high_prices = np.random.randint(100, 500, size=100)
volume = np.random.randint(1000, 5000, size=100)

# Create DataFrame
data = {
    'Date': dates,
    'ClosingPrice': closing_prices,
    'OpenPrice': open_prices,
    'HighPrice': high_prices,
    'Volume': volume
}
df = pd.DataFrame(data)

async def generate_random_data(websocket, path):
    while True:
        # Generate random data
        new_data = {
            'Date': str(pd.Timestamp.now()),
            'ClosingPrice': np.random.randint(100, 500),
            'OpenPrice': np.random.randint(100, 500),
            'HighPrice': np.random.randint(100, 500),
            'Volume': np.random.randint(1000, 5000)
        }
        # Emit the new data over the WebSocket connection
        await websocket.send(json.dumps(new_data))
        await asyncio.sleep(0.5)  # Wait for 1 second

if __name__ == "__main__":
    start_server = websockets.serve(generate_random_data, "localhost", 5000)
    asyncio.get_event_loop().run_until_complete(start_server)
    asyncio.get_event_loop().run_forever()
