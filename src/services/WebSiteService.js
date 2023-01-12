// import httpWebSiteClient from "./httpWebSiteClient";

export default function getMenus() {
  // const data = await httpWebSiteClient.get('/menu');
  return menus;
}

const menus = [
  {
    name: "Верхнее меню",
    slug: "verhnee-menyu",
    menu: [
      {
        id: 33,
        name: "Каталог квартир",
        nameKk: "",
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry-vtorichki/astana",
        urlKk: null,
        urlEn: null,
        parentId: null,
        children: [
          {
            id: 39,
            name: "Все квартиры",
            nameKk: null,
            nameEn: null,
            menuGroupId: 1,
            url: "/",
            urlKk: null,
            urlEn: null,
            parentId: 33,
            children: [
              {
                id: 40,
                name: "Квартиры в Астане",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry/astana",
                urlKk: null,
                urlEn: null,
                parentId: 39,
                children: [],
              },
              {
                id: 43,
                name: "Квартиры в Алматинском районе Астаны",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry/astana-almatinskij",
                urlKk: null,
                urlEn: null,
                parentId: 39,
                children: [],
              },
              {
                id: 44,
                name: "Квартиры в Байконурском районе Астаны",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry/astana-bajkonurskij",
                urlKk: null,
                urlEn: null,
                parentId: 39,
                children: [],
              },
              {
                id: 45,
                name: "Квартиры в Есильском районе Астаны",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry/astana-esilskij",
                urlKk: null,
                urlEn: null,
                parentId: 39,
                children: [],
              },
              {
                id: 46,
                name: "Квартиры в Сарыаркинском районе Астаны",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry/astana-saryarkinskij",
                urlKk: null,
                urlEn: null,
                parentId: 39,
                children: [],
              },
              {
                id: 47,
                name: "Однокомнатные квартиры в Астане",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry/astana/odnokomnatnye",
                urlKk: null,
                urlEn: null,
                parentId: 39,
                children: [],
              },
              {
                id: 48,
                name: "Двухкомнатные квартиры в Астане",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry/astana/dvuhkomnatnye",
                urlKk: null,
                urlEn: null,
                parentId: 39,
                children: [],
              },
              {
                id: 49,
                name: "Трехкомнатные квартиры в Астане",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry/astana/trehkomnatnye",
                urlKk: null,
                urlEn: null,
                parentId: 39,
                children: [],
              },
              {
                id: 50,
                name: "Четырехкомнатные квартиры в Астане",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry/astana/chetirehkomnatnye",
                urlKk: null,
                urlEn: null,
                parentId: 39,
                children: [],
              },
              {
                id: 51,
                name: "Многокомнатные квартиры в Астане",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry/astana/pyatikomnatnyh",
                urlKk: null,
                urlEn: null,
                parentId: 39,
                children: [],
              },
              {
                id: 65,
                name: "Квартиры в Караганде",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry/karaganda",
                urlKk: null,
                urlEn: null,
                parentId: 39,
                children: [],
              },
            ],
          },
          {
            id: 52,
            name: "Вторичное",
            nameKk: null,
            nameEn: null,
            menuGroupId: 1,
            url: "/",
            urlKk: null,
            urlEn: null,
            parentId: 33,
            children: [
              {
                id: 53,
                name: "Квартиры в Астане",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry-vtorichki/astana",
                urlKk: null,
                urlEn: null,
                parentId: 52,
                children: [],
              },
              {
                id: 54,
                name: "Квартиры в Алматинском районе Астаны",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry-vtorichki/astana-almatinskij",
                urlKk: null,
                urlEn: null,
                parentId: 52,
                children: [],
              },
              {
                id: 55,
                name: "Квартиры в Байконурском районе Астаны",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry-vtorichki/astana-bajkonurskij",
                urlKk: null,
                urlEn: null,
                parentId: 52,
                children: [],
              },
              {
                id: 56,
                name: "Квартиры в Есильском районе Астаны",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry-vtorichki/astana-esilskij",
                urlKk: null,
                urlEn: null,
                parentId: 52,
                children: [],
              },
              {
                id: 59,
                name: "Квартиры в Сарыаркинском районе Астаны",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry-vtorichki/astana-saryarkinskij",
                urlKk: null,
                urlEn: null,
                parentId: 52,
                children: [],
              },
              {
                id: 60,
                name: "Однокомнатные квартиры в Астане",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry-vtorichki/astana/odnokomnatnye",
                urlKk: null,
                urlEn: null,
                parentId: 52,
                children: [],
              },
              {
                id: 61,
                name: "Двухкомнатные квартиры в Астане",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry-vtorichki/astana/dvuhkomnatnye",
                urlKk: null,
                urlEn: null,
                parentId: 52,
                children: [],
              },
              {
                id: 62,
                name: "Трехкомнатные квартиры в Астане",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry-vtorichki/astana/trehkomnatnye",
                urlKk: null,
                urlEn: null,
                parentId: 52,
                children: [],
              },
              {
                id: 63,
                name: "Четырехкомнатные квартиры в Астане",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry-vtorichki/astana/chetirehkomnatnye",
                urlKk: null,
                urlEn: null,
                parentId: 52,
                children: [],
              },
              {
                id: 64,
                name: "Многокомнатные квартиры в Астане",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry-vtorichki/astana/pyatikomnatnyh",
                urlKk: null,
                urlEn: null,
                parentId: 52,
                children: [],
              },
              {
                id: 66,
                name: "Квартиры в Караганде",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry-vtorichki/karaganda",
                urlKk: null,
                urlEn: null,
                parentId: 52,
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 67,
        name: "Новостройки",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/",
        urlKk: null,
        urlEn: null,
        parentId: null,
        children: [
          {
            id: 68,
            name: "Астана",
            nameKk: null,
            nameEn: null,
            menuGroupId: 1,
            url: "/",
            urlKk: null,
            urlEn: null,
            parentId: 67,
            children: [
              {
                id: 69,
                name: "Новостройки в Астане",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry-novostroi/astana",
                urlKk: null,
                urlEn: null,
                parentId: 68,
                children: [],
              },
              {
                id: 70,
                name: "Новостройки в Алматинском районе Астаны",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry-novostroi/astana-almatinskij",
                urlKk: null,
                urlEn: null,
                parentId: 68,
                children: [],
              },
              {
                id: 71,
                name: "Новостройки в Байконурском районе Астаны",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry-novostroi/astana-bajkonurskij",
                urlKk: null,
                urlEn: null,
                parentId: 68,
                children: [],
              },
              {
                id: 72,
                name: "Новостройки в Есильском районе Астаны",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry-novostroi/astana-esilskij",
                urlKk: null,
                urlEn: null,
                parentId: 68,
                children: [],
              },
              {
                id: 73,
                name: "Новостройки в Сарыаркинском районе Астаны",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry-novostroi/astana-saryarkinskij",
                urlKk: null,
                urlEn: null,
                parentId: 68,
                children: [],
              },
            ],
          },
          {
            id: 74,
            name: "Алматы",
            nameKk: null,
            nameEn: null,
            menuGroupId: 1,
            url: "/",
            urlKk: null,
            urlEn: null,
            parentId: 67,
            children: [
              {
                id: 75,
                name: "Новостройки в Алматы",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry-novostroi/almaty",
                urlKk: null,
                urlEn: null,
                parentId: 74,
                children: [],
              },
              {
                id: 76,
                name: "Новостройки в Алмалинском районе Алматы",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry-novostroi/almaty-almalinskij",
                urlKk: null,
                urlEn: null,
                parentId: 74,
                children: [],
              },
              {
                id: 77,
                name: "Новостройки в Ауэзовском районе Алматы",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry-novostroi/almaty-auezovskij",
                urlKk: null,
                urlEn: null,
                parentId: 74,
                children: [],
              },
              {
                id: 78,
                name: "Новостройки в Бостандыкском районе Алматы",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry-novostroi/almaty-bostandykskij",
                urlKk: null,
                urlEn: null,
                parentId: 74,
                children: [],
              },
              {
                id: 79,
                name: "Новостройки в Наурызбайском районе Алматы",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/prodazha/kvartiry-novostroi/almaty-nauryzbajskij",
                urlKk: null,
                urlEn: null,
                parentId: 74,
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        name: "Застройщики и ЖК",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "#",
        urlKk: null,
        urlEn: null,
        parentId: null,
        children: [
          {
            id: 11,
            name: "Жилые комплексы",
            nameKk: null,
            nameEn: null,
            menuGroupId: 1,
            url: "/",
            urlKk: null,
            urlEn: null,
            parentId: 4,
            children: [
              {
                id: 90,
                name: "Aiva",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/estates/61827",
                urlKk: null,
                urlEn: null,
                parentId: 11,
                children: [],
              },
              {
                id: 14,
                name: "Atlant",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/estates/44706",
                urlKk: null,
                urlEn: null,
                parentId: 11,
                children: [],
              },
              {
                id: 15,
                name: "GreenLine.Asyl Mura",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/estates/45526",
                urlKk: null,
                urlEn: null,
                parentId: 11,
                children: [],
              },
              {
                id: 30,
                name: "Sat City",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/estates/48470",
                urlKk: null,
                urlEn: null,
                parentId: 11,
                children: [],
              },
              {
                id: 31,
                name: "Аулет",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/estates/47452",
                urlKk: null,
                urlEn: null,
                parentId: 11,
                children: [],
              },
              {
                id: 21,
                name: "all",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "#",
                urlKk: null,
                urlEn: null,
                parentId: 11,
                children: [
                  {
                    id: 23,
                    name: "Смотреть все ЖК",
                    nameKk: null,
                    nameEn: null,
                    menuGroupId: 1,
                    url: "estates",
                    urlKk: null,
                    urlEn: null,
                    parentId: 21,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            id: 10,
            name: "Застройщики",
            nameKk: null,
            nameEn: null,
            menuGroupId: 1,
            url: "/",
            urlKk: null,
            urlEn: null,
            parentId: 4,
            children: [
              {
                id: 12,
                name: "BI Group",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/developers/1",
                urlKk: null,
                urlEn: null,
                parentId: 10,
                children: [],
              },
              {
                id: 13,
                name: "Базис-А",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/developers/5123",
                urlKk: null,
                urlEn: null,
                parentId: 10,
                children: [],
              },
              {
                id: 20,
                name: "all",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "#",
                urlKk: null,
                urlEn: null,
                parentId: 10,
                children: [
                  {
                    id: 22,
                    name: "Смотреть всех застройщиков",
                    nameKk: null,
                    nameEn: null,
                    menuGroupId: 1,
                    url: "developers",
                    urlKk: null,
                    urlEn: null,
                    parentId: 20,
                    children: [],
                  },
                ],
              },
              {
                id: 27,
                name: "Orda Invest",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/developers/5164",
                urlKk: null,
                urlEn: null,
                parentId: 10,
                children: [],
              },
              {
                id: 28,
                name: "G-Park",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/developers/5122",
                urlKk: null,
                urlEn: null,
                parentId: 10,
                children: [],
              },
              {
                id: 29,
                name: "Nur Astana Kurylys",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/developers/2862",
                urlKk: null,
                urlEn: null,
                parentId: 10,
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "Ипотека",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "#",
        urlKk: null,
        urlEn: null,
        parentId: null,
        children: [
          {
            id: 17,
            name: "Ипотечные программы",
            nameKk: null,
            nameEn: null,
            menuGroupId: 1,
            url: "#",
            urlKk: null,
            urlEn: null,
            parentId: 3,
            children: [
              {
                id: 8,
                name: "7-20-25",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/mortgages/programma-7-20-25",
                urlKk: null,
                urlEn: null,
                parentId: 17,
                children: [],
              },
              {
                id: 26,
                name: "Ипотека от Банк Центр Кредит",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/mortgages/ipoteka-ot-bank-tsentr-kredit",
                urlKk: null,
                urlEn: null,
                parentId: 17,
                children: [],
              },
              {
                id: 25,
                name: "Ипотека Halyk Bank",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/mortgages/ipoteka-ot-halyk-bank",
                urlKk: null,
                urlEn: null,
                parentId: 17,
                children: [],
              },
              {
                id: 24,
                name: "Ипотека от Altyn-I",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "/mortgages/ipoteka-ot-altyn-banka",
                urlKk: null,
                urlEn: null,
                parentId: 17,
                children: [],
              },
              {
                id: 18,
                name: "all",
                nameKk: null,
                nameEn: null,
                menuGroupId: 1,
                url: "#",
                urlKk: null,
                urlEn: null,
                parentId: 17,
                children: [
                  {
                    id: 19,
                    name: "Смотреть все программы",
                    nameKk: null,
                    nameEn: null,
                    menuGroupId: 1,
                    url: "mortgages",
                    urlKk: null,
                    urlEn: null,
                    parentId: 18,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 37,
        name: "Журнал",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "https://dom.kz/journal/",
        urlKk: null,
        urlEn: null,
        parentId: null,
        children: [],
      },
      {
        id: 5,
        name: "О нас",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/about",
        urlKk: null,
        urlEn: null,
        parentId: null,
        children: [],
      },
      {
        id: 89,
        name: "Недвижимость в Турции",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "https://dom.kz/landing/turkey",
        urlKk: null,
        urlEn: null,
        parentId: null,
        children: [],
      },
      {
        id: 92,
        name: "Инвестиции",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "https://dom.kz/investments",
        urlKk: null,
        urlEn: null,
        parentId: null,
        children: [],
      },
    ],
  },
];
