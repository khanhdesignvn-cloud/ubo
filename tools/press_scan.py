#!/usr/bin/env python3
"""Quét bài báo mới về núi U Bò / hồ Thác Chuối, ghi data/press.json.

Chạy định kỳ bằng GitHub Actions. Nguồn: Bing News RSS (link trực tiếp tới toà soạn),
bổ sung Google News RSS. Với mỗi bài mới, tải trang để lấy ảnh bìa (og:image),
ngày đăng và tác giả. Bài cũ đã có trong press.json được giữ nguyên.
"""
import json, re, sys, time, html, datetime as dt, urllib.parse, urllib.request
from xml.etree import ElementTree as ET

ROOT = __import__('os').path.dirname(__import__('os').path.dirname(__import__('os').path.abspath(__file__)))
OUT = ROOT + '/data/press.json'
UA = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36', 'Accept-Language': 'vi-VN,vi;q=0.9'}
LOG = []
def log(*a):
    m=' '.join(str(x) for x in a); print(m); LOG.append(m)
QUERIES = ['"núi U Bò"', '"U Bò" "Thác Chuối"', '"hồ Thác Chuối"', '"U Bò" cáp treo Quảng Trị', '"U Bò" Sun Group']
# Bài luôn có mặt (thêm tay)
SEEDS = ['https://24hmoney.vn/news/quang-tri-chuan-bi-don-du-an-hon-16-200-ty-dong-cua-sun-group-5-tuyen-cap-treo-dan-len-dau-c3a2851060.html']
# Chỉ nhận toà soạn chính thống
ALLOW = {
  'tienphong.vn':'Tiền Phong','vietnamplus.vn':'VietnamPlus','baodautu.vn':'Báo Đầu tư','nhandan.vn':'Nhân Dân',
  'vneconomy.vn':'VnEconomy','tuoitre.vn':'Tuổi Trẻ','thanhnien.vn':'Thanh Niên','vnexpress.net':'VnExpress',
  'dantri.com.vn':'Dân trí','laodong.vn':'Lao Động','baoquangtri.vn':'Báo Quảng Trị','quangtri.gov.vn':'Cổng TTĐT Quảng Trị',
  'vov.vn':'VOV','vtv.vn':'VTV','baochinhphu.vn':'Báo Chính phủ','danviet.vn':'Dân Việt','cafef.vn':'CafeF',
  'vietnamnet.vn':'VietNamNet','sggp.org.vn':'SGGP','kinhtedothi.vn':'Kinh tế & Đô thị','baoxaydung.com.vn':'Báo Xây dựng',
  'nhadautu.vn':'Nhà Đầu tư','vietnamfinance.vn':'VietnamFinance','thuonghieucongluan.com.vn':'Thương hiệu & Công luận',
  'baovanhoa.vn':'Báo Văn hoá','vnbusiness.vn':'VnBusiness','diendandoanhnghiep.vn':'Diễn đàn Doanh nghiệp','cafeland.vn':'CafeLand',
  'soha.vn':'Soha','24hmoney.vn':'24hMoney','vietnambiz.vn':'VietnamBiz','baogiaothong.vn':'Báo Giao thông','baoquangbinh.vn':'Báo Quảng Bình','vtcnews.vn':'VTC News','nld.com.vn':'Người Lao Động','tienphong.vn':'Tiền Phong','znews.vn':'Znews','vietnamnet.vn':'VietNamNet','baophapluat.vn':'Báo Pháp luật','tapchitaichinh.vn':'Tạp chí Tài chính','thesaigontimes.vn':'Saigon Times','reatimes.vn':'Reatimes','batdongsan.com.vn':'Batdongsan.com.vn','nguoiquansat.vn':'Người Quan Sát','markettimes.vn':'MarketTimes','congluan.vn':'Công Luận','baotintuc.vn':'Tin tức TTXVN',
}
MUST = re.compile(r'(u\s?bò|thác chuối)', re.I)

def get(url, timeout=20):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read(), r.geturl()

def domain(u):
    h = urllib.parse.urlparse(u).netloc.lower()
    return h[4:] if h.startswith('www.') else h

def rss_items(url):
    try:
        raw, _ = get(url)
        root = ET.fromstring(raw)
    except Exception as e:
        log('rss lỗi', url, e); return []
    out = []
    for it in root.iter('item'):
        t = (it.findtext('title') or '').strip()
        l = (it.findtext('link') or '').strip()
        d = (it.findtext('pubDate') or '').strip()
        img = None
        for el in it.iter():
            if el.tag.lower().endswith('image') and (el.text or '').startswith('http'): img = el.text.strip()
        out.append({'title': html.unescape(t), 'link': l, 'pub': d, 'img': img})
    return out

