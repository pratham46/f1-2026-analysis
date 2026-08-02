#!/usr/bin/env python3
"""Static dev server for dashboard/ that refuses to cache.

`python -m http.server` sends no Cache-Control, so browsers apply heuristic
caching to ES modules and keep running an old copy after you edit it. That
turns every browser check into a coin flip. Ten lines to make it honest.

    python scripts/serve.py [port]
"""
import sys
from functools import partial
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler


class NoCacheHandler(SimpleHTTPRequestHandler):
    # HTTP/1.1 so keep-alive works; ThreadingHTTPServer below is what makes it
    # safe. A single-threaded server plus one browser keep-alive connection
    # deadlocks every other request, which looks exactly like a stale cache.
    protocol_version = "HTTP/1.1"

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        super().end_headers()

    def log_message(self, fmt, *args):
        # Quiet the per-request noise; failures still raise.
        pass


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 4173
    handler = partial(NoCacheHandler, directory="dashboard")
    # ASCII only: the Windows console is cp1252 and a stray arrow crashes it.
    print(f"dashboard on http://localhost:{port}/  (no-store, threaded)")
    ThreadingHTTPServer(("127.0.0.1", port), handler).serve_forever()
