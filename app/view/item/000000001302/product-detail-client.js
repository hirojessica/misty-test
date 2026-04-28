"use client";

import { useEffect, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const publicAsset = (path) => `${basePath}${path}`;

const navGroups = [
  {
    label: "FEATURE",
    children: [
      { label: "新作", href: "/view/category/NEW" },
      { label: "ネックレス・ペンダント", href: "/view/category/necklace_pendant" },
      { label: "オンライン限定", href: "/view/category/online" },
      { label: "キャッチイヤリング", href: "/view/category/catchearring" },
      { label: "コンビネーション", href: "/view/category/combination" },
    ],
  },
  {
    label: "CATEGORY",
    children: [
      { label: "すべてのアイテム", href: "/view/category/all-items" },
      { label: "イヤーカフ", href: "/view/category/earcuff" },
      { label: "キャッチイヤリング", href: "/view/category/catchearring" },
      { label: "ネジバネイヤリング", href: "/view/category/screwearring" },
      { label: "キャッチレスピアス", href: "/view/category/ct34" },
      { label: "ピアス", href: "/view/category/pierce" },
      { label: "イヤーチャーム", href: "/view/category/earcharm" },
      { label: "ネックレス・ペンダント", href: "/view/category/necklace_pendant" },
      { label: "リング", href: "/view/category/ring" },
      { label: "バングル・ブレスレット", href: "/view/category/bangle_bracelet" },
    ],
  },
  {
    label: "MATERIAL",
    children: [
      { label: "シルバーカラー", href: "/view/category/silver" },
      { label: "ゴールドカラー", href: "/view/category/gold" },
      { label: "真鍮", href: "/view/category/brass" },
      { label: "パール", href: "/view/category/pearl" },
      { label: "クリアストーン", href: "/view/category/clearstone" },
      { label: "コンビネーション", href: "/view/category/combination" },
      { label: "天然石", href: "/view/category/gemstone" },
      { label: "K10ゴールド", href: "/view/category/K10" },
      { label: "K18ゴールド", href: "/view/category/K18" },
      { label: "SV999", href: "/view/category/SV999" },
    ],
  },
  {
    label: "BRANDS",
    children: [
      { label: "MISTY", href: "/view/category/MISTY" },
      { label: "AYAMI Jewelry", href: "/view/category/AYAMI_Jewelry" },
      { label: "Cloche", href: "/view/category/Cloche" },
      { label: "Brand Story", href: "/view/page/story" },
    ],
  },
  { label: "STORE", href: "/view/page/shop_list" },
  { label: "TOPICS", href: "https://misty-collection.co.jp/blog/" },
  {
    label: "GUIDE",
    children: [
      { label: "SHOPPING GUIDE", href: "/view/guide" },
      { label: "JEWELRY CARE", href: "/view/page/materials" },
    ],
  },
];

const footerGroups = [
  {
    title: "ITEM",
    links: [
      { label: "新作", href: "/view/category/NEW" },
      { label: "オンライン限定", href: "/view/category/online" },
      { label: "すべてのアイテム", href: "/view/category/all-items" },
      { label: "イヤーカフ", href: "/view/category/earcuff" },
      { label: "キャッチイヤリング", href: "/view/category/catchearring" },
      { label: "ネックレス・ペンダント", href: "/view/category/necklace_pendant" },
      { label: "リング", href: "/view/category/ring" },
      { label: "バングル・ブレスレット", href: "/view/category/bangle_bracelet" },
    ],
  },
  {
    title: "MATERIAL",
    links: [
      { label: "シルバーカラー", href: "/view/category/silver" },
      { label: "ゴールドカラー", href: "/view/category/gold" },
      { label: "真鍮", href: "/view/category/brass" },
      { label: "パール", href: "/view/category/pearl" },
      { label: "クリアストーン", href: "/view/category/clearstone" },
      { label: "コンビネーション", href: "/view/category/combination" },
      { label: "天然石", href: "/view/category/gemstone" },
    ],
  },
  {
    title: "BRANDS",
    links: [
      { label: "MISTY", href: "/view/category/MISTY" },
      { label: "AYAMI Jewelry", href: "/view/category/AYAMI_Jewelry" },
      { label: "Cloche", href: "/view/category/Cloche" },
      { label: "BRAND STORY", href: "/view/page/story" },
    ],
  },
  {
    title: "INFORMATION",
    links: [
      { label: "新規会員登録", href: "/view/page/membership" },
      { label: "マイページ", href: "/view/member/mypage" },
      { label: "お問い合わせ", href: "/shop/enq202501231" },
      { label: "ブランド＆ショップリスト", href: "/view/page/shop_list" },
      { label: "会社概要", href: "/view/company" },
    ],
  },
  {
    title: "SHOPPING GUIDE",
    links: [
      { label: "ご注文の流れ", href: "/view/guide#guide1" },
      { label: "送料とお支払いについて", href: "/view/guide#guide2" },
      { label: "商品について", href: "/view/page/story" },
      { label: "プライバシーポリシー", href: "/view/policy" },
      { label: "特定商取引に関する記載", href: "/view/contract" },
      { label: "ログイン", href: "/view/member/login" },
    ],
  },
];

const footerCompactLinks = [
  { label: "NEW", href: "/view/category/NEW" },
  { label: "ITEM", href: "/view/category/all-items" },
  { label: "GUIDE", href: "/view/guide" },
  { label: "CONTACT", href: "/shop/enq202501231" },
];

const product = {
  name: "プレシャスタイムイヤーカフ",
  code: "CE-B261803",
  price: "¥20,900",
  tax: "（税込）",
  point: "209ポイント",
  brand: "MISTY",
  category: "イヤーカフ",
  officialUrl: "https://misty-collection.co.jp/view/item/000000001302",
  lead:
    "鏡面にまで磨き上げた艶やかな質感と、石の周りに入れたマルチシェイプの彫りが、横顔に静かな光を添えるイヤーカフ。",
  story:
    "シンプルなフォルムでありながら、細部にさりげないこだわりが光るアイテム。大人のスタイルに上品な存在感を与え、身に着けると背筋が伸びて、自信を与えてくれるようなジュエリーです。",
  images: [
    "https://makeshop-multi-images.akamaized.net/MISTYCOEC/shopimages/02/13/1_000000001302.jpg?1775407552",
    "https://makeshop-multi-images.akamaized.net/MISTYCOEC/shopimages/02/13/2_000000001302.jpg?1775407552",
    "https://makeshop-multi-images.akamaized.net/MISTYCOEC/shopimages/02/13/3_000000001302.jpg?1775407552",
    "https://makeshop-multi-images.akamaized.net/MISTYCOEC/shopimages/02/13/4_000000001302.jpg?1775407552",
  ],
  specs: [
    ["アイテム", "イヤーカフ"],
    ["ブランド", "MISTY"],
    ["素材", "真鍮（ロジウムプレーティング）、キュービックジルコニア"],
    ["サイズ", "約 直径1.8cm / 幅 約0.5cm"],
    ["原産国", "日本"],
  ],
};

const wrappingOptions = ["簡易包装", "ギフト包装"];

const trustItems = [
  { title: "全国送料無料", text: "送料込みで総額が分かりやすい" },
  { title: "ギフト対応", text: "大切な人への贈り物にも" },
  { title: "日本製", text: "細部まで丁寧に仕立てたジュエリー" },
];

const relatedProducts = [
  {
    name: "プレシャスタイムフープピアス",
    price: "¥36,300",
    href: "/view/item/000000001301",
    image: "https://makeshop-multi-images.akamaized.net/MISTYCOEC/itemimages/000000001301_QKNgW57.jpg",
  },
  {
    name: "プレシャスタイムドロップチャーム",
    price: "¥26,400",
    href: "/view/item/000000001300",
    image: "https://makeshop-multi-images.akamaized.net/MISTYCOEC/itemimages/000000001300_Hv7H48W.jpg",
  },
  {
    name: "プレシャスタイムドロップペンダント",
    price: "¥23,100",
    href: "/view/item/000000001299",
    image: "https://makeshop-multi-images.akamaized.net/MISTYCOEC/itemimages/000000001299_UgPap86.jpg",
  },
];

function SiteHeader({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="topbar topbar-overlay product-topbar">
      <a className="brand-lockup" href={publicAsset("/")} aria-label="MISTY COLLECTION home">
        <span className="brand-mark">MISTY</span>
        <span className="brand-sub">COLLECTION</span>
      </a>
      <button
        className={`mobile-menu-toggle${mobileMenuOpen ? " is-open" : ""}`}
        type="button"
        aria-controls="product-mobile-menu-panel"
        aria-expanded={mobileMenuOpen}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMobileMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className="nav-pill nav-pill-overlay" aria-label="Primary">
        <ul className="nav-menu-list">
          {navGroups.map((group) => (
            <li className="nav-menu-item" key={group.label}>
              {group.href ? (
                <a
                  className="nav-menu-trigger nav-menu-link"
                  href={group.href}
                  rel={group.href.startsWith("http") ? "noreferrer" : undefined}
                  target={group.href.startsWith("http") ? "_blank" : undefined}
                >
                  {group.label}
                </a>
              ) : (
                <>
                  <span className="nav-menu-trigger">{group.label}</span>
                  <div className="nav-dropdown" role="group" aria-label={group.label}>
                    <ul className="nav-dropdown-list">
                      {group.children.map((item) => (
                        <li key={`${group.label}-${item.label}`}>
                          <a className="nav-dropdown-link" href={item.href}>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <ul className="nav-icons" aria-label="Utility navigation">
        <li className="nav-icon-item">
          <a className="nav-icon-link" href="/view/member/login" aria-label="Login">
            <img alt="Login" className="nav-icon-image" src="https://gigaplus.makeshop.jp/MISTYCOEC/icon_login.svg" />
          </a>
        </li>
        <li className="nav-icon-item">
          <a className="nav-icon-link" href="/view/member/favorite" aria-label="Favorite">
            <img alt="Favorite" className="nav-icon-image" src="https://gigaplus.makeshop.jp/MISTYCOEC/icon_favorite.svg" />
          </a>
        </li>
        <li className="nav-icon-item">
          <a className="nav-icon-link" href="/view/cart" aria-label="Shopping Cart">
            <img alt="Shopping Cart" className="nav-icon-image" src="https://gigaplus.makeshop.jp/MISTYCOEC/icon_cart.svg" />
          </a>
        </li>
        <li className="nav-icon-item">
          <button className="nav-icon-link nav-icon-button" aria-label="Search" type="button">
            <img alt="Search" className="nav-icon-image" src="https://gigaplus.makeshop.jp/MISTYCOEC/icon_search.svg" />
          </button>
        </li>
      </ul>
      <div
        className={`mobile-menu-panel${mobileMenuOpen ? " is-open" : ""}`}
        id="product-mobile-menu-panel"
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="mobile-menu-nav" aria-label="Mobile primary">
          {navGroups.map((group) => (
            <div className="mobile-menu-group" key={group.label}>
              {group.href ? (
                <a
                  className="mobile-menu-heading mobile-menu-heading-link"
                  href={group.href}
                  rel={group.href.startsWith("http") ? "noreferrer" : undefined}
                  target={group.href.startsWith("http") ? "_blank" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {group.label}
                </a>
              ) : (
                <>
                  <p className="mobile-menu-heading">{group.label}</p>
                  <div className="mobile-menu-links">
                    {group.children.map((item) => (
                      <a
                        className="mobile-menu-link"
                        href={item.href}
                        key={`${group.label}-${item.label}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </nav>
        <div className="mobile-menu-utility" aria-label="Mobile utility">
          <a href="/view/member/login" onClick={() => setMobileMenuOpen(false)}>
            Login
          </a>
          <a href="/view/member/favorite" onClick={() => setMobileMenuOpen(false)}>
            Favorite
          </a>
          <a href="/view/cart" onClick={() => setMobileMenuOpen(false)}>
            Cart
          </a>
          <button type="button" onClick={() => setMobileMenuOpen(false)}>
            Search
          </button>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer product-footer">
      <div className="footer-logo-wrap">
        <a className="footer-logo-link footer-brand-lockup" href={publicAsset("/")}>
          <span className="footer-brand-mark">MISTY</span>
          <span className="footer-brand-sub">COLLECTION</span>
        </a>
      </div>

      <nav className="footer-mobile-nav" aria-label="Footer quick links">
        {footerCompactLinks.map((link) => (
          <a className="footer-mobile-link" href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="footer-menu">
        {footerGroups.map((group) => (
          <section className="footer-menu-block" key={group.title}>
            <h2 className="footer-menu-title">{group.title}</h2>
            <ul className="footer-menu-list">
              {group.links.map((link) => (
                <li className="footer-menu-item" key={`${group.title}-${link.label}`}>
                  <a className="footer-menu-link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="footer-copyright">© MISTY COLLECTION All Rights Reserved.</p>
    </footer>
  );
}

export default function ProductDetailClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [wrapping, setWrapping] = useState(wrappingOptions[0]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      return;
    }
    const previousHtml = document.documentElement.style.overflow;
    const previousBody = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = previousHtml;
      document.body.style.overflow = previousBody;
    };
  }, [mobileMenuOpen]);

  return (
    <main className="page-shell product-detail-shell product-detail-redesign">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <SiteHeader mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <section className="pdp-hero pdp-commerce-hero" id="top">
        <div className="pdp-visual-stage" aria-label="Product images">
          <div className="pdp-gallery-frame">
            <div className="pdp-main-image-wrap">
              <img alt={product.name} className="pdp-main-image" src={product.images[selectedImage]} />
            </div>
            <div className="pdp-thumbnail-row">
              {product.images.map((image, index) => (
                <button
                  aria-label={`画像 ${index + 1} を表示`}
                  aria-pressed={selectedImage === index}
                  className={`pdp-thumbnail${selectedImage === index ? " is-active" : ""}`}
                  key={image}
                  onClick={() => setSelectedImage(index)}
                  type="button"
                >
                  <img alt="" src={image} />
                </button>
              ))}
            </div>
          </div>
          <div className="pdp-material-note">
            <span>Mirror polish</span>
            <p>艶のあるロジウムカラーが、耳元に細い光の輪郭を作ります。</p>
          </div>
        </div>

        <aside className="pdp-purchase pdp-buy-panel" id="purchase-panel" aria-label="Purchase panel">
          <p className="pdp-kicker">Precious Time / Ear Cuff</p>
          <h1>{product.name}</h1>
          <p className="pdp-code">商品番号 {product.code}</p>
          <p className="pdp-lead">{product.lead}</p>

          <div className="pdp-price-row">
            <span>{product.price}</span>
            <small>{product.tax}</small>
          </div>

          <a className="pdp-primary-cta" href={product.officialUrl}>
            カートに入れる
          </a>

          <div className="pdp-total-card">
            <span>配送込み目安</span>
            <strong>{product.price}</strong>
            <small>全国送料無料 / {product.point}</small>
          </div>

          <div className="pdp-option-grid">
            <fieldset className="pdp-field pdp-choice-field">
              <legend>包装の仕方</legend>
              <div className="pdp-choice-row">
                {wrappingOptions.map((option) => (
                  <button
                    className={wrapping === option ? "is-active" : ""}
                    key={option}
                    onClick={() => setWrapping(option)}
                    type="button"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="pdp-field">
              <span>数量</span>
              <div className="pdp-quantity">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>
                  −
                </button>
                <output>{quantity}</output>
                <button type="button" onClick={() => setQuantity((value) => value + 1)}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="pdp-secondary-actions">
            <a href="/view/member/login">お気に入りに追加</a>
            <a href="#spec">商品情報を見る</a>
          </div>

          <div className="pdp-trust-grid">
            {trustItems.map((item) => (
              <span key={item.title}>
                <strong>{item.title}</strong>
                <small>{item.text}</small>
              </span>
            ))}
          </div>
        </aside>
      </section>

      <section className="pdp-proof-strip" aria-label="Purchase confidence">
        <div>
          <span>Shipping</span>
          <strong>全国送料無料</strong>
        </div>
        <div>
          <span>Gift</span>
          <strong>{wrapping}</strong>
        </div>
        <div>
          <span>Support</span>
          <strong>アフターサービス対応</strong>
        </div>
      </section>

      <section className="pdp-story-section">
        <div className="pdp-story-copy">
          <p className="pdp-section-kicker">How it wears</p>
          <h2>横顔に、静かな輪郭を足す。</h2>
        </div>
        <p className="pdp-story-text">{product.story}</p>
      </section>

      <section className="pdp-detail-grid" id="spec">
        <article className="pdp-spec-card">
          <p className="pdp-section-kicker">Product details</p>
          <h2>商品情報</h2>
          <dl className="pdp-spec-list">
            {product.specs.map(([term, detail]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </article>
        <article className="pdp-care-card">
          <p className="pdp-section-kicker">Care</p>
          <h2>購入前に迷いやすいこと。</h2>
          <div className="pdp-care-list">
            <p>片耳用のイヤーカフです。耳元に引っかけるだけで、ピアスホールがない方にも合わせやすい仕様です。</p>
            <p>ロジウムプレーティングは汗や水分を拭き取って保管すると、美しい艶を長く楽しめます。</p>
          </div>
          <a href="/view/page/materials">JEWELRY CARE</a>
        </article>
      </section>

      <section className="pdp-related-section">
        <div className="section-heading-wrap">
          <h2 className="section-heading">PAIR WITH</h2>
        </div>
        <div className="pdp-related-grid">
          {relatedProducts.map((item) => (
            <article className="catalog-card" key={item.href}>
              <a className="catalog-link" href={item.href}>
                <div className="catalog-image-wrap">
                  <img alt={item.name} className="catalog-image" src={item.image} />
                </div>
                <div className="catalog-name">{item.name}</div>
                <div className="catalog-price">
                  {item.price}
                  <span>（税込）</span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <div className="pdp-mobile-sticky">
        <div>
          <span>{product.name}</span>
          <strong>{product.price}</strong>
        </div>
        <a href={product.officialUrl}>購入する</a>
      </div>

      <SiteFooter />
    </main>
  );
}
