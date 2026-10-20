#!/usr/bin/env python3
"""Jai Scudder Plumbing settings and hooks for the shared host deployer (deploy_core.py)."""
from pathlib import Path
import re

import deploy_core as core


def accept(image):
    html = core.compose('exec', '-T', 'jaiscudderplumbing', 'wget', '-qO-', 'http://127.0.0.1:8080/', image=image).decode()
    if 'JAI SCUDDER LTD' not in html or 'mail@jaiscudderplumbing.co.uk' not in html:
        raise core.Error('Site content verification failed.')
    assets = set(re.findall(r'(?:src|href|component-url|renderer-url)="(/(?:_astro/|favicon)[^"]+)"', html))
    if not assets or not any(asset.endswith('.webp') for asset in assets):
        raise core.Error('Expected built site assets were missing.')
    for asset in sorted(assets):
        core.compose('exec', '-T', 'jaiscudderplumbing', 'wget', '-qO', '/dev/null',
                     'http://127.0.0.1:8080' + asset, image=image)


APP = core.App(
    name='jaiscudderplumbing', title='Jai Scudder Plumbing',
    image='ghcr.io/kylescudder/jaiscudderplumbing', repo='kylescudder/jaiscudderplumbing',
    image_var='PLUMBING_IMAGE', service='jaiscudderplumbing', app_dir=Path(__file__).resolve().parents[1],
    accept=accept,
    public_status=True)

if __name__ == '__main__':
    core.cli(APP, __file__)
