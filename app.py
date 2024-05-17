
# curl -X POST -H "Content-Type: application/json" -d '{"username": "your_username", "password": "your_password"}' http://127.0.0.1:5000/login

'''
curl -X POST -H "Content-Type: application/json" -d '{"username": "user1", "password": "pass1"}' http://127.0.0.1:5000/login
{
  "message": "Login successful!"
}

'''
from flask import Flask, request, jsonify

from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# In-memory database to store user credentials
users_db = [
    {"username": "user1", "password": "pass1"},
    {"username": "user2", "password": "pass2"}
]

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    # Check if user exists in the database
    for user in users_db:
        if user['username'] == username and user['password'] == password:
            return jsonify({"message": "Login successful!"}), 200
    
    return jsonify({"message": "Invalid username or password"}), 401

if __name__ == '__main__':
    app.run(debug=True)

