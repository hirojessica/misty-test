"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

const topics = [
  {
    title: "【Cloche】名古屋カスタマイズストーンフェア",
    href: "https://misty-collection.co.jp/blog/?p=7232",
    image: "https://sararasa.jp/wp-content/uploads/2026/04/20260422アイキャッチ_1.jpg",
    category: "Event",
    date: "2026.04.22",
  },
  {
    title: "GW FAIR！",
    href: "https://misty-collection.co.jp/blog/?p=7208",
    image: "https://sararasa.jp/wp-content/uploads/2026/04/20260417アイキャッチ.jpg",
    category: "Fair",
    date: "2026.04.17",
  },
  {
    title: "ゴールデンウィーク休業期間のお知らせ",
    href: "https://misty-collection.co.jp/blog/?p=7177",
    image: "https://sararasa.jp/wp-content/uploads/2026/04/info画像.jpg",
    category: "Info",
    date: "2026.04.16",
  },
  {
    title: "【SARARTH】伊勢丹立川POP UP",
    href: "https://misty-collection.co.jp/blog/?p=7226",
    image: "https://sararasa.jp/wp-content/uploads/2026/04/20260420アイキャッチ.jpg",
    category: "Pop up",
    date: "2026.04.20",
  },
  {
    title: "〖AYAMI Jewelry〗横浜高島屋POP UP",
    href: "https://misty-collection.co.jp/blog/?p=7154",
    image: "https://sararasa.jp/wp-content/uploads/2026/03/AJ_yokotaka_IGAD_202603-800x1067.jpg",
    category: "Pop up",
    date: "2026.03.26",
  },
  {
    title: "2BUY 10% OFF！",
    href: "https://misty-collection.co.jp/blog/?p=7133",
    image: "https://sararasa.jp/wp-content/uploads/2026/03/20260311_1-800x915.jpg",
    category: "Campaign",
    date: "2026.03.11",
  },
];

const newArrivals = [
  {
    name: "プレシャスタイムイヤーカフ",
    href: "/view/item/000000001302",
    image: "https://makeshop-multi-images.akamaized.net/MISTYCOEC/itemimages/000000001302_prEq7TG.jpg",
    price: "¥20,900",
  },
  {
    name: "プレシャスタイムフープピアス",
    href: "/view/item/000000001301",
    image: "https://makeshop-multi-images.akamaized.net/MISTYCOEC/itemimages/000000001301_QKNgW57.jpg",
    price: "¥36,300",
  },
  {
    name: "プレシャスタイムドロップチャーム",
    href: "/view/item/000000001300",
    image: "https://makeshop-multi-images.akamaized.net/MISTYCOEC/itemimages/000000001300_Hv7H48W.jpg",
    price: "¥26,400",
  },
  {
    name: "プレシャスタイムドロップペンダント",
    href: "/view/item/000000001299",
    image: "https://makeshop-multi-images.akamaized.net/MISTYCOEC/itemimages/000000001299_UgPap86.jpg",
    price: "¥23,100",
  },
  {
    name: "Thorny Ring",
    href: "/view/item/000000001298",
    image: "https://makeshop-multi-images.akamaized.net/MISTYCOEC/itemimages/000000001298_8VqWt0o.jpg",
    price: "¥35,200",
  },
  {
    name: "メタルカーブイヤリング",
    href: "/view/item/000000001297",
    image: "https://makeshop-multi-images.akamaized.net/MISTYCOEC/itemimages/000000001297_552mNDz.jpg",
    price: "¥24,200",
  },
];

