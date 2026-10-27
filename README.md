# ubo.vn

Website thông tin độc lập về núi U Bò và dự án Quần thể du lịch sinh thái, nghỉ dưỡng và vui chơi giải trí núi U Bò – hồ Thác Chuối (Quảng Trị).

## Cấu trúc

| Đường dẫn | Nội dung |
|---|---|
| `index.html` | Trang chủ ubo.vn (một file, không cần máy chủ) |
| `3d/index.html` | Sa bàn 3D tương tác: địa hình thật cắt lớp 100 m, tách lớp, cáp treo, 7 phân khu, trình chiếu tự động |
| `assets/logo/` | Logo ubo.vn (SVG màu, SVG trắng, PDF gốc) |
| `tools/` | Bản mẫu và dữ liệu để dựng lại sa bàn 3D |

## Nhận diện

- Xanh `#0147C1` · Đỏ cam `#FF412B` · Nền đêm `#061A45`
- Font: SVN-Branding (Black 900, Bold 700, Medium 500, Light 300), nhúng sẵn dạng WOFF2 trong HTML, đã cắt chỉ giữ ký tự tiếng Việt

## Đưa lên hosting

Tải toàn bộ thư mục lên `public_html` (giữ nguyên cấu trúc). Trang chủ nhúng sa bàn qua `<iframe src="3d/">`; sa bàn chạy riêng tại `ubo.vn/3d/`.

Sa bàn tải thư viện Three.js 0.160.0 và d3-contour 4.0.2 từ cdn.jsdelivr.net, nên trình duyệt cần có mạng.

## Sửa sa bàn 3D

1. Sửa `tools/sa-ban-template.html` (giao diện, phân khu, kịch bản trình chiếu ở mảng `STEPS`).
2. Chạy `python3 tools/build.py` để tạo lại `3d/index.html`.

Dữ liệu trong `tools/data/`:

- `dem.json`: lưới độ cao 220 × 150 (SRTM qua AWS Terrain Tiles, zoom 13), vùng 106.355–106.525°E, 17.385–17.495°N
- `geo.json`: mặt nạ hồ Thác Chuối (lấy từ Google Maps), tuyến QL15 và ĐT563/QL9E, vị trí ga dưới cáp treo
- `fonts.css`: font SVN-Branding dạng base64

## Nguồn số liệu

- [Báo Đầu tư – Phê duyệt quy hoạch chi tiết](https://baodautu.vn/quang-tri-phe-duyet-quy-hoach-chi-tiet-du-an-nui-u-bo-ho-thac-chuoi-d725073.html)
- [VietnamPlus – Dự án U Bò-Thác Chuối](https://www.vietnamplus.vn/du-an-u-bo-thac-chuoi-ngon-co-dong-luc-moi-cua-du-lich-quang-tri-post1138843.vnp)
- [Tiền Phong – U Bò mây phủ, Thác Chuối soi trời](https://tienphong.vn/u-bo-may-phu-thac-chuoi-soi-troi-post1887166.tpo)
- [VnEconomy – Quảng Trị 9 tháng 2026](https://vneconomy.vn/quang-tri-tang-truong-grdp-842-sau-9-thang.htm)

Vị trí phân khu, tuyến cáp và khối công trình trên sa bàn là minh hoạ, phỏng theo sơ đồ đã công bố trên báo chí, không phải tài liệu chính thức của chủ đầu tư.
