from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os
import csv
from datetime import datetime

# Setup
# 1. Install dependencies: pip install flask flask-cors
# 2. Run: python server.py
# 3. Server runs on http://localhost:5000

app = Flask(__name__)
# Enable CORS to allow requests from your GitHub Pages or local HTML file
CORS(app) 

RESULTS_FILE = 'results.json'
CSV_FILE = 'results.csv'

@app.route('/', methods=['GET'])
def index():
    return "Backend server is running! Send POST requests to /submit", 200

@app.route('/submit', methods=['POST'])
def submit():
    try:
        data = request.json
        if not data:
            return jsonify({"error": "No data provided"}), 400

        print(f"Received data from user: {data.get('userId', 'Anonymous')}")

        # Option 1: Save as JSON (Append to list)
        current_data = []
        if os.path.exists(RESULTS_FILE):
            with open(RESULTS_FILE, 'r', encoding='utf-8') as f:
                try:
                    current_data = json.load(f)
                except json.JSONDecodeError:
                    current_data = []
        
        current_data.append(data)
        
        with open(RESULTS_FILE, 'w', encoding='utf-8') as f:
            json.dump(current_data, f, indent=2, ensure_ascii=False)

        # Option 2: Save as CSV (Flat structure)
        # We need to determine headers dynamically or fix them
        file_exists = os.path.isfile(CSV_FILE)
        
        with open(CSV_FILE, 'a', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=data.keys())
            if not file_exists:
                writer.writeheader()
            writer.writerow(data)

        return jsonify({"message": "Success", "status": "saved"}), 200

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    # host='0.0.0.0' allows access from other devices on the network
    app.run(debug=True, port=5000, host='0.0.0.0')
