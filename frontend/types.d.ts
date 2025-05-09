export {};

// make globally accessible (no need to import)
declare global {
  interface INote {
    _id: string;
    title: string;
    ticker: string;
    asset: string;
    content: string;
    dateModified: Date;
  }

  interface IProfile {
    _id: { $oid: string };
    ticker: string;
    name_damodaran: string;
    name_edgar: string;
    name_yhoo: string;
    name_simfin: string;
    name_seeking_alpha: string;
    industry_damodaran: string;
    industry_edgar: string;
    industry_detail_edgar: string;
    industry_yhoo: string;
    industry_simfin: string;
    industry_seeking_alpha: string;
    sector_damodaran: string;
    sector_simfin: string;
    sector_yhoo: string;
    sector_seeking_alpha: string;
    country_damodaran: string;
    dateModified: Date;
  }
}
