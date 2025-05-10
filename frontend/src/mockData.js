const notes = [
  {
    _id: "1",
    title: "Apple",
    ticker: "AAPL",
    asset: "stock",
    content: "This is a note about Apple.",
    dateModified: new Date("2023-10-01T10:00:00Z"),
  },
  {
    _id: "2",
    title: "Microsoft",
    ticker: "MSFT",
    asset: "bond",
    content: "This is a note about Microsoft.",
    dateModified: new Date("2023-10-02T11:00:00Z"),
  },
  {
    _id: "3",
    title: "Google",
    ticker: "GOOGL",
    asset: "stock",
    content: "This is a note about Google.",
    dateModified: new Date("2023-10-03T12:00:00Z"),
  },
];

const profiles = [
  {
    _id: {
      $oid: "639824f7ba6700005400224c",
    },
    ticker: "AAPL",
    name_damodaran: "Apple Inc. (NasdaqGS:AAPL)",
    industry_damodaran: "computers_peripherals",
    sector_damodaran: "information_technology",
    country_damodaran: "United States",
    name_edgar: "APPLE INC",
    industry_edgar: "manufacturing",
    industry_detail_edgar: "electronic_computers",
    sector_yhoo: "technology",
    industry_yhoo: "consumer_electronics",
    long_business_summary:
      "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services. In addition, the company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; AirPods Max, an over-ear wireless headphone; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, HomePod, and iPod touch. Further, it provides AppleCare support services; cloud services store services; and operates various platforms, including the App Store that allow customers to discover and download applications and digital content, such as books, music, video, games, and podcasts. Additionally, the company offers various services, such as Apple Arcade, a game subscription service; Apple Music, which offers users a curated listening experience with on-demand radio stations; Apple News+, a subscription news and magazine service; Apple TV+, which offers exclusive original content; Apple Card, a co-branded credit card; and Apple Pay, a cashless payment service, as well as licenses its intellectual property. The company serves consumers, and small and mid-sized businesses; and the education, enterprise, and government markets. It distributes third-party applications for its products through the App Store. The company also sells its products through its retail and online stores, and direct sales force; and third-party cellular network carriers, wholesalers, retailers, and resellers. Apple Inc. was incorporated in 1977 and is headquartered in Cupertino, California.",
    name_simfin: "APPLE INC",
    sector_simfin: "technology",
    industry_simfin: "computer_hardware",
    name_yhoo: "",
    name_seeking_alpha: "",
    sector_seeking_alpha: "unknown",
    industry_seeking_alpha: "unknown",
    dateModified: new Date("2023-04-01T10:00:00Z"),
  },
  {
    _id: {
      $oid: "639824f8ba67000054002b67",
    },
    ticker: "MSFT",
    name_damodaran: "Microsoft Corporation (NasdaqGS:MSFT)",
    industry_damodaran: "software_system_application",
    sector_damodaran: "information_technology",
    country_damodaran: "United States",
    name_edgar: "MICROSOFT CORP",
    industry_edgar: "services",
    industry_detail_edgar: "services_prepackaged_software",
    sector_yhoo: "technology",
    industry_yhoo: "software_application",
    long_business_summary:
      "Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide. Its Productivity and Business Processes segment offers Office, Exchange, SharePoint, Microsoft Teams, Office 365 Security and Compliance, and Skype for Business, as well as related Client Access Licenses (CAL); Skype, Outlook.com, OneDrive, and LinkedIn; and Dynamics 365, a set of cloud-based and on-premises business solutions for organizations and enterprise divisions. Its Intelligent Cloud segment licenses SQL, Windows Servers, Visual Studio, System Center, and related CALs; GitHub that provides a collaboration platform and code hosting service for developers; and Azure, a cloud platform. It also offers support services and Microsoft consulting services to assist customers in developing, deploying, and managing Microsoft server and desktop solutions; and training and certification on Microsoft products. Its More Personal Computing segment provides Windows original equipment manufacturer (OEM) licensing and other non-volume licensing of the Windows operating system; Windows Commercial, such as volume licensing of the Windows operating system, Windows cloud services, and other Windows commercial offerings; patent licensing; Windows Internet of Things; and MSN advertising. It also offers Surface, PC accessories, PCs, tablets, gaming and entertainment consoles, and other devices; Gaming, including Xbox hardware, and Xbox content and services; video games and third-party video game royalties; and Search, including Bing and Microsoft advertising. It sells its products through OEMs, distributors, and resellers; and directly through digital marketplaces, online stores, and retail stores. It has collaborations with Dynatrace, Inc., Morgan Stanley, Micro Focus, WPP plc, ACI Worldwide, Inc., and iCIMS, Inc., as well as strategic relationships with Avaya Holdings Corp. and wejo Limited. Microsoft Corporation was founded in 1975 and is based in Redmond, Washington.",
    name_simfin: "MICROSOFT CORP",
    sector_simfin: "technology",
    industry_simfin: "application_software",
    name_yhoo: "",
    name_seeking_alpha: "",
    sector_seeking_alpha: "unknown",
    industry_seeking_alpha: "unknown",
    dateModified: new Date("2023-03-01T10:00:00Z"),
  },
  {
    _id: {
      $oid: "639824f8ba67000054002848",
    },
    ticker: "GOOGL",
    name_damodaran: "",
    industry_damodaran: "unknown",
    sector_damodaran: "unknown",
    country_damodaran: "",
    name_edgar: "",
    industry_edgar: "unknown",
    industry_detail_edgar: "unknown",
    sector_yhoo: "communication_services",
    industry_yhoo: "internet_content_information",
    long_business_summary:
      "Alphabet Inc. provides online advertising services in the United States, Europe, the Middle East, Africa, the Asia-Pacific, Canada, and Latin America. The company offers performance and brand advertising services. It operates through Google Services, Google Cloud, and Other Bets segments. The Google Services segment provides products and services, such as ads, Android, Chrome, hardware, Google Maps, Google Play, Search, and YouTube, as well as technical infrastructure; and digital content. The Google Cloud segment offers infrastructure and data analytics platforms, collaboration tools, and other services for enterprise customers. The Other Bets segment sells internet and TV services, as well as licensing and research and development services. The company was founded in 1998 and is headquartered in Mountain View, California.",
    name_simfin: "",
    sector_simfin: "unknown",
    industry_simfin: "unknown",
    name_yhoo: "",
    name_seeking_alpha: "",
    sector_seeking_alpha: "unknown",
    industry_seeking_alpha: "unknown",
    dateModified: new Date("2023-10-01T10:00:00Z"),
  },
  {
    _id: {
      $oid: "639824f9ba67000054002d6a",
    },
    ticker: "ZM",
    name_damodaran: "Zoom Video Communications, Inc. (NasdaqGS:ZM)",
    industry_damodaran: "software_system_application",
    sector_damodaran: "information_technology",
    country_damodaran: "United States",
    name_edgar: "ZOOM VIDEO COMMUNICATIONS INC",
    industry_edgar: "services",
    industry_detail_edgar: "services_computer_programming_data_processing_etc",
    sector_yhoo: "technology",
    industry_yhoo: "application_software",
    long_business_summary:
      "Zoom Video Communications, Inc. provides a video-first communications platform in the Americas, the Asia Pacific, Europe, the Middle East, and Africa. The company offers Zoom Meetings that offers HD video, voice, chat, and content sharing through mobile devices, desktops, laptops, telephones, and conference room systems; Zoom Phone, an enterprise cloud phone system that provides secure call routing, call queuing, call detail reports, call recording, call quality monitoring, voicemail, switch to video, and other services, as well as inbound and outbound calling services; and Zoom Chat enables to share messages, images, audio files, and content in desktop, laptop, tablet, and mobile devices for meeting and phone customers. It also provides Zoom Rooms, a software-based conference room system; Zoom Conference Room Connector, a gateway for SIP/H.323 endpoints to join Zoom meetings; Zoom Video Webinars to provide video presentations to large audiences from many devices; and Zoom Hardware-as-a-Service allows users to access video communication technology with subscription options for phone and meeting room hardware. The company offers Zoom for Developers to integrate its video, phone, chat, and content sharing into other applications, as well as manages Zoom accounts; Zoom App Marketplace enhance developers to publish their apps; OnZoom, a platform for users to create, host, and monetize online events; and Zoom Apps to access from Zoom Meetings and the Zoom Desktop client to facilitate collaboration and engagement during meetings. It serves individuals; and education, entertainment/media, enterprise infrastructure, finance, government, healthcare, manufacturing, non-profit/not for profit and social impact, retail/consumer products, and software/Internet industries. The company was formerly known as Zoom Communications, Inc. and changed its name to Zoom Video Communications, Inc. in May 2012. The company was incorporated in 2011 and is headquartered in San Jose, California.",
    name_simfin: "Zoom Video Communications, Inc.",
    sector_simfin: "technology",
    industry_simfin: "application_software",
    name_yhoo: "",
    name_seeking_alpha: "",
    sector_seeking_alpha: "unknown",
    industry_seeking_alpha: "unknown",
    dateModified: new Date("2023-10-02T10:00:00Z"),
  },
  {
    _id: {
      $oid: "639824f7ba67000054002336",
    },
    ticker: "AMZN",
    name_damodaran: "Amazon.com, Inc. (NasdaqGS:AMZN)",
    industry_damodaran: "retail_online",
    sector_damodaran: "consumer_discretionary",
    country_damodaran: "United States",
    name_edgar: "AMAZON COM INC",
    industry_edgar: "unknown",
    industry_detail_edgar: "retail_catalog_mail_order_houses",
    sector_yhoo: "consumer_cyclical",
    industry_yhoo: "internet_retail",
    long_business_summary:
      "Amazon.com, Inc. engages in the retail sale of consumer products and subscriptions in North America and internationally. The company operates through three segments: North America, International, and Amazon Web Services (AWS). It sells merchandise and content purchased for resale from third-party sellers through physical and online stores. The company also manufactures and sells electronic devices, including Kindle, Fire tablets, Fire TVs, Rings, and Echo and other devices; provides Kindle Direct Publishing, an online service that allows independent authors and publishers to make their books available in the Kindle Store; and develops and produces media content. In addition, it offers programs that enable sellers to sell their products on its websites, as well as its stores; and programs that allow authors, musicians, filmmakers, skill and app developers, and others to publish and sell content. Further, the company provides compute, storage, database, analytics, machine learning, and other services, as well as fulfillment, advertising, publishing, and digital content subscriptions. Additionally, it offers Amazon Prime, a membership program, which provides free shipping of various items; access to streaming of movies and TV episodes; and other services. The company serves consumers, sellers, developers, enterprises, and content creators. Amazon.com, Inc. was founded in 1994 and is headquartered in Seattle, Washington.",
    name_simfin: "AMAZON COM INC",
    sector_simfin: "consumer_cyclical",
    industry_simfin: "retail_apparel_specialty",
    name_yhoo: "",
    name_seeking_alpha: "",
    sector_seeking_alpha: "unknown",
    industry_seeking_alpha: "unknown",
    dateModified: new Date("2023-10-07T10:00:00Z"),
  },
  {
    _id: {
      $oid: "639824f7ba6700005400260a",
    },
    ticker: "CTAQ",
    name_damodaran: "Carney Technology Acquisition Corp. II (NasdaqCM:CTAQ)",
    industry_damodaran: "investments_asset_management",
    sector_damodaran: "financials",
    country_damodaran: "United States",
    name_edgar: "CARNEY TECHNOLOGY ACQUISITION CORP II",
    industry_edgar: "unknown",
    industry_detail_edgar: "blank_checks",
    sector_yhoo: "financial_services",
    industry_yhoo: "shell_companies",
    long_business_summary:
      "Carney Technology Acquisition Corp. II does not have significant operations. It intends to effect a merger, capital stock exchange, asset acquisition, stock purchase, reorganization, or similar business combination with one or more businesses in the technology industry. The company was incorporated in 2020 and is based in Burlingame, California.",
    name_simfin: "",
    sector_simfin: "unknown",
    industry_simfin: "unknown",
    name_yhoo: "",
    name_seeking_alpha: "",
    sector_seeking_alpha: "unknown",
    industry_seeking_alpha: "unknown",
    dateModified: new Date("2023-10-11T10:00:00Z"),
  },
];

