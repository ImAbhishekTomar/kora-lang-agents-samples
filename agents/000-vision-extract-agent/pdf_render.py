"""Render invoice PDFs to page images.

Kora's `fs.image` reads PNG/JPEG/GIF/WebP; PDF is not a stdlib binding yet, so
this sidecar does the one thing Kora cannot: turn each page into a PNG. It
returns counts only -- the Kora program finds the pages with `fs.glob`, which
keeps the paths verified data.
"""

import os
from unittest import result

import pymupdf


def render_dir(pdf_dir, out_dir, dpi=200):
    """Render every PDF in `pdf_dir` to `out_dir/<stem>/page_NNN.png`.

    Already-rendered pages are left alone, so re-running is cheap. Returns one
    summary per PDF, sorted by name, so a run visits them in one order.
    """
    summaries = []
    for name in sorted(os.listdir(pdf_dir)):
        if not name.lower().endswith(".pdf"):
            continue
        stem = name[: -len(".pdf")]
        pages = render_file(os.path.join(pdf_dir, name), os.path.join(out_dir, stem), dpi)
        summaries.append({"pdf": name, "stem": stem, "pages": pages})
    return summaries


def render_file(pdf_path, page_dir, dpi=200):
    """Render one PDF into `page_dir`. Returns the number of pages there."""
    os.makedirs(page_dir, exist_ok=True)
    with pymupdf.open(pdf_path) as doc:
        for index, page in enumerate(doc, start=1):
            target = os.path.join(page_dir, f"page_{index:03d}.png")
            if os.path.exists(target):
                continue
            page.get_pixmap(dpi=dpi).save(target)
        return doc.page_count

    