def gn_decode(url):
    """Giải mã link news.google.com/rss/articles/<id> về URL gốc."""
    try:
        m = re.search(r'/articles/([^/?]+)', url)
        if not m: return None
        gid = m.group(1)
        raw, _ = get(f'https://news.google.com/articles/{gid}')
        h = raw.decode('utf-8', 'ignore')
        sg = re.search(r'data-n-a-sg="([^"]+)"', h); ts = re.search(r'data-n-a-ts="([^"]+)"', h)
        if not (sg and ts): return None
        payload = json.dumps([[["Fbv4je", json.dumps(["garturlreq",[["vi","VN",["FINANCE_TOP_INDICES","WEB_TEST_1_0_0"],None,None,1,1,"VN:vi",None,180,None,None,None,None,None,0,None,None,[1608992183,723341000]],"vi","VN",1,[2,3,4,8],1,0,"655000234",0,0,None,0],gid,ts.group(1),sg.group(1)]), None, "generic"]]])
        body = urllib.parse.urlencode({'f.req': payload}).encode()
        req = urllib.request.Request('https://news.google.com/_/DotsSplashUi/data/batchexecute', data=body, headers={**UA, 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'})
        with urllib.request.urlopen(req, timeout=20) as r: txt = r.read().decode('utf-8', 'ignore')
        mm = re.search(r'"garturlres","(https?://[^"]+)"', txt)
        return mm.group(1) if mm else None
    except Exception as e:
        log('gn lỗi', e); return None

def parse_date(s):
    for f in ('%a, %d %b %Y %H:%M:%S %Z', '%a, %d %b %Y %H:%M:%S %z', '%Y-%m-%dT%H:%M:%S%z', '%Y-%m-%dT%H:%M:%S.%f%z', '%Y-%m-%d'):
        try: return dt.datetime.strptime(s.strip(), f).date().isoformat()
        except Exception: pass
    m = re.search(r'(\d{4})-(\d{2})-(\d{2})', s or '')
    if m: return f'{m.group(1)}-{m.group(2)}-{m.group(3)}'
    m = re.search(r'(\d{1,2})/(\d{1,2})/(\d{4})', s or '')
    if m: return f'{m.group(3)}-{int(m.group(2)):02d}-{int(m.group(1)):02d}'
    return None

def meta(htmltext, *keys):
    for k in keys:
        m = re.search(r'<meta[^>]+(?:property|name)=["\']%s["\'][^>]+content=["\']([^"\']+)' % re.escape(k), htmltext, re.I) \
            or re.search(r'<meta[^>]+content=["\']([^"\']+)["\'][^>]+(?:property|name)=["\']%s["\']' % re.escape(k), htmltext, re.I)
        if m: return html.unescape(m.group(1)).strip()
    return None

def enrich(a):
    try:
        raw, final = get(a['url'])
        h = raw.decode('utf-8', 'ignore')
    except Exception as e:
        log('trang lỗi', a['url'], e); return a
    a['url'] = final.split('#')[0]
    a['title'] = (meta(h, 'og:title') or a['title']).strip()
    a['image'] = meta(h, 'og:image', 'twitter:image') or a.get('image')
    a['date'] = parse_date(meta(h, 'article:published_time', 'pubdate', 'datePublished', 'og:updated_time') or '') or a.get('date')
    au = meta(h, 'article:author', 'author', 'dable:author')
    if au and len(au) < 60 and not re.search(r'báo|vietnam\+|tạp chí|online', au, re.I): a['author'] = au
    return a

def main():
    try: data = json.load(open(OUT, encoding='utf-8'))
    except Exception: data = {'updated': None, 'items': []}
    items = {it['url'].split('#')[0]: it for it in data.get('items', [])}
    seen_titles = {re.sub(r'\W+', '', it['title'].lower()) for it in items.values()}
    found = []
    for q in QUERIES:
        qq = urllib.parse.quote(q)
        found += rss_items(f'https://www.bing.com/news/search?q={qq}&format=rss&setlang=vi&cc=VN')
        found += rss_items(f'https://news.google.com/rss/search?q={qq}&hl=vi&gl=VN&ceid=VN:vi')
        time.sleep(1)
    for u in SEEDS:
        if u not in items: found.insert(0, {'title': 'U Bò', 'link': u, 'pub': '', 'img': None})
    log(f'rss: {len(found)} mục')
    skip = {'domain':0,'title':0,'dup':0}
    added = 0
    for f in found:
        link = f['link']
        if 'news.google.com' in link:
            link = gn_decode(link) or ''
            if not link: continue
        link = link.split('?utm')[0].split('#')[0]
        d = domain(link)
        if d not in ALLOW: skip['domain']+=1; log('bỏ domain', d, f['title'][:60]); continue
        if not MUST.search(f['title']): skip['title']+=1; continue
        key = re.sub(r'\W+', '', f['title'].lower())
        if link in items or key in seen_titles: skip['dup']+=1; continue
        a = {'url': link, 'title': f['title'], 'outlet': ALLOW[d], 'domain': d, 'date': parse_date(f['pub']), 'image': f.get('img'), 'author': None,
             'added': dt.date.today().isoformat()}
        a = enrich(a)
        if not MUST.search(a['title']): continue
        items[a['url']] = a; seen_titles.add(key); added += 1
        log('mới:', a['date'], a['outlet'], a['title'])
        time.sleep(1)
    lst = sorted(items.values(), key=lambda x: (x.get('date') or '0000', x.get('added') or '0000'), reverse=True)
    data = {'updated': dt.datetime.now(dt.timezone(dt.timedelta(hours=7))).isoformat(timespec='minutes'), 'items': lst}
    json.dump(data, open(OUT, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    log(f'xong: {len(lst)} bài, thêm {added}, bỏ {skip}')
    open(ROOT + '/data/press-scan.log', 'w', encoding='utf-8').write(data['updated'] + '\n' + '\n'.join(LOG[-80:]) + '\n')

if __name__ == '__main__':
    main()
