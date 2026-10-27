"""Ghép sa bàn 3D: python3 tools/build.py  ->  3d/index.html
Sửa giao diện/logic trong tools/sa-ban-template.html, dữ liệu trong tools/data/."""
import json, os
T = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(T)
t = open(f'{T}/sa-ban-template.html', encoding='utf-8').read()
d = json.load(open(f'{T}/data/dem.json')); g = json.load(open(f'{T}/data/geo.json'))
dem = {k: d[k] for k in ['W', 'H', 'lon0', 'lon1', 'lat0', 'lat1', 'b64']}
geo = {'lake': g['lake'], 'ql15': g['ql15'], 'east': g['east'], 'low': g['low']}
icon = open(f'{T}/logo/icon-white.svg').read().replace('<svg ', '<svg aria-hidden="true" ', 1)
for a, b in [("\n  cableGroup.clear(); cabins=[];", "\n  cableGroup.traverse(o=>{if(o.geometry)o.geometry.dispose();}); cableGroup.clear(); cabins=[];"),
             (" tBar.children.forEach?.call;", ""),
             ("  if(Math.abs(explodeTarget-explode)>.002 || (mode!=='terrain'&&introT<1.6)) buildCable();", "  if(Math.abs(explodeTarget-explode)>.002) buildCable();")]:
    t = t.replace(a, b)
t = (t.replace('__FONTS__', open(f'{T}/data/fonts.css').read())
      .replace('__DEM__', json.dumps(dem, separators=(',', ':')))
      .replace('__GEO__', json.dumps(geo, separators=(',', ':')))
      .replace('__ICON_WHITE__', icon))
if 'rel="icon"' not in t:
    t = t.replace('<meta name="theme-color"', '<link rel="icon" type="image/svg+xml" href="../assets/logo/ubo-icon.svg">\n<meta name="theme-color"', 1)
os.makedirs(f'{ROOT}/3d', exist_ok=True)
open(f'{ROOT}/3d/index.html', 'w', encoding='utf-8').write(t)
print('3d/index.html', len(t), 'bytes')