const instagramPosts = [
  {
    href: "https://www.instagram.com/p/DXY7IviCOc8/",
    image:
      "https://scontent-nrt1-1.cdninstagram.com/v/t51.82787-15/670276369_18523642288077017_3863871431172304438_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=SUFaj5X76CkQ7kNvwHgZk7c&_nc_oc=AdofwfHkx0gE_1moTNuUKiEcappgQUsibw-t_4CiNG-k6nrTCjZhE0YgEe-35uEoEmrkR6xJpNhY6exPGHr46gEf&_nc_zt=23&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=AL-3X8kEAAAA&_nc_gid=gCUCjdDrB7ONhPqCN5v2pw&oh=00_Af3LCEAoA4ZkoiEuqfLvE9dMAXfxUfybto_JEPjbUxcLug&oe=69EFEDAA",
  },
  {
    href: "https://www.instagram.com/p/DXTKfEmEjDf/",
    image:
      "https://scontent-nrt6-1.cdninstagram.com/v/t51.82787-15/671014913_18523203403077017_6936906243796685986_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=G8ZGJI1UEEgQ7kNvwHIjMrZ&_nc_oc=Adq8-6_MhcWexnrict0467xdgoP-Flz5VRcwDBGtSTF2h1HjGvGf-sXUmq8APuQtc9LbIw9e72wrCYGtjawFXVUE&_nc_zt=23&_nc_ht=scontent-nrt6-1.cdninstagram.com&edm=AL-3X8kEAAAA&_nc_gid=gCUCjdDrB7ONhPqCN5v2pw&oh=00_Af2f606uL4vsTow5O1obfXdxzNedZCisFrVXUb-Wz3b_WQ&oe=69EFFFAE",
  },
  {
    href: "https://www.instagram.com/p/DWip8UvCLm2/",
    image:
      "https://scontent-nrt1-2.cdninstagram.com/v/t51.82787-15/657245454_18519555649077017_4062339447126545915_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=AuaL3TyayLwQ7kNvwFjnGQR&_nc_oc=AdpGbCzLUPIo2nyaNiyp_0DSRsYwLq5PmMGxetuEK2R91CVbTxgfbLu1QJI7jev_IOs3wyuIUTN5ZnX0zksPA78u&_nc_zt=23&_nc_ht=scontent-nrt1-2.cdninstagram.com&edm=AL-3X8kEAAAA&_nc_gid=gCUCjdDrB7ONhPqCN5v2pw&oh=00_Af1hfs7_uYK1Vov3XtJeHhYrb7WY1_WCIb8WZgcxUY_wsQ&oe=69EFF70C",
  },
  {
    href: "https://www.instagram.com/p/DWVjk0iGJgf/",
    image:
      "https://scontent-nrt6-1.cdninstagram.com/v/t51.82787-15/656630404_18517917613077017_6828341752524342868_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=iQ0MXgGcnTgQ7kNvwGbDE3M&_nc_oc=Adqlo3ylQkuTtHdevmWFBNnG1J7iP54kKRnBQlWTDYAGKIXl9exSb42h_VpN8Yk0OsG4g9oOhkrznJM8yYGLctmD&_nc_zt=23&_nc_ht=scontent-nrt6-1.cdninstagram.com&edm=AL-3X8kEAAAA&_nc_gid=gCUCjdDrB7ONhPqCN5v2pw&oh=00_Af1s3kwwhuRwNO_Y7NmFjzk85AJWAz_LzPUurphzhG_Edw&oe=69EFD389",
  },
  {
    href: "https://www.instagram.com/p/DWQtzdMiPhG/",
    image:
      "https://scontent-nrt6-1.cdninstagram.com/v/t51.82787-15/656091478_18517916338077017_4810906065757175647_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=gvj53dcstKsQ7kNvwFdZE0y&_nc_oc=AdoehSmdvx3gUrmISBGa2NnBK2LAIXL3qc4fM_8MLsfZretHMixTLU2QbqOBltcvMn2vml6AOv2rvX6RirdmfCKg&_nc_zt=23&_nc_ht=scontent-nrt6-1.cdninstagram.com&edm=AL-3X8kEAAAA&_nc_gid=gCUCjdDrB7ONhPqCN5v2pw&oh=00_Af1QhQvpBaL2B0TWUui5mVDTTUEa_RPsFK2y0y0h12a1aw&oe=69EFE8A9",
  },
  {
    href: "https://www.instagram.com/p/DWD486PiNku/",
    image:
      "https://scontent-nrt6-1.cdninstagram.com/v/t51.82787-15/652124893_18516229915077017_2309976776741352420_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=eY0I9RSsc0sQ7kNvwEVitdb&_nc_oc=AdoDuAO9ty38oUZE4ANEKiW_S9F7WxoAZ2fF_SgEYxDmrt7i1DqBWQU0AM1ezKG4b6-ZMIGxnyhjXGQ_F8Aon-_u&_nc_zt=23&_nc_ht=scontent-nrt6-1.cdninstagram.com&edm=AL-3X8kEAAAA&_nc_gid=gCUCjdDrB7ONhPqCN5v2pw&oh=00_Af3QDgXqBXyCOqmA_DI-qmOBKyvLd_guZf0lt1eAHgJIXw&oe=69EFDFEE",
  },
];

