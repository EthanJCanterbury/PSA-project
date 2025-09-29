from flask import Flask, jsonify, render_template_string

app = Flask(__name__)

# Basic HTML template for the home page
HOME_TEMPLATE = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PSA Project</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            text-align: center;
        }
        .info {
            background-color: #e8f4fd;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
        }
        .api-link {
            display: inline-block;
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin: 10px 5px;
        }
        .api-link:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to PSA Project</h1>
        <div class="info">
            <p>This is a basic Flask application running in a Docker container.</p>
            <p>The application provides both web interface and API endpoints.</p>
        </div>
        <h2>Available Endpoints:</h2>
        <a href="/" class="api-link">Home</a>
        <a href="/api/status" class="api-link">API Status</a>
        <a href="/api/info" class="api-link">App Info</a>
    </div>
</body>
</html>
"""

@app.route('/')
def home():
    """Home page with basic information about the app."""
    return render_template_string(HOME_TEMPLATE)

@app.route('/api/status')
def api_status():
    """API endpoint to check application status."""
    return jsonify({
        'status': 'running',
        'message': 'PSA Flask application is healthy',
        'version': '1.0.0'
    })

@app.route('/api/info')
def api_info():
    """API endpoint with application information."""
    return jsonify({
        'app_name': 'PSA Project',
        'description': 'Basic Flask Python app with Docker support',
        'framework': 'Flask',
        'language': 'Python',
        'containerized': True,
        'endpoints': [
            {'path': '/', 'method': 'GET', 'description': 'Home page'},
            {'path': '/api/status', 'method': 'GET', 'description': 'Application status'},
            {'path': '/api/info', 'method': 'GET', 'description': 'Application information'}
        ]
    })

@app.route('/health')
def health_check():
    """Health check endpoint for Docker/monitoring."""
    return jsonify({'status': 'healthy'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)