<?php
require_once  __DIR__ .  '/include/db_connect.php';
$stmt = $dbh->query('SELECT * FROM `product`');
$productList = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/helper.css">
    <link rel="stylesheet" href="css/style.css">
    <script type="text/javascript" src="/js/jquery-1.8.2.min.js"></script>
    <script type="text/javascript" src="/js/jcarousellite_1.0.1.js"></script>
    <script type="text/javascript" src="/js/shop-script.js"></script>
    <title>Интернет-магазин цифровой техники </title>
</head>
<body>
<div id="block-body">
    <?php require_once __DIR__ . '/include/block-header.php'; ?>

    <div id="block-right">
        <?php
        require_once  __DIR__ . '/include/block-category.php';
        require_once  __DIR__ . '/include/block-parameter.php';
        require_once  __DIR__ . '/include/block-news.php';
        ?>
    </div>

    <div id="block-content">
        <div id="block-sorting">
            <p id="nav-breadcrumbs" class="padding-left-11">
                <a href="/index.php">Главная страница</a>\
                <span>Все товары</span>
            </p>
            <ul id="option-list">
                <li>Вид:</li>
                <li><img id="style-grid" src="/img/icon-grid.png" alt="вид"></li>
                <li><img id="style-list" src="/img/icon-list.png" alt="вид"></li>
                <li>Сортировка:</li>
                <li>
                    <a href="" id="select-sort">Без сортировки</a>
                    <ul id="sorting-list">
                        <li><a href="">От дешевых к дорогим</a></li>
                        <li><a href="">От дорогих к дешевым</a></li>
                        <li><a href="">Популярное</a></li>
                        <li><a href="">Новинки</a></li>
                        <li><a href="">От А до Я</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <?php if (count($productList)): ?>
            <ul>
                <?php foreach ($productList as $product): ?>
                    <li class="block-product">
                        <div class="block-images-grid">
                            <img src="/uploads_image/<?= $product['image'] ?>" />
                        </div>

                        <p class="style-title-grid">
                            <a class="product-title-link"><?= $product['title'] ?></a>
                        </p>

                        <ul class="reviews-and-counts-grid">
                            <li><img src="/img/comment-icon.png"></li>
                            <li><img src="/img/eye-icon.png"></li>
                        </ul>

                        <a class="add-cart-style-grid"></a>

                        <p class="style-price-grid">
                            <strong></strong>
                            руб.
                        </p>

                        <div class="mini-features">
                            <?= $product['mini_features'] ?>
                        </div>
                    </li>
                <?php endforeach; ?>
            </ul>
        <?php endif; ?>

    <?php require_once __DIR__ . '/include/block-footer.php'; ?>
</div>
</body>
</html>