const rankingItems = [
  {
    name: "トライアングルメタルパールペンダント",
    href: "/view/item/000000001289",
    image: "https://makeshop-multi-images.akamaized.net/MISTYCOEC/itemimages/000000001289_JXAdp7Y.jpg",
    price: "¥17,600",
    soldOut: true,
  },
  {
    name: "ジュエリーキャッチイヤリング M",
    href: "/view/item/000000000027",
    image: "https://makeshop-multi-images.akamaized.net/MISTYCOEC/itemimages/000000000027_LlKq0cP.jpg",
    price: "¥31,900",
  },
  {
    name: "【オンライン限定】キャッチイヤリング ティアドロップ",
    href: "/view/item/000000000758",
    image: "https://makeshop-multi-images.akamaized.net/MISTYCOEC/itemimages/000000000758_9qPLjg3.jpg",
    price: "¥22,000",
  },
  {
    name: "【オンライン限定】キャッチイヤリング コンビS",
    href: "/view/item/000000000816",
    image: "https://makeshop-multi-images.akamaized.net/MISTYCOEC/itemimages/000000000816_ok9uK4O.jpg",
    price: "¥26,400",
    soldOut: true,
  },
  {
    name: "Pave Mini Hoop Earrings",
    href: "/view/item/000000000129",
    image: "https://makeshop-multi-images.akamaized.net/MISTYCOEC/itemimages/000000000129_1Hjm7i1.jpg",
    price: "¥33,000",
  },
];

const pickupItems = [
  {
    name: "Pave Mini Hoop Earrings",
    href: "/view/item/000000000129",
    image: "https://makeshop-multi-images.akamaized.net/MISTYCOEC/itemimages/000000000129_1Hjm7i1.jpg",
    price: "¥33,000",
  },
  {
    name: "Safari de Nuit Earrings",
    href: "/view/item/000000000127",
    image: "https://makeshop-multi-images.akamaized.net/MISTYCOEC/itemimages/000000000127_fT56iXT.jpg",
    price: "¥39,600",
  },
  {
    name: "Triple Pave Hoop Earrings",
    href: "/view/item/000000000462",
    image: "https://makeshop-multi-images.akamaized.net/MISTYCOEC/itemimages/000000000462_ls2787r.jpg",
    price: "¥59,400",
  },
  {
    name: "ウェービーキャッチイヤリング",
    href: "/view/item/000000000021",
    image: "https://makeshop-multi-images.akamaized.net/MISTYCOEC/itemimages/000000000021_oBz7myT.jpg",
    price: "¥34,100",
  },
  {
    name: "ジュエリーキャッチイヤリング S",
    href: "/view/item/000000000029",
    image: "https://makeshop-multi-images.akamaized.net/MISTYCOEC/itemimages/000000000029_7zyhah9.jpg",
    price: "¥34,100",
  },
  {
    name: "パールキャッチイヤリング",
    href: "/view/item/000000000033",
    image: "https://makeshop-multi-images.akamaized.net/MISTYCOEC/itemimages/000000000033_OfiMKEp.jpg",
    price: "¥28,600",
  },
];

const checkedItems = [
  {
    name: "プレシャスタイムドロップチャーム",
    href: "/view/item/000000001300",
    image: "https://makeshop-multi-images.akamaized.net/MISTYCOEC/itemimages/000000001300_Hv7H48W.jpg",
    price: "¥26,400",
  },
  {
    name: "プレシャスタイムイヤーカフ",
    href: "/view/item/000000001302",
    image: "https://makeshop-multi-images.akamaized.net/MISTYCOEC/itemimages/000000001302_prEq7TG.jpg",
    price: "¥20,900",
  },
  {
    name: "【オンライン限定】キャッチイヤリング フラワーリース",
    href: "/view/item/000000001234",
    image: "https://makeshop-multi-images.akamaized.net/MISTYCOEC/itemimages/000000001234_gY7KQT4.jpg",
    price: "¥22,000",
  },
  {
    name: "メタルカーブイヤリング",
    href: "/view/item/000000001297",
    image: "https://makeshop-multi-images.akamaized.net/MISTYCOEC/itemimages/000000001297_552mNDz.jpg",
    price: "¥24,200",
  },
  {
    name: "Thorny Ring",
    href: "/view/item/000000001298",
    image: "https://makeshop-multi-images.akamaized.net/MISTYCOEC/itemimages/000000001298_8VqWt0o.jpg",
    price: "¥35,200",
  },
];

