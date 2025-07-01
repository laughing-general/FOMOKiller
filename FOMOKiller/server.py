import http.server
import socketserver
from functools import partial

class CORSRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "*")
        super().end_headers()

Handler = partial(CORSRequestHandler, directory=".")
PORT = 8001

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"🚀 Local server running at: http://localhost:{PORT}")
    httpd.serve_forever()

