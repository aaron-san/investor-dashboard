export {};

// make globally accessible (no need to import)
declare global {
  interface INote {
    _id: string;
    company: string;
    asset: string;
    content: string;
    dateModified: Date;
  }

  interface IProfile {
    _id: string;
    ticker: string;
    name_damodaran: string;
    industry_damodaran: string;
    sector_damodaran: string;
    country_damodaran: string;
    name_edgar: string;
    industry_edgar: string;
    industry_detail_edgar: string;
    sector_yhoo: string;
    industry_yhoo: string;
    name_simfin: string;
    sector_simfin: string;
    industry_simfin: string;
    name_yhoo: string;
    name_seeking_alpha: string;
    sector_seeking_alpha: string;
    industry_seeking_alpha: string;
    dateModified: Date;
  }
}