const concepts = [
  {
    image: "https://gigaplus.makeshop.jp/MISTYCOEC/top/topics_MISTY_EC_toppage_misty_01_202306.png",
    logo: "https://gigaplus.makeshop.jp/MISTYCOEC/top/concept_logo1.png",
    logoAlt: "MISTY",
    body: "シンプルさと普遍的な美しさを追求。その美しさが世代を超えて愛と感動、思い出と絆を紡ぎます。",
    href: "/view/category/MISTY",
    cta: "View all items",
  },
  {
    image: "https://gigaplus.makeshop.jp/MISTYCOEC/top/topics_MISTY_EC_toppage_ayami_01_202306.png",
    logo: "https://gigaplus.makeshop.jp/MISTYCOEC/top/concept_logo2.png",
    logoAlt: "AYAMI Jewelry",
    body: "デザイナー宗形あやみの独創性と、熟練の宝飾職人の精密な手仕事が融合し、一つ一つが美術品のようなジュエリーを創りだしています。",
    href: "/view/category/AYAMI_Jewelry",
    cta: "View all items",
  },
  {
    image: "https://gigaplus.makeshop.jp/MISTYCOEC/top/topics_MISTY_EC_toppage_cloche_01_202306.png",
    logo: "https://gigaplus.makeshop.jp/MISTYCOEC/page/story/logo3.png",
    logoAlt: "Cloche",
    body: "空と海の色、花や木々の色。大自然の鮮やかな色がまるで宝石箱。大自然から恵まれた贈り物。",
    href: "/view/category/Cloche",
    cta: "View all items",
  },
  {
    image: "https://gigaplus.makeshop.jp/MISTYCOEC/top/concept_photo5.png",
    logo: "https://gigaplus.makeshop.jp/MISTYCOEC/page/story/logo4.png",
    logoAlt: "SARARTH",
    body: "PURE SILVER FOR SKIN, PURE LIGHT FOR ALL. 肌に寄り添う光 高硬度ピュアシルバー",
    href: "https://www.sararth.com/",
    cta: "Website/Online Store",
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
    title: "MATERIAL",
    links: [
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

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const publicAsset = (path) => `${basePath}${path}`;

const heroSlides = [
  {
    id: "drop-ear-charm",
    align: "left",
    image: publicAsset("/hero-misty-clean-hd-v6.png"),
    imageAlt: "Model wearing Misty Collection drop charm earrings",
    imagePosition: "62% center",
    titleLines: ["きらめきをひとしずく。", "私らしい時間が、", "動き出す。"],
    body: "光を味方に、毎日をもっと輝かせてくれるジュエリーを。",
    collection: "MISTY COLLECTION 2026 SUMMER",
    product: {
      alt: "Precious time drop charm earring",
      href: "/view/item/000000001300",
      image: publicAsset("/product-drop.webp"),
      imagePosition: "center 22%",
      name: "プレシャスタイムドロップチャーム イヤーチャーム",
      price: "¥26,400（税込）",
    },
    services: ["全国送料無料", "ギフトラッピング無料", "安心のアフターサービス"],
  },
  {
    id: "drop-pendant",
    align: "right",
    image: publicAsset("/hero-misty-pendant.png"),
    imageAlt: "Model wearing Misty Collection drop pendant",
    imagePosition: "center center",
    titleLines: ["光を味方に、", "私らしい時間が動き出す。"],
    body: "毎日の装いにそっと寄り添う、上品なドロップペンダント。",
    collection: "MISTY COLLECTION 2026 SUMMER",
    product: {
      alt: "Precious time drop pendant",
      href: "/view/item/000000001299",
      image: publicAsset("/product-pendant.jpg"),
      imagePosition: "center 18%",
      name: "プレシャスタイムドロップペンダント",
      price: "¥23,100（税込）",
    },
    services: ["全国送料無料", "ギフトラッピング無料", "安心のアフターサービス"],
  },
];

export default function HomePage() {
  const pageRef = useRef(null);
  const newArrivalSectionRef = useRef(null);
  const newArrivalRailRef = useRef(null);
  const topicsSectionRef = useRef(null);
  const topicsRailRef = useRef(null);
  const rankingSectionRef = useRef(null);
  const rankingRailRef = useRef(null);
  const pickupSectionRef = useRef(null);
  const pickupRailRef = useRef(null);
  const checkedSectionRef = useRef(null);
  const checkedRailRef = useRef(null);
  const instagramSectionRef = useRef(null);
  const instagramRailRef = useRef(null);
  const newArrivalDragRef = useRef({
    isDragging: false,
    dragDistance: 0,
    startScrollLeft: 0,
    startX: 0,
    suppressClick: false,
  });
  const productRailDragRef = useRef({
    topics: {
      isDragging: false,
      dragDistance: 0,
      startScrollLeft: 0,
      startX: 0,
      suppressClick: false,
    },
    ranking: {
      isDragging: false,
      dragDistance: 0,
      startScrollLeft: 0,
      startX: 0,
      suppressClick: false,
    },
    pickup: {
      isDragging: false,
      dragDistance: 0,
      startScrollLeft: 0,
      startX: 0,
      suppressClick: false,
    },
    checked: {
      isDragging: false,
      dragDistance: 0,
      startScrollLeft: 0,
      startX: 0,
      suppressClick: false,
    },
    instagram: {
      isDragging: false,
      dragDistance: 0,
      startScrollLeft: 0,
      startX: 0,
      suppressClick: false,
    },
  });
  const heroDragRef = useRef({
    isDragging: false,
    startX: 0,
  });
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const activeHeroSlide = heroSlides[activeHeroIndex];

  useGSAP(
    () => {
      const heroImage = pageRef.current?.querySelector(".hero-slide-image.is-active");
      const heroPanel = pageRef.current?.querySelector(".hero-overlay");

      if (heroImage) {
        gsap.fromTo(
          heroImage,
          { scale: 1.04, yPercent: 2 },
          { scale: 1, yPercent: 0, duration: 1.4, ease: "power3.out" },
        );
      }

      if (heroPanel) {
        gsap.fromTo(
          heroPanel,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.15 },
        );
      }
    },
    { scope: pageRef },
  );

  useEffect(() => {
    const section = newArrivalSectionRef.current;
    const rail = newArrivalRailRef.current;

    if (!section || !rail) {
      return undefined;
    }

    const drag = newArrivalDragRef.current;

    const finishDrag = () => {
      if (!drag.isDragging) {
        return;
      }

      drag.isDragging = false;
      drag.suppressClick = drag.dragDistance > 6;
      section.classList.remove("is-dragging");
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
      document.removeEventListener("mousemove", moveDrag);
      document.removeEventListener("mouseup", finishDrag);
      window.setTimeout(() => {
        drag.suppressClick = false;
      }, 160);
    };

    const moveDrag = (event) => {
      if (!drag.isDragging) {
        return;
      }

      const deltaX = event.clientX - drag.startX;
      drag.dragDistance = Math.max(drag.dragDistance, Math.abs(deltaX));
      rail.scrollLeft = drag.startScrollLeft - deltaX;

      if (drag.dragDistance > 3) {
        event.preventDefault();
      }
    };

    const startDrag = (event) => {
      if (event.button !== 0 || rail.scrollWidth <= rail.clientWidth) {
        return;
      }

      drag.isDragging = true;
      drag.dragDistance = 0;
      drag.startX = event.clientX;
      drag.startScrollLeft = rail.scrollLeft;
      drag.suppressClick = false;
      section.classList.add("is-dragging");
      document.body.style.cursor = "grabbing";
      document.body.style.userSelect = "none";
      document.addEventListener("mousemove", moveDrag, { passive: false });
      document.addEventListener("mouseup", finishDrag);
    };

    const suppressDraggedClick = (event) => {
      if (!drag.suppressClick) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      drag.suppressClick = false;
    };

    const preventNativeDrag = (event) => {
      event.preventDefault();
    };

    section.addEventListener("mousedown", startDrag);
    section.addEventListener("click", suppressDraggedClick, true);
    section.addEventListener("dragstart", preventNativeDrag, true);

    return () => {
      section.removeEventListener("mousedown", startDrag);
      section.removeEventListener("click", suppressDraggedClick, true);
      section.removeEventListener("dragstart", preventNativeDrag, true);
      document.removeEventListener("mousemove", moveDrag);
      document.removeEventListener("mouseup", finishDrag);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, []);

  useEffect(() => {
    const targets = [
      {
        section: topicsSectionRef.current,
        rail: topicsRailRef.current,
        drag: productRailDragRef.current.topics,
      },
      {
        section: rankingSectionRef.current,
        rail: rankingRailRef.current,
        drag: productRailDragRef.current.ranking,
      },
      {
        section: pickupSectionRef.current,
        rail: pickupRailRef.current,
        drag: productRailDragRef.current.pickup,
      },
      {
        section: checkedSectionRef.current,
        rail: checkedRailRef.current,
        drag: productRailDragRef.current.checked,
      },
      {
        section: instagramSectionRef.current,
        rail: instagramRailRef.current,
        drag: productRailDragRef.current.instagram,
      },
    ];

    const cleanups = targets
      .map(({ section, rail, drag }) => {
        if (!section || !rail) {
          return undefined;
        }

        const finishDrag = () => {
          if (!drag.isDragging) {
            return;
          }

          drag.isDragging = false;
          drag.suppressClick = drag.dragDistance > 6;
          section.classList.remove("is-dragging");
          document.body.style.cursor = "";
          document.body.style.userSelect = "";
          document.removeEventListener("mousemove", moveDrag);
          document.removeEventListener("mouseup", finishDrag);
          window.setTimeout(() => {
            drag.suppressClick = false;
          }, 160);
        };

        const moveDrag = (event) => {
          if (!drag.isDragging) {
            return;
          }

          const deltaX = event.clientX - drag.startX;
          drag.dragDistance = Math.max(drag.dragDistance, Math.abs(deltaX));
          rail.scrollLeft = drag.startScrollLeft - deltaX;

          if (drag.dragDistance > 3) {
            event.preventDefault();
          }
        };

        const startDrag = (event) => {
          if (event.button !== 0 || rail.scrollWidth <= rail.clientWidth) {
            return;
          }

          drag.isDragging = true;
          drag.dragDistance = 0;
          drag.startX = event.clientX;
          drag.startScrollLeft = rail.scrollLeft;
          drag.suppressClick = false;
          section.classList.add("is-dragging");
          document.body.style.cursor = "grabbing";
          document.body.style.userSelect = "none";
          document.addEventListener("mousemove", moveDrag, { passive: false });
          document.addEventListener("mouseup", finishDrag);
        };

        const suppressDraggedClick = (event) => {
          if (!drag.suppressClick) {
            return;
          }

          event.preventDefault();
          event.stopPropagation();
          drag.suppressClick = false;
        };

        const preventNativeDrag = (event) => {
          event.preventDefault();
        };

        section.addEventListener("mousedown", startDrag);
        section.addEventListener("click", suppressDraggedClick, true);
        section.addEventListener("dragstart", preventNativeDrag, true);

        return () => {
          section.removeEventListener("mousedown", startDrag);
          section.removeEventListener("click", suppressDraggedClick, true);
          section.removeEventListener("dragstart", preventNativeDrag, true);
          document.removeEventListener("mousemove", moveDrag);
          document.removeEventListener("mouseup", finishDrag);
          document.body.style.cursor = "";
          document.body.style.userSelect = "";
        };
      })
      .filter(Boolean);

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  useEffect(() => {
    if (heroSlides.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveHeroIndex((current) => (current + 1) % heroSlides.length);
    }, 6500);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const goToHeroSlide = (direction) => {
    setActiveHeroIndex((current) => (current + direction + heroSlides.length) % heroSlides.length);
  };

  const setHeroSlide = (index) => {
    setActiveHeroIndex(index);
  };

  const handleHeroPointerDown = (event) => {
    if (event.button !== 0 || heroSlides.length <= 1) {
      return;
    }

    if (event.target instanceof Element && event.target.closest(".hero-slide-controls")) {
      return;
    }

    heroDragRef.current = {
      isDragging: true,
      startX: event.clientX,
      dragDistance: 0,
      suppressClick: false,
    };
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const handleHeroPointerMove = (event) => {
    const drag = heroDragRef.current;

    if (!drag.isDragging) {
      return;
    }

    drag.dragDistance = Math.max(drag.dragDistance, Math.abs(event.clientX - drag.startX));

    if (drag.dragDistance > 4) {
      event.preventDefault();
    }
  };

  const finishHeroPointer = (event) => {
    const drag = heroDragRef.current;

    if (!drag.isDragging) {
      return;
    }

    const deltaX = event.clientX - drag.startX;
    drag.isDragging = false;

    if (Math.abs(deltaX) >= 54) {
      drag.suppressClick = true;
      goToHeroSlide(deltaX < 0 ? 1 : -1);
      window.setTimeout(() => {
        heroDragRef.current.suppressClick = false;
      }, 160);
    }

    event.currentTarget.releasePointerCapture?.(event.pointerId);
  };

  const suppressHeroDraggedClick = (event) => {
    if (!heroDragRef.current.suppressClick) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    heroDragRef.current.suppressClick = false;
  };

  return (
    <main className="page-shell" ref={pageRef}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section
        className="hero-banner"
        data-hero-active={activeHeroIndex}
        data-hero-align={activeHeroSlide.align}
        onClickCapture={suppressHeroDraggedClick}
        onPointerCancel={finishHeroPointer}
        onPointerDown={handleHeroPointerDown}
        onPointerMove={handleHeroPointerMove}
        onPointerUp={finishHeroPointer}
      >
        <div className="hero-slider-track" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <div
              className={`hero-media-image hero-slide-image${index === activeHeroIndex ? " is-active" : ""}`}
              key={slide.id}
            >
              <Image
                alt={slide.imageAlt}
                fill
                priority={index === 0}
                sizes="100vw"
                src={slide.image}
                style={{ objectPosition: slide.imagePosition }}
                unoptimized
              />
            </div>
          ))}
        </div>
        <div className="hero-wash" />

        <header className="topbar topbar-overlay">
          <div className="brand-lockup">
            <span className="brand-mark">MISTY</span>
            <span className="brand-sub">COLLECTION</span>
          </div>
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
                <img
                  alt="Login"
                  className="nav-icon-image"
                  src="https://gigaplus.makeshop.jp/MISTYCOEC/icon_login.svg"
                />
              </a>
            </li>
            <li className="nav-icon-item">
              <a className="nav-icon-link" href="/view/member/favorite" aria-label="Favorite">
                <img
                  alt="Favorite"
                  className="nav-icon-image"
                  src="https://gigaplus.makeshop.jp/MISTYCOEC/icon_favorite.svg"
                />
              </a>
            </li>
            <li className="nav-icon-item">
              <a className="nav-icon-link" href="/view/cart" aria-label="Shopping Cart">
                <img
                  alt="Shopping Cart"
                  className="nav-icon-image"
                  src="https://gigaplus.makeshop.jp/MISTYCOEC/icon_cart.svg"
                />
              </a>
            </li>
            <li className="nav-icon-item">
              <button className="nav-icon-link nav-icon-button" aria-label="Search" type="button">
                <img
                  alt="Search"
                  className="nav-icon-image"
                  src="https://gigaplus.makeshop.jp/MISTYCOEC/icon_search.svg"
                />
              </button>
            </li>
          </ul>
        </header>

        <div className="hero-overlay">
          <div className={`hero-copy hero-copy-overlay hero-copy-${activeHeroSlide.align}`} key={activeHeroSlide.id}>
            <h1>
              {activeHeroSlide.titleLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <p className="hero-body">
              {activeHeroSlide.body}
              <br />
              {activeHeroSlide.collection}
            </p>

            <div className="floating-product floating-product-overlay">
              <div className="floating-thumb">
                <Image
                  alt={activeHeroSlide.product.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 260px"
                  src={activeHeroSlide.product.image}
                  style={{ objectPosition: activeHeroSlide.product.imagePosition }}
                />
              </div>
              <div className="floating-info">
                <span className="floating-badge">NEW</span>
                <p>{activeHeroSlide.product.name}</p>
                <strong>{activeHeroSlide.product.price}</strong>
                <a href={activeHeroSlide.product.href}>今すぐ見る</a>
              </div>
            </div>

            <div className="hero-service-strip">
              {activeHeroSlide.services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-slide-controls" aria-label="Hero slide controls">
          <button
            className="hero-slide-button"
            onClick={() => goToHeroSlide(-1)}
            type="button"
            aria-label="Previous hero slide"
          >
            PREV
          </button>
          <div className="hero-slide-dots" role="tablist" aria-label="Hero slides">
            {heroSlides.map((slide, index) => (
              <button
                aria-label={`Show hero slide ${index + 1}`}
                aria-selected={index === activeHeroIndex}
                className={`hero-slide-dot${index === activeHeroIndex ? " is-active" : ""}`}
                key={slide.id}
                onClick={() => setHeroSlide(index)}
                role="tab"
                type="button"
              />
            ))}
          </div>
          <button
            className="hero-slide-button"
            onClick={() => goToHeroSlide(1)}
            type="button"
            aria-label="Next hero slide"
          >
            NEXT
          </button>
        </div>
      </section>

      <section
        className="new-arrival-section"
        id="new-arrival"
        ref={newArrivalSectionRef}
      >
        <div className="new-arrival-heading-wrap">
          <h2 className="new-arrival-heading">NEW ARRIVAL</h2>
        </div>
        <div className="new-arrival-grid" ref={newArrivalRailRef}>
          {newArrivals.map((item, index) => (
            <article className="new-arrival-card" key={item.href}>
              <a className="new-arrival-link" draggable={false} href={item.href}>
                <div className="new-arrival-image-wrap">
                  <img alt={item.name} className="new-arrival-image" draggable={false} src={item.image} />
                </div>
                <div className="new-arrival-meta">MISTY</div>
                <div className="new-arrival-name">
                  <span className={`new-arrival-badge${index > 0 ? "" : " new-arrival-badge-empty"}`}>
                    {index > 0 ? "NEW" : ""}
                  </span>
                  {item.name}
                </div>
                <div className="new-arrival-price">
                  {item.price}
                  <span>（税込）</span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="ranking-section" id="ranking" ref={rankingSectionRef}>
        <div className="section-heading-wrap">
          <h2 className="section-heading">RANKING</h2>
        </div>
        <div className="product-rail product-rail-five" ref={rankingRailRef}>
          {rankingItems.map((item, index) => (
            <article className="catalog-card catalog-card-ranked" key={item.href}>
              <a className="catalog-link" href={item.href}>
                <div className="catalog-image-wrap">
                  <img alt={item.name} className="catalog-image" src={item.image} />
                  <span className="catalog-rank">{index + 1}</span>
                  {item.soldOut ? <span className="catalog-chip">SOLD OUT</span> : null}
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

      <section className="pickup-section" id="pickup" ref={pickupSectionRef}>
        <div className="section-heading-wrap">
          <h2 className="section-heading">PICK UP</h2>
        </div>
        <div className="product-grid product-grid-three" ref={pickupRailRef}>
          {pickupItems.map((item) => (
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

      <section className="concept-section" id="concept">
        <div className="section-heading-wrap">
          <h2 className="section-heading">CONCEPT</h2>
        </div>
        <div className="concept-grid">
          {concepts.map((item) => (
            <article className="concept-card" key={`${item.logoAlt}-${item.href}`}>
              <div className="concept-image-wrap">
                <img alt={item.logoAlt} className="concept-image" src={item.image} />
              </div>
              <div className="concept-copy">
                <div className="concept-logo-wrap">
                  <img alt={item.logoAlt} className="concept-logo" src={item.logo} />
                </div>
                <p className="concept-body">{item.body}</p>
                <a
                  className="concept-link"
                  href={item.href}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                >
                  {item.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="topics-section" id="topics" ref={topicsSectionRef}>
        <div className="topics-heading-wrap">
          <h2 className="topics-heading">TOPICS</h2>
        </div>
        <div className="topics-grid" ref={topicsRailRef}>
          {topics.map((topic, index) => (
            <article className="topics-card" key={topic.href}>
              <a className="topics-link" href={topic.href} rel="noopener noreferrer" target="_blank">
                <div className="topics-image-wrap">
                  <img alt={topic.title} className="topics-image" src={topic.image} />
                </div>
                <div className="topics-copy">
                  <div className="topics-meta">
                    <span>{topic.category}</span>
                    <time dateTime={topic.date.replaceAll(".", "-")}>{topic.date}</time>
                  </div>
                  <div className="topics-text">{topic.title}</div>
                  <span className="topics-cta">{index === 0 ? "Read feature" : "Read more"}</span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="checked-section" id="checked-items" ref={checkedSectionRef}>
        <div className="section-heading-wrap">
          <h2 className="section-heading">CHECKED ITEMS</h2>
        </div>
        <div className="product-rail product-rail-five" ref={checkedRailRef}>
          {checkedItems.map((item) => (
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

      <section className="instagram-section" id="instagram" ref={instagramSectionRef}>
        <div className="instagram-heading-wrap">
          <h2 className="instagram-heading">INSTAGRAM</h2>
        </div>
        <div className="instagram-showcase">
          <div className="instagram-cta-panel">
            <p className="instagram-kicker">Social proof</p>
            <p className="instagram-lead">身につけた瞬間の空気まで、Instagramで。</p>
            <p className="instagram-body">
              新作、POP UP、スタイリングの余韻をリアルタイムに。気になる投稿から最新のムードへ移動できます。
            </p>
            <div className="instagram-actions">
              <a
                className="instagram-follow-button"
                href="https://www.instagram.com/mistycollection_official"
                rel="noopener noreferrer"
                target="_blank"
              >
                Follow @mistycollection_official
              </a>
              <a
                className="instagram-text-link"
                href={instagramPosts[0].href}
                rel="noopener noreferrer"
                target="_blank"
              >
                View latest post
              </a>
            </div>
          </div>
          <div className="instagram-grid" aria-label="Instagram posts" ref={instagramRailRef}>
            {instagramPosts.map((post, index) => (
              <article className="instagram-card" key={post.href}>
                <a className="instagram-link" href={post.href} rel="noopener noreferrer" target="_blank">
                  <img alt="" className="instagram-image" src={post.image} />
                  <span className="instagram-post-cta">{index === 0 ? "Latest" : "View post"}</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-logo-wrap">
          <a className="footer-logo-link footer-brand-lockup" href={publicAsset("/")}>
            <span className="footer-brand-mark">MISTY</span>
            <span className="footer-brand-sub">COLLECTION</span>
          </a>
        </div>

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
    </main>
  );
}