const treasuries = [
  {
    _id: "1",
    maturity: "2024-01-01",
    coupon: 0.5,
    yield: 0.25,
    price: 99.5,
  },
  {
    _id: "2",
    maturity: "2025-01-01",
    coupon: 1.0,
    yield: 0.75,
    price: 98.5,
  },
  {
    _id: "3",
    maturity: "2026-01-01",
    coupon: 1.5,
    yield: 1.25,
    price: 97.5,
  },
];

const SP500 = [
  {
    _id: "1",
    date: "1980-01-31",
    value: 23,
  },

  {
    _id: "2",
    date: "1980-02-28",
    value: 45,
  },
  {
    _id: "3",
    date: "1980-03-31",
    value: 67,
  },
  {
    _id: "4",
    date: "1980-04-30",
    value: 89,
  },
];

const unemploymentRate = [
  {
    _id: "1",
    date: "1980-01-31",
    value: "3.8",
  },

  {
    _id: "2",
    date: "1980-02-28",
    value: "3.9",
  },
  {
    _id: "3",
    date: "1980-03-31",
    value: "5.4",
  },
  {
    _id: "4",
    date: "1980-04-30",
    value: "5.3",
  },
];

const EXJPUS = [
  {
    _id: {
      $oid: "66f500be272a5d9b72c0996a",
    },
    date: "2000-01-01",
    value: "105.2960",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c0996b",
    },
    date: "2000-02-01",
    value: "109.3885",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c0996c",
    },
    date: "2000-03-01",
    value: "106.3074",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c0996d",
    },
    date: "2000-04-01",
    value: "105.6270",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c0996e",
    },
    date: "2000-05-01",
    value: "108.3205",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c0996f",
    },
    date: "2000-06-01",
    value: "106.1255",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09970",
    },
    date: "2000-07-01",
    value: "108.2115",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09971",
    },
    date: "2000-08-01",
    value: "108.0804",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09972",
    },
    date: "2000-09-01",
    value: "106.8375",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09973",
    },
    date: "2000-10-01",
    value: "108.4429",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09974",
    },
    date: "2000-11-01",
    value: "109.0095",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09975",
    },
    date: "2000-12-01",
    value: "112.2090",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09976",
    },
    date: "2001-01-01",
    value: "116.6719",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09977",
    },
    date: "2001-02-01",
    value: "116.2337",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09978",
    },
    date: "2001-03-01",
    value: "121.5050",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09979",
    },
    date: "2001-04-01",
    value: "123.7710",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c0997a",
    },
    date: "2001-05-01",
    value: "121.7682",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c0997b",
    },
    date: "2001-06-01",
    value: "122.3510",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c0997c",
    },
    date: "2001-07-01",
    value: "124.4981",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c0997d",
    },
    date: "2001-08-01",
    value: "121.3670",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c0997e",
    },
    date: "2001-09-01",
    value: "118.6117",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c0997f",
    },
    date: "2001-10-01",
    value: "121.4536",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09980",
    },
    date: "2001-11-01",
    value: "122.4055",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09981",
    },
    date: "2001-12-01",
    value: "127.5945",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09982",
    },
    date: "2002-01-01",
    value: "132.6833",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09983",
    },
    date: "2002-02-01",
    value: "133.6426",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09984",
    },
    date: "2002-03-01",
    value: "131.0610",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09985",
    },
    date: "2002-04-01",
    value: "130.7718",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09986",
    },
    date: "2002-05-01",
    value: "126.3750",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09987",
    },
    date: "2002-06-01",
    value: "123.2905",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09988",
    },
    date: "2002-07-01",
    value: "117.8991",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09989",
    },
    date: "2002-08-01",
    value: "118.9927",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c0998a",
    },
    date: "2002-09-01",
    value: "121.0780",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c0998b",
    },
    date: "2002-10-01",
    value: "123.9077",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c0998c",
    },
    date: "2002-11-01",
    value: "121.6079",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c0998d",
    },
    date: "2002-12-01",
    value: "121.8929",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c0998e",
    },
    date: "2003-01-01",
    value: "118.8133",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c0998f",
    },
    date: "2003-02-01",
    value: "119.3379",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09990",
    },
    date: "2003-03-01",
    value: "118.6871",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09991",
    },
    date: "2003-04-01",
    value: "119.8950",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09992",
    },
    date: "2003-05-01",
    value: "117.3681",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09993",
    },
    date: "2003-06-01",
    value: "118.3290",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09994",
    },
    date: "2003-07-01",
    value: "118.6959",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09995",
    },
    date: "2003-08-01",
    value: "118.6624",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09996",
    },
    date: "2003-09-01",
    value: "114.80",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09997",
    },
    date: "2003-10-01",
    value: "109.4955",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09998",
    },
    date: "2003-11-01",
    value: "109.1778",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09999",
    },
    date: "2003-12-01",
    value: "107.7377",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c0999a",
    },
    date: "2004-01-01",
    value: "106.2685",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c0999b",
    },
    date: "2004-02-01",
    value: "106.7079",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c0999c",
    },
    date: "2004-03-01",
    value: "108.5157",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c0999d",
    },
    date: "2004-04-01",
    value: "107.6564",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c0999e",
    },
    date: "2004-05-01",
    value: "112.1960",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c0999f",
    },
    date: "2004-06-01",
    value: "109.4336",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099a0",
    },
    date: "2004-07-01",
    value: "109.4871",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099a1",
    },
    date: "2004-08-01",
    value: "110.2336",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099a2",
    },
    date: "2004-09-01",
    value: "110.0914",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099a3",
    },
    date: "2004-10-01",
    value: "108.7835",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099a4",
    },
    date: "2004-11-01",
    value: "104.6990",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099a5",
    },
    date: "2004-12-01",
    value: "103.8104",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099a6",
    },
    date: "2005-01-01",
    value: "103.3410",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099a7",
    },
    date: "2005-02-01",
    value: "104.9442",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099a8",
    },
    date: "2005-03-01",
    value: "105.2543",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099a9",
    },
    date: "2005-04-01",
    value: "107.1938",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099aa",
    },
    date: "2005-05-01",
    value: "106.5952",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099ab",
    },
    date: "2005-06-01",
    value: "108.7473",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099ac",
    },
    date: "2005-07-01",
    value: "111.9535",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099ad",
    },
    date: "2005-08-01",
    value: "110.6065",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099ae",
    },
    date: "2005-09-01",
    value: "111.2390",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099af",
    },
    date: "2005-10-01",
    value: "114.8695",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099b0",
    },
    date: "2005-11-01",
    value: "118.4540",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099b1",
    },
    date: "2005-12-01",
    value: "118.4624",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099b2",
    },
    date: "2006-01-01",
    value: "115.4765",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099b3",
    },
    date: "2006-02-01",
    value: "117.8605",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099b4",
    },
    date: "2006-03-01",
    value: "117.2778",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099b5",
    },
    date: "2006-04-01",
    value: "117.0695",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099b6",
    },
    date: "2006-05-01",
    value: "111.7305",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099b7",
    },
    date: "2006-06-01",
    value: "114.6250",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099b8",
    },
    date: "2006-07-01",
    value: "115.7670",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099b9",
    },
    date: "2006-08-01",
    value: "115.9243",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099ba",
    },
    date: "2006-09-01",
    value: "117.2145",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099bb",
    },
    date: "2006-10-01",
    value: "118.6090",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099bc",
    },
    date: "2006-11-01",
    value: "117.3205",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099bd",
    },
    date: "2006-12-01",
    value: "117.3220",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099be",
    },
    date: "2007-01-01",
    value: "120.4471",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099bf",
    },
    date: "2007-02-01",
    value: "120.5047",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099c0",
    },
    date: "2007-03-01",
    value: "117.26",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099c1",
    },
    date: "2007-04-01",
    value: "118.9324",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099c2",
    },
    date: "2007-05-01",
    value: "120.7732",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099c3",
    },
    date: "2007-06-01",
    value: "122.6886",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099c4",
    },
    date: "2007-07-01",
    value: "121.4148",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099c5",
    },
    date: "2007-08-01",
    value: "116.7335",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099c6",
    },
    date: "2007-09-01",
    value: "115.0435",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099c7",
    },
    date: "2007-10-01",
    value: "115.8661",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099c8",
    },
    date: "2007-11-01",
    value: "111.0729",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099c9",
    },
    date: "2007-12-01",
    value: "112.4490",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099ca",
    },
    date: "2008-01-01",
    value: "107.8181",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099cb",
    },
    date: "2008-02-01",
    value: "107.03",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099cc",
    },
    date: "2008-03-01",
    value: "100.7562",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099cd",
    },
    date: "2008-04-01",
    value: "102.6777",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099ce",
    },
    date: "2008-05-01",
    value: "104.3595",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099cf",
    },
    date: "2008-06-01",
    value: "106.9152",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099d0",
    },
    date: "2008-07-01",
    value: "106.8518",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099d1",
    },
    date: "2008-08-01",
    value: "109.3624",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099d2",
    },
    date: "2008-09-01",
    value: "106.5748",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099d3",
    },
    date: "2008-10-01",
    value: "99.9659",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099d4",
    },
    date: "2008-11-01",
    value: "96.9656",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099d5",
    },
    date: "2008-12-01",
    value: "91.2750",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099d6",
    },
    date: "2009-01-01",
    value: "90.1205",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099d7",
    },
    date: "2009-02-01",
    value: "92.9158",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099d8",
    },
    date: "2009-03-01",
    value: "97.8550",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099d9",
    },
    date: "2009-04-01",
    value: "98.9200",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099da",
    },
    date: "2009-05-01",
    value: "96.6445",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099db",
    },
    date: "2009-06-01",
    value: "96.6145",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099dc",
    },
    date: "2009-07-01",
    value: "94.3670",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099dd",
    },
    date: "2009-08-01",
    value: "94.8971",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099de",
    },
    date: "2009-09-01",
    value: "91.2748",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099df",
    },
    date: "2009-10-01",
    value: "90.3671",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099e0",
    },
    date: "2009-11-01",
    value: "89.2674",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099e1",
    },
    date: "2009-12-01",
    value: "89.9509",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099e2",
    },
    date: "2010-01-01",
    value: "91.1011",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099e3",
    },
    date: "2010-02-01",
    value: "90.1395",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099e4",
    },
    date: "2010-03-01",
    value: "90.7161",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099e5",
    },
    date: "2010-04-01",
    value: "93.4527",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099e6",
    },
    date: "2010-05-01",
    value: "91.9730",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099e7",
    },
    date: "2010-06-01",
    value: "90.8059",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099e8",
    },
    date: "2010-07-01",
    value: "87.5005",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099e9",
    },
    date: "2010-08-01",
    value: "85.3727",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099ea",
    },
    date: "2010-09-01",
    value: "84.3571",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099eb",
    },
    date: "2010-10-01",
    value: "81.7285",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099ec",
    },
    date: "2010-11-01",
    value: "82.5180",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099ed",
    },
    date: "2010-12-01",
    value: "83.3376",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099ee",
    },
    date: "2011-01-01",
    value: "82.6250",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099ef",
    },
    date: "2011-02-01",
    value: "82.5368",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099f0",
    },
    date: "2011-03-01",
    value: "81.6470",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099f1",
    },
    date: "2011-04-01",
    value: "83.1771",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099f2",
    },
    date: "2011-05-01",
    value: "81.1257",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099f3",
    },
    date: "2011-06-01",
    value: "80.4259",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099f4",
    },
    date: "2011-07-01",
    value: "79.2425",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099f5",
    },
    date: "2011-08-01",
    value: "76.9657",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099f6",
    },
    date: "2011-09-01",
    value: "76.7957",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099f7",
    },
    date: "2011-10-01",
    value: "76.6430",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099f8",
    },
    date: "2011-11-01",
    value: "77.5595",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099f9",
    },
    date: "2011-12-01",
    value: "77.7967",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099fa",
    },
    date: "2012-01-01",
    value: "76.9640",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099fb",
    },
    date: "2012-02-01",
    value: "78.4700",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099fc",
    },
    date: "2012-03-01",
    value: "82.4659",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099fd",
    },
    date: "2012-04-01",
    value: "81.2524",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099fe",
    },
    date: "2012-05-01",
    value: "79.6668",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c099ff",
    },
    date: "2012-06-01",
    value: "79.3152",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a00",
    },
    date: "2012-07-01",
    value: "78.9348",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a01",
    },
    date: "2012-08-01",
    value: "78.6909",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a02",
    },
    date: "2012-09-01",
    value: "78.1353",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a03",
    },
    date: "2012-10-01",
    value: "79.0132",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a04",
    },
    date: "2012-11-01",
    value: "81.0305",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a05",
    },
    date: "2012-12-01",
    value: "83.7905",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a06",
    },
    date: "2013-01-01",
    value: "89.0581",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a07",
    },
    date: "2013-02-01",
    value: "93.0016",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a08",
    },
    date: "2013-03-01",
    value: "94.7700",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a09",
    },
    date: "2013-04-01",
    value: "97.7582",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a0a",
    },
    date: "2013-05-01",
    value: "100.9186",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a0b",
    },
    date: "2013-06-01",
    value: "97.2350",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a0c",
    },
    date: "2013-07-01",
    value: "99.6727",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a0d",
    },
    date: "2013-08-01",
    value: "97.8123",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a0e",
    },
    date: "2013-09-01",
    value: "99.2100",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a0f",
    },
    date: "2013-10-01",
    value: "97.7700",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a10",
    },
    date: "2013-11-01",
    value: "100.0737",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a11",
    },
    date: "2013-12-01",
    value: "103.4600",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a12",
    },
    date: "2014-01-01",
    value: "103.7614",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a13",
    },
    date: "2014-02-01",
    value: "102.1253",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a14",
    },
    date: "2014-03-01",
    value: "102.3395",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a15",
    },
    date: "2014-04-01",
    value: "102.4582",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a16",
    },
    date: "2014-05-01",
    value: "101.7738",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a17",
    },
    date: "2014-06-01",
    value: "102.0629",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a18",
    },
    date: "2014-07-01",
    value: "101.7400",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a19",
    },
    date: "2014-08-01",
    value: "102.9438",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a1a",
    },
    date: "2014-09-01",
    value: "107.4257",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a1b",
    },
    date: "2014-10-01",
    value: "108.0264",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a1c",
    },
    date: "2014-11-01",
    value: "116.2994",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a1d",
    },
    date: "2014-12-01",
    value: "119.3233",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a1e",
    },
    date: "2015-01-01",
    value: "118.2500",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a1f",
    },
    date: "2015-02-01",
    value: "118.7600",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a20",
    },
    date: "2015-03-01",
    value: "120.3945",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a21",
    },
    date: "2015-04-01",
    value: "119.5095",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a22",
    },
    date: "2015-05-01",
    value: "120.7980",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a23",
    },
    date: "2015-06-01",
    value: "123.7186",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a24",
    },
    date: "2015-07-01",
    value: "123.3109",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a25",
    },
    date: "2015-08-01",
    value: "123.0038",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a26",
    },
    date: "2015-09-01",
    value: "120.1476",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a27",
    },
    date: "2015-10-01",
    value: "120.0481",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a28",
    },
    date: "2015-11-01",
    value: "122.6432",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a29",
    },
    date: "2015-12-01",
    value: "121.6350",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a2a",
    },
    date: "2016-01-01",
    value: "118.2258",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a2b",
    },
    date: "2016-02-01",
    value: "114.6155",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a2c",
    },
    date: "2016-03-01",
    value: "112.9317",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a2d",
    },
    date: "2016-04-01",
    value: "109.5519",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a2e",
    },
    date: "2016-05-01",
    value: "108.8481",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a2f",
    },
    date: "2016-06-01",
    value: "105.3509",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a30",
    },
    date: "2016-07-01",
    value: "104.1910",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a31",
    },
    date: "2016-08-01",
    value: "101.2383",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a32",
    },
    date: "2016-09-01",
    value: "101.7843",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a33",
    },
    date: "2016-10-01",
    value: "103.9075",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a34",
    },
    date: "2016-11-01",
    value: "108.4430",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a35",
    },
    date: "2016-12-01",
    value: "115.9981",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a36",
    },
    date: "2017-01-01",
    value: "114.8721",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a37",
    },
    date: "2017-02-01",
    value: "112.9116",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a38",
    },
    date: "2017-03-01",
    value: "112.9165",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a39",
    },
    date: "2017-04-01",
    value: "110.0910",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a3a",
    },
    date: "2017-05-01",
    value: "112.2436",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a3b",
    },
    date: "2017-06-01",
    value: "110.9141",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a3c",
    },
    date: "2017-07-01",
    value: "112.417",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a3d",
    },
    date: "2017-08-01",
    value: "109.827",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a3e",
    },
    date: "2017-09-01",
    value: "110.776",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a3f",
    },
    date: "2017-10-01",
    value: "112.9148",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a40",
    },
    date: "2017-11-01",
    value: "112.819",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a41",
    },
    date: "2017-12-01",
    value: "112.9405",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a42",
    },
    date: "2018-01-01",
    value: "110.871",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a43",
    },
    date: "2018-02-01",
    value: "107.9700",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a44",
    },
    date: "2018-03-01",
    value: "106.0468",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a45",
    },
    date: "2018-04-01",
    value: "107.6562",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a46",
    },
    date: "2018-05-01",
    value: "109.6882",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a47",
    },
    date: "2018-06-01",
    value: "110.0638",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a48",
    },
    date: "2018-07-01",
    value: "111.5210",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a49",
    },
    date: "2018-08-01",
    value: "110.9965",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a4a",
    },
    date: "2018-09-01",
    value: "112.0974",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a4b",
    },
    date: "2018-10-01",
    value: "112.7218",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a4c",
    },
    date: "2018-11-01",
    value: "113.3380",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a4d",
    },
    date: "2018-12-01",
    value: "112.1994",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a4e",
    },
    date: "2019-01-01",
    value: "108.9605",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a4f",
    },
    date: "2019-02-01",
    value: "110.4400",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a50",
    },
    date: "2019-03-01",
    value: "111.1443",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a51",
    },
    date: "2019-04-01",
    value: "111.6414",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a52",
    },
    date: "2019-05-01",
    value: "109.9714",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a53",
    },
    date: "2019-06-01",
    value: "108.0685",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a54",
    },
    date: "2019-07-01",
    value: "108.2864",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a55",
    },
    date: "2019-08-01",
    value: "106.1886",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a56",
    },
    date: "2019-09-01",
    value: "107.5400",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a57",
    },
    date: "2019-10-01",
    value: "108.1368",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a58",
    },
    date: "2019-11-01",
    value: "108.8579",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a59",
    },
    date: "2019-12-01",
    value: "109.1010",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a5a",
    },
    date: "2020-01-01",
    value: "109.2667",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a5b",
    },
    date: "2020-02-01",
    value: "110.0295",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a5c",
    },
    date: "2020-03-01",
    value: "107.6673",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a5d",
    },
    date: "2020-04-01",
    value: "107.7386",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a5e",
    },
    date: "2020-05-01",
    value: "107.2000",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a5f",
    },
    date: "2020-06-01",
    value: "107.5782",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a60",
    },
    date: "2020-07-01",
    value: "106.6818",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a61",
    },
    date: "2020-08-01",
    value: "106.0129",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a62",
    },
    date: "2020-09-01",
    value: "105.5890",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a63",
    },
    date: "2020-10-01",
    value: "105.2095",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a64",
    },
    date: "2020-11-01",
    value: "104.4061",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a65",
    },
    date: "2020-12-01",
    value: "103.7952",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a66",
    },
    date: "2021-01-01",
    value: "103.7883",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a67",
    },
    date: "2021-02-01",
    value: "105.3774",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a68",
    },
    date: "2021-03-01",
    value: "108.6991",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a69",
    },
    date: "2021-04-01",
    value: "109.0445",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a6a",
    },
    date: "2021-05-01",
    value: "109.1120",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a6b",
    },
    date: "2021-06-01",
    value: "110.1073",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a6c",
    },
    date: "2021-07-01",
    value: "110.2143",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a6d",
    },
    date: "2021-08-01",
    value: "109.8527",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a6e",
    },
    date: "2021-09-01",
    value: "110.1610",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a6f",
    },
    date: "2021-10-01",
    value: "113.1215",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a70",
    },
    date: "2021-11-01",
    value: "113.9650",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a71",
    },
    date: "2021-12-01",
    value: "113.8329",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a72",
    },
    date: "2022-01-01",
    value: "114.8255",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a73",
    },
    date: "2022-02-01",
    value: "115.2763",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a74",
    },
    date: "2022-03-01",
    value: "118.5774",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a75",
    },
    date: "2022-04-01",
    value: "126.3743",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a76",
    },
    date: "2022-05-01",
    value: "128.8486",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a77",
    },
    date: "2022-06-01",
    value: "133.9619",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a78",
    },
    date: "2022-07-01",
    value: "136.7090",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a79",
    },
    date: "2022-08-01",
    value: "135.2835",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a7a",
    },
    date: "2022-09-01",
    value: "143.2843",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a7b",
    },
    date: "2022-10-01",
    value: "147.0515",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a7c",
    },
    date: "2022-11-01",
    value: "142.4450",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a7d",
    },
    date: "2022-12-01",
    value: "134.9148",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a7e",
    },
    date: "2023-01-01",
    value: "130.4475",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a7f",
    },
    date: "2023-02-01",
    value: "133.0463",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a80",
    },
    date: "2023-03-01",
    value: "133.6643",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a81",
    },
    date: "2023-04-01",
    value: "133.4745",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a82",
    },
    date: "2023-05-01",
    value: "137.0532",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a83",
    },
    date: "2023-06-01",
    value: "141.3581",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a84",
    },
    date: "2023-07-01",
    value: "140.9360",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a85",
    },
    date: "2023-08-01",
    value: "144.7804",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a86",
    },
    date: "2023-09-01",
    value: "147.8450",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a87",
    },
    date: "2023-10-01",
    value: "149.5933",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a88",
    },
    date: "2023-11-01",
    value: "149.6790",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a89",
    },
    date: "2023-12-01",
    value: "143.9815",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a8a",
    },
    date: "2024-01-01",
    value: "146.2943",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a8b",
    },
    date: "2024-02-01",
    value: "149.6150",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a8c",
    },
    date: "2024-03-01",
    value: "149.8186",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a8d",
    },
    date: "2024-04-01",
    value: "153.8900",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a8e",
    },
    date: "2024-05-01",
    value: "155.8691",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a8f",
    },
    date: "2024-06-01",
    value: "157.86",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a90",
    },
    date: "2024-07-01",
    value: "157.5182",
  },
];

const initialClaims = [
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a91",
    },
    date: "2000-01-01",
    value: "243",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a92",
    },
    date: "2000-02-01",
    value: "234",
  },
  {
    _id: {
      $oid: "66f500be272a5d9b72c09a93",
    },
    date: "2000-03-01",
    value: "250",
  },
];

module.exports = {
  notes,
  profiles,
  treasuries,
  SP500,
  unemploymentRate,
  EXJPUS,
  initialClaims,
};
