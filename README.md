# lndezx.github.io

## User Study Setup (Auricula)

### Frontend
The survey page is located in the \uricula\ folder.
- URL: \/auricula\ (e.g., https://lndezxn.github.io/auricula)
- Files: \index.html\, \style.css\, \script.js\

### Backend
A simple Python Flask server is provided in the \ackend\ folder to collect responses.
1. Install dependencies:
   \\\ash
   pip install flask flask-cors
   \\\
2. Run the server:
   \\\ash
   python backend/server.py
   \\\
3. The server runs on \http://localhost:5000\.
4. Update \uricula/script.js\ if you deploy the backend to a different URL.

