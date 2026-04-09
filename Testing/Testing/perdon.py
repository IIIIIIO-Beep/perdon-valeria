from http.server import SimpleHTTPRequestHandler
from pathlib import Path
from socketserver import TCPServer


PORT = 8000
PROJECT_DIR = Path(__file__).resolve().parent


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


if __name__ == "__main__":
    import os

    os.chdir(PROJECT_DIR)
    with TCPServer(("", PORT), NoCacheHandler) as httpd:
        print(f"Pagina disponible en http://localhost:{PORT}")
        print("Presiona Ctrl+C para detener el servidor.")
        httpd.serve_forever()
