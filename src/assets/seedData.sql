CREATE TABLE IF NOT EXISTS product (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type TEXT,
  purchaseDate TEXT,
  expiringDate TEXT,
  model TEXT,
  img TEXT);

INSERT or IGNORE INTO product (id, type, purchaseDate, expiringDate, model, img) VALUES (1, 'Keyboard', '10th April of 2021', '10th April of 2023', 'Msi Kraken', 'https://static.pcdiga.com/media/catalog/product/cache/7800e686cb8ccc75494e29411e232323/p/r/product-p011441-4010.jpg');
INSERT or IGNORE INTO product (id, type, purchaseDate, expiringDate, model, img) VALUES (2, 'Phone', '10th April of 2021', '10th April of 2023', 'Msi Kraken', 'https://static.pcdiga.com/media/catalog/product/cache/7800e686cb8ccc75494e29411e232323/1/_/1_292_8.jpg');
INSERT or IGNORE INTO product (id, type, purchaseDate, expiringDate, model, img) VALUES (3, 'Tv', '10th April of 2021', '10th April of 2023', 'Msi Kraken', 'https://static.pcdiga.com/media/catalog/product/cache/7800e686cb8ccc75494e29411e232323/k/d/kd55xh80_4548736113770.jpg');
INSERT or IGNORE INTO product (id, type, purchaseDate, expiringDate, model, img) VALUES (4, 'Laptop', '10th April of 2021', '10th April of 2023', 'Msi Kraken', 'https://static.pcdiga.com/media/catalog/product/cache/7800e686cb8ccc75494e29411e232323/1/2/1235342.jpg');
