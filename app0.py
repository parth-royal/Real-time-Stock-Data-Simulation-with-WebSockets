
#curl -X GET http://localhost:5000/random_data

from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

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

@app.route('/random_data', methods=['GET'])
def get_random_data():
    # Convert DataFrame to dictionary
    data_dict = df.to_dict(orient='records')
    return jsonify(data_dict), 200

if __name__ == '__main__':
    app.run(debug=True)
